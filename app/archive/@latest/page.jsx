import React from 'react'
import NewsList from '@/component/news-list';
import { getLatestNews } from '@/lib/news';

function Latestpage() {
  const news=getLatestNews();

  return (
    <>
    <div>latest page</div>
    <NewsList news={news}/>
    </>
  )
}

export default Latestpage;