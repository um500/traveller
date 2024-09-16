import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceimg from "../assests/3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={serviceimg}
                title="Service"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;