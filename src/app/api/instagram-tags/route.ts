export async function POST(req: Request) {
    try {
        const { keyword } = await req.json();

        if (!keyword) return Response.json({ tags: [] });

        // 🔥 Google Suggest (Instagram style)
        const res = await fetch(
            `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(
                keyword + " instagram"
            )}`
        );

        const data = await res.json();
        const suggestions: string[] = data[1] || [];

        const base = keyword.toLowerCase().trim();

        // 🎯 Instagram keyword tags
        const extra = [
            base,
            `${base} instagram`,
            `${base} reels`,
            `${base} post`,
            `${base} viral`,
            `${base} trending`,
            `${base} explore`,
            `${base} content`,
            `${base} creator`,
            `${base} video`,
            `${base} edit`,
        ];

        // 🔥 Hashtags (Instagram IMPORTANT)
        const hashtags = [
            `#${base.replace(/\s+/g, '')}`,
            `#${base.replace(/\s+/g, '')}reels`,
            '#instagram',
            '#instagood',
            '#reels',
            '#reelsinstagram',
            '#explore',
            '#explorepage',
            '#viral',
            '#trending',
            '#photooftheday',
        ];

        // Merge unique
        const merged = Array.from(new Set([...suggestions, ...extra, ...hashtags]));

        // 🎯 Limit ~500 chars (Instagram safe)
        let result: string[] = [];
        let total = 0;

        for (let tag of merged) {
            if (total + tag.length + 2 > 500) break;
            result.push(tag);
            total += tag.length + 2;
        }

        return Response.json({ tags: result });

    } catch (error) {
        console.error(error);
        return Response.json({ tags: [] });
    }
}