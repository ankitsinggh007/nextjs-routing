import NewsList from '@/component/news-list'
import { getNewsForYear } from '@/lib/news';
import React from 'react'

function FilteredNewPage({params}) {
  console.log(params,"params")
    const newYear=params.year;
    const news=getNewsForYear(newYear);
    console.log(news,"news")
  return (
    <NewsList news={news}/>
  )
}

export default FilteredNewPage