import Link from "next/link";
import Image from "next/image";

export default function contact() {
    return (
      <main>
      <header className="flex justify-between items-center py-5 px-10 bg-white font-serif py-10">
      {/*Navigation BAR */}
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <h1 className="text-3xl font-bold text-center flex-grow">Pyramid Granite</h1>

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
    </main>
    );
}
