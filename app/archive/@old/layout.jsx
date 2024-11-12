import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

export default function Layout({ children }) {
  const year = getAvailableNewsYears();
  return (<>
        <nav id="archive-header">
          <ul>
            {year.map((year, index) => (
              <li key={index}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
       {children}
      </>
  );
}
