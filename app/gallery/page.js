import Image from "next/image";
import Link from "next/link";

export default function Page() {
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

      <h1 className="text-3xl font-bold text-center flex-grow py-10 pr-20">Pyramid Granite</h1>

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

<section className="container mx-auto px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
          <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 font-serif font-bold">Kitchens</h2>
            <Image
              src="/galleryimages/kitchen.png"
              alt="Kitchens"
              width={400}
              height={260}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 font-serif font-bold">Bathroom</h2>
            <Image
              src="/galleryimages/bathroom.png"
              alt="Bathroom"
              width={400}
              height={260}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 font-serif font-bold">Commercial</h2>
            <Image
              src="/galleryimages/commercial.png"
              alt="Commercial"
              width={400}
              height={260}
              layout="responsive"
            />
          </div >
          <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 font-serif font-bold">Custom</h2>
            <Image
              src="/galleryimages/custom.png"
              alt="Custom"
              width={400}
              height={260}
              layout="responsive"
            />
          </div>
        </div>
      </section>

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
