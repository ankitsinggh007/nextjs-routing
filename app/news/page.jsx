import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/component/news-list';

// fetching data using server
async function News() {

  const response=await fetch('http://localhost:8080/news');
  if(!response.ok){

    throw new Error("can't able to fetch news");

  }

  const news=await response.json();

  let newsContent;

  if(news){
    newsContent=<NewsList news={news}/>
  }

  return (
    <>
        <h1>  News pages</h1>
    {newsContent}
    </>
  )
}

export default News;