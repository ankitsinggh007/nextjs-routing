import NewsList from '@/component/news-list';
import { DUMMY_NEWS } from '@/dummy-news';
import { getAvailableNewsYears,getAvailableNewsMonths, getNewsForYearAndMonth, getCurrentMonthandYear } from '@/lib/news';
import React from 'react'



function Archive() {
  const {month,year}=getCurrentMonthandYear();
  console.log(month,year,"time");
  const news=getNewsForYearAndMonth(year,month);
  console.log(news,"news");
  return (<div id="home">
    <NewsList news={news}/>
  </div>)
}

export default Archive;