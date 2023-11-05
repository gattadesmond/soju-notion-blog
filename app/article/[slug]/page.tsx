import { Fragment } from 'react';
import Head from 'next/head';

import { getDatabase, getBlocks, getPageFromSlug } from '@/app/lib/notion/notion';
import Link from 'next/link'
import Text from '@/app/ui/notion/text';
import styles from '@/app/post.module.css';
import { renderBlock } from '@/app/ui/notion/renderer';
import Test from '@/app/ui/test';
import { NotionAPI } from 'notion-client'

export async function generateStaticParams() {
    const database = await getDatabase();
    return database?.map((page) => {
        const slug = page?.properties?.Slug?.formula?.string;
        return ({ id: page.id, slug });
    });
}

export default async function Page({ params }: { param: any }) {
    console.log("🚀 ~ file: page.tsx:16 ~ Page ~ param:", params.slug)

    const notion = new NotionAPI()

    const recordMap = await notion.getPage('13b520c01ba64e068af4e70b3fe76f49')
    const page = await getPageFromSlug(params?.slug);
    const blocks = await getBlocks(page?.id);

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

            <Test data={recordMap}/>

          
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