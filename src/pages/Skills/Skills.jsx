import styles from "./style.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import SkillProgress from "../../components/SkillProgress/SkillProgress";

function Skills() {
  return (
    <div className="container padding__main margin__main">
      <SectionTitle>my specialty</SectionTitle>
      <SectionSubtitle>my skills</SectionSubtitle>
      <Paragraph>
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </Paragraph>
      <div className="row gy-4">
        <div className="col-6">
          <SkillProgress percentage="75" color="#2C98F0" title="Photoshop" />
        </div>
        <div className="col-md-6">
          <SkillProgress percentage="60" color="#EC5453" title="jQuery" />
        </div>
        <div className="col-md-6">
          <SkillProgress percentage="85" color="#F9BF3F" title="HTML5" />
        </div>
        <div className="col-md-6">
          <SkillProgress percentage="90" color="#A84CB8" title="CSS3" />
        </div>
        <div className="col-md-6">
          <SkillProgress percentage="70" color="#2FA499" title="WordPress" />
        </div>
        <div className="col-md-6">
          <SkillProgress percentage="80" color="#4054B2" title="SEO" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
