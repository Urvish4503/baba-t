import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
    const posts = await db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id),
    });
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="flex w-48 flex-col">
                        <img src={post.url} alt={post.name}/>
                    </div>
                ))}
            </div>
            Hello This in still in progress
        </div>
    )
}

export default async function HomePage() {
    return (
        <main className="">
            <SignedOut>
                <div className="w-full h-full text-2xl text-center">
                    Please sign in
                </div>
            </SignedOut>
            <SignedIn>
                <Images/>
            </SignedIn>

        </main>
    );
}
