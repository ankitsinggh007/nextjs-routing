import Link from 'next/link';
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
function News() {
    const pages=["Firsy new item","second news item","third news item"];

  return (
    <>
        <h1>  News pages</h1>
    <ul className='news-list'>
    {DUMMY_NEWS.map((obj)=><li className='news-list' key={obj.id}>
       <Link href={`/news/${obj.slug}`}>
        <Image width="300" height='300' src={`/images/news/${obj.image}`}
        alt={obj.title}
        />
        <span>{obj.title}</span>

       </Link>
        </li>)}
    </ul>
    </>
  )
}

export default News;