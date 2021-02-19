import React from 'react';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';

export default function Historia(props)
{
    return(
        <View style={styles.container}>
            <Text style={styles.textoTitulo}>HISTORIA DO MUNDIAL (1981)</Text>

            <View>
            <Image source={require('../assets/FlamengoCampeaoMundial.jpg')} style={styles.FlamengoCampeaoMundial}/>
            </View>

            <Text style={styles.texto}>
                Assim, o Flamengo foi campeão mundial ao golear o Liverpool por 3 a 0 com dois gols de Nunes e um de Adílio ainda no primeiro tempo. 
                Todos os gols tiveram a participação de Zico, que foi eleito o melhor jogador da partida.
            </Text>
            
            <View style={styles.containerbtn}>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate('Login')}>
                    <Image resizeMode='contain' source={require('../assets/backtohome.png')} style={styles.iconlogin}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate('Team')}>
                    <Image resizeMode='contain' source={require('../assets/letraicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnMenu} title='Cadastro Escola' onPress={ ()=> props.navigation.navigate('Historia')}>
                    <Image resizeMode='contain' source={require('../assets/Historiaiconfut.png')} style={styles.iconlogin}/>
                 </TouchableOpacity>
            </View>

        </View>
    );
}