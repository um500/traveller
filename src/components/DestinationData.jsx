import "./DestinationStyles.css";
// import Mountain1 from "../assests/1.jpg";
// import Mountain2 from "../assests/2.jpg";
// import Mountain3 from "../assests/3.jpg";
// import Mountain4 from "../assests/4.jpg";

import "./Destination";
import { Component } from "react";

class DestinationData extends Component{
    render(){
        return(

            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="" src={this.props.img1}/>
                    <img alt="" src={this.props.img2}/>
                </div>
            

            </div>

        )
    }
}

export default DestinationData;