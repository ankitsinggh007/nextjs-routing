import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
export default function Layout({ children,params }) {
  const desiredYear=params.filter[0];

  const years = getAvailableNewsYears();
  
  const months=getAvailableNewsMonths(desiredYear); 
  
  return (<>
        <nav id="archive-header">
          <ul>
            {years.map((year, index) => (
              <li key={index}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav id="archive-header">
{
  desiredYear &&
            <ul>
            {months.map((obj, index) => (
              <li key={index}>
                <Link href={`/archive/${desiredYear}/${obj}`}>{month[obj]}</Link>
              </li>
            ))}
          </ul>
}
        </nav>
       {children}
      </>
  );
}
