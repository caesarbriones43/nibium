import { Title } from "@mantine/core";
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  Container,
  Badge,
} from "@mantine/core";
import {
  IconChevronDown,
  IconCar,
  IconCashBanknote,
  IconTool,
  IconKeyboard,
  IconShoppingCart,
  IconDatabase,
  IconCloudComputing,
  IconCreditCard,
  IconRobot,
  IconApps,
  IconUsers,
  IconCode,
  IconGitBranch,
  IconAmbulance,
  IconBrandDocker,
  IconPencil,
} from "@tabler/icons";

import Link from "next/link";

const mockdata = [
  {
    title: "Gestión de Producto",
    icon: IconCreditCard,
    color: "violet",
    page: "/services",
    // page: "/services#anchor-name",
  },
  {
    title: "Análisis de Datos",
    icon: IconDatabase,
    color: "indigo",
    page: "/services",
  },
  {
    title: "Modernización de Aplicaciones",
    icon: IconGitBranch,
    color: "blue",
    page: "/services",
  },
  {
    title: "Arquitectura Cloud y Migraciones",
    icon: IconCloudComputing,
    color: "green",
    page: "/services",
  },
  {
    title: "Automatización",
    icon: IconRobot,
    color: "teal",
    page: "/services",
  },
  {
    title: "Diseño UI & UX",
    icon: IconPencil,
    color: "cyan",
    page: "/services",
  },
  {
    title: "Ingeniería de Software & DevOps",
    icon: IconBrandDocker,
    color: "grape",
    page: "/services",
  },
  {
    title: "Aplicaciones Móviles",
    icon: IconApps,
    color: "yellow",
    page: "/services",
  },
  {
    title: "Integraciones",
    icon: IconCode,
    color: "lime",
    page: "/services",
  },
  {
    title: "Consultorias",
    icon: IconUsers,
    color: "orange",
    page: "/services",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  titleMain: {
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

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export function OurServices() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <Link href={item.page} key={item.color}>
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Servicios
        </Badge>
      </Group>
      <Title order={2} className={classes.titleMain} align="center" mt="sm">
        Somos tu equipo de expertos desarrolladores de aplicaciones, Esto es lo
        que hacemos
      </Title>
      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Mauris sagittis justo non velit iaculis vehicula. Nullam ut semper eros,
        ac placerat tortor. Pellentesque vel iaculis mauris. Morbi mattis odio
        ac felis pulvinar, id interdum mi malesuada
      </Text>
      <Container size="lg" py="xl">
        <Card withBorder radius="md" className={classes.card}>
          <SimpleGrid cols={4} mt="md">
            {items}
          </SimpleGrid>
        </Card>
      </Container>
    </Container>
  );
}
