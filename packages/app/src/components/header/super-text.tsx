import React from "react";
import Link from "next/link";

const SuperText = () => {
  return (
    <div className="text-[#28633a] text-bases font-semibold text-center py-1 font-sans">
      Influence free. Powered by{" "}
      <Link
        href="http://www.twitter.com/devodii_"
        target="_blank"
        className="underline underline-offset-2"
      >
        {" "}
        Emmanuel Odii
      </Link>
    </div>
  );
};

export default SuperText;
