import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
import './Github.css'
// import './github.css'; // Import CSS file


function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/ahsansajjadpk')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='gits text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src='data.avatar_url' width={300} />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }