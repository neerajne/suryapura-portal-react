import MyNavbar from "./Frontend/MyNavbar";
import "./App.css";
import HeroSection from "./Frontend/HeroSection";
import DevelopmentWorks from "./Frontend/featureSections/DevelopmentWorks";
import Educationcard from "./Frontend/featureSections/Educationcard";
import Farmers from "./Frontend/featureSections/Farmers";
import RoadandConstruction from "./Frontend/featureSections/RoadandConstruction";
import Panchayat from "./Frontend/featureSections/Panchayat";
import DigitalIdentity from "./Frontend/featureSections/DigitalIdentity";
import FarmerPost from "./Frontend/socialMediaPosts/FarmerPost";
import EducationPost from "./Frontend/socialMediaPosts/EducationPost";
import Herobottom from "./Frontend/heroBottom/Herobottom";
import DevelopmentPost from "./Frontend/socialMediaPosts/DevelopmentPost";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HeroSection />

      <div className="cards-row">
        <DevelopmentWorks />
        <Educationcard />
        <Farmers />
        <RoadandConstruction />
        <Panchayat />
        <DigitalIdentity />
      </div>

      <Herobottom />

      <div className="social-posts-container">
        <FarmerPost />
        <EducationPost />
        <DevelopmentPost/>
      </div>
    </div>
  );
}

export default App;
