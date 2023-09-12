type Size = "sm" | "base" | "lg";
export const Loader = ({ size }: { size?: Size }) => {
  // TODO: setup prop for different size.

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-load border-4 border-white border-t-4 border-t-[#40ae4d] rounded-full h-8 w-8 `}
      ></div>
    </div>
  );
};
