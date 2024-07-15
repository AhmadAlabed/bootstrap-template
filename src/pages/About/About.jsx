import styles from "./style.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
function About() {
  return (
    <div className="container padding__main min-vh-100 margin__main">
      <SectionTitle>about us</SectionTitle>
      <SectionSubtitle>WHO AM I?</SectionSubtitle>
      <Paragraph>
        <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy
        warned the Little Blind Text, that where it came from it would have been
        rewritten a thousand times and everything that was left from its origin
        would be the word (and) and the Little Blind Text should turn around and
        return to its own, safe country.
      </Paragraph>
      <Paragraph>
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </Paragraph>
      <div className="row gy-3">
        {/* 1 */}
        <div className="col-lg-3 col-sm-6">
          <ServiceBox
            text="Graphic Design"
            color="#2C98F0"
            icon="fa-regular fa-lightbulb"
          />
        </div>
        {/* 2 */}
        <div className="col-lg-3 col-sm-6">
          <ServiceBox
            text="Web Design"
            color="#ec5453"
            icon="fa-solid fa-earth-africa"
          />
        </div>
        {/* 3 */}
        <div className="col-lg-3 col-sm-6">
          <ServiceBox
            text="Software"
            color="#f9bf3f"
            icon="fa-solid fa-database"
          />
        </div>
        {/* 4 */}
        <div className="col-lg-3 col-sm-6">
          <ServiceBox
            text="Application"
            color="#a84cb8"
            icon="fa-solid fa-mobile-screen-button"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
