import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="details/[id]"
        options={{ headerShown: false, title: "Details" }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
    </Stack>
  );
}
