import NewsList from '@/component/news-list'
import { getNewsForYear } from '@/lib/news';
import React from 'react'

function FilteredNewPage({params}) {
    const newYear=params.year;
    const news=getNewsForYear(newYear);
  return (
    <NewsList news={news}/>
  )
}

export default FilteredNewPage