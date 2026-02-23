import ContactContainer from "@/components/containers/ContactContainer";
import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:p-10 pb-16 pt-16 gap-8">
        <div className="w-full">
          <Heading2>
            <p>Got a Project?</p>{" "}
            <span className="text-primary">Lets Talk!</span>
          </Heading2>
          <div className="flex flex-col gap-2 w-full ">
            <Link
              className="max-w-max"
              href={"mailto:hi.imben.nguyen@gmail.com"}
            >
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                hi.imben.nguyen@gmail.com
              </Desc>
            </Link>
            <Link className="max-w-max" href={"tel:#16692008543"}>
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                +1 669 200 8543
              </Desc>
            </Link>
            <Link className="max-w-max" href={"tel:+84346182583"}>
              <Desc classNames="text-white/80 hover:text-primary transition-color duration-300 ease">
                +84 976 309 431
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
