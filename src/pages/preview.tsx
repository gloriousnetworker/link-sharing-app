import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import profilePic from '../public/profile-pic.jpg'; // Make sure to have an image in the public folder

const Preview = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Copy link Here!',
          text: 'Here is a link I want to share with you.',
          url: window.location.href, // You can change this to any link you want to share
        });
        console.log('Link shared successfully');
      } catch (error) {
        console.error('Error sharing the link:', error)
      }
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute top-0 left-0 right-0 bg-white p-4 flex justify-between items-center shadow-md">
        <Link href="/profile">
          <button className="bg-transparent text-purple-600 border border-purple-600 px-4 py-2 rounded-lg">
            Back to Editor
          </button>
        </Link>
        <button onClick={handleShare} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Share Link
        </button>
      </div>
      <div className="relative w-full bg-purple-600 h-40 rounded-b-3xl"></div>
      <div className="relative bg-white p-8 rounded-3xl shadow-lg mt-[-60px] w-80">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            {/* <Image src={profilePic} alt="Profile Picture" layout="fill" objectFit="cover" /> */}
          </div>
          <h2 className="mt-4 text-2xl font-semibold">Ben Wright</h2>
          <p className="text-gray-500">ben@example.com</p>
        </div>
        <div className="mt-6 space-y-4">
          <a href="#" className="flex items-center justify-between bg-black text-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.728-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.085 1.838 1.235 1.838 1.235 1.07 1.834 2.808 1.304 3.493.997.108-.775.418-1.304.762-1.605-2.666-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.398 3.005-.402 1.02.004 2.048.136 3.007.402 2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.244 2.876.12 3.18.77.84 1.232 1.912 1.232 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.814 1.1.814 2.22 0 1.604-.014 2.896-.014 3.292 0 .319.192.692.8.574C20.565 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
              GitHub
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="flex items-center justify-between bg-red-500 text-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5-3-5-3v6zm9-15H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 18H5V4h14v14z" />
              </svg>
              YouTube
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-8h3v8zm-1.5-9.1c-1.001 0-1.7-.7-1.7-1.6 0-.9.699-1.6 1.699-1.6s1.7.7 1.7 1.6c0 .9-.699 1.6-1.699 1.6zm13.5 9.1h-3v-4.5c0-1.1-.4-1.8-1.401-1.8-.8 0-1.2.601-1.399 1.201-.1.2-.1.5-.1.8v4.3h-3s.1-7 0-8h3v1.2c.4-.601 1.1-1.301 2.601-1.301 1.9 0 3.299 1.2 3.299 3.7v4.4z" />
              </svg>
              LinkedIn
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Preview;
