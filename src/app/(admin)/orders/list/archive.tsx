import { ActivityIndicator, FlatList, Text } from "react-native";
import orders from "@assets/data/orders";
import OrderListItem from "@components/OrderListItem";
import { Stack } from "expo-router";
import { useAdminorderList } from "@/app/api/orders";

export default function OrdersScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminorderList({ archived: true });

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 64 }} />;
  }
  if (error) {
    return (
      <Text style={{ marginTop: 124, textAlign: "center" }}>
        Failed to fetch products
      </Text>
    );
  }
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
