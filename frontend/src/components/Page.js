import React from 'react'
import Header from './Header'
import { PropTypes } from 'prop-types'
import { useRouter } from "next/router";

const Page = ({children}) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== "/newAdvertisement" && <Header/>}
      {children}
    </div>
  )
}
Page.propTypes = {
  children: PropTypes.any
}
export default Page