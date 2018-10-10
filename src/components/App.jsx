import React from 'react';
import Timeline from './Timeline';



class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            chirps: [
                {
                    id: 1,
                    text: "blah"
                },
                {
                    id: 2, 
                    text: "bleh"
                },
                {
                    id: 3,
                    text: "fml"
                },

            ],
        };
    }
    render(){
        return <Timeline chirps={this.state.chirps}/>
    }
}

export default App;