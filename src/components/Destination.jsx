import Mountain1 from "../assests/1.jpg";
import Mountain2 from "../assests/2.jpg";
import Mountain3 from "../assests/5.jpg";
import Mountain4 from "../assests/8.jpg";
import "./Destination";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return(
        <div className="detsination">
            <h1>Popular Destinations</h1>
            <p> Tours give you the opportunity to see a lot within a time frame </p>

            <DestinationData
            className="first-des"

            heading="Taal Volcano, Batangas"

            text="Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est numquam explicabo 
                        voluptates asperiores tenetur doloremque 
                        perferendis porro officiis distinctio aliquam 
                        aperiam, debitis ratione praesentium rerum 
                        optio nisi laborum similique placeat assumenda. 
                        Sunt in ipsa cumque ab laborum molestias delectus 
                        vero. Aliquid possimus id excepturi iure nobis 
                        alias modi consequatur quae!"

                    
            img1={Mountain1}
            img2={Mountain2}
        
            />

            <DestinationData
            className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"

                text="Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est numquam explicabo 
                        voluptates asperiores tenetur doloremque 
                        perferendis porro officiis distinctio aliquam 
                        aperiam, debitis ratione praesentium rerum 
                        optio nisi laborum similique placeat assumenda. 
                        Sunt in ipsa cumque ab laborum molestias delectus 
                        vero. Aliquid possimus id excepturi iure nobis 
                        alias modi consequatur quae!"

                    
                img1={Mountain3}
                img2={Mountain4}
        
            />

        </div>
    )
}

export default Destination;