import ContentSection from "../components/ContentSection";

function Explore() {
  return (
    <>
      <ContentSection
        section={"section-a"}
        title={"Upcoming Launch"}
        text={"CRS-25 Mission"}
      />
      <ContentSection
        section={"section-b"}
        title={"Recent Launch"}
        text={"Starlink Mission"}
      />
      <ContentSection
        section={"section-c"}
        title={"Recent Mission"}
        text={"SES-22 Mission"}
      />
      <ContentSection
        section={"section-d"}
        title={"Recent Launch"}
        text={"Globalstar FM15 Mission"}
      />
      <ContentSection section={"section-e"} text={"Starship Update"} />

      <ContentSection
        section={"section-f"}
        text={"Starship to add NASA astronauts on the moon"}
      />
    </>
  );
}

export default Explore;
