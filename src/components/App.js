import React,{ useState ,useEffect } from 'react'

export default function App() 
{

const [images,setImages] = useState()
const [pageLoading,setPageLoading] = useState(true)

useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((data)=>{
        setImages(data.message)
        setPageLoading(false)    })
},[])

return (
    <div>
      {
        pageLoading?"Loading...":<img src={images} alt="A Random Dog" />
      }
      
    </div>
)

}