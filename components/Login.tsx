"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Login() {
    const { data: session, status } = useSession();


  return <button onClick={() => signIn("keycloak")}>
    Signin with keycloak
  </button>
}