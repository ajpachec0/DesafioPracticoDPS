import React, { useEffect, useState } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Button,
  Card,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export default Ejercicio3 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [maxValue, setMaxValue] = useState();
  const [minValue, setMinValue] = useState();
  const [maxValueAdd, setMaxValueAdd] = useState(0);
  const [minValueLess, setMinValueLess] = useState(0);

  const calcNumbers = () => {
    setMaxValueAdd(0);
    setMinValueLess(0);
    setMaxValue(Math.max(value1, value2, value3));
    setMinValue(Math.min(value1, value2, value3));
    if (minValue > 10) setMaxValueAdd(maxValue + 10);
    if (maxValue < 50) setMinValueLess(minValue - 5);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.layout}>
        <Text category="h1">Ejercicio 3</Text>
        <Text category="s1">Ingrese 3 números distintos entre sí</Text>
        <View style={{ marginTop: 30, width: "80%" }}>
          <Input
            style={styles.input}
            value={value1}
            label="Ingrese el primer número"
            placeholder="Número 1"
            keyboardType="numeric"
            onChangeText={(value1) => setValue1(parseFloat(value1))}
          />
          <Input
            style={styles.input}
            value={value2}
            keyboardType="numeric"
            label="Ingrese el segundo número"
            placeholder="Número 2"
            onChangeText={(value2) => setValue2(parseFloat(value2))}
          />
          <Input
            style={styles.input}
            value={value3}
            keyboardType="numeric"
            label="Ingrese el tercer número"
            placeholder="Número 3"
            onChangeText={(value3) => {
              setValue3(parseFloat(value3));
            }}
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            calcNumbers();
          }}
        >
          Calcular
        </Button>
        <Card style={styles.card}>
          <Text>El valor más alto es: {maxValue}</Text>
          <Text>El valor más bajo es: {minValue}</Text>
        </Card>
        <Card style={styles.card}>
          <Text>
            Es el número menor mayor a 10: {minValue > 10 ? "✔" : "❌"}
          </Text>
          <Text>Número mayor + 10: {maxValueAdd}</Text>
        </Card>
        <Card style={styles.card}>
          <Text>
            Es el número mayor menor a 50: {maxValue < 50 ? "✔" : "❌"}
          </Text>
          <Text>Número menor - 5: {minValueLess}</Text>
        </Card>
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: "center", alignItems: "center" },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 30,
  },
  card: {
    width: "80%",
    marginTop: 20,
  },
});
