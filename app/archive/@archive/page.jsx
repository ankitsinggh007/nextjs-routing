import { getAvailableNewsYears } from '@/lib/news';
import React from 'react'

function Archivepage() {

  const link=getAvailableNewsYears();
  return <header id='archive-header'>
    <nav>
      <ul>
  {
    link.map((year, index) => (
      <li key={index}>
        <a href={`/archive/${year}`}>{year}</a>
      </li>
    ))
  }
      </ul>
    </nav>

  </header>
}

export default Archivepage;