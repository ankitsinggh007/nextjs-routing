import { getAvailableNewsYears,getAvailableNewsMonths } from '@/lib/news';
import React from 'react'

function Archive() {

  const year=getAvailableNewsYears();
  console.log(year)
  // const month=getAvailableNewsMonths(year);
  return (<div id="home">
    archive section
  </div>)
}

export default Archive;