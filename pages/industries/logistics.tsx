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
    title: "Sistemas de Seguimiento de Envío",
    description:
      "Una herramienta que permita a los usuarios monitorear el progreso de sus envíos en tiempo real y recibir actualizaciones automáticas.",
  },
  {
    icon: IconCookie,
    title: "Optimización de Rutas",
    description:
      "Un sistema que use inteligencia artificial y aprendizaje automático para identificar la ruta más eficiente y económica para un envío específico.",
  },
  {
    icon: IconLock,
    title: "Planificación de Capacidad de Carga",
    description:
      "Un sistema que ayude a las compañías de transporte a planificar sus cargas y camiones de manera eficiente para asegurar la máxima utilización del espacio y la eficiencia en la entrega.",
  },
  {
    icon: IconMessage2,
    title: "Análisis de Costos de Envío",
    description:
      " Una herramienta que permita a los usuarios comparar diferentes opciones de envío y calcular el costo más económico para su envío específico.",
  },
  {
    icon: IconMessage2,
    title: "Monitoreo de Flotas",
    description:
      "Un sistema que permita a las compañías de transporte monitorear y gestionar su flota de camiones en tiempo real, incluyendo la ubicación, el estado y la eficiencia de los vehículos.",
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
      "url(https://dc-mkt-prod.cloud.bosch.tech/xrm/media/global/industries_1/logistics_and_transport/stage-logistics-and-transport-industry_960x432.jpg)",
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

export default function LogisticsAndTransportation({
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
          <Title className={classes.titleHero}>Logística y Transporte</Title>
          <Text className={classes.descriptionHero} size="xl" mt="xl">
            La industria de logística y transporte se encuentra en un constante
            cambio y evolución debido a las demandas de la economía global y la
            necesidad de una entrega más rápida y eficiente. La tecnología juega
            un papel importante en este sector y hay muchas oportunidades para
            la innovación en términos de eficiencia y reducción de costos.
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
