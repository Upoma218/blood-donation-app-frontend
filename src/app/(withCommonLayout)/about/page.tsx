/* eslint-disable react/no-unescaped-entities */
import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import ContactUs from "@/components/UI/HomePage/AboutUs/ContactUs";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TeamInformation from "@/components/UI/HomePage/TeamInformation/TeamInformation";

const AboutUsPage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <TeamInformation></TeamInformation>
      <ContactUs></ContactUs>
    </div>
  );
};

export default AboutUsPage;
