import {
  Card,
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

const blogEntries = [
  {
    slug: "web-dev",
    title: "Desarrollo Web: Más Allá de lo Visual",
    description:
      "Introducción a desarrollo de interfaces y lógica web modernas.",
  },
  {
    slug: "html",
    title: "HTML 5 Semántico: La Base Significativa de la Web",
    description: "Estructura semántica y accesibilidad con HTML5.",
  },
  {
    slug: "inputs",
    title: "Formularios e Inputs",
    description: "Captura de datos con HTML y componentes modernos de UI.",
  },
  {
    slug: "css",
    title: "Responsive CSS: Diseña para todos los dispositivos",
    description: "Diseño responsivo y layout con Flexbox y Grid.",
  },
  {
    slug: "js",
    title: "Interactividad Moderna con JavaScript, Next.js y TypeScript",
    description: "Sitios interactiva con JavaScript, Next.js. y TypeScript.",
  },
];

export default function Page() {
  return (
    <Container size="lg" py="xl">
      <Center>
        <Title order={1} mb="md">
          Desarrollo de Aplicaciones en Red
        </Title>
      </Center>

      <Text size="md" mb="xl">
        El desarrollo de aplicaciones en red abarca la creación de software que
        se autentica, comunica y procesa datos a través de redes. Incluye tanto
        el front-end como el back-end, protocolos de comunicación y prácticas de
        seguridad para garantizar aplicaciones robustas y escalables.
      </Text>

      <SimpleGrid cols={2} spacing="lg">
        {blogEntries.map(({ slug, title, description }) => (
          <Card
            key={slug}
            shadow="sm"
            padding="lg"
            component={Link}
            href={`post/${slug}`}
          >
            <Stack gap="xs">
              <Title order={4} ta={"center"}>
                {title}
              </Title>
              <Text size="sm" c="dimmed" ta={"center"}>
                {description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
