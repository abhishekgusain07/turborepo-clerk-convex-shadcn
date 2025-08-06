"use client";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SigninView } from "../views/sign-in-view";
import { AuthLayout } from "../layout/auth-layout";

export const Authguard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>Loading ...</AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <AuthLayout>
          <SigninView />
        </AuthLayout>
      </AuthLoading>
    </>
  );
};
