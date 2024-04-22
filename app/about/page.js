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

    <div className="relative w-full max-h-[300px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Image
          src="/background/about.png"
          alt="Decorative image"
          layout="responsive"
          width="1920"
          height="500"
          quality={100}
        />
      </div>

      <div className="font-serif py-10">
        <h1 className="text-3xl font-bold pb-4 px-20">Custom Kitchen Countertops, Bathroom Vanities, Cladding, and more!</h1>
        <p className="px-20 pb-10 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Nibh venenatis cras sed felis eget velit aliquet sagittis. Ornare quam viverra orci sagittis. Dolor sed viverra ipsum nunc aliquet bibendum. Quis auctor elit sed vulputate mi sit amet. Feugiat scelerisque varius morbi enim nunc faucibus a. Urna neque viverra justo nec ultrices dui sapien eget. Magna fringilla urna porttitor rhoncus dolor purus non. Nisl pretium fusce id velit ut tortor. Sagittis vitae et leo duis ut. Pharetra convallis posuere morbi leo urna molestie. Habitant morbi tristique senectus et netus et malesuada. </p>
      </div>

      <div className="bg-gray-500 font-serif text-white py-10">
        <h1 className="text-3xl font-bold text-center pb-4">Meet the Team</h1>
        <div className="flex justify-center space-x-6 overflow-x-auto gap-10">
    <div className="space-y-2">
      <img className="w-32 h-32 object-cover rounded-full mx-auto" src="images/julius.png" alt="Nader Tabrizi" />
      <h3 className="text-lg font-medium">Julius Caesar</h3>
      <p>Co-Founder</p>
    </div>
    <div className="space-y-2">
      <img className="w-32 h-32 object-cover rounded-full mx-auto" src="images/marie.png" alt="Reza Beittoei" />
      <h3 className="text-lg font-medium">Marie Antoinette</h3>
      <p>Co-Founder</p>
    </div>
    <div className="space-y-2">
      <img className="w-32 h-32 object-cover rounded-full mx-auto" src="images/napoleon.png" alt="Reza Beittoei" />
      <h3 className="text-lg font-medium">Napoleon Bonaparte</h3>
      <p>Manager</p>
    </div>
    <div className="space-y-2">
      <img className="w-32 h-32 object-cover rounded-full mx-auto" src="images/genghis.png" alt="Reza Beittoei" />
      <h3 className="text-lg font-medium">Genghis Khan</h3>
      <p>Sales Manager</p>
    </div>
    </div>
    </div>

    <div className="py-10 text-center">
      <h1 className="text-center font-bold text-3xl pb-4">Testimonials</h1>
      <p>"Thank you so much for all the help. We love out new kitchen. 10/10 service, highly recommend Pyramid Granite."</p>
      <p className="text-sm">-Alexander the Great</p>
      <p className="pt-4">"I found out about Pyramid with a quick Google search, and I couldn’t have been more fortunate. They were fast, friendly, and super professional from the moment we got started."</p>
      <p className="text-sm">-Alan Turning</p>
      <p className="pt-4">"Our kitchen backsplash looks beautiful. We already had our countertops installed with Granite Transformation and loved how they looked so we went ahead and had them do the backsplash. They did an amazing job. He arrived on time and worked the entire time until completion. He pays attention to detail and offers suggestions. We would highly recommend them."</p>
      <p className="text-sm">-Charles Darwin</p>
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
