import { Container, Pagination, Group } from "@mantine/core";

export default function PaginationPost() {
  return (
    <Group position="center">
      <Pagination total={10} mt={20} />
    </Group>
  );
}
