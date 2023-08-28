import { useState } from "react";
import { useEffect } from "react";
import NewsComponent from "./NewsComponent";


const NewsContent = () => {
    const [data,setData]=useState(null)
    useEffect(()=>{
            fetch("https://travel-news-server.vercel.app/news")
            .then(res=>res.json())
            .then(data=>{
          
           setData(data)
           

    })
    },[])
    return (

        
        <div>
            
{data?.map(sData=><NewsComponent key={sData.id}sData={sData}></NewsComponent>)











}



        </div>
    );
};

export default NewsContent;