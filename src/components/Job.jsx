import '../css/Job.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const [showFullDescription,setShowFullDesciption] = useState(false);

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0,90) + "...";
    }
    

    return (
        <div className="job">
            <div className="type">{job.type}</div>
            <div className="position">{job.title}</div>
            <div className="description">{description}</div>
            <button style={{backgroundColor:'white',color:'#6366F1','padding':'0',marginBottom:'20px',border:'none'}} 
                onClick={() => setShowFullDesciption((prevState) => !prevState)}>
                {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className="salary">{job.salary} / Year</div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                <div className="location">{job.location}</div>
                <Link className='read-more' to={`jobs/${job.id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default Job;