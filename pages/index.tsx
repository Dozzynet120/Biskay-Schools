import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import Club from "../components/Club";
import Parent from "../components/Parent";
import Admission from "../components/Admission";
import Enroll from "../components/Enroll";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Programs />
      <Gallery />
      <Club />
      <Parent />
      <Admission />
      <Enroll />
      <Achievements />
      <Footer />
    </>
  );
}
