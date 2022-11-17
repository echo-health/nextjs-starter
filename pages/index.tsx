import { Text, Heading } from "@echo-health/design-system";

import Layout from "../app/Layout";

export default function Home() {
  return (
    <Layout>
      <Heading as="h1">
        LloydsDirect NextJS Starter Template {process.env.NEXT_PUBLIC_APP_VERSION}
      </Heading>
      <Text>There's not much to see here, maybe write some code? 🤔</Text>
    </Layout>
  );
}
