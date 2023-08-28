import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleNewsDetails = () => {
    const [data,setData]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
fetch(`https://travel-news-server.vercel.app/singleNews/${id}`)
.then(res=>res.json())
.then(data=>{setData(data)


console.log(data)})



    },[id])
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
      <figure><img src={data?.photo} alt=""/></figure>
      <div className="card-body">
        <h2 className="card-title text-red-600">{data?.newsHeading
}</h2>
        <p>{data?.newsDetails
}</p>
        
      </div>
    </div>
        </div>
    );
};

export default SingleNewsDetails;