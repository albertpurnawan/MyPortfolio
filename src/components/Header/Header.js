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
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
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
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/albertpurnawan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://www.linkedin.com/in/jonathan-albert-96b192196">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/albert_purnawan">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://web.facebook.com/jonathan.abert.7">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
