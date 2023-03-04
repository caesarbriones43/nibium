import { Welcome } from "../components/Welcome/Welcome";
import { Industries } from "../components/Industries/Industries";
import { OurServices } from "../components/OurServices/OurServices";
import Layout from "../components/layout";
import { JobOffer } from "../components/JobOffer/JobOffer";
import { Banner } from '../components/Banner/Banner';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Welcome />
        <Industries />
        <Banner/>
        <OurServices />
        <JobOffer />
      </Layout>

      {/* <ColorSchemeToggle /> */}
    </>
  );
}
