import "./TripStyles.css";
import trip1 from "../assests/5.jpg";
import trip2 from "../assests/8.jpg";
import trip3 from "../assests/6.jpg";

import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent trip</h1>
            <p>you can dicover unique destination google Maps</p>
        
        <div className="tripcard">
            <TripData 
            image={trip1}
            heading="Trip in Indonesia"
            text="Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est numquam explicabo 
                        voluptates asperiores tenetur doloremque 
                        perferendis porro officiis distinctio aliquam 
                        aperiam, debitis ratione praesentium rerum 
                        optio nisi laborum similique placeat assumenda. 
                        Sunt in ipsa cumque ab laborum molestias delectus 
                        vero. Aliquid possimus id excepturi iure nobis 
                        alias modi consequatur quae!"
            />


<TripData 
            image={trip2}
            heading="Trip in Malaysia"
            text="Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est numquam explicabo 
                        voluptates asperiores tenetur doloremque 
                        perferendis porro officiis distinctio aliquam 
                        aperiam, debitis ratione praesentium rerum 
                        optio nisi laborum similique placeat assumenda. 
                        Sunt in ipsa cumque ab laborum molestias delectus 
                        vero. Aliquid possimus id excepturi iure nobis 
                        alias modi consequatur quae!"
            />


<TripData 
            image={trip3}
            heading="Trip in France"
            text="Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est numquam explicabo 
                        voluptates asperiores tenetur doloremque 
                        perferendis porro officiis distinctio aliquam 
                        aperiam, debitis ratione praesentium rerum 
                        optio nisi laborum similique placeat assumenda. 
                        Sunt in ipsa cumque ab laborum molestias delectus 
                        vero. Aliquid possimus id excepturi iure nobis 
                        alias modi consequatur quae!"
            />
        </div>
        
        </div>
    )
}

export default Trip;