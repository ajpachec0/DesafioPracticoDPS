import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
  const {setNombre, setSalario} = props;
  return (
    <View style={styles.Formulario}>
      <Text style={styles.titulo}>Calcular el Salario NETO</Text>
      <View style={styles.FormInputs}>
        <TextInput
          style={styles.input}
          placeholder="Digite su nombre "
          placeholderTextColor="black"
          keyboardType="default"
          onChange={e => setNombre(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite su salario base"
          placeholderTextColor="black"
          keyboardType="number-pad"
          onChange={e => setSalario(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Formulario: {
    backgroundColor: colors.BACKGROUND_PRINCIPAL,
    padding: 50,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  FormInputs: {
    padding: 25,
    backgroundColor: colors.BACKGROUND_DARKER,
    borderRadius: 15,
  },
  input: {
    margin: 10,
    height: 50,
    backgroundColor: colors.FONT_COLOR,
    borderWidth: 1,
    borderColor: colors.LIGHT_PURPLE,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: 'black',
  },
  titulo: {
    textAlign: 'center',
    color: colors.FONT_COLOR,
    fontSize: 25,
    marginBottom: 35,
  },
});
