'use client';

import axios from 'axios';
import { CldUploadButton } from 'next-cloudinary';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';
import useConversation from '../../hooks/useConversation';
import MessageInput from './MessageInput';

interface FormProps {}

export default function Form({}: FormProps) {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });

    axios.post('/api/messages', {
      ...data,
      conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result?.info?.secure_url,
      conversationId,
    });
  };

  return (
    <div className='py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full'>
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset='czoj7dlw'
      >
        <HiPhoto size={28} className='text-sky-500' />
      </CldUploadButton>
      <form
        // handleSubmit handles the data from react-hook-forms - passing it into our custom onSubmit
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center gap-2 lg:gap-4 w-full'
      >
        <MessageInput
          id='message'
          register={register}
          errors={errors}
          required
          placeholder='Send a Message'
        />
        <button
          type='submit'
          className='rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition'
        >
          <HiPaperAirplane className='text-white' size={15} />
        </button>
      </form>
    </div>
  );
}
