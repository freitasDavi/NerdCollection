"use client";

import { useSession } from '@/hooks/useSession';
import { redirect } from 'next/navigation';

export default function Home() {
  const { isLogged } = useSession();

  console.log(isLogged);

  if (isLogged) {
    redirect("/home")
  } else {
    redirect("/login");
  }
}
