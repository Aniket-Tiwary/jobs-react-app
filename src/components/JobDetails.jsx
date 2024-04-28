import '../css/JobDetails.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getJobById } from '../common/api';


const JobDetails = ({jobId}) => {
    const [job,setJob] = useState({});
    const [renderApp,setRenderApp] = useState(false);

    useEffect(() => {
        console.log(jobId);
        const getJob = async () => {
            const jobFetched = await getJobById(jobId);
            setJob(jobFetched);
            setRenderApp(true);
            console.log("Job: " , job);
        }
        getJob();
        // setTimeout(()=>{
        //     console.log("Job: ",job.company.name);
        // },2000);
    },[]);

    return (
        <>
            {renderApp && <div>
                <Link className='nav-job-listing' to='/jobs'>
                    &larr; Back to Job Listings
                </Link>
                <div className='job-details-container'>
                    <div className='job-info'>
                        <div className='job-title'>
                            <div className='type'>{job.type}</div>
                            <div className='title-job'>{job.title}</div>
                            <div className='location'>{job.location}</div>
                        </div>
                        <div className='job-description'>
                            <div className='label'>Job Description</div>
                            <div className='description'>{job.description}</div>
                            <div className='label'>Salary</div>
                            <div className='salary'>{job.salary}</div>
                        </div>
                    </div>
                    <div className='company-info-actions'>
                        <div className='company-info'>
                            <div style={{fontWeight:'600',fontSize:'22px',marginBottom:'20px'}}>Company Info</div>
                            <div style={{fontSize:'26px',marginBottom:'10px'}}>{job.company.name}</div> 
                            <div style={{lineHeight:'1.5',borderBottom:'solid #E6E7EB 1px',paddingBottom:'10px'}}>{job.company.description}</div>
                            <div style={{marginTop:'10px'}}>
                                <div style={{fontSize:'24px'}}>Contact Email:</div>
                                <div className='contact'>{job.company.contactEmail}</div>
                            </div>
                            <div>
                                <div style={{fontSize:'24px'}}>Contact Phone:</div>
                                <div className='contact'>{job.company.contactPhone}</div>
                            </div>            
                        </div>
                        <div className='job-actions'>
                            <div className='actions-label'>
                                <p style={{marginBottom:'20px'}}>Manage job</p>
                                <Link to='/jobs' className='job-action edit-job'>Edit job</Link>
                                <Link to='/jobs' className='job-action delete-job'>Delete job</Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>}
        </>
    )
}

export default JobDetails;