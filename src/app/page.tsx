import Image from "next/image"
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.length === 0
          ? "No images"
          : images.map((image) => (
              <div key={image.id} className="flex w-48 h-48 flex-col">
                <Image
                  src={image.url}
                  style={{ objectFit: "contain"}}
                  width={192}
                  height={192}
                  alt={image.name}
                />
                {image.name}
              </div>
            ))}
      </div>
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
