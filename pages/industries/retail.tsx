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
    title: "Plataformas de Comercio Electrónico",
    description:
      "Una empresa puede desarrollar una plataforma en línea para tiendas minoristas que les permita vender sus productos directamente a los consumidores.",
  },
  {
    icon: IconCookie,
    title: "Análisis de Datos de Ventas",
    description:
      "La empresa puede crear soluciones de análisis de datos para ayudar a las tiendas minoristas a entender mejor sus operaciones y tomar decisiones informadas sobre su inventario, precios y promociones.",
  },
  {
    icon: IconLock,
    title: "Gestión de Inventario",
    description:
      "Una empresa puede desarrollar un software para ayudar a las tiendas minoristas a gestionar su inventario y a mantener un seguimiento de las ventas en tiempo real.",
  },
  {
    icon: IconMessage2,
    title: "Experiencia de Compra en Línea",
    description:
      "La empresa puede desarrollar soluciones de software para mejorar la experiencia de compra en línea para los consumidores, como carritos de compra personalizados, pagos seguros y entrega eficiente.",
  },
  {
    icon: IconMessage2,
    title: "Integración de Sistemas",
    description:
      " La empresa puede desarrollar soluciones de software para integrar sistemas de diferentes proveedores, como sistemas de gestión de inventario, plataformas de pago y soluciones de envío, para una experiencia de compra más fluida y eficiente.",
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
      "url(https://d1ih8jugeo2m5m.cloudfront.net/2022/07/el-ecommerce-que-es.jpg)",
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

export default function Retail({
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
        <Title className={classes.titleHero}>Retail</Title>
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
