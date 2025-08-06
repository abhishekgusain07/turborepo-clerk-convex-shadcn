"use client";
import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Authenticated, Unauthenticated } from "convex/react";
import { UserButton, SignInButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUser = useMutation(api.users.addUser)
  const removeUsers = useMutation(api.users.removeUsers)
  return (
    <>
    <Authenticated>
      <div className="flex items-center  flex-col justify-center h-screen">
        <p> apps/web </p>
        {JSON.stringify(users)}
        <button onClick={() => addUser()}>addUser</button>
        <button onClick={() => removeUsers()}>removeUsers</button>
        <div className="mt-3">
          <UserButton/>
        </div>
      </div>
    </Authenticated>
    <Unauthenticated>
      not authenticated
      <SignInButton>Sign in</SignInButton>
    </Unauthenticated>
    </>
  );
}
