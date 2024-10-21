import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
export default function Home() {
  const { userId } = auth();
  if (userId != null) redirect("/events");
  return (
    <div className=" text-2xl container text-center my-4 mx-auto">
      <h2 className="text-3xl mb-4">Fancy</h2>

      <div className="flex justify-center gap-2">
        <Button asChild>
          <SignInButton />
        </Button>
        <Button asChild>
          <SignUpButton />
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
