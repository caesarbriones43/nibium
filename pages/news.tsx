import { Welcome } from "../components/Welcome/Welcome";
import { Industries } from "../components/Industries/Industries";
import { OurServices } from "../components/OurServices/OurServices";
import Layout from "../components/layout";
import { JobOffer } from "../components/JobOffer/JobOffer";
import { Banner } from "../components/Banner/Banner";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { NewCard } from "../components/NewCard/NewCard";
import { CarouselsNews } from "../components/CarouselsNews/CarouselsNews";
import { Container } from "@mantine/core";
import PaginationPost from "../components/Pagination/Pagination";

export default function News() {
  return (
    <>
      <Layout>
        <Container size="xl">
          <CarouselsNews />
        </Container>
        <NewCard />
        <Container>

        <PaginationPost />
        </Container>
      </Layout>
    </>
  );
}
