import SectionInputColor from "../../layouts/section-input-color";
import SectionPalettes from "../../layouts/section-palettes";
import Header from "../../layouts/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionInputColor />
        <SectionPalettes />
      </main>
    </>
  );
};

export default HomePage;
