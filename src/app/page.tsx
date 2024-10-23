import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  if (userId != null) redirect("/events");
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-white shadow-sm">
        Welcome to Schedify
      </h2>
      <p className="text-lg text-black/40 mb-4" >
        This app is currently in development and is designed to help you schedule meetings by integrating with Google Calendar.
      </p>

      <div className="flex justify-center gap-4">
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
