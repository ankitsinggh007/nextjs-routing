import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const months=['jan',"feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

export default function Layout({ children,params }) {
    const newYear=params.year;
    const news=getNewsForYear(newYear);
    const month=getAvailableNewsMonths(newYear);
  return (<>
        <nav id="archive-header">
          <ul>
          <nav id="archive-header">
      <ul>
       {month.map((obj, index) => (
              <li key={index}>
                <Link href={`/archive/${newYear}/${obj}`}>{months[obj]}</Link>
              </li>
            ))}
      </ul>
    </nav>
          </ul>
        </nav>
       {children}
      </>
  );
}
