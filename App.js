import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';




export default function App() {

  

    const [url, setUrl] = useState('');
    const [name, setName] = useState('')
    const [urlFInal, SetUrlFinal] = useState('')
   
    

    
    const short = async () => {
        await fetch(`https://cutt.ly/api/api.php?key=adabfd627281d315db28ec33e9f1789d86d3c&short=${url}l&name=${name}`)
        .then(async response => {
          const data = await response.json();
        
          SetUrlFinal(data.url.shortLink)
          Keyboard.dismiss();
        })
        .catch(error => {
          console.log('Ocorreu um erro na chamada fetch:', error);
        });
    }
    
  
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
         
          <StatusBar style="auto" /> 
          <Text style={styles.title}>Cut
              <Text style={{color: '#2D2D'}}>URL</Text> 
          </Text>
          
          <TextInput 
          style={styles.input}
          onChangeText={(texto) => setUrl(texto)}
          value={url}
          placeholder="Digite a url aqui"   
          />

          <TextInput 
          style={styles.input}
          onChangeText={(texto) => setName(texto)}
          value={name}
          placeholder="Nome personalizado"   
          />

          <TouchableOpacity onPress={() => short() } style={styles.btn}>
            <Text style={{color: '#000', fontSize: 20}}>Encurtar</Text>
          </TouchableOpacity>

           
            <Text style={styles.newUrl}>{urlFInal}</Text>
          
          
      </View>
  </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9fe'
  },
  title:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
  },
  input:{
    height: 50,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor:'#FFF'
  },
  btn:{
    borderRadius: 4,
    height: 50,
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2D',
  },
  newUrl:{
    height: 40,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  }
})