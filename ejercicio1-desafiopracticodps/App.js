import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

//componentes
import Form from "./src/components/Forms";
import Footer from "./src/components/Footer";
import Result from "./src/components/Results";

//styles
import colors from "./src/utils/colors";
import img from "./src/imgs/png-transparent-quadratic-equation-quadratic-formula-algebra-quadratic-function-function-formul.png"

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [final1, setFinal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() =>{
    if(a&&b&&c) calculate();
    else reset();
  },[a,b,c]);

  const calculate= () => {
    reset();

    const u =  Math.sqrt(((b*1)*(b*1))-(4*(a*1)*(c*1)))/2;
    if(!a){
      setErrorMessage('Digita el valor de A');
    } else if (!b) {
      setErrorMessage('Digita el valor de B');
    }
     else if (!c) {
      setErrorMessage('Digita el valor de C');
    } else if (u<0) {    
      setErrorMessage('La raiz da numero negativo, no se puede resolver');
      
    } else {
      const f1 = (-(b*1) + (u*1));
      const f2 = (-(b*1) - (u*1));
      
      

      
      
      setFinal({
        solution1: f1.toFixed(2).replace(',','.') ,
        solution2: f2.toFixed(2).replace(',','.'), 
      });
    }
  };


  const reset = () => {
    setErrorMessage("");
    setFinal(null);
  }


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Resolver ecuacion cuadratica</Text>
        <Form 

            setA={setA}
            setB={setB}
            setC={setC}

        />
      </SafeAreaView>
      <Result 
        a={a}
        b={b}
        c={c}
        final1={final1}
        errorMessage ={errorMessage}

      />
      <View>
       
        <Image style={styles.img} source={img} />
      </View>
      <Footer calculate ={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 250,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  HeadApp: {
    fontSize:25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:30,
  },
  HeadTitle:{
    fontSize:15,
    fontWeight:50,
    color: 'white',
    
  },
  img:{
    width:'100%',
    height:150,
    resizeMode: 'cover',
    marginLeft:10,
    justifyContent: 'center',
    alignContent: 'center'
  }

});
