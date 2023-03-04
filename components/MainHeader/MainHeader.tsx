import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Menu,
} from "@mantine/core";
import { VerticalSection } from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
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
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
  linkLabel: {
    marginRight: 5,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    header: {
      position: "sticky",
    },
  },
}));

const mockdataIndustries = [
  {
    icon: IconAmbulance,
    title: "Salud",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/health",
  },
  {
    icon: IconShoppingCart,
    title: "Retail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/retail",
  },
  {
    icon: IconCashBanknote,
    title: "Finanzas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/finance",
  },
  {
    icon: IconTool,
    title: "Manufactura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/manufacture",
  },
  {
    icon: IconCar,
    title: "Logistica y Transporte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/logistics",
  },
  {
    icon: IconKeyboard,
    title: "Servicios Profesionales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
    route: "/industries/health",
  },
];

const mockdata = [
  {
    title: "Gestión de Producto",
    icon: IconCreditCard,
    color: "violet",
    page: "/contact#anchor-name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Análisis de Datos",
    icon: IconDatabase,
    color: "indigo",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Modernización de Aplicaciones",
    icon: IconGitBranch,
    color: "blue",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Arquitectura Cloud y Migraciones",
    icon: IconCloudComputing,
    color: "green",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Automatización",
    icon: IconRobot,
    color: "teal",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Diseño UI & UX",
    icon: IconPencil,
    color: "cyan",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Ingeniería de Software & DevOps",
    icon: IconBrandDocker,
    color: "grape",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Aplicaciones Móviles",
    icon: IconApps,
    color: "yellow",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Integraciones",
    icon: IconCode,
    color: "lime",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
  {
    title: "Consultorias",
    icon: IconUsers,
    color: "orange",
    page: "/contact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor orci, eleifend ut lorem ac, sagittis lacinia leo.",
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [linksIndustriesOpened, { toggle: toggleLinksIndustriesOpened }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <Link href={item.page} key={item.page}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  const industries = mockdataIndustries.map((item) => (
    <Link href={item.route} key={item.route}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box>
      <Header height={60} px="md" position={{ bottom: 20 }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Link href="/">
            <MantineLogo size={30} />
          </Link>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="/" className={classes.link}>
              Nosotros
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Servicios
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Servicios</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Industrias
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Industrias</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {industries}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <Menu key="Contacto" trigger="hover" exitTransitionDuration={0}>
              <Menu.Target>
                <a
                  href="/contact"
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.linkLabel}>Contacto</span>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>
                <Link href="/contact">
                  <Menu.Item key="test">Contactanos</Menu.Item>
                </Link>
                <Link href="/jobOffer">
                  <Menu.Item key="test">Vacantes</Menu.Item>
                </Link>
              </Menu.Dropdown>
            </Menu>

            <a href="/news" className={classes.link}>
              Noticias
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <ColorSchemeToggle />
            <LanguageToggle />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="sm"
        title={<MantineLogo size={30} />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="/" className={classes.link}>
            Nosotros
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Servicios
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinksIndustriesOpened}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Industrias
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksIndustriesOpened}>{industries}</Collapse>
          <a href="#" className={classes.link}>
            Noticias
          </a>
          <a href="#" className={classes.link}>
            Contacto
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
