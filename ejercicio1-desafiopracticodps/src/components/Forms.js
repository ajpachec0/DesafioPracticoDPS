import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../utils/colors";

export default function Form(props) {
  const { setA, setB, setC } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Digite el valor de A"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setA(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Digite el valor de B"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setB(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Digite el valor de C"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setC(e.nativeEvent.text)}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: "column",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "100%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
});
