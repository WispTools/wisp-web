"use client";

import { useRouter } from "next/navigation";

import HeaderButton from "./headerButton";

export default function BackButton() {
  const router = useRouter();

  return (
    <HeaderButton icon="ArrowLeft" name="Back" onClick={() => router.back()} />
  );
}
