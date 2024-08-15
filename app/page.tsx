import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative bg-black-100 overflow-hidden ">
      <div className="container">
        <Hero />
      </div>
    </main>
  );
}
