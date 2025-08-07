"use client";
import { api } from "@workspace/backend/_generated/api";
import { useMutation } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const addUser = useMutation(api.users.addUser);
  const removeUsers = useMutation(api.users.removeUsers);
  return (
    <>
      <div className="flex items-center  flex-col justify-center h-screen">
        <p> apps/web </p>
        <OrganizationSwitcher hidePersonal={true} />
        <Button onClick={() => addUser()}>addUser</Button>
        <Button onClick={() => removeUsers()}>removeUsers</Button>
        <div className="mt-3">
          <UserButton />
        </div>
      </div>
    </>
  );
}
