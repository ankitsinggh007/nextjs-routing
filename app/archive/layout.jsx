import React from 'react'

function Layout({old,latest}) {
  return (
    <div>
    <section id='archive-filter'>
    {old}
    </section>
    <section id='archive-latest'>
        {latest}
    </section>
    </div>
  )
}

export default Layout;