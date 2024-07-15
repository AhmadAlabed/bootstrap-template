import styles from "./style.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import ExperienceBox from "../../components/ExperienceBox/ExperienceBox";

function Experience() {
  return (
    <div className="container padding__main margin__main">
      <SectionTitle>Experience</SectionTitle>
      <SectionSubtitle>work Experience</SectionSubtitle>
      <ul className=" list-unstyled">
        <li>
          <ExperienceBox
            title="full stack developer"
            text="Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."
            date="2017-2018"
            color="#2C98F0"
            icon="fa-solid fa-pencil"
          />
        </li>
        <li>
          <ExperienceBox
            title="Front End Developer at Google Company"
            text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            date="2017-2018"
            color="#D9534F"
            icon="fa-solid fa-pencil"
          />
        </li>
        <li>
          <ExperienceBox
            title="System Analyst"
            text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            date="2017-2018"
            color="#F0AD4E"
            icon="fa-solid fa-pencil"
          />
        </li>
      </ul>
    </div>
  );
}

export default Experience;
