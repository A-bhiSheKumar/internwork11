import { cn } from "@/lib/utils";
import { ReactNode } from "react";

//This maxWidthWrapper is a funtion responsible for making layout more correct( means we gonna use this everywhere so it make sense while styling the)
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20' , className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
