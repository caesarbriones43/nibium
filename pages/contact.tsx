import React from "react";
import { MainFooter } from "../components/MainFooter/MainFooter";
// import Layout from '../components/layout';
// import { ContactForm } from '../components/ContactForm/ContactForm';
import { FaqWithImage } from "../components/FaqWhitImage/FaqWhitImage";
import { ContactForm } from "../components/ContactForm/ContactForm";

import { MainHeader } from "../components/MainHeader/MainHeader";
import Layout from "../components/layout";

function faq() {
  return (
    <>
      <Layout>
        <FaqWithImage />
        <ContactForm />
      </Layout>
    </>
  );
}

export default faq;
