import NewsList from '@/component/news-list'
import { getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React from 'react'

function FilteredNewPage({params}) {
    const year=params[0];
    const month=params[1];
    let news=[];
    if(year){
      news=getNewsForYear(year);
      if(month){
        news=getNewsForYearAndMonth(year,month); 
      }
    }
  return (
    <>
    <h1>i am from filter</h1>
    <NewsList news={news}/>
    </>
  )
}

export default FilteredNewPage