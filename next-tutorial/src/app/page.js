"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EventFunction from "@/components/EventFunctionState";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <EventFunction />
      <h1>Home Page</h1>
      <Link href="/login">Go to Login Page using Linking</Link>
      <Link href="/about">Go to About Page using Linking</Link>
      <button onClick={() => router.push("/login")}>
        Go to Login using navigation
      </button>
      <button onClick={() => router.push("/about")}>
        Go to About using navigation
      </button>
    </main>
  );
}
