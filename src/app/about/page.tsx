import { Metadata } from "next";
import Header from "../_components/header";
import Container from "@/app/_components/container";

const pageTitle = "このサイトについて";

export default function About() {

  return (
      <Container>
        <Header />
        <h1>{pageTitle}</h1>
        <p>
        <a href="https://twitter.com/atepoyo">atepoyo</a>
        が日記や気になったトピックについて書くサイトです。
      </p>

      </Container>
  )

}