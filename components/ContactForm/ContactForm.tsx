import { Container } from "@mantine/core";
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
    lineHeight: 1,
  },

  description: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    marginTop:15,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  input: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderColor:
      theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
    "&:focus": {
      borderColor:
        theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
    },
  },

  inputLabel: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.dark[5],
    color: theme.colorScheme === "dark" ? theme.white : theme.white,
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.white,
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.dark[3],
    },
  },
}));

export function ContactForm() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>
        <SimpleGrid
          cols={1}
          spacing={0}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>
            <Title order={2} align="left" className={classes.title}>
            !Contáctanos!
            </Title>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Nombre"
              required
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Mensaje"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button className={classes.control}>Enviar Mensaje</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </Container>
  );
}
