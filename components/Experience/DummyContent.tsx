import Image from "next/image";

const DummyContent = ({ img, des }: { img: string; des: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800/[0.4] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-blue-100 text-base md:text-2xl font-sans max-w-4xl mx-auto text-justify">
        {des}
      </p>
      <Image
        src={img}
        alt={img}
        height="1400"
        width="1400"
        className="w-full mx-auto my-6 object-contain rounded-sm"
      />
    </div>
  );
};

export default DummyContent;
