import '../css/JobDetailsCard.css';

const JobDetailsCard = ({job}) => {
    return (
        <div className="job-details">
            <div className="job-info">
                <div className="job-heading">
                    <div>{job.type}</div>
                    <div>{job.title}</div>
                    <div>{job.location}</div>
                </div>
                <div className="job-info">
                    <div>Job Description</div>
                    <div>{job.description}</div>
                    <div>Salary</div>
                    <div>{job.salary} / Year</div>
                </div>
            </div>
        </div>
    )

}

export default JobDetailsCard;