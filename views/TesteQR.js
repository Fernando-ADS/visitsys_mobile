import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, ImageBackground } from 'react-native';
import {css} from '../assets/css/Css';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function TesteQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('');
  const imgbkg = "../assets/img/fundo.png"

  const askForCameraPermission = ()=>{
    (async() =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }

  useEffect(()=> {
    askForCameraPermission();
  }, []);


  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type +  '\nData: ' + data)
  }

  if(hasPermission === null){
    return(
      <View style={css.container2}>
      <Text> Solicitando permissão ... </Text>
      </View>
    )
  }

  if(hasPermission === false) {
    return(
      <View style={css.container}>
      <Text style={{margin:10}}> Sem acesso ... </Text>
      <Button title={'Allow Camera'} onPress={()=> askForCameraPermission()}/>
      </View>
    )
  }


  return (
    <View style={css.container2}>
    <View style={css.barcode}>


    <BarCodeScanner
    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    style={{height:600, width:4000}}/>

    </View>
    <Text style={css.mainText}> {text}</Text>

    {scanned && <Button title={'Tentar novamente'} onPress={() => setScanned(false)}/>}
    </View>
  );
}
