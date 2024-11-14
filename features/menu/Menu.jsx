import Image from "next/image";
import { PrimaryButton } from "@/components/button/PrimaryButton";

const menuItems = [
  {
    id: 1,
    title: "Coto Makassar",
    description:
      "Hidangan khas Makassar berupa sup daging sapi dengan bumbu kacang yang kaya rempah.",
    price: "Rp30.000",
    image: "/images/salad.png",
  },
  {
    id: 2,
    title: "Konro",
    description:
      "Sup iga sapi khas Makassar dengan bumbu kluwak yang kaya rasa.",
    price: "Rp40.000",
    image: "/images/salad.png",
  },
  {
    id: 3,
    title: "Pallubasa",
    description:
      "Sup daging sapi berkuah kental dengan kelapa parut dan bumbu khas.",
    price: "Rp35.000",
    image: "/images/salad.png",
  },
  {
    id: 4,
    title: "Sop Saudara",
    description:
      "Sup berkuah gurih dengan daging sapi, bihun, dan kentang, khas Sulawesi.",
    price: "Rp32.000",
    image: "/images/salad.png",
  },
  {
    id: 5,
    title: "Nasu Palekko",
    description:
      "Hidangan ayam atau itik berbumbu khas Bugis yang pedas dan gurih.",
    price: "Rp28.000",
    image: "/images/salad.png",
  },
  {
    id: 6,
    title: "Kapurung",
    description:
      "Makanan khas Sulawesi berupa bubur sagu dengan sayuran dan ikan.",
    price: "Rp25.000",
    image: "/images/salad.png",
  },
  {
    id: 7,
    title: "Ayam Rica-Rica",
    description: "Ayam pedas khas Manado yang dimasak dengan bumbu rica-rica.",
    price: "Rp30.000",
    image: "/images/salad.png",
  },
  {
    id: 8,
    title: "Bubur Manado",
    description: "Bubur khas Manado yang diisi dengan sayuran segar dan ikan.",
    price: "Rp20.000",
    image: "/images/salad.png",
  },
  {
    id: 9,
    title: "Ikan Woku Belanga",
    description:
      "Ikan yang dimasak dengan bumbu woku khas Minahasa, pedas dan wangi.",
    price: "Rp35.000",
    image: "/images/salad.png",
  },
];

export const Menu = () => {
  return (
    <div className="relative flex flex-col">
      {/* Background Image */}
      <Image
        src="/images/bg.png"
        alt="background"
        layout="fill"
        priority
        objectFit="cover"
        objectPosition="top"
        className="z-0"
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col bg-opacity-80 px-8 py-24 md:px-28">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black">Our Menu</h1>
          <p className="text-lg text-gray-500">
            Pilih dari berbagai hidangan lezat yang kami tawarkan. Setiap menu
            disajikan dengan kualitas dan rasa terbaik.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative flex transform flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src="/images/salad.png"
                alt="About Us"
                objectFit="cover"
                className="rounded-lg"
                width={250}
                height={250}
              />
              <div className="flex flex-col items-center gap-4 p-6 text-center">
                <h2 className="text-xl font-semibold text-black">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold text-black">{item.price}</p>
                <PrimaryButton fullWidth={true} color={true} hover={true}>
                  Pesan Sekarang
                </PrimaryButton>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Menu;
