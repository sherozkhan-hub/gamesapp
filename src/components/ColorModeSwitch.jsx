import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"1rem"}>
        <Switch
          isChecked={colorMode === "Dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        ></Switch>
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
