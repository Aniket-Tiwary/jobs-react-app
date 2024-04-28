import '../css/HeroContent.css'; 

const HeroContent = () => {
    const title = "Become a React Dev";
    const subtitle = "Find the React job that fits your skills and needs";

    return (
        <div className="hero-content">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    )
}

export default HeroContent;