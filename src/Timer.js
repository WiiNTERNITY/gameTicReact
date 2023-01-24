import React from 'react';

const TIMER = 5000;
const DEC = 100;

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
             timer : TIMER
            }
    }
        

   
    render() {
        return (
            
            <div>
            <h1>Timer:{this.state.timer / 1000}</h1>
            <button onClick={() => this.start()}>Start</button>
            <button onClick={() => this.stop()}>Stop</button>
            <button onClick={() => this.reset()}>Reset</button>
          </div>
        );
        }
        
        

    start() {
        this.timer = setInterval(() =>{         
            
            if(this.state.timer <= 0){
                this.stop();
                return;
            }
            this.setState({
                timer: this.state.timer - DEC
            })

        }, DEC)
    }

   
        
    stop(){
        clearInterval(this.timer)
        
    }

    reset(){
        this.stop();
        this.setState({timer: TIMER})
    }
}

export default Timer;