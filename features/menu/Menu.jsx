// app/menu/page.jsx
import Image from "next/image";
import { PrimaryButton } from "@/components/button/PrimaryButton";

const menuItems = [
  {
    id: 1,
    title: "Nasi Goreng",
    description: "Nasi goreng khas dengan campuran ayam, telur, dan sayuran segar.",
    price: "Rp20.000",
    image: "/images/salad.png",
  },
  {
    id: 2,
    title: "Ayam Bakar",
    description: "Ayam bakar bumbu khas dengan sambal pedas.",
    price: "Rp25.000",
    image: "/images/salad.png",
  },
  // Tambahan item menu lainnya di sini
];

export const MenuPage = () => {
  return (
    <main className="flex flex-col px-8 py-24 md:px-28">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-4">Our Menu</h1>
        <p className="text-gray-500 text-lg">
          Pilih dari berbagai hidangan lezat yang kami tawarkan. Setiap menu disajikan dengan kualitas dan rasa terbaik.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4 items-center text-center">
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
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
  );
};

export default MenuPage;
