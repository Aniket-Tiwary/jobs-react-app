import axios from 'axios';

const serverUrl = "http://localhost:8080/jobs";

const getAllJobs = async () => {
    try{
        const jobs = await axios.get(serverUrl);
        return jobs.data;
    }catch(err){
        console.log(err);
    }
}

const addNewJob = async (job) => {
    try{
        const newJob = await axios.post(serverUrl,job)
        console.log(newJob);
    }catch(err){
        console.log(err);
    }
}

const getJobById = async (jobId) => {
    try{
        const job = await axios.get(`${serverUrl}/${jobId}`);
        console.log("Job fetched:", job);
        return job.data;
    }catch(err){
        console.log(err);
    }
}


export {getAllJobs,addNewJob,getJobById};