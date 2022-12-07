import React from 'react'
import Link from 'next/link'

const Advertisements = () => {
  return (
    <>
      <div>
        <h1>Advertisements</h1>
      </div>
        <Link href='/newAdvertisement' variant="primary">Create new advertisement</Link>
    </>
  )
}

export default Advertisements