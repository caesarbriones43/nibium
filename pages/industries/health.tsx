import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Group,
  Badge,
  Overlay,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
  TablerIcon,
} from "@tabler/icons";
import { BannerIndustries } from "../../components/BannerIndustries/BannerIndustries";
import Layout from "../../components/layout";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Aplicaciones Médicas",
    description:
      "Desarrollar aplicaciones móviles para pacientes y profesionales de la salud que brinden información sobre enfermedades, recetas médicas, seguimiento de la salud y mucho más.",
  },
  {
    icon: IconUser,
    title: "Software de Registro Electrónico de Salud (EMR)",
    description:
      "Crear un sistema de registro electrónico de salud que permita a los profesionales de la salud almacenar, acceder y compartir información sobre pacientes de manera segura y eficiente.",
  },
  {
    icon: IconCookie,
    title: "Telemedicina",
    description:
      "Desarrollar una plataforma de telemedicina que permita a los pacientes consultar a médicos y especialistas en línea, realizar citas y recibir atención médica remota.",
  },
  {
    icon: IconLock,
    title: "Análisis de Datos en Salud",
    description:
      "Crear un sistema de análisis de datos en salud que utilice la inteligencia artificial para analizar grandes cantidades de información y brindar a los profesionales de la salud información valiosa para mejorar la atención a los pacientes",
  },
  {
    icon: IconMessage2,
    title: "Monitoreo de la Salud Remoto",
    description:
      "Desarrollar dispositivos y aplicaciones para monitorear la salud de los pacientes en sus hogares, lo que permite a los profesionales de la salud tomar decisiones informadas sobre su atención.",
  },
];

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
  hero: {
    position: "relative",
    backgroundImage:
      "url(https://miro.medium.com/max/1400/1*cOXFZ8FLoDkJhIoZAixKjg.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("md")]: {
      height: 300,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  titleHero: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  descriptionHero: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export default function Health({
  title,
  description,
  data = MOCKDATA,
}: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Layout>
 <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.titleHero}>Salud</Title>
        <Text className={classes.descriptionHero} size="xl" mt="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          temporibus consectetur laboriosam tenetur deserunt a accusantium
          tempora maiores! Quam alias dolores obcaecati? Est enim hic sed. Ea
          necessitatibus officiis laboriosam.
        </Text>

      </Container>
    </div>

      <Container className={classes.wrapper}>
        <Group position="center">
          <Badge variant="filled" size="lg">
            Aplicaciones
          </Badge>
        </Group>
        <Title className={classes.title}>{title}</Title>

        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            {description}
          </Text>
        </Container>

        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
