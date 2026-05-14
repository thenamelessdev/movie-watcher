import React from 'react'

export default function MovieCard({title, description, imageUrl}: {title: string, description: string, imageUrl: string}) {
  return (<>
    <div className="border-2 border-black w-fit p-5 text-center bg-cover" style={{backgroundImage: `url("${imageUrl}")`}}>
        <p className="text-lg font-bold">{title}</p>
        <p>{description}</p>
    </div>
  </>)
}
