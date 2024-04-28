import "../components/HeroContent";
import HeroContent from "../components/HeroContent";
import HomeCard from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
    return (
        <>
            <HeroContent />
            <HomeCard />
            <JobListings length={3}/>
            <ViewAllJobs />
        </>
    )
}

export default HomePage;