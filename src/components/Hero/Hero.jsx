import Image from "next/image";
import hero from "../../public/images/hero.jpeg";

const Hero = () => (
  <section className="relative text-center">
    <div className="text-white font-sans font-bold sm:text-xl md:text-3xl text-md w-full px-5 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <h1 className="">Welcome to your new go-to barbershop in Dallas, TX.</h1>
      <br />
      <a
        className="underline mt-4"
        href="https://waitwhile.com/book/republicbarbershop/service"
        rel="noreferrer"
        target="_blank"
      >
        Click here to book!
      </a>
    </div>
    <Image
      alt="Republic Barbershop Hero Image in Dallas, Texas"
      layout="responsive"
      placeholder="blur"
      priority
      quality="100"
      src={hero}
    />
  </section>
);

export default Hero;
