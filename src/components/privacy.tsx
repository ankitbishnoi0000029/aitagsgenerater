export default function PrivacyPage() {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-16">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Privacy Policy
                </h1>

                <p className="text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-6 text-gray-300 text-sm leading-6">

                    <p>
                        Your privacy is important to us. This policy explains how we collect,
                        use, and protect your information.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        1. Information We Collect
                    </h2>
                    <p>
                        We may collect basic usage data such as browser type, device, and
                        interactions.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        2. How We Use Data
                    </h2>
                    <p>
                        We use data to improve our services and user experience.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        3. Cookies
                    </h2>
                    <p>
                        We may use cookies to enhance functionality and analytics.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        4. Data Security
                    </h2>
                    <p>
                        We implement security measures to protect your data.
                    </p>

                </div>
            </div>
        </div>
    );
}