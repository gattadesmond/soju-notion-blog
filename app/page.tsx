import Image from 'next/image'
import Container from '@/components/container'
import Posts from '@/components/posts'
import { twMerge } from 'tailwind-merge'
import { formatDate } from '@/utils/formatDate'

import { getDatabase } from '@/lib/notion';
import Link from 'next/link'

const posts = [
  {
    title: "Headless UI v1.6, Tailwind UI team management, Tailwind Play improvements, and more",
    description: "It's been a while since I've written about what we've been working on so I have a lot to share! Too much honestly — so put your swim suit on, sit back in your lounge chair, and prepare to soak up some vitamin CSS.",
    date: '2022-05-27T15:00:00.000Z',
    slug: "blog-1",
  },
  {
    title: "Tailwind UI: Site templates and all-access",
    description: "Today we're releasing our first batch of official Tailwind CSS website templates — beautiful designs engineered into production-quality codebases, powered by Tailwind CSS and Next.js.",
    date: '2022-06-23T19:40:00.000Z',
    slug: "blog-2",
  },
  {
    title: "New Tailwind CSS + Framer Motion template and Tailwind Jobs",
    description: "All about the brand new Tailwind UI template we just shipped, the official Tailwind CSS job board, and a bunch of new projects coming out in the next few weeks.",
    date: '2022-08-19T12:45:00.000Z',
    slug: "blog-3",
  }
]

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Home() {
  const posts2 = await getPosts();
  return (
    <Container>

      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight  font-extrabold text-slate-200">
          Latest Updates BLog
        </h1>
        <p className="text-lg text-slate-400">
          All the latest Tailwind CSS news, straight from the team.
        </p>
      </header>
      <Posts posts={posts2} />

      <section className=' relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'>
        <div className="space-y-16">
          {posts.map(({ title, description, date, slug }) => (
            <article key={slug} className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white dark:fill-slate-900"
                  strokeWidth={2}
                />
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                  {title}
                </h3>
                <div
                  className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className={twMerge('whitespace-nowrap text-sm leading-6 dark:text-slate-400')}>
                    <time dateTime={date}>{formatDate(date, '{MMMM} {DD}, {YYYY}')}</time>
                  </dd>
                </dl>
              </div>
              <Link
                href={`/blog/${slug}`}
                className="flex items-center text-sm text-sky-500 font-medium"
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                <span className="relative">
                  Read more<span className="sr-only">, {title}</span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>


    </Container>
  )
}
