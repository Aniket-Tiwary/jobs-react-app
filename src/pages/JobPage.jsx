import { useParams } from 'react-router-dom';
import JobDetails from "../components/JobDetails";


const JobPage = () => {
    const { id } = useParams();
    return (
        <>
            <JobDetails jobId={id}/>
        </>
    )
}

export default JobPage;