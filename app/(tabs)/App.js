import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Header, Icon, Input, ListItem } from "react-native-elements";

export default function App() {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (product && amount) {
      setItems([...items, { id: Date.now().toString(), product, amount }]);
      setProduct("");
      setAmount("");
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "SHOPPING LIST",
          style: { color: "#fff", fontSize: 18, fontWeight: "bold" },
        }}
        containerStyle={{ backgroundColor: "#2196F3" }}
      />

      <View style={{ padding: 10 }}>
        <Input
          label="PRODUCT"
          placeholder="Product"
          value={product}
          onChangeText={setProduct}
        />

        <Input
          label="AMOUNT"
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
        />

        <Button
          title=" SAVE"
          icon={
            <Icon name="save" type="font-awesome" color="white" size={16} />
          }
          onPress={addItem}
          buttonStyle={{ backgroundColor: "#2196F3", borderRadius: 5 }}
          containerStyle={{ width: 150, alignSelf: "center", marginBottom: 15 }}
        />

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.product}</ListItem.Title>
                <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
              </ListItem.Content>
              <Icon
                name="delete"
                color="red"
                onPress={() => deleteItem(item.id)}
              />
            </ListItem>
          )}
        />
      </View>
    </View>
  );
}
