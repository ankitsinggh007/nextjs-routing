import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const longMonth=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

export default function Layout({ children,params }) {
  const year=+params.filter[0];
  const months = getAvailableNewsMonths(year);
  console.log(months,"month")
  return (<>
        <nav id="archive-header">
          <ul>
            {months.map((month, index) => (
              <li key={index}>
                <Link href={`/archive/${year}/${month}`}>{longMonth[month]}</Link>
              </li>
            ))}
          </ul>
        </nav>
       {children}
      </>
  );
}
