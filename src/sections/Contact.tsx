import ContactContainer from "@/components/containers/ContactContainer";
import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2 md:p-10 px-8 pb-16 pt-16">
        <div>
          <Heading2>
            <p>Got a Project?</p>{" "}
            <span className="text-primary">Lets Talk!</span>
          </Heading2>
          <div className="flex flex-col gap-2">
            <Link href={"mailto:hi.imben.nguyen@gmail.com"}>
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                hi.imben.nguyen@gmail.com
              </Desc>
            </Link>
            <Link href={"tel:#16692008543"}>
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                +1 669 200 8543
              </Desc>
            </Link>
            <Link href={"tel:+84346182583"}>
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                +84 346 182 583
              </Desc>
            </Link>
          </div>
        </div>
        <div className="">
          <ContactContainer />
        </div>
      </div>
    </section>
  );
}
