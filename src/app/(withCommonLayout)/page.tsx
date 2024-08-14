import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import ContactUs from "@/components/UI/HomePage/AboutUs/ContactUs";
import CovarageArea from "@/components/UI/HomePage/CovarageArea/CovarageArea";
import DonationTips from "@/components/UI/HomePage/DonationTips/DonationTips";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchDonar from "@/components/UI/HomePage/SearchDonar/SearchDonar";
import SuccessStories from "@/components/UI/HomePage/SuccessStories/SuccessStories";
import TeamInformation from "@/components/UI/HomePage/TeamInformation/TeamInformation";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <TeamInformation></TeamInformation>
      <SearchDonar></SearchDonar>
      <DonationTips></DonationTips>
      <SuccessStories></SuccessStories>
      <ContactUs></ContactUs>
      <CovarageArea></CovarageArea>
    </>
  );
};

export default HomePage;
