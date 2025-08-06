"use client";
import { useMutation, useQuery } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import {api} from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUser = useMutation(api.users.addUser);
  const removeUsers = useMutation(api.users.removeUsers);
  return (
    <>
      <div className="flex items-center  flex-col justify-center h-screen">
        <p> apps/frontend </p>
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
