import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:150,
      height:150,
      borderRadius:100
    },
    input:{
      width:'100%',
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      padding:10,
      marginBottom:10
    },
    btnCadastro:{
      width:100,
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10
    },
    texto:{
      backgroundColor:'white',
      textAlign:'center',
      marginBottom:30
    }, 
   
    btnLogar:{
      fontSize:10,
      backgroundColor:'white',
      color:'white',
    },
    containerbtn:{
      backgroundColor:'white',
      flexDirection:'row',
      width:'100%',
      alignSelf:'flex-end',
      borderTopWidth:2,
      borderBottomWidth:2,
      borderColor:'#333',
      justifyContent:'center',

    },
    btnMenu:{
      marginHorizontal:10,
    },
    btnlogin:{
      height:50,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRightWidth:2,
      borderColor:'#333',
      backgroundColor:'#fff',
    },
    iconlogin:{
      height:40,
      width:40,
    },
    textoTitulo:{
      fontSize:30,
      color:'white',
      textAlign:'center'

    },
    FlamengoCampeaoMundial:{
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: 'contain'
    },
    FlamengoLogo:{
      width:150,
      height:150,
      borderRadius:100
    },

  });

  export {styles};