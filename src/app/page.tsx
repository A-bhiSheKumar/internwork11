import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Nav from "@/components/Nav";
import AddTODO from "@/components/AddTODO";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Seamless Task Management,{" "}
            <span className="text-violet-600"> Effortless Success</span>.
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-prose">
          Welcome to TaskCraft Hub! Our team verifies every task management solution for reliability, and our team are not just cool but also friendly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button> */}
          </div>

          <Nav />
        <AddTODO />
        <Todos />
        </div>

        {/* Lists Products */}
        
        
      </MaxWidthWrapper>


       
    </>
  );
}

//Do you know that tailiwnd is mobile first..Means every code you write is for mobile screen , and when
// we need for large screen we define and use that .( This is tailiwind thing man...)
//1.>> ButtonVariant is coming form ui button component that we install man
//2.>> Variant="ghost" basically remove that violet color, like a ghost .
