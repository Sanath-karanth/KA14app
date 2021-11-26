import React,{useState, useRef,useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { SafeAreaView,View,StyleSheet,Text,TouchableOpacity } from 'react-native';
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

export default function SplashScreen({navigation}) {

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
      animation.current.play();
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
        <View style={{flex:1}}>
          <View style={{flex:1}}>
          </View>
          <View style={{flex:1}}>
              <Text style ={styles.headertextwelcome}>Welcome to</Text>
              <Text style ={styles.headertextgatway}>Gateway of Malnad</Text>
          </View>
          <View style={{flex:0.1}}>
          </View>
            <View style={{flex:3.5}}>
              <LottieView
                      ref={animation}
                      source={require('./../lotties/image/26623-map-navigation.json')}
                  />
            </View>
          <View style={{flex:0.4}}>
          </View>
            <View style={{flex:0.8}}>
              <TouchableOpacity
                  onPress={explorepress} 
                  style ={styles.exploreButton}>
                      <Text style ={{color:'white',fontFamily:'Avenir-Roman'}}>LET'S EXPLORE</Text>
              </TouchableOpacity>
            </View>
          </View>
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
      marginHorizontal: 20,
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