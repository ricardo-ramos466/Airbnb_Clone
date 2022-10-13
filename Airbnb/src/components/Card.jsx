import React from "react";
import './card.css'

function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`images/${props.coverImg}`} alt="Card image" className= "card-image"/>
            <div className="card-info">
                <img src="images/star.png" alt="Star"  className="card-star"/>
                <span className="card-rating">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="price">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Card