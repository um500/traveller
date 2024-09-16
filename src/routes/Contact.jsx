import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactimg from "../assests/2.jpg"
import Footer from "../components/Footer"; 
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={contactimg}
                title="Contact Us"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;