"use client"
import { useSession, signIn, signOut } from "next-auth/react";
export default function Logout() {
  return <button
  onClick={() => signOut({ callbackUrl: "/api/auth/logout" })}
>
  Log out
</button>
}