import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
export default function Layout({ children,params }) {

  const years = getAvailableNewsYears();
  
  
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
        {children}
      </>
  );
}
