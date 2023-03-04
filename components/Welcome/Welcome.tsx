import {
  createStyles,
  Image,
  Grid,
  Col,
  Container,
  Title,
  Group,
} from "@mantine/core";
import image from "./image.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    // paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xl * 2,
    // backgroundColor: '#E4F1F6',
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.gray[9] : "#E4F1F6",
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  titleMain: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 72,
    fontWeight: 900,
    letterSpacing: 2,
    [theme.fn.smallerThan("md")]: {
      fontSize: 68,
    },
  },
  subTitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 16,
    fontWeight: 400,
    [theme.fn.smallerThan("md")]: {
      fontSize: 16,
    },
  },
  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size="md" py="xl">
        <Grid id="faq-grid" gutter={100}>
          <Col span={12} md={6}>
            <Group>
              <Title className={classes.titleMain} align="center">
                ¿Por qué Nibium?
              </Title>
              <Title className={classes.subTitle} align="center">
                En Nibium, creamos aplicaciones para móvil, web y las nuevas fronteras de
                la web3, Pero no solo estamos creando una aplicación, Este es su
                negocio y estamos comprometidos a que sea un éxito.
              </Title>
            </Group>
          </Col>
          <Col span={12} md={6}>
            <Image src={image.src} alt="logo" />
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
