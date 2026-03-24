'use client';

import Link from "next/link";
import { FAQ } from "./faq";
import { welcomeFaq } from "../store/data";

export default function HeroSection() {
    const tags = [
        'how to get views on youtube fast',
        'grow on youtube',
        'how to get views on youtube shorts',
        'how to grow on youtube fast',
        'youtube without subscribers',
    ];

    return (
        <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">

            {/* Hero Content */}
            <div className="text-center max-w-3xl mt-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 
  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
  text-transparent bg-clip-text tracking-tight 
  drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    {process.env.NEXT_PUBLIC_NAME}
                </h1>
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                    {process.env.NEXT_PUBLIC_NAME} helps you grow on YouTube
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                    Unlock your YouTube potential with the next-generation of creator tools.
                    Optimize your videos and improve your workflow.
                </p>

                <Link href={'./youtube-tag'} className="bg-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-white transition border-2 border-red-600">
                    Start Growing
                </Link >
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-white hover:text-white transition cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-20 max-w-5xl w-full">
                <h2 className="text-sm text-gray-400 mb-2">Tag Generator</h2>

                <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                    Quickly generate tags for your YouTube videos.
                </h3>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                        <div className="text-2xl mb-3">📋</div>
                        <h4 className="font-medium mb-2">Easy Copy</h4>
                        <p className="text-gray-400 text-sm">
                            Copy tags instantly with one click.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                        <div className="text-2xl mb-3">💾</div>
                        <h4 className="font-medium mb-2">Save Tags</h4>
                        <p className="text-gray-400 text-sm">
                            Store your favorite tags for later.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                        <div className="text-2xl mb-3">📊</div>
                        <h4 className="font-medium mb-2">Optimize SEO</h4>
                        <p className="text-gray-400 text-sm">
                            Improve your video ranking easily.
                        </p>
                    </div>

                </div>
                <FAQ data={welcomeFaq} />
            </div>
            {/* FAQ */}
        </section>
    );
}