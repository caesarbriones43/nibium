// import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { ActionIcon, Group } from '@mantine/core';
import { IconLanguage } from '@tabler/icons';

export function LanguageToggle() {
  //   const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        // onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        <IconLanguage size={20} stroke={1.5} />
        {/* {colorScheme === 'dark' ? (
          <IconLanguage size={20} stroke={1.5} />
        ) : (
          <IconLanguage size={20} stroke={1.5} />
        )} */}
      </ActionIcon>
    </Group>
  );
}
