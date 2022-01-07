import MainPage from "./MainPage";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import SupportedBy from "./SupportedBy";
import Prizes from "./Prizes";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Mentors from "./Mentors";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      {/* Header */}
      <Header />

      {/* Main Page */}
      <MainPage />

      {/* About HackFIT */}
      <About />

      {/* Support */}
      <SupportedBy />

      {/* Contact */}
      <Prizes />

      {/* Footer */}
      <Speakers />

      {/* Footer */}
      <Schedule />

      {/* Footer */}
      <Mentors />

      {/* Footer */}
      <Sponsors />

      {/* Footer */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
