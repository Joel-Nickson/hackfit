import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import PersonalProjects from "./PersonalProjects";
import StuffIDo from "./StuffIDo";
import ScrollToTop from "../components/ScrollToTop";
import Sidenav from "./sidenav";

export default function Home() {
  return (
    <div className="font-nautigal">
      <ScrollToTop />
      {/* Header */}
      {/* <Header /> */}
      <Sidenav />

      {/* About */}
      <About />

      {/* Stuff I Do */}
      <StuffIDo />

      {/* Personal Projects */}
      <PersonalProjects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
