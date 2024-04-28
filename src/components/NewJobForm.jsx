import { useState } from 'react';
import { addNewJob } from '../common/api';
import '../css/NewJobForm.css';


const NewJobForm = () => {
    const jobTypes = ["Full-Time","Part-Time","Remote","Internship"];
    const salaryRange = ["Under $50K","$50K - $60K","$60K - $70K","$70K - $80K","$80K - $90K","$90K - $100K",
                "$100K - $1250K","$1250K - $150K","$150K - $175K","$175K - $200K","Over $200K"];
    const [jobType,setJobType] = useState(jobTypes[0]);
    const [salary,setSalary] = useState(salaryRange[0]);
    const [jobListing,setJobListing] = useState('');
    const [jobDescription,setJobDescription] = useState('');
    const [jobLocation,setJobLocation] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [companyDescription,setCompanyDescription] = useState('');
    const [contactEmail,setContactEmail] = useState('');
    const [contactPhone,setContactPhone] = useState('');

    const changeJobType = (event) => {
        event.preventDefault();
        setJobType(event.target.value);
    }

    const changeJobListing = (event) => {
        event.preventDefault();
        setJobListing(event.target.value);
    }

    const changeJobDescription = (event) => {
        event.preventDefault();
        setJobDescription(event.target.value);
    }

    const changeCompanyLocation = (event) => {
        event.preventDefault();
        setCompanyLocation(event.target.value);
    }

    const changeContactEmail = (event) => {
        event.preventDefault();
        setContactEmail(event.target.value);
    }

    const changeContactPhone = (event) => {
        event.preventDefault();
        setContactPhone(event.target.value);
    }

    const changeJobLocation = (event) => {
        event.preventDefault();
        setJobLocation(event.target.value);
    }

    const changeCompanyName = (event) => {
        event.preventDefault();
        setCompanyName(event.target.value);
    }

    const changeCompanyDescription = (event) => {
        event.preventDefault();
        setCompanyDescription(event.target.value);
    }

    const addJob = async () => {
        console.log("Add job triggered");
        const job = {
            "title":jobListing,
            "type": jobType,
            "location": jobLocation,
            "description": jobDescription,
            "salary": salary,
            "company": {
                "name": companyName,
                "description": companyDescription,
                "contactEmail": contactEmail,
                "contactPhone": contactPhone
            }
        };
        await addNewJob(job);
    }

    return (
        <div className='job-form-container'>
            <form className="new-job" onSubmit={addJob}>
                <div className="new-job-title">Add Job</div>
                <div className='form-element'>
                    <label>Job Type</label>
                    <select onChange={changeJobType} value={jobType}>
                        {jobTypes.map((job,index) => {
                            return <option key={index}>{job}</option>
                        })}
                    </select>
                </div>
                <div className='form-element'>
                    <label>Job Listing Name</label>
                    <input type='text' placeholder="eg. Beautiful Apartment in Miami" onChange={changeJobListing} required={true}></input>
                </div>
                <div className='form-element'>
                    <label>Description</label>
                    <textarea type='text' placeholder="Add any job duties, expectations, requirements, etc" onChange={changeJobDescription} required={true}></textarea>
                </div>
                <div className='form-element'>
                    <label>Salary</label>
                    <select onChange={(event)=>setSalary(event.target.value)} value={salary}>
                        {salaryRange.map((salary,index)=>{
                            return <option key={index}>{salary}</option>
                        })}
                    </select>
                </div>
                <div className='form-element'>
                    <label>Location</label>
                    <input type='text' placeholder='Location' onChange={changeJobLocation} required={true}></input>
                </div>
                <div className='form-element'>
                    <label style={{fontSize:'26px',marginBottom:'0px'}} required={true}>Company Info</label>
                </div>
                <div className='form-element'>
                    <label>Company Name</label>
                    <input type='text' placeholder='Company Name' onChange={changeCompanyName} required={true}></input>
                </div>
                <div className='form-element'>
                    <label>Company Description</label>
                    <textarea type='text' placeholder="What does your company do?" onChange={changeCompanyDescription} required={true}></textarea>
                </div>
                <div className='form-element'>
                    <label>Contact Email</label>
                    <input type='text' placeholder='Contact Email' onChange={changeContactEmail} required={true}></input>
                </div>
                <div className='form-element'>
                    <label>Contact Phone</label>
                    <input type='text' placeholder='Contact Phone' onChange={changeContactPhone} required={true}></input>
                </div>
                <button className='add-job' type='submit' >Add Job</button>
            </form>
        </div>
    )
}

export default NewJobForm;