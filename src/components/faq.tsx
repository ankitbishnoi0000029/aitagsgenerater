'use client';

import { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

type FAQProps = {
    data: FAQItem[];
};

export const FAQ = ({ data }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="my-12 bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 max-w-5xl md:min-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                Frequently Asked Questions
            </h3>

            <div className="space-y-3">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-white transition"
                        onClick={() => toggle(index)}
                    >
                        {/* Question */}
                        <div className="flex justify-between items-center">
                            <p className="text-red-300 font-medium">
                                {item.question}
                            </p>
                            <span className="text-gray-400 text-xs">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </div>

                        {/* Answer */}
                        {openIndex === index && (
                            <p className="text-green-400 text-sm mt-3 leading-relaxed">
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};