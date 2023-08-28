import { Link } from "react-router-dom";


const NewsComponent = ({sData}) => {
    console.log(sData)
    return (
        <div className="py-4">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={sData.photo} style={{width:"800px", height:"300px"}}alt=""/></figure>
  <div className="card-body">
  <Link to={`/details/${sData.id}`}><h2 className="card-title text-red-600">{sData.newsHeading}</h2>
  </Link>
    <p>{sData.newsDetails.slice(0,100)}</p>
    <Link to={`/details/${sData.id}`}><div className="card-actions justify-end">
      <button className="btn btn-primary">See more</button>
    </div></Link>
    
  </div>
</div>
        </div>
    );
};

export default NewsComponent;