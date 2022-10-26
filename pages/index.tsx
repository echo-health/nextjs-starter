import { Text, DisplayHeading } from "@echo-health/design-system/patients";

import Layout from "../app/Layout";

export default function Home() {
  return (
    <Layout>
      <DisplayHeading as="h1">
        LloydsDirect NextJS Starter Template
      </DisplayHeading>
      <Text>There's not much to see here, maybe write some code? 🤔</Text>
    </Layout>
  );
}
