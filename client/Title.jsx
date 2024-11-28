import React from 'react'
import { Helmet } from 'react-helmet-async'
const Title = ({title="socialize",description="this is chat app"}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
    </div>
  )
}

export default Title
