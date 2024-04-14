import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { ProductListItem } from "@components/ProductListItem";
import products from "@assets/data/products";
import { Stack } from "expo-router";

export default function MenuScreen() {
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
