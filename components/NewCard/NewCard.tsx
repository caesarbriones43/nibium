import { Group, Title, Badge } from "@mantine/core";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";

const mockdata = [
  {
    title: "Vite.js or How i became the fastest programmer alive",
    image: "https://i.ytimg.com/vi/RmmT6WGlpNw/maxresdefault.jpg",
    date: "August 18, 2022",
  },
  {
    title: "Vite.js or How i became the fastest programmer alive",
    image: "https://i.ytimg.com/vi/RmmT6WGlpNw/maxresdefault.jpg",
    date: "August 27, 2022",
  },
  {
    title: "Vite.js or How i became the fastest programmer alive",
    image: "https://i.ytimg.com/vi/RmmT6WGlpNw/maxresdefault.jpg",
    date: "September 9, 2022",
  },
  {
    title: "Vite.js or How i became the fastest programmer alive",
    image: "https://i.ytimg.com/vi/RmmT6WGlpNw/maxresdefault.jpg",
    date: "September 12, 2022",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
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
}));

export function NewCard() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container>
      <Container mb={50} mt={50}>
        <Group position="center">
          <Badge variant="filled" size="lg">
            Noticias
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
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
