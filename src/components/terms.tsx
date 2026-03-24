export default function TermsPage() {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-16">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-6 text-gray-300 text-sm leading-6">

                    <p>
                        Welcome to our platform. By using this website, you agree to comply
                        with and be bound by the following terms and conditions.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        1. Use of Service
                    </h2>
                    <p>
                        You may use our tools for personal or commercial purposes. You agree
                        not to misuse or abuse the platform.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        2. No Guarantees
                    </h2>
                    <p>
                        We do not guarantee performance, ranking, or results from using our
                        tools.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        3. Limitation of Liability
                    </h2>
                    <p>
                        We are not responsible for any loss or damage resulting from use of
                        our services.
                    </p>

                    <h2 className="text-white text-lg font-semibold">
                        4. Changes
                    </h2>
                    <p>
                        We may update these terms at any time without prior notice.
                    </p>

                </div>
            </div>
        </div>
    );
}