import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutimg from "../assests/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About (){
    return(
        <>
        <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={aboutimg}
                title="About"
                btnClass="hide"
            />

            <Aboutus/>
            <Footer/>
        </>
    )
}

export default About;