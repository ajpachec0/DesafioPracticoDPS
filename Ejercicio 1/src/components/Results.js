import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Result(props) {
    const{a, b, c, final1, errorMessage} = props;
        
    return (
        <View style={styles.content}>
            {final1 && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>VALORES DIGITADOS</Text>
                    <DataResult title="Valor de A:" value={`${a}`}/>
                    <DataResult title="Valor de B:" value={`${b}`}/>
                    <DataResult title="Valor de C:" value={`${c}`}/>
                    <DataResult 
                        title="Primer resultado de la Ecuacion X1 = " value={`${final1.solution1}`}
                    />
                    <DataResult 
                        title="Segundo resultado de la Ecuacion X2 = " value={`${final1.solution2}`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

    function DataResult(props){
        const {title,value} = props;

        return (
            <View style={styles.value}>
                <Text>{title}</Text>
                <Text>{value}</Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        content: {
            marginHorizontal:40,
        },
        boxResult: {
            padding:30,
        },
        title:{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        value: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        error: {
            textAlign: 'center',
            color: '#f00',
            fontWeight: 'bold',
            fontSize: 15,
        },
    });