import Image from 'next/image'
import Container from '@/app/ui/container'
import Posts from '@/app/ui/posts'
import { twMerge } from 'tailwind-merge'
import { formatDate } from '@/app/lib/utils/formatDate'

import {notion, databaseId } from '@/app/lib/notion/notion';

async function getPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
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
      <section className=' relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'>
        <div className="space-y-16">
          <Posts posts={posts2} />
        </div>
      </section>
    


    </Container>
  )
}
