import { getAvailableNewsYears,getAvailableNewsMonths } from '@/lib/news';
import React from 'react'

function Archive({params}) {
  const year=getAvailableNewsYears();
  return (<div id="home">
    archive section
  </div>)
}

export default Archive;