"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ModelPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div>ModelPage</div>;
};

export default ModelPage;
