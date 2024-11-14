import NewsList from '@/component/news-list'
import { getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React from 'react'

function FilteredNewPage({params}) {
    const year=+params.filter[0];
    const months=+params.filter[1];
    let news=getNewsForYear(year);
    if(months){
      news=getNewsForYearAndMonth(year,months); 
    }
  return (
    <NewsList news={news}/>
  )
}

export default FilteredNewPage