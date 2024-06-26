import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { Link, useSegments } from "expo-router";
import { Tables } from "@/types";

const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Tables<"products">;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { image = defaultImage, name = "Papavero", price = 12 } = product;
  const segments = useSegments();
  return (
    <Link href={`${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: "auto",
  },
});
