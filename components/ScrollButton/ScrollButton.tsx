import { IconArrowUp, IconBrandWhatsapp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Avatar, Button, Text, Transition } from "@mantine/core";

export function ScrollButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            // <Button
            //   radius={100}
            //   leftIcon={<IconArrowUp size={16} />}
            //   style={transitionStyles}
            //   onClick={() => scrollTo({ y: 0 })}
            // >
            // </Button>

            <Avatar
              color="black"
              radius="xl"
              style={transitionStyles}
              size={50}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={32} />
            </Avatar>
          )}
        </Transition>
      </Affix>
    </>
  );
}
