import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="font-serif">
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

    <div className="relative w-full max-h-[300px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Image
          src="/background/contact.png"
          alt="Decorative image"
          layout="responsive"
          width="1920"
          height="500"
          quality={100}
        />
      </div>

      <div className="text-center py-10">
        <h2 className="font-bold text-2xl pb-4">Contact Us</h2>
        <p>80 Silverado Plains View SW, Calgary, AB, Canada, T2X 0H2</p>
        <p>Email: info@pyramidconstruction.com</p>
        <p className="pb-6">Phone: (587) 703-2423</p>
        <h2 className="font-bold text-xl pb-4">Business Hours</h2>
        <p>Monday - Friday: 9am - 6pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Closed on Sundays</p>
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
