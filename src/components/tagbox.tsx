'use client';

import { useToast } from "./ui/toast";



interface TagBoxProps {
    tags: string[];
    setTags: (tags: string[]) => void;
}

export default function TagBox({ tags, setTags }: TagBoxProps) {
    const { showToast } = useToast();
    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
        showToast('Tag Removed!', 'success');
    };
    const copyTags = () => {
        showToast('Tags generated successfully!', 'success');
        navigator.clipboard.writeText(tags.join(', '));
    };

    const charCount = tags.join(', ').length;

    if (tags.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10 text-sm">
                No tags generated yet 🚀
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-[#0d0d0d] border border-gray-800 rounded-xl p-4 gap-3.5 ">

            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4 text-xs text-gray-400">
                <span>{charCount}/500 Characters</span>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-4 ">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 bg-black border border-gray-700 px-3 py-1 rounded-md text-md hover:border-white transition"
                    >
                        <span>{tag}</span>

                        <button
                            onClick={() => removeTag(index)}
                            className="text-gray-400 hover:text-red-400 text-xs cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={copyTags}
                className="border border-gray-700 px-3 py-1 rounded-md hover:border-amber-700 hover:text-black transition w-full bg-white text-black mt-2 cursor-pointer"
            >
                📋 Copy
            </button>
        </div>
    );
}