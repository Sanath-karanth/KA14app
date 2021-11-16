import React,{useState, useRef,useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { SafeAreaView,
            View,
            StyleSheet,
            Text,
            TouchableOpacity,
            KeyboardAvoidingView,
            ScrollView, 
            BackHandler,
            Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons,Feather,FontAwesome5,Entypo,FontAwesome } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { Formik } from 'formik';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

export default function RegisterScreen() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(true);
  
  const [nameerr, setNameerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [phoneerr, setPhoneerr] = useState(false);
  const [cityerr, setCityerr] = useState(false);

  const animation = useRef(null);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = '* Username is required.';
    }else if (!/^[A-Za-z\b]+$/.test(values.username)) {
        errors.username = 'Please enter a Valid username.';
        // setNameerr(true);
  }

     if (!values.email) {
      errors.email = '* Email ID is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter a Valid Email ID.';
    }

    if (!values.phoneno) {
        errors.phoneno = 'Please Enter a valid Phone number.';
    }else if (!/[6-9]\d{9}$/i.test(values.phoneno)) {
      errors.phoneno = 'Please enter a Valid 10-digit phone number.';
    }

    if (!values.city) {
      errors.city = '* City name is required.';
  }else if (!/^[A-Za-z\b]+$/.test(values.city)) {
    errors.city = 'Please enter a Valid City name.';
}

    return errors;
};

  const explorepress = () => {
    console.log('pressed');
  }
  
  useEffect(() => {
    if(fontLoaded)
    {
      setSpin(false);
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
        <AnimatedLoader
              visible={spin}
              overlayColor="rgba(0,0,0,0.5)"
              source={require('./../lotties/loader/7556-loader-blu.json')}
              animationStyle={styles.lottiespin}
              speed={1}
            >
        </AnimatedLoader>
        
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            style={{ flex: 1 }}
          >
           
              <View style={{flex:2}}>
                <LottieView
                          ref={animation}
                          loop={false}
                          source={require('./../lotties/image/83168-login-success.json')}
                      />
              </View>
              <View style={{flex:0.7,justifyContent: 'center'}}>
                  <Text style ={styles.headertext}>Complete your profile</Text>
              </View>
              <View style={{flex:6}}>
              <Formik initialValues={{ username: '', email: '' , phoneno: '' , city: '' }} 
                      // onSubmit={createPurchaseOrder} 
                      validate={validate}
                      >
                        {({ handleChange, handleBlur, handleSubmit, touched, values, errors }) => (
              <ScrollView>
                <Input
                      value={values.username}
                      onChangeText={handleChange('username')}
                      placeholder='Enter your Full name'
                      placeholderTextColor="lightgray"
                      label="UserName"
                      labelStyle={styles.labeltext}
                      overflow="hidden"
                      style={{color: 'black',fontFamily: 'Avenir-Roman'}}
                      // containerStyle={{borderRadius: 0,borderColor:'black'}}
                      inputContainerStyle={styles.inputtextboxstyle}
                      // inputStyle={{marginVertical: 10}}
                      leftIcon={
                        <FontAwesome5 name="user-alt" size={20} color="black" />
                      }
                      rightIcon={
                        values.username == '' ? null : !errors.username ? 
                         <Ionicons name="md-checkmark-circle" size={25} color="green" />
                         : 
                         <Entypo name="circle-with-cross" size={25} color="#8b0000" />
                        }
                      errorMessage={errors.username}
                      errorStyle={styles.errtextstyle}
                    />

                  <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder='Enter your Email ID'
                    placeholderTextColor="lightgray"
                    label="Email"
                    labelStyle={styles.labeltext}
                    overflow="hidden"
                    style={{color: 'black',fontFamily: 'Avenir-Roman'}}
                    inputContainerStyle={styles.inputtextboxstyle}
                    leftIcon={
                      <Ionicons name="mail" size={22} color="black" />
                    }
                    rightIcon={
                      values.email == '' ? null : !errors.email ? 
                       <Ionicons name="md-checkmark-circle" size={25} color="green" />
                       : 
                       <Entypo name="circle-with-cross" size={25} color="#8b0000" />
                      }
                    errorMessage={errors.email}
                    errorStyle={styles.errtextstyle}
                  />

                  <Input
                    value={values.phoneno}
                    onChangeText={handleChange('phoneno')}
                    placeholder='Enter your Phone no'
                    placeholderTextColor="lightgray"
                    label="Phone"
                    labelStyle={styles.labeltext}
                    overflow="hidden"
                    style={{color: 'black',fontFamily: 'Avenir-Roman'}}
                    keyboardType='numeric'
                    maxLength={10}
                    inputContainerStyle={styles.inputtextboxstyle}
                    leftIcon={
                      <View style={{flexDirection:'row'}}>
                      <FontAwesome name="phone" size={22} color="black"></FontAwesome>
                      <Text style={{fontSize: 18,marginLeft:8,marginRight:4}}>+91</Text>
                      </View>
                    }
                    rightIcon={
                      values.phoneno == '' ? null : !errors.phoneno ? 
                       <Ionicons name="md-checkmark-circle" size={25} color="green" />
                       : 
                       <Entypo name="circle-with-cross" size={25} color="#8b0000" />
                      }
                    errorMessage={errors.phoneno}
                    errorStyle={styles.errtextstyle}
                  />

                  <Input
                    value={values.city}
                    onChangeText={handleChange('city')}
                    placeholder='Enter your City'
                    placeholderTextColor="lightgray"
                    label="City"
                    labelStyle={styles.labeltext}
                    overflow="hidden"
                    style={{color: 'black',fontFamily: 'Avenir-Roman'}}
                    inputContainerStyle={styles.inputtextboxstyle}
                    leftIcon={
                      <Ionicons name="location" size={22} color="black" />
                    }
                    rightIcon={
                      values.city == '' ? null : !errors.city ? 
                       <Ionicons name="md-checkmark-circle" size={25} color="green" />
                       : 
                       <Entypo name="circle-with-cross" size={25} color="#8b0000" />
                      }
                    errorMessage={errors.city}
                    errorStyle={styles.errtextstyle}
                  />

                <TouchableOpacity
                      onPress={explorepress} 
                      style ={styles.registerButton}>
                        <Text style ={{color:'white',fontFamily:'Avenir-Roman'}}>TAKE ME IN</Text>
                </TouchableOpacity>
              </ScrollView>
              )}
                </Formik>
            </View>
        </KeyboardAvoidingView>
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop:40
    },
    headertext: {
      color: '#000000',
      justifyContent: 'center',
      textAlign:'center',
      paddingLeft:10,
      fontSize:20,
      fontFamily:'Avenir-Heavy'
    },
    inputtextboxstyle: {
      borderStyle: 'solid', 
      paddingLeft: 10,
      paddingRight: 5,
      overflow: 'hidden', 
      marginBottom: -10, 
      marginTop: 8, 
      borderWidth: 1, 
      borderColor: 'gray', 
      borderRadius: 25,
      marginLeft:20,
      marginRight:20
    },
    labeltext: {
      color: 'black',
      fontFamily: 'Avenir-Roman',
      fontWeight: 'normal',
      marginLeft: 20,
    },
    errtextstyle: {
      fontFamily: 'Avenir-Roman',
      fontWeight: 'normal',
      marginLeft: 30,
      marginTop: 10,
    },
    registerButton: {
      borderRadius:6,
      height:40,
      margin: 20,
      backgroundColor:'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    lottiespin: {
      width: 100,
      height: 100
    }
});