import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,tex, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image styles={styles.icon}
          source={require("./assets/tarefa.png")}
          style={{ width: 200, height: 200, borderRadius: 100 }}
          />
     <Text style= {styles.titulo}> Join us!</Text>
     
      <View style={styles.dadosAll}> 
        
        <Text style= {styles.dados}>Your name</Text>
    <View style={styles.inputCaixa}> 
    <TextInput style= {styles.caixa} placeholder="Enter your full name!">
    </TextInput>
    </View>
       </View>
          </View>

      <Text style= {styles.email}>Your email</Text>
      <View style={styles.inputEmail}> 
        <TextInput style= {styles.email} placeholder="hello@email.com">
    </TextInput>
    </View>
    <Text style= {styles.senha}>Passworld</Text>
    <View style={styles.inputSenha}> 
      <TextInput style= {styles.senhaTexto} placeholder="**********"></TextInput>
      </View>
      <View style={styles.logos}> 
     <Image styles={styles.logo}
          source={require("./assets/g1.png")}
          style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  main: {
    alignItems: "center",
    marginTop: 100,
  },
  titulo: {
    fontSize: 40,
    color: "#000000",
    marginTop:20,
    fontWeight:'bold'

  },
  dadosAll:{
    marginTop:10,
    width:340,
    height:150,
  },
  dados:{
    marginTop:40,
    width:340,
    
  },
  caixa:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
    
  },
  inputCaixa :{
     flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
    borderColor:"#c7c4c4",
    borderWidth:2,
    borderRadius:20
    
  },
  email:{
     flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
  },
  inputEmail :{
     flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
    borderColor:"#c7c4c4",
    borderWidth:2,
    borderRadius:20
    
  },
  senha:{
    marginTop:40,
    width:340,
  },
  inputSenha:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
    borderColor:"#c7c4c4",
    borderWidth:2,
    borderRadius:20
  },
  senhaTexto:{
     flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    width:340,
    
  },
  logos:{
    marginTop:30
  }
});
