
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const[provento,setProvento] = useState('')
  const[calculo, setCalculo] = useState('')
 
   // a function handleSumit está ligado ao button
  function handleSumit(){
   
    const res1 = n * 0.075   //(82,5)
    const res2 = n * 0.09
    const res3 = n * 0.12
    const provento = n

    if(n <= 1.100){
     alert(n - res1)  
 }else if(n <= 2.203){
       alert(n - res2) 
   }else{
       alert(n - res3)  
   }
 }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Calculadora de Salário:</Text>
      
      <View>
      <Text style={styles.h2}>__Insira seus proventos:</Text>
        <TextInput
        style={styles.input}
        value={provento}
        onChangeText={(provento)=> setProvento(provento)}
        placeholder="Proventos"
        keyboardType="numeric"/>
        
      </View>

      <View>
      <Text style={styles.h2}>__Calculo da Alíquota:</Text>
        <TextInput
        style={styles.text}
        value={calculo}
        onPress ={()=>{setProvento}}
        onChangeText = {(calculo) => setCalculo(calculo)}
        placeholder={('Alíquota INSS')}
        keyboardType="numeric"/> 
      </View>  

      <View>  
        <TouchableOpacity 
        style={styles.button}
        onPress={handleSumit}> 
        <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={styles.output}>Salárrio Líquido:</Text> 
      </View>     

    </View>
  
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F0F6E7',
    alignItems:'center'
  },

  title:{
    fontSize:24,
    alignItems:'center',
    justifyContent:'center',
    marginTop:8,
    margin:15
   },

   h2:{
    margin:15,
    fontSize:15,
    fontStyle:'italic'
   },

   input:{
     backgroundColor:'#14B694',
     borderRadius:12,
     margin:15,
     color:'#000',
     padding:10,
     fontSize:18,
     marginTop:-6
   },

   text:{
    justifyContent:'center',
     alignItems:'center',
     margin: 15,
     borderRadius:12,
     backgroundColor:'#A8DBA8',
     padding:10,
     fontSize:14,
     marginTop:-6
   },

   button:{
     justifyContent:'center',
     alignItems:'center',
     margin: 15,
     borderRadius:12,
     backgroundColor:'#C0C078',
     padding:10,
     fontSize:18,
   },
   
   output:{
     justifyContent:'center',
     alignItems:'center',
     color:'#121212',
     fontStyle:'italic',
     fontSize:22,
     margin:15
   }
   
  })