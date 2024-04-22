"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [stoneType, setStoneType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleCalculatePrice = async () => {
    const pricePerSquareFoot = { granite: 70, marble: 60, quartz: 100, solidstone: 80, limestone: 70 };
    const calculatedPrice = pricePerSquareFoot[stoneType] * squareFootage + 1500;

    setPrice(calculatedPrice);
    setMessage(`The price for ${squareFootage} sqft of ${stoneType} is $${calculatedPrice}`);
  };

  
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
      <div className='bg-black text-white'>
        <h1 className='font-bold text-3xl px-20 py-5'>How to Calculate Square Footage</h1>
        <div className='px-20 pb-5 text-lg'>
        <p className='pb-4'>Step 1: Measure the length and with of counter</p>
        <p className='pb-4'>Step 2: Multiply the length and width to find the square footage</p>
        <p className='pb-4'>Step 3: Add up the square feet of all desired materials (countertops, islands, blacksplash,etc.)</p>
        <p>Step 4: Input the square foot value and desired material for an ESTIMATED price.</p>
        </div>
      </div>
      <div className="p-8  px-20 bg-gray-300]">
        <div className="mb-4">
          <label htmlFor="stoneType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Stone Type</label>
          <select id="stoneType" value={stoneType} onChange={(e) => setStoneType(e.target.value)} className="text-sm rounded-lg border-gray-300 shadow-sm">
            <option value="">Select Stone Type</option>
            <option value="granite">Granite</option>
            <option value="marble">Marble</option>
            <option value="quartz">Quartz</option>
            <option value="solidstone">Solid Stone</option>
            <option value="limestone">Limestone</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="squareFootage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Square Footage</label>
          <input id="squareFootage" type="number" value={squareFootage} onChange={(e) => setSquareFootage(e.target.value)} className="text-sm rounded-lg border-gray-300 shadow-sm" />
        </div>
        <button onClick={handleCalculatePrice} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Calculate Price
        </button>
        {message && <p className="mt-4">{message}</p>}
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
