interface pageProps {
  conversationId: string;
}

export default async function page({ conversationId }: pageProps) {
  return <div>page</div>;
}
