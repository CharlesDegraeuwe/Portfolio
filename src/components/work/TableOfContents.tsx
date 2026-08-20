import {useEffect, useState} from 'react';

interface Heading {
    depth: number;
    slug: string;
    text: string;
}

export default function TableOfContents({headings}: {headings: Heading[]}) {
    const [active, setActive] = useState('');

    useEffect(() => {
        const container = document.querySelector<HTMLElement>('.article-scroll');
        if (!container) return;

        const els = headings
            .map((h) => document.getElementById(h.slug))
            .filter((el): el is HTMLElement => el !== null);

        const LINE = 120; // px from the top of the container = the "active" line

        const update = () => {
            const cTop = container.getBoundingClientRect().top;
            let current = els[0]?.id ?? '';
            for (const el of els) {
                const top = el.getBoundingClientRect().top - cTop;
                if (top <= LINE) current = el.id; // last heading above the line wins
            }
            setActive(current);
        };

        update();
        container.addEventListener('scroll', update, {passive: true});
        window.addEventListener('resize', update);
        return () => {
            container.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [headings]);

    return (
        <nav className="absolute right-0 min-w-48 top-1/2 -translate-y-1/2">
            <div className={"relative min-w-0 min-h-0 flex"}>
                <div className={"w-[1.5px] h-full z-0 bg-zinc-300 absolute left-0"}/>
                <div className={"flex-1 flex flex-col gap-2 z-10"}>
                {headings.map((h) => (
                    <a
                        key={h.slug}
                        href={`#${h.slug}`}
                        style={{paddingLeft: (h.depth - 1) * 12 + 12}}
                        className={`text-sm px-2 border-l-[1.5px] truncate transition-opacity duration-300 ${
                            active === h.slug
                                ? 'opacity-100 font-medium border-zinc-900'
                                : 'opacity-50 hover:opacity-100 border-transparent '
                        }`}
                    >
                        {h.text}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    );
}
