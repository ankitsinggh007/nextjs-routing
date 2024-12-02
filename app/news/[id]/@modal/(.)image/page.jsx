import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import React from 'react'

function Image({params}) {
  console.log(params,"params");

  const newsItemId=params.id;
  console.log(newsItemId,"slug or id whatvere you like to call")

  const newsItem=DUMMY_NEWS.find((newsItem)=>newsItem.slug==newsItemId)

  if(!newsItem){
    notFound();
  }
  return (
    <div className='modal-backdrop'>
      <dialog open>
        <div className='modal'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>

      </dialog>

    </div>

  )
}

export default Image;