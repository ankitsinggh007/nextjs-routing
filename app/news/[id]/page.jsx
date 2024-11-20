import { DUMMY_NEWS } from '@/dummy-news'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

function page({params}) {
  console.log(params)




  const data=DUMMY_NEWS.find(obj=>obj.slug===params.id);

if(!data) return notFound();

  return (
    <article className='news-article'>
      <header>
      <Link href={`/news/${data.slug}/image`}>  <img src={`/images/news/${data.image}`} alt={data.title}/></Link>
        <h1>{data.title}</h1>
        <time dateTime={data.date}  >{data.date}</time>
      </header>
      <p>{data.content}</p>

    </article>
  )
}

export default page