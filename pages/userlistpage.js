import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles"; // Import the styles

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText2}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Firstname: {item.first_name}</Text>
            <Text style={styles.cardText}>Lastname: {item.last_name}</Text>
            <Text style={styles.cardText}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}
