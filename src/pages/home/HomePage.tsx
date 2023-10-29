import SectionInputColor from "../../layouts/section-input-color";
import SectionPalettes from "../../layouts/section-palettes";
import Header from "../../layouts/header";
import { ButtonGoUp } from "../..";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionInputColor />
        <SectionPalettes />
        <ButtonGoUp />
      </main>
    </>
  );
};

export default HomePage;
