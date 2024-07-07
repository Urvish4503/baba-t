import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex w-48 flex-col">
            <img src={post.url} />
          </div>
        ))}
      </div>
      Hello This in still in progress
    </main>
  );
}
