import React from 'react';

const Chirp = (props) => {
    return (
         <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Chirp{props.id}</h5>
                <p class="card-text">{props.text}</p>
                </div>
      </div> 
    );
}

export default Chirp;