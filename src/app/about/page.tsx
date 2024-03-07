import { Metadata } from "next";
import Header from "../_components/header";
import Container from "@/app/_components/container";

const pageTitle = "このサイトについて";

export default function About() {

  return (
      <Container>
        <Header />
        <h1>{pageTitle}</h1>

      </Container>
  )

}