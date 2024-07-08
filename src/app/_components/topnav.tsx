import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export function Topnav() {
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
      <div>Hey</div>
      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  )
}
