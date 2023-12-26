import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    // const followers=500;
    useEffect(() =>{
        fetch("https://api.github.com/users/The-AdminGit")
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      Github Followers: {data.followers}
      <img className='h-36 ' src={data.avatar_url} alt="git photo" />
      {/* GitHub Followers: {followers} */}
    </div>
  )
}

export default Github
