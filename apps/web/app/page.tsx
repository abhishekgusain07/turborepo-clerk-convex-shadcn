"use client";
import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery } from "convex/react";
export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUser = useMutation(api.users.addUser)
  const removeUsers = useMutation(api.users.removeUsers)
  return (
    <div className="flex items-center justify-center h-screen">
      <p> apps/web </p>
      {JSON.stringify(users)}
      <button onClick={() => addUser()}>addUser</button>
      <button onClick={() => removeUsers()}>removeUsers</button>
    </div>
  );
}
