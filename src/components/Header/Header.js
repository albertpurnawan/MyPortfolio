import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}>

        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Jonathan
        </span>
        <span style={{ marginLeft: 5, marginTop: 7, fontSize: 20 }}>
          Albert
        </span>
        <span
          style={{
            marginLeft: 5,
            marginTop: 7,
            fontSize: 20,
            marginRight: 200,
          }}
        >
          Purnawan
        </span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/albertpurnawan" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="http://www.linkedin.com/in/jonathan-albert-96b192196"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/albert_purnawan"
        target="_blank"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://web.facebook.com/jonathan.abert.7"
        target="_blank"
      >
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
