import { Affix } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons";
import Link from "next/link";

export function Fab() {
  return (
    <>
      <Affix position={{ bottom: 80, right: 20 }}>
        <a
          target="_blank"
          href="https://web.whatsapp.com/"
          rel="whatsapp"
        >
          <Avatar color="green" radius="xl" size={60}>
            <IconBrandWhatsapp size={32} />
          </Avatar>
        </a>
      </Affix>
    </>
  );
}
