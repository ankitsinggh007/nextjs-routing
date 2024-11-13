import Link from 'next/link';
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
function NewsList({news}) {

  return (
    
        <ul className='news-list'>
    {news.map((obj)=>
    <li className='news-list' key={obj.id}>
       <Link href={`/news/${obj.slug}`}>
        <Image width="400" height='400' src={`/images/news/${obj.image}`}
        alt={obj.title}
        />
        <span>{obj.title}</span>

       </Link>
        </li>)}
    </ul>
    
  )
}

export default NewsList;