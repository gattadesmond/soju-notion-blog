import { Fragment } from 'react';
import Head from 'next/head';

import { getDatabase, getBlocks, getPageFromSlug } from '@/app/lib/notion/notion';
import Link from 'next/link'
import Text from '@/app/ui/notion/text';
import styles from '@/app/post.module.css';
import { renderBlock } from '@/app/ui/notion/renderer';

import NotionRenderer from '@/app/ui/notion/notion-renderer';
import { twMerge } from "tailwind-merge";

import { notionX } from "@/app/lib/notion/notion-api"

// export async function generateStaticParams() {
//     const database = await getDatabase();
//     return database?.map((page) => {
//         const slug = page?.properties?.Slug?.formula?.string;
//         return ({ id: page.id, slug });
//     });
// }

export default async function Page({ params }: { param: any }) {

    const page = await getPageFromSlug(params?.slug);
    const blocks = await getBlocks(page?.id);
    const recordMap = await notionX.getPage(page?.id)

    if (!page || !blocks) {
        return <div />;
    }
    return (
        <>


            <Head>
                <title>{page.properties.Title?.title[0].plain_text}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-3xl">
                <Text title={page.properties.Title?.title} />
            </h1>
            <section
                className={twMerge(
                    "dark-mode relative max-w-4xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
                )}
            >
                <NotionRenderer recordMap={recordMap} />
            </section>

            <article className=" prose prose-invert mx-auto">
                <section>
                    {blocks.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}
                    <Link href="/" className={styles.back}>
                        ← Go home
                    </Link>
                </section>
            </article>
        </>

    );
}
