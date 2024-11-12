import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-screen min-h-screen px-8 py-24 md:px-28">
        {/* Background Image */}
        <Image
          src="/images/bg.png"
          alt="background"
          layout="fill"
          priority
          objectFit="cover"
          objectPosition="top"
        />

        {/* About Section */}
        <div className="relative grid items-center w-full max-w-6xl gap-12 ml-2 md:grid-cols-2 md:gap-x-16">
          {/* Text Section */}
          <div className="text-left">
            <h2 className="mt-12 text-4xl font-bold text-black md:text-5xl">About Us</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              LokalBite hadir untuk menyajikan hidangan tradisional Makassar yang autentik. Kami percaya bahwa setiap hidangan memiliki cerita yang layak dinikmati..
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore optio assumenda. Nihil odio ipsam excepturi. Minus eum velit praesentium architecto neque, minima possimus perferendis repellendus voluptatibus dolorum at facilis!
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative h-[370px] md:h-[400px] ml-auto">
            <Image
              src="/images/salad.png" // Replace with actual image
              alt="About Us"
              objectFit="cover"
              className="rounded-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="relative grid items-start w-full max-w-6xl gap-12 mt-20 ml-2 md:grid-cols-2 md:gap-x-16">
          {/* Mission Section */}
          <div className="pr-6 text-left">
            <h3 className="text-4xl font-bold text-black md:text-4xl">Our Mission</h3>
            <p className="mt-4 text-gray-500 md:text-lg">
              Menyajikan pengalaman kuliner terbaik dengan bahan-bahan lokal berkualitas tinggi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam dolorum eligendi blanditiis quaerat nihil soluta consectetur vero a fuga minima ea, voluptates repellendus. A rem nesciunt alias obcaecati recusandae!
            </p>
          </div>

          {/* Vision Section */}
          <div className="pr-6 text-left">
            <h3 className="text-4xl font-bold text-black md:text-4xl">Our Vision</h3>
            <p className="mt-4 text-gray-500 md:text-lg">
              Menjadi restoran terkemuka yang memperkenalkan cita rasa tradisional Makassar ke seluruh dunia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae sapiente quibusdam consectetur assumenda. Magni voluptatibus, praesentium eos voluptates, facere incidunt cumque itaque labore atque a quis, eligendi nostrum reprehenderit.
            </p>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="relative grid items-center w-full max-w-6xl gap-12 mt-20 ml-2 md:grid-cols-2 md:gap-x-16">
          {/* Text Section */}
          <div className="text-left">
            <h3 className="text-4xl font-bold text-black md:text-4xl">Meet Our Team</h3>
            <p className="mt-4 text-gray-500 md:text-lg">
              Dipimpin oleh chef berpengalaman, tim dapur kami berdedikasi untuk memberikan rasa terbaik.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro veritatis esse iure cupiditate, nisi sed aspernatur nulla exercitationem facere nobis eum doloribus ipsam nesciunt error, sint repellendus et aut.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative h-[380px] md:h-[380px] ml-auto mt-2">
            <Image
              src="/images/chef.png" // Replace with actual image
              alt="Team"
              objectFit="cover"
              className="rounded-lg"
              width={300}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
