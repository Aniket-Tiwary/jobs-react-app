import '../css/JobListings.css';
import {useState,useEffect} from 'react';
import Job from './Job';
import { getAllJobs } from '../common/api';

const JobListings = ({showFilter,length}) => {
    const [jobs,setJobs] = useState([]);
    const serverUrl = "http://localhost:8080/jobs";


    const loadJobs = async () => {
        const allJobs =  await getAllJobs();
        console.log(allJobs);
        if(!length){
            length = allJobs.length;
        }
        setJobs(allJobs.filter((job,index)=> index<length ));
    }

    useEffect(()=>{
        loadJobs();
    },[]);


    return (
        <div className='job-list'>
            {showFilter && <input className='filter' type="text" placeholder="Filter jobs..." />}
            <div className='listing-title'>Browse Jobs</div>
            <div className='list'>
                {jobs.map((job)=>{
                    return (<Job job={job} key={job.id}/>)
                })}
            </div>
        </div>
    )
}

export default JobListings;