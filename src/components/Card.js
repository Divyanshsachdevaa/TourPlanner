import React, {useState} from "react";

function Card({id, name, info, image, price, removecard}){
    
    const[readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="img"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="price">₹ {price}</h4>
                    <h4 className="name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readHandler}>
                        {readmore ? `Read less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => {removecard(id)}}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;