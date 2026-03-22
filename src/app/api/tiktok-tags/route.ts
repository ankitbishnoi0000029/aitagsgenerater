export async function POST(req: Request) {
    try {
        const { keyword } = await req.json();

        const res = await fetch(
            `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(keyword + " tiktok")}`
        );

        const data = await res.json();
        const suggestions: string[] = data[1] || [];

        const base = keyword.toLowerCase();

        const extra = [
            base,
            `${base} viral`,
            `${base} trending`,
            `${base} fyp`,
            `${base} reels`,
            `${base} shorts`,
        ];

        const hashtags = [
            `#${base.replace(/\s+/g, '')}`,
            '#fyp',
            '#viral',
            '#trending',
            '#tiktok',
        ];

        const merged = Array.from(new Set([...suggestions, ...extra, ...hashtags]));

        let result: string[] = [];
        let total = 0;

        for (let tag of merged) {
            if (total + tag.length + 2 > 500) break;
            result.push(tag);
            total += tag.length + 2;
        }

        return Response.json({ tags: result });

    } catch (e) {
        return Response.json({ tags: [] });
    }
}