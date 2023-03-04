import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  UnstyledButton,
} from "@mantine/core";
import {
  IconCashBanknote,
  IconTool,
  IconShoppingCart,
  IconAmbulance,
  IconKeyboard,
} from "@tabler/icons";
import Link from "next/link";

const mockdata = [
  {
    title: "Salud",
    description:
      "Hace uso de software para mejorar la eficiencia, precisión y calidad de la atención médica. Esta industria incluye una amplia gama de aplicaciones de software y servicios, desde sistemas de información de pacientes hasta software de análisis de datos médicos y soluciones de telemedicina.",
    icon: IconAmbulance,
    route: "/industries/health",
  },
  {
    title: "Retail",
    description:
      "El sector retail-eCommerce es un área en constante evolución y crecimiento, lo que lo convierte en una de las áreas más atractivas para el desarrollo de software. El desarrollo de software en el retail-eCommerce puede incluir una amplia gama de soluciones, desde la creación de sitios web de eCommerce hasta aplicaciones móviles, software de gestión de inventario y sistemas de pago en línea. ",
    icon: IconShoppingCart,
    route: "/industries/retail",
  },
  {
    title: "Finanzas",
    description:
      "Las finanzas son una parte importante del desarrollo de software, ya que el proceso de desarrollo de software a menudo requiere una cantidad significativa de recursos financieros.",
    icon: IconCashBanknote,
    route: "/industries/finance",
  },
  {
    title: "Manufactura",
    description:
      "En el sector de manufactura, una empresa de desarrollo de software podría ofrecer soluciones tecnológicas para mejorar la eficiencia y productividad en la producción.      ",
    icon: IconTool,
    route: "/industries/manufacture",
  },
  {
    title: "Logística y Transporte",
    description:
      "La industria de logística y transporte se encuentra en un constante cambio y evolución debido a las demandas de la economía global y la necesidad de una entrega más rápida y eficiente. La tecnología juega un papel importante en este sector y hay muchas oportunidades para la innovación en términos de eficiencia y reducción de costos.",
    icon: IconShoppingCart,
    route: "/industries/logistics",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Estos servicios abarcan diferentes fases del ciclo de vida del software, desde la planificación y el análisis de requisitos, hasta la implementación y pruebas de la aplicación, así como el mantenimiento y la actualización de la misma.",
    icon: IconKeyboard,
    route: "/industries/health",
  },
];

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
    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
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

export function Industries() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Link href={feature.route} key={feature.route}>
      <Card
        key={feature.title}
        shadow="md"
        radius="md"
        className={classes.card}
        p="xl"
      >
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    </Link>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Industrias
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        ¡Conoce los servicios que brindamos a las industrias en el sector!
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Las industrias en el desarrollo de software abarcan diferentes sectores
        de negocios y áreas de aplicación en las que se utilizan soluciones de
        software
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
