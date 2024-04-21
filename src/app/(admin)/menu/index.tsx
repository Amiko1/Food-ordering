import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
import { ProductListItem } from "@components/ProductListItem";
import { Stack } from "expo-router";
import { useProductList } from "@/app/api/products";

export default function MenuScreen() {
  const { data: products, isLoading, error } = useProductList();

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
      <Stack.Screen options={{ title: "Menu" }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
