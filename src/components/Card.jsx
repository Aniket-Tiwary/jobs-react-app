import '../css/Card.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

const Card = ({cardInfo}) => {
    const [redirectLink,setRedirectLink] = useState('/add-job');

    useEffect(() => {
        if(cardInfo.title === "For Developers"){
            setRedirectLink('/jobs');
        }
    },[]);

    return (
        <div className="card" style={{backgroundColor:`${cardInfo.bg}`}}> 
            <h1>{cardInfo.title}</h1>
            <p>{cardInfo.subtitle}</p>
            <Link className='card-link' style={{backgroundColor:`${cardInfo.buttonBg}`}} to={redirectLink}>{cardInfo.buttonText}</Link>
        </div>
    )
}

export default Card;