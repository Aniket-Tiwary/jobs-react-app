import '../css/HomeCard.css';
import Card from "./Card";

const HomeCard = () => {
    const cardsInfo = [
        {
            "title":"For Developers",
            "subtitle":"Browse our React jobs and start your career today",
            "buttonText":"Browse Jobs",
            "bg":"#F3F4F6",
            "buttonBg":"black"
        },
        {
            "title":"For Employers",
            "subtitle":"List your job to find the perfect developer for the role",
            "buttonText":"Add Job",
            "bg":"#DFE7FF",
            "buttonBg":"#6366F1"
        }
    ];
    return(
        <div className="home-card">
            {cardsInfo.map((card,index) => {
                return (<Card cardInfo={card} key={index}/>)
            })}
        </div>
    )
}

export default HomeCard;