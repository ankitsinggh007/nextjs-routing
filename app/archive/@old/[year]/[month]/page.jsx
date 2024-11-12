import NewsList from '@/component/news-list'
import { getNewsForYear,getNewsForYearAndMonth } from '@/lib/news'
import React from 'react'

function page({params}) {

  console.log(params,"pad")

  const news=getNewsForYearAndMonth(params.year,params.month);

  return (
    <NewsList news={news}/>
  )
}

export default page