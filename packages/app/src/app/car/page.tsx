"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <div className="min-h-screen container mx-auto border py-12 max-w-xl">
      Page
    </div>
  );
};
export default Page;
