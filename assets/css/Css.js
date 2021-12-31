import { StyleSheet} from 'react-native';
import {ImageBackground} from 'react-native';

const imgbkg = "../assets/img/fundo.png";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0ECF6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  login_msg:(text='none')=>({
    fontSize: 22,
    color: "#000",
    marginTop: 5,
    marginBottom: 15,
    display: text
  }),

  login_form:{
    width:"80%",
  },

  login_input:{
    backgroundColor: "#fff",
    fontSize: 15,
    padding: 7,
    borderRadius: 12,
    marginBottom: 15
  },

  login_button:{
    padding: 12,
    backgroundColor:"#D0ECF6",
    alignSelf: "center",
    borderRadius: 12
  },

  login_logomarca:{
    marginBottom: 10,
  },

  login_buttonText:{
    fontWeight: "bold",
    fontSize: 18,
    color:"#000"
  },



  img:{
    flex:1,
    resizeMode: "cover",
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },

  camera:{
    height:300,
    width:300,
    flexDirection: "column",
    justifyContent: "space-around",
  },


  barcode:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30

  },


  mainText:{
    fontWeight: "bold",
    fontSize: 20,
    margin: 20
  },

  /*
  const imgbkg = "./img/logomarca.png";

  fundo:{

  <ImageBackground>
  source={require(imgbkg)};
  style={css.img};
  </ImageBackground>
},
*/

qr_code:(display='flex')=>({
  width:'100%',
  height:'100%',
  backgroundColor:'#000',
  justifyContent:'center',
  display: display
}),

modal:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
  //margin:24,
  //borderRadius: 8,
  //backgroundColor: "#D0ECF6",
  //marginVertical:64

}


});
export {css};
