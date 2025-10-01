import { StyleSheet } from "react-native";

const bluishBackgroundColor = "#E3F2FD";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bluishBackgroundColor,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333333",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "70%",
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    color: "#555555",
    fontSize: 18,
    padding: 15,
    backgroundColor: "#F0F0F0",
    margin: 15,
    borderRadius: 25,
    width: "85%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
  },
});
