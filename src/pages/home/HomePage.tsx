import SectionInputColor from "../../layouts/section-input-color";
import SectionPalettes from "../../layouts/section-palettes";
import SectionSavePalette from "../../layouts/section-save-palette";
import Header from "../../layouts/header";
import { ButtonGoUp } from "../..";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionInputColor />
        <SectionSavePalette />
        <SectionPalettes />
        <ButtonGoUp />
      </main>
    </>
  );
};

export default HomePage;
