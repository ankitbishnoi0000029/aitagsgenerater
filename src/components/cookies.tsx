export default function CookiesPage() {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-16">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Cookies Policy
                </h1>

                <p className="text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-6 text-gray-300 text-sm leading-6">

                    <p>
                        This website uses cookies to improve your experience and provide
                        better services.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        1. What Are Cookies?
                    </h2>
                    <p>
                        Cookies are small text files stored on your device when you visit a
                        website.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        2. How We Use Cookies
                    </h2>
                    <p>
                        We use cookies for analytics, performance, and improving user
                        experience.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        3. Managing Cookies
                    </h2>
                    <p>
                        You can disable cookies through your browser settings.
                    </p>

                </div>
            </div>
        </div>
    );
}