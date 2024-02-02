import React from 'react'

const DocumentIdPage = ({params}:{params:{documentId:string}}) => {
  return (
    <div>page:-{params.documentId}</div>
  )
}

export default DocumentIdPage