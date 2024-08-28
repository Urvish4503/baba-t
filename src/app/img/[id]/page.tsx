import { FullPageImageView } from "~/app/comman/full-page-image";

export default async function PhotoFullPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex h-full min-h-0 w-full">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
