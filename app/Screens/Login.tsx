import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Pressable} from 'react-native'
import React , {useContext} from 'react'
import { useAuth } from '../contexts/AuthContext';


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {onLogin, onLogout} = useAuth();

    const login =async () => {
        const result = await onLogin!(email,password);
        alert(result);
    };

    

  return (
    <View>
        <View style={styles.banner}> 
        <View style={styles.logo}>
        <Image 
        style={{
            width: 250, 
            resizeMode: 'contain',
        }}
        source={require('../../assets/tn-logo.png')} />
        </View>
        </View>
        <View style={styles.container}>
        {/* <Text style={styles.welcomeText}>Welcome to InterviewPro</Text>
        <Text style={{color: '#fff', fontSize: 24, marginBottom: 20, paddingTop:-40}}>Login</Text>
        */}

        <SafeAreaView>
            <TextInput 
            placeholder='Email'
            placeholderTextColor= '#fff'
            style={styles.input}
            value={email}
            keyboardType='email-address'
            onChangeText={(value) => setEmail(value)}
            />
        </SafeAreaView>
        <SafeAreaView>
            <TextInput 
            placeholder='Password'
            placeholderTextColor= '#fff'
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            />
        </SafeAreaView>
        <SafeAreaView>
        <Pressable style={styles.button} onPress={login} >
      <Text style={styles.text}>Login</Text>
    </Pressable>

        </SafeAreaView>
 

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    banner:{
        paddingTop: 0 ,
        height: 200,
        width: '100%' ,
        backgroundColor: '#fff'

    },
    welcomeText:{
        fontSize: 35, 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#EEEBE7',
        marginBottom: 50,
    },
    container:{
        marginTop: -30,
        paddingTop: 40,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#1F2F47',
        height: '100%',
        alignItems: 'center'
    },
    logo:{
       justifyContent: 'center',
       alignItems: 'center'
    },
    login:{
        color: '#fff',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        padding: 10,
        margin:30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        color: '#1F2F47'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
    input: {
        color: '#fff',
        borderColor: '#fff',
        borderRadius: 12,
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
   
})