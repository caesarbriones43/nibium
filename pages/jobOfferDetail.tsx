import React from "react";
import Layout from "../components/layout";
import { JobOfferCard } from "../components/JobOffer/JobOfferCard";
import { Text, createStyles, Container } from "@mantine/core";
import { DropzoneButton } from "../components/DropZone/DropzoneButton";
import { JobOfferForm } from '../components/JobOfferForm/JobOfferForm';
import {
  SimpleGrid,
  useMantineTheme,
  Group,
  Badge,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

function jobOfferDetail() {
  const { classes, theme } = useStyles();

  return (
    <>
      <Layout>
        <JobOfferForm/>
        {/* <DropzoneButton /> */}
      </Layout>
    </>
  );
}

export default jobOfferDetail;
