import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function Banner() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Un <span className={classes.highlight}>Software</span> hecho{" "}
              <br /> a tu medida
            </Title>
            <Text color="dimmed" mt="md">
              Hacer un software a medida, es decir, diseñar y desarrollar un
              programa específico para las necesidades y requisitos de una
              empresa o usuario, puede tener varios beneficios
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Adaptabilidad</b> – Se ajusta a las necesidades específicas
                de la empresa o usuario, lo que permite una mayor adaptabilidad
                y eficiencia en su uso.
              </List.Item>
              <List.Item>
                <b>Eficiencia</b> – Puede ser más eficiente en su uso y puede
                automatizar procesos y tareas repetitivas, lo que aumenta la
                productividad y reduce los errores humanos.
              </List.Item>
              <List.Item>
                <b>Integración</b> – Puede ser diseñado para integrarse
                perfectamente con los sistemas y procesos existentes de la
                empresa, lo que permite una transición suave y sin
                interrupciones.
              </List.Item>
              <List.Item>
                <b>Propiedad</b> – Se tiene control total sobre la propiedad
                intelectual del software y puede proteger sus secretos
                comerciales y tecnológicos.
              </List.Item>
              <List.Item>
                <b>Soporte y mantenimiento</b> – Se puede contar con un soporte
                y mantenimiento continuo y personalizado para el software, lo
                que garantiza su correcto funcionamiento y evita problemas
                técnicos en el futuro.
              </List.Item>
              <List.Item>
                <b>Costo-efectividad</b> – A largo plazo, un software a medida
                puede ser más rentable ya que se puede evitar pagar licencias y
                mantenimiento por funcionalidades que no se utilizan.
              </List.Item>
              {/*  */}
            </List>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
