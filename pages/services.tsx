import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import Layout from "../components/layout";
import image from "./image.png";

const mockdata = [
  {
    title: "Gestión de Producto",
    color: "violet",
    page: "/services#anchor-name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: false,
  },
  {
    title: "Análisis de Datos",
    color: "indigo",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: true,
  },
  {
    title: "Modernización de Aplicaciones",
    color: "blue",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: false,
  },
  {
    title: "Arquitectura Cloud y Migraciones",
    color: "green",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: true,
  },

  {
    title: "Automatización",
    color: "teal",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: false,
  },

  {
    title: "Diseño UI & UX",
    color: "cyan",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: true,
  },
  {
    title: "Ingeniería de Software & DevOps",
    color: "grape",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: false,
  },
  {
    title: "Aplicaciones Móviles",
    color: "yellow",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: true,
  },
  {
    title: "Integraciones",
    color: "lime",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: false,
  },
  {
    title: "Consultorias",
    color: "orange",
    page: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique distinctio repudiandae autem quidem at, incidunt sed hic et temporibus recusandae atque quod necessitatibus aliquam eos, voluptate ipsa sequi officiis.",
    isRight: true,
  },
];

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 30,
    paddingBottom: 0,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function Services() {
  const { classes } = useStyles();

  const items = mockdata.map((item) => (
    <div className={classes.root} id="">
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        {item.isRight && (
          <Image src={image.src} className={classes.desktopImage} />
        )}
        <div>
          <Title className={classes.title}>{item.title}</Title>
          <Text color="dimmed" size="lg">
            {item.description}
            {item.description}
          </Text>
        </div>
        <Image src={image.src} className={classes.mobileImage} />
        {!item.isRight && (
          <Image src={image.src} className={classes.desktopImage} />
        )}
      </SimpleGrid>
    </div>
  ));

  return (
    <Layout>
      <Container className={classes.root}>{items}</Container>
    </Layout>
  );
}
