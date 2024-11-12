import NewsList from '@/component/news-list'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

function FilteredNewPage({params}) {
    const newYear=params.year;

    const news=getNewsForYear(newYear);
    console.log(news,"news")
  
    
  return (
    <>
    <NewsList news={news}/>
    </>

  )
}

export default FilteredNewPage