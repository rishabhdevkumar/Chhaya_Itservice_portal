import Hero from "../sections/Hero"
import AboutSection from "../sections/AboutSection"
// import ServicesSection from "../sections/ServicesSection"
// import ContactSection from "../sections/ContactSection"
// import WhyChooseUs from "../sections/WhyChooseUs"
// import IndustriesSection from "../sections/IndustriesSection"
import Strength from "../sections/Strength"
import Feedback from "../sections/FeedBack"
import ClientSection from "../sections/ClientsSection"



export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      {/* <WhyChooseUs/> */}
      {/* <IndustriesSection/> */}
      <Strength/>
      <Feedback />
      <ClientSection/>
    </>
  )
}
