import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { useCart } from "@/providers/CartProvider";
import { FlatList, Text, View } from "react-native";

const CartScreen = () => {
  const { items, total, checkout } = useCart();

  if (!items.length) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 24, color: "purple" }}>Cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>
      <Button onPress={checkout} text="Checkout" />
    </View>
  );
};

export default CartScreen;
