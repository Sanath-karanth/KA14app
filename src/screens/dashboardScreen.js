import React,{useState, useRef,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { SafeAreaView,View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

export default function DashboardScreen({navigation}) {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(false);
  const animation = useRef(null);
  

  const explorepress = () => {
    setSpin(true);
    const timer = setTimeout(() => {
      setSpin(false);
      navigation.navigate('register');
    }, 4000);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    if(fontLoaded)
    {
      return null;
    }
    else
    {
      return null;
    }
  },[fontLoaded])
  
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#66C480" barStyle="light-content" />
              <LinearGradient
                                colors={['#1ABC9D', '#0F994B']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                <View style={{flex:1}}>
                    <Text style ={styles.headertextwelcome}>Welcome to</Text>
                    <Text style ={styles.headertextgatway}>Gateway of Malnad</Text>
                </View>                
              </LinearGradient>
          <AnimatedLoader
              visible={spin}
              overlayColor="rgba(0,0,0,0.5)"
              source={require('./../lotties/loader/7556-loader-blu.json')}
              animationStyle={styles.lottiespin}
              speed={1}
            >
            </AnimatedLoader>
        </SafeAreaView>
  );
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    headertextgatway: {
      color: '#000000',
      justifyContent: 'center',
      fontSize:30,
      fontFamily:'Avenir-Book'
    },
    headertextwelcome: {
      color: '#CECECE',
      justifyContent: 'center',
      fontSize:30,
      fontFamily:'Avenir-Heavy'
    },
    exploreButton: {
      borderRadius:6,
      height:40,
      backgroundColor:'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    lottiespin: {
      width: 100,
      height: 100
    }
});