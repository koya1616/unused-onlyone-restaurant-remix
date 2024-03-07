import type { MetaFunction } from "@vercel/remix";
import { Card, Image, Text, Flex } from '@mantine/core';
import { OnlyOneRestaurantInJapan } from 'app/beautiful/restaurant';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
// https://api-onlyone.api-onlyone.workers.dev/restaurants
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
      { OnlyOneRestaurantInJapan.map(restaurant =>
        <Card
          shadow="sm"
          component="a"
          href={restaurant.gmap}
          target="_blank"
          radius={10}
          key={restaurant.name}
          w={300}
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              alt="No way!"
              h={160}
            />
          </Card.Section>

          <Text fw={600} mt="md">
            {restaurant.name}
          </Text>

          <Text mt="xs" c="dimmed" size="sm">
            {restaurant.gmap}
          </Text>
        </Card>
      )}
      </Flex>
    </div>
  );
}
