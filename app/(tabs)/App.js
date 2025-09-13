import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
    const [item, setItem] = useState("")
    const [list, setList] = useState([])

    const addItem = () => {
        if (item.trim() === "") return
        setList([...list, { key: item}])
        setItem("")
    }

    const clearList = () => {
        setList([])
    }

    return (
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Type an item"
            value={item}
            onChangeText={setItem}
          />
    
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={addItem}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={clearList}>
              <Text style={styles.buttonText}>CLEAR</Text>
            </TouchableOpacity>
          </View>
    
          <Text style={styles.listTitle}>Shopping List</Text>
    
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item.key}</Text>
            )}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: "center" },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      width: "100%",
      padding: 10,
      marginBottom: 12,
      fontSize: 16,
      marginTop: 10,
      marginLeft: 10,
    },
    buttonRow: {
      flexDirection: "row",
      marginBottom: 20,
      gap: 10,
    },
    button: {
      backgroundColor: "black",
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
    listTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
      marginTop: 6,
    },
    listItem: { fontSize: 16, paddingVertical: 4 },
  });
