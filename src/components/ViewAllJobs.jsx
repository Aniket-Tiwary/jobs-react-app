import '../css/ViewAllJobs.css';
import { Link } from 'react-router-dom';

const redirectToJobsPage = () => {
    window.location.href = "/jobs";
}

const ViewAllJobs = () => {
    return (
        <div className='view-jobs'>
            <Link to='/jobs' className='view-all-jobs-link' onClick={redirectToJobsPage}>View All Jobs</Link>
        </div>
    );
}

export default ViewAllJobs;