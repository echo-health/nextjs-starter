import { Box } from "@echo-health/design-system";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box>{children}</Box>
  )
}