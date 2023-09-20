import {
  DiNodejs,
  DiCss3,
  DiReact,
  DiDatabase,
  DiJava,
  DiDart,
  DiPhp,
} from "react-icons/di";
import { SiGit } from "react-icons/si";

export const Skills = [
  // {
  //   slug: "website",
  //   Component: DiCode,
  //   title: "Website",
  //   Description: () => (
  //     <>I recently make project using Next js, React js, Node js</>
  //   ),
  // },
  {
    slug: "styling",
    Component: DiCss3,
    title: "Styling",
    Description: () => (
      <>
        I like to use Tailwind CSS, Bootsrap, CSS for styling web-based application.
      </>
    ),
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React js & Next js",
    Description: () => (
      <>
        I use React JS and Next JS for developing a web-based application.
      </>
    ),
  },
  {
    slug: "node",
    Component: DiNodejs,
    title: "Node js",
    Description: () => (
      <>I use Node JS for integrate application with data from Database or API.</>
    ),
  },
  {
    slug: "database",
    Component: DiDatabase,
    title: "Database",
    Description: () => (
      <>I use PostgreSQL and MySQL for database.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>
       I use Git Command for run, push, install package and many other command that i would use to my code.
      </>
    ),
  },
    {
    slug: "php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>I use PHP for my university project.</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => (
      <>
        I use Java with Framework Spring Boot for developing website at Mayora and developing mobile app with Framework Kotlin.
      </>
    ),
  },
    {
    slug: "dart",
    Component: DiDart,
    title: "Dart",
    Description: () => (
      <>
        I use Dart with Framework Flutter for developing my Thesis project and mobile app
      </>
    ),
  },
];
