import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const showAside = useBreakpointValue({ base: "none", lg: "block" });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="aside" bg="gold" display={showAside}>
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerBlue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
