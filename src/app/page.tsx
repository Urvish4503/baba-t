import Link from "next/link";
import {images} from "next/dist/build/webpack/config/blocks/images";
import {db} from "~/server/db";
import * as console from "node:console";

const mockData = [
  {
    name: "Screenshot 2024-05-24 141146.png",
    key: "36e3ed29-685a-40ce-8b14-ae23294bdbba-7ptl5e.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/36e3ed29-685a-40ce-8b14-ae23294bdbba-7ptl5e.png",
    size: 53747,
    uploadedAt: "2024-07-07T10:02:28.000Z",
  },
  {
    name: "Screenshot 2024-06-15 005409.png",
    key: "d21ea665-f321-4367-9b92-6ff917737c65-kqvtgw.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d21ea665-f321-4367-9b92-6ff917737c65-kqvtgw.png",
    size: 13351,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-15 005401.png",
    key: "6c5c0004-e561-4c80-83d4-48b0211b8e7d-kqvtgo.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6c5c0004-e561-4c80-83d4-48b0211b8e7d-kqvtgo.png",
    size: 8564,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-04 182714.png",
    key: "606d0f69-b969-4718-9244-e7b0bdac2512-merhmf.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/606d0f69-b969-4718-9244-e7b0bdac2512-merhmf.png",
    size: 34137,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-21 230551.png",
    key: "2103aab8-ce39-4ddd-9515-3e1dbff57a66-im5gvj.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2103aab8-ce39-4ddd-9515-3e1dbff57a66-im5gvj.png",
    size: 1787,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-21 230608.png",
    key: "58a661d5-c45f-43f6-a13e-e0cf19ec35c1-im5hi4.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/58a661d5-c45f-43f6-a13e-e0cf19ec35c1-im5hi4.png",
    size: 84501,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-13 162021.png",
    key: "47e74a23-5168-4015-a58b-4657ebbaf003-yp1be4.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/47e74a23-5168-4015-a58b-4657ebbaf003-yp1be4.png",
    size: 20279,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-24 212740.png",
    key: "836e0a94-7477-49e8-92f0-110a1747b7e4-y0ukbu.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/836e0a94-7477-49e8-92f0-110a1747b7e4-y0ukbu.png",
    size: 104467,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-15 225948.png",
    key: "cadd4e80-512e-4369-969c-e535d067b5b4-lq2r8w.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/cadd4e80-512e-4369-969c-e535d067b5b4-lq2r8w.png",
    size: 107365,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
  {
    name: "Screenshot 2024-06-21 225957.png",
    key: "08da8591-1abd-4bcb-b864-3a039fc890dd-iloy6r.png",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/08da8591-1abd-4bcb-b864-3a039fc890dd-iloy6r.png",
    size: 11582,
    uploadedAt: "2024-07-07T10:02:07.000Z",
  },
];

const mockImages = mockData.map((data, index)  => ({
  id: index + 1,
  url: data.url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        posts.map((post)=> (
            <div key={post.id}> {post.name}</div>
        ))
      }{
        [...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} alt="image" />
            </div>
        ))
      }
      </div>
      Hello This in still in progress
    </main>
  );
}
