export async function POST(req: Request) {
    try {
        const { keyword } = await req.json();

        const res = await fetch(
            `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(keyword)}`
        );

        const data = await res.json();
        const suggestions: string[] = data[1] || [];

        // 🔥 Generate MANY variations
        const variations = [
            '',
            'tutorial',
            'tips',
            'tricks',
            'guide',
            'for beginners',
            '2026',
            'shorts',
            'viral',
            'how to',
            'best',
            'full video',
            'explained',
            'step by step',
            'easy',
            'advanced',
            'pro',
            'free',
        ];

        let allTags: string[] = [];

        // Combine suggestions + variations
        suggestions.forEach((base) => {
            variations.forEach((v) => {
                if (v === '') {
                    allTags.push(base);
                } else {
                    allTags.push(`${base} ${v}`);
                }
            });
        });

        // Add keyword variations
        variations.forEach((v) => {
            if (v === '') {
                allTags.push(keyword);
            } else {
                allTags.push(`${keyword} ${v}`);
            }
        });

        // Remove duplicates
        const merged = Array.from(new Set(allTags));

        // ✅ Ensure ~500 characters
        let result: string[] = [];
        let total = 0;

        for (let tag of merged) {
            if (total + tag.length + 2 > 500) break;
            result.push(tag);
            total += tag.length + 2;
        }

        // 🎯 TITLE GENERATOR
        const title = `${keyword} | Complete Guide 2026 🔥`;

        // 📝 DESCRIPTION GENERATOR
        const description = `
🔥 ${keyword} - Complete Guide!

In this video, you will learn about:
- ${keyword} basics
- ${keyword} tips & tricks
- ${keyword} advanced strategies

🚀 Don't forget to like, share and subscribe!

#${keyword.replace(/\s+/g, '')} #youtube #trending
    `.trim();

        return Response.json({
            tags: result,
            title,
            description,
        });

    } catch (error) {
        console.error(error);
        return Response.json({
            tags: [],
            title: '',
            description: '',
        });
    }
}