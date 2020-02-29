import React from "react";

const SearchCard = (prop) => (

    <div className="card flex-row flex-wrap">
        
        <div className="card-body">
            <div className = "card-header border-0">
                <img src = {prop.image} alt="" />
            </div>
            <div className = "card-block px-2">
                <h5 className="card-title">{prop.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{prop.author}</h6>
                <p className="card-text">{prop.description}</p>
               

            </div>
            
        </div>
    </div>

);


  export default SearchCard