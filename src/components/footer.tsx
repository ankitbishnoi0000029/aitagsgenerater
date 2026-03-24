import Link from "next/link"

export const Footer = () => {
    return (
        <>
            < footer className="w-full mt-20 border-t border-gray-800 bg-black" >
                <div className="max-w-6xl mx-auto px-4 py-10">

                    {/* Top */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Logo / Name */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                                {process.env.NEXT_PUBLIC_NAME}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">
                                Grow faster with smart tag generation tools 🚀
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            <Link href="/terms" className="hover:text-white transition">
                                Terms
                            </Link>
                            <Link href="/privacy" className="hover:text-white transition">
                                Privacy
                            </Link>
                            <Link href="/cookies" className="hover:text-white transition">
                                Cookies
                            </Link>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
                        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME}. All rights reserved.
                    </div>

                </div>
            </footer >
        </>
    )
}