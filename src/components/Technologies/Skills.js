import {
  DiTerminal,
  DiNodejs,
  DiCode,
  DiCss3,
  DiReact,
  DiDatabase,
  DiHeroku,
  DiGithub,
  DiJava,
} from "react-icons/di";
import { SiGit } from "react-icons/si";

export const Skills = [
  {
    slug: "website",
    Component: DiCode,
    title: "Website",
    Description: () => (
      <>I recently make project using Next js, React js, Node js</>
    ),
  },
  {
    slug: "styling",
    Component: DiCss3,
    title: "Styling",
    Description: () => (
      <>
        Currently working with Tailwind css, Bootsrap, CSS for styling the
        website.{" "}
      </>
    ),
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React js & Next js",
    Description: () => (
      <>
        I can code in pure HTML. But I mainly use it for helping me make website
        a lot easier and faster.
      </>
    ),
  },
  {
    slug: "node",
    Component: DiNodejs,
    title: "Node js",
    Description: () => (
      <>I have been using node js a lot for connecting to the database.</>
    ),
  },
  {
    slug: "database",
    Component: DiDatabase,
    title: "Database",
    Description: () => (
      <>I have used PostgreSQL and MySQL for database in my website.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>
        Git is a tool that I use every day. I use GitHub for running, pushing,
        instaling package and many other command that i would use to my code.
      </>
    ),
  },
  {
    slug: "heroku",
    Component: DiHeroku,
    title: "Heroku",
    Description: () => <>I recently using Heroku for deploying my project.</>,
  },
  {
    slug: "github",
    Component: DiGithub,
    title: "Github",
    Description: () => <>I usually using Github for store my project.</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => (
      <>
        I recently using Java with Framework Spring Boot for developing website
        at Mayora
      </>
    ),
  },
];
