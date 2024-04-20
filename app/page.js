import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center py-5 px-20 bg-white font-serif py-10">
      {/*Navigation BAR */}
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/pricing" className="hover:underline">Pricing</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <h1 className="text-3xl font-bold text-center flex-grow py-10">Pyramid Granite</h1>

      {/*Social media icons */}
      <div className="flex space-x-4 pr-20">
        <Link href="https://www.facebook.com" passHref>
            <Image
              src="/images/fblogo2.png"
              alt="Facebook Icon"
              width={40}
              height={40}
            />
        </Link>
        <Link href="https://www.instagram.com" passHref>
            <Image
              src="/images/instagramlogo2.jpg"
              alt="Instagram Icon"
              width={40}
              height={40}
            />
        </Link>
      </div>
    </header>

      <div className="relative w-full max-h-[700px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Image
          src="/background/homepage.png"
          alt="Decorative image"
          layout="responsive"
          width="1920"
          height="500"
          quality={100}
        />
      </div>

      <div className="flex justify-center font-serif text-lg items-center h-full bg-white">
        <div className="text-center max-w-4xl mx-auto mt-20 mb-20">
          <h1 className="text-3xl font-bold font-serif mb-4">
            About Our Company
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="bg-black text-white font-serif pt-20 pb-20">
        <h1 className="text-center text-3xl font-bold mb-10">Our Materials</h1>
        <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="bg-gray-500 p-6 rounded-lg">
            <Image
              src="/materials/marble.png"
              alt="Marble"
              width="50"
              height="50"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-5 mb-3">Marble</h2>
            <p className=" text-base mb-4">
              Marble is a metamorphic rock prized for its timeless elegance and
              beauty, making it a top choice for both classic and modern
              designs.
            </p>
            {/*<Link href="/materials/marble">
        <a className="text-blue-500 hover:underline">Read More</a>
  </Link>*/}
          </div>

          <div className="bg-gray-500 p-6 rounded-lg">
            <Image
              src="/materials/granite.png"
              alt="Granite"
              width="50"
              height="50"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-5 mb-3">Granite</h2>
            <p className=" text-base mb-4">
              Known for its granular appearance and robustness, granite is an
              ideal choice for high-traffic areas and outdoor applications.
            </p>
            {/* <Link href="/materials/granite"> 
        <a className="text-blue-500 hover:underline">Read More</a>
      </Link> */}
          </div>

          <div className="bg-gray-500 p-6 rounded-lg">
            <Image
              src="/materials/limestone.png"
              alt="Granite"
              width="50"
              height="50"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-5 mb-3">Limestone</h2>
            <p className=" text-base mb-4">
              Limestone countertops add a warm, natural elegance with their
              soft, earthy tones and subtle, textured patterns.
            </p>
            {/* <Link href="/materials/granite"> 
        <a className="text-blue-500 hover:underline">Read More</a>
      </Link> */}
          </div>

          <div className="bg-gray-500 p-6 rounded-lg">
            <Image
              src="/materials/solidstone.png"
              alt="Granite"
              width="50"
              height="50"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-5 mb-3">Solidstone</h2>
            <p className=" text-base mb-4">
              SolidStone countertops offer sleek, durable surfaces with a
              seamless finish ideal for a modern and low-maintenance kitchen
              design.
            </p>
            {/* <Link href="/materials/granite"> 
        <a className="text-blue-500 hover:underline">Read More</a>
      </Link> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 font-serif">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-left text-black mb-8 md:mb-0 pl-20">
            <h2 className="text-2xl font-bold mb-4">Address:</h2>
            <p className="mb-2">80 Silverado Plains View SW, Calgary, AB T2X 0H2</p>
            <h2 className="text-2xl font-bold mb-4">Hours of Operation:</h2>
            <p className="mb-2">Monday - Saturday, 8am - 6pm</p>
            <h2 className="text-2xl font-bold mb-4">Contact Us:</h2>
            <p className="mb-2">(587) 703-2423</p>
            <p>info@pyramidconstruction.com</p>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5034.817806038011!2d-114.081958!3d50.8791419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537175937acba3b1%3A0xe8745468391f46c3!2s80%20Silverado%20Plains%20View%20SW%2C%20Calgary%2C%20AB%20T2X%200R6!5e0!3m2!1sen!2sca!4v1713491978167!5m2!1sen!2sca"
              height="450"
              width="700"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-5 font-serif">
        <div className="container mx-auto flex flex-wrap justify-between items-center pr-20">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold pl-20">Pyramid Granite</h2>
          </div>
          <div className="text-center pr-20">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>info@pyramidconstruction.com</p>
            <p>(587) 703-2423</p>
            <p>80 Silverado Plains View SW, Calgary, AB T2X 0H2</p>
          </div>
          <div className="flex items-center space-x-4 pr-20">
          <Link href="https://www.facebook.com" passHref>
          <Image
            src="/images/fblogo.png"
            alt="Facebook Icon"
            width={40}
            height={40}
          />
      </Link>
      <Link href="https://www.instagram.com" passHref>
          <Image
            src="/images/instagramlogo.png"
            alt="Instagram Icon"
            width={40}
            height={40}
          />
        </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
