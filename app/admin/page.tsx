import React from 'react'
import Events from "@/components/admin-event-panel"
import Gallery from "@/components/admin-gallery-panel"
import Team from "@/components/admin-team-member-management"
import Downloads from "@/components/admin-downloads-panel"
import Newadmin from "@/components/admin-super-admin-panel"
import Certificates from "@/components/admin-certificate-creation"

function page() {
  return (
    <>

    <Events/>
    <Gallery/>
    <Downloads/> 
    <Certificates/>   
    <Team/>
    <Newadmin/>



    </>
  )
}

export default page