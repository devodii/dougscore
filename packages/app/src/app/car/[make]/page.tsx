"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MakePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div>MakePage</div>;
};

export default MakePage;
