'use client';

import TagBox from '@/src/components/tagbox';
import { useToast } from '@/src/components/ui/toast';
import { deafultTags } from '@/src/store/data';
import { useState } from 'react';

export default function Page() {
    const [input, setInput] = useState('');
    const [tags, setTags] = useState<string[]>(deafultTags);
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const generateTags = async () => {
        if (!input.trim()) {
            showToast("Please enter keyword", "error");
            return;
        }

        setLoading(true);
        setTags([]);

        try {
            const res = await fetch('/api/tiktok-tags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ keyword: input }),
            });

            const data = await res.json();

            if (data.tags?.length > 0) {
                setTags(data.tags);
                showToast("🔥 TikTok Tags Generated!", "success");
            } else {
                showToast("❌ No tags found", "error");
            }

        } catch (err) {
            console.error(err);
            showToast("⚠️ Server error", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen px-4">

            {/* Hero */}
            <div className="text-center mt-12 max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                    Generate tags for your <br /> TikTok videos
                </h1>

                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                    Get viral hashtags & trending tags instantly 🚀
                </p>

                {/* Input */}
                <div className="flex flex-col sm:flex-row items-center bg-[#111] border border-gray-700 rounded-xl sm:rounded-full p-2 max-w-xl mx-auto gap-2">

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && generateTags()}
                        placeholder="Enter keyword (e.g. pubg, reels, funny video)"
                        className="flex-1 bg-transparent px-4 py-2 outline-none text-sm w-full"
                    />

                    <button
                        onClick={generateTags}
                        disabled={loading}
                        className="bg-white text-black px-5 py-2 rounded-full text-sm flex items-center justify-center gap-2 sm:w-auto hover:bg-gray-200 transition"
                    >
                        {loading ? (
                            <>
                                <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
                                Generating
                            </>
                        ) : (
                            'Generate'
                        )}
                    </button>
                </div>

                {/* Suggestions */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs text-gray-400">
                    {['minecraft', 'pubg mobile', 'funny reels', 'travel vlog'].map((s, i) => (
                        <span
                            key={i}
                            onClick={() => {
                                setInput(s);
                                setTimeout(generateTags, 100);
                            }}
                            className="border px-3 py-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            {/* TagBox */}
            <TagBox tags={tags} setTags={setTags} />

            {/* How to Use */}
            <div className="max-w-5xl mx-auto mt-20">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                    How to use the Tag Generator
                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
                    <div>
                        <h4 className="text-white font-medium mb-2">
                            Step 1 - Enter keyword
                        </h4>
                        <p>Type your topic or video idea.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-2">
                            Step 2 - Generate tags
                        </h4>
                        <p>Click generate to get trending hashtags.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-2">
                            Step 3 - Copy tags
                        </h4>
                        <p>Paste them into your TikTok post.</p>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="mt-24 bg-[#1a1a1a] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6">
                        Frequently Asked Questions
                    </h3>

                    <div className="space-y-4 text-gray-400 text-sm">
                        <p>How often can I use the tag generator?</p>
                        <p>Is this tool free to use?</p>
                        <p>Do tags really help TikTok SEO?</p>
                    </div>
                </div>
            </div>

        </div>
    );
}