import { Modal } from "./modal";
import { FullPageImageView } from "~/app/comman/full-page-image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
