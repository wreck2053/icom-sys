import Awards from "./Awards";
import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";

// have to add styles instead of <br />

function AboutPage() {
  return (
    <>
      <br />
      <Awards height={800} />
      <br />
      <br />
      <br />
      <CompanyInfo />
      <br />
      <br />
      <br />
      <PersonalInfo />
      <br />
      <br />
      <br />
    </>
  );
}

export default AboutPage;
