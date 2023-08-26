// import moment from 'moment';
import Marquee from "react-fast-marquee";

// const moment = require('moment');

const Somoi = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        
        
        timeZone: 'Asia/Dhaka', // Set the desired time zone
      };
    
    const formattedDate = new Intl.DateTimeFormat('bn-BD', options).format(new Date());
    return (
        <>
        <div className=''> 

            <Marquee>

{/* <p className='text-black'> {moment().format('LLLL')}</p> */}

<p className='text-black'>{formattedDate}</p>
            </Marquee>
           
        </div>
        <hr className="  border-t-2 border-gray-800 my-4 "/>
        </>
    );
};

export default Somoi;