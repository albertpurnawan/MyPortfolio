import {
  Body,
  Face,
  Band,
  Red,
  White,
  Blue,
  Eyes,
  Dimples,
  Mouth,
  H1,
  Button,
  H2,
} from "./ErrorStyles.js";
import Link from "next/link";

function Error() {
  return (
    <Body>
      <Face>
        <Band>
          <Red></Red>
          <White></White>
          <Blue></Blue>
        </Band>
        <Eyes></Eyes>
        <Dimples></Dimples>
        <Mouth></Mouth>
      </Face>

      <H1>Oops! You dont have access to load this page!</H1>
      <H2>Only the client can access this page</H2>
      <br />
      <br />
      <br />
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
      <br />
      <br />
      <br />
    </Body>
  );
}

export default Error;
