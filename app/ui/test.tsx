"use client";
import { twMerge } from "tailwind-merge";
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import { NotionRenderer } from 'react-notion-x'
import { useEffect } from "react";

export default  function Test({ data, hmm}) {
 console.log("🚀 ~ file: test.tsx:15 ~ Test ~ hmm:", hmm)
 console.log("🚀 ~ file: test.tsx:8 ~ Text ~ data:", data)
 
    return (
        <section
            className={twMerge(
                " relative max-w-4xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
            )}
        >
            <NotionRenderer recordMap={data} fullPage={true} darkMode={false} />
        </section>
    );
}
