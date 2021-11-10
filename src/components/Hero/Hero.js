import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there,
        </SectionTitle>
        <SectionText>
          Hello there, My name is Jonathan Albert Purnawan. I am an student of
          Computer Science at Bina Nusantara.
        </SectionText>

        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("/files/resume.pdf", "_blank");
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
