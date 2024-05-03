import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToRegisterScreen = () => {
    navigation.navigate("RegisterScreen");
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenda</Text>

      {showLoginForm && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setShowLoginForm(!showLoginForm)}
        >
          <Text style={styles.loginButtonText}>{showLoginForm ? "Volver" : "Ingresar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonRegistro}
          onPress={navigateToRegisterScreen}
        >
          <Text>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "orange",
  },
  containerBtn: {
    height: 90,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  boton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    width: 150,
  },
  formContainer: {
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: 150,
    borderRadius: 50,
    marginTop: 10,
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
