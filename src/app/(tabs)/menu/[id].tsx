import { View } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function index() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text>There is your id: {id}</Text>
    </View>
  );
}
