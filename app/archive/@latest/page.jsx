import NewsList from '@/component/news-list';
import { getLatestNews } from '@/lib/news';
import React from 'react'

function defaultPage() {
    const news=getLatestNews();
  return (
    <>
    <h2>Latest News from page</h2>
    <NewsList news={news}/>
    </>
  )
}

export default defaultPage;