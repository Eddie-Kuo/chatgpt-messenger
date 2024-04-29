'use client';

import Image from 'next/image';
import Modal from '../Modal';

interface ImageModalProps {
  src?: string | null;
  onClose: () => void;
  isOpen?: boolean;
}

const ImageModal =  ({src, onClose, isOpen}: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-96 h-96'>
        <Image src={src} alt='Image' fill className='object-cover' />
      </div>
    </Modal>
  );
}

export default ImageModal;