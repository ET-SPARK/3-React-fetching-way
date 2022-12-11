import React, {useState, useEffect} from 'react'
import useSwr from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Swr() {
    const {data, error} = useSwr("https://dog.ceo/api/breeds/image/random",fetcher,
    {suspense:true
    })

    if(error) {
        return <h1> There was an error! </h1>
    }
  return (
    <div>
        <img width={500} src={data.message}/>
    </div>
  )
}

export default Swr