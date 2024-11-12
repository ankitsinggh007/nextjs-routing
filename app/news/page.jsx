import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/component/news-list';
function News() {

  return (
    <>
        <h1>  News pages</h1>
    <NewsList news={DUMMY_NEWS}/>
    </>
  )
}

export default News;