import React from 'react';
import Chirp from './Chirp';

const Timeline = (props) => {
    return (
        <div>
            {props.chrips.map((chirp) => {
                return <Chirp
                            key={chirp.id}
                            text={chirp.text}
                        />
            })}
        </div>
    );
}
            
export default Timeline;