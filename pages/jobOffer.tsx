import React from "react";
import Layout from "../components/layout";
import { JobOfferCard } from "../components/JobOffer/JobOfferCard";
import { Text, createStyles, Container } from "@mantine/core";
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

function jobOffer() {
  const { classes, theme } = useStyles();

  return (
    <>
      <Layout>
        <Container mb={50} mt={20}>
          <Group position="center">
            <Badge variant="filled" size="lg">
              Ofertas de trabajo
            </Badge>
          </Group>

          <Title order={2} className={classes.title} align="center" mt="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Title>

          <Text
            color="dimmed"
            className={classes.description}
            align="center"
            mt="md"
          >
            Nam dapibus, dui a volutpat rhoncus, nulla ante pellentesque orci,
            euismod blandit sem leo non nulla.
          </Text>
        </Container>
        <Container>
          
        </Container>
        <SimpleGrid
          mt={0}
          mx={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <JobOfferCard
            image={
              "https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png"
            }
            title={"Flutter Developer"}
            country={"Remoto"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna magna, fermentum quis porttitor non, iaculis vitae turpis. Etiam nisi lacus, consequat id dolor sit amet, pulvinar mollis dui. Sed elementum a diam sit amet fringilla. Cras eget rhoncus erat, non eleifend metus. Nulla pretium justo sed ipsum blandit, sed blandit elit feugiat. Vestibulum pulvinar nunc in tortor rutrum, sit amet malesuada lorem tincidunt. Praesent consequat tincidunt nisl a mattis"
            }
            badges={[
              {
                emoji: "⚛️",
                label: "React",
              },
            ]}
          />
          <JobOfferCard
            image={
              "https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png"
            }
            title={"Flutter Developer"}
            country={"Remoto"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna magna, fermentum quis porttitor non, iaculis vitae turpis. Etiam nisi lacus, consequat id dolor sit amet, pulvinar mollis dui. Sed elementum a diam sit amet fringilla. Cras eget rhoncus erat, non eleifend metus. Nulla pretium justo sed ipsum blandit, sed blandit elit feugiat. Vestibulum pulvinar nunc in tortor rutrum, sit amet malesuada lorem tincidunt. Praesent consequat tincidunt nisl a mattis"
            }
            badges={[
              {
                emoji: "⚛️",
                label: "React",
              },
            ]}
          />
          <JobOfferCard
            image={
              "https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png"
            }
            title={"Flutter Developer"}
            country={"Remoto"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna magna, fermentum quis porttitor non, iaculis vitae turpis. Etiam nisi lacus, consequat id dolor sit amet, pulvinar mollis dui. Sed elementum a diam sit amet fringilla. Cras eget rhoncus erat, non eleifend metus. Nulla pretium justo sed ipsum blandit, sed blandit elit feugiat. Vestibulum pulvinar nunc in tortor rutrum, sit amet malesuada lorem tincidunt. Praesent consequat tincidunt nisl a mattis"
            }
            badges={[
              {
                emoji: "⚛️",
                label: "React",
              },
            ]}
          />
          <JobOfferCard
            image={
              "https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png"
            }
            title={"Flutter Developer"}
            country={"Remoto"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna magna, fermentum quis porttitor non, iaculis vitae turpis. Etiam nisi lacus, consequat id dolor sit amet, pulvinar mollis dui. Sed elementum a diam sit amet fringilla. Cras eget rhoncus erat, non eleifend metus. Nulla pretium justo sed ipsum blandit, sed blandit elit feugiat. Vestibulum pulvinar nunc in tortor rutrum, sit amet malesuada lorem tincidunt. Praesent consequat tincidunt nisl a mattis"
            }
            badges={[
              {
                emoji: "⚛️",
                label: "React",
              },
            ]}
          />
        </SimpleGrid>
      </Layout>
    </>
  );
}

export default jobOffer;
