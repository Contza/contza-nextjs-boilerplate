import { ContentProvider, ContzaImage, ContzaText } from "@contza/react";

export default function Home() {
  return (
    <ContentProvider slug="index">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-10">
        <h1 className="text-5xl font-bold">
          <ContzaText>Heading Title</ContzaText>
        </h1>
        <p className="text-xl">
          <ContzaText>Heading Description</ContzaText>
        </p>
        <ContzaImage className="relative" alt="Next.js Logo">
          Heading Image
        </ContzaImage>
      </main>
    </ContentProvider>
  );
}
