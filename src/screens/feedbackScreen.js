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
            Platform,
            TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,Feather,FontAwesome5,Entypo,FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Input,Button,Rating, RatingProps,AirbnbRating } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { Row, Col, Grid } from "react-native-easy-grid";
import { Formik } from 'formik';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

export default function FeedbackScreen({navigation}) {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(true);
  
  const [nameerr, setNameerr] = useState(false);
  const [feedbackerr, setFeedbackerr] = useState(false);
  const [phoneerr, setPhoneerr] = useState(false);
  const [cityerr, setCityerr] = useState(false);

  const animation = useRef(null);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = '* Username is required.';
    }else if (!/^[A-Za-z\b]+$/.test(values.username)) {
        errors.username = 'Please enter a Valid username.';
  }

     if (!values.feedback) {
        errors.feedback = '* Feedback is required.';
    } else if (!/^[A-Za-z\b]+$/.test(values.feedback)) {
        errors.feedback = 'Please enter a Valid Feedback.';
    }

    if (!values.phoneno) {
        errors.phoneno = '* Phone no is required.';
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

  const takemePress = () => {
    setSpin(true);
    const timer = setTimeout(() => {
      setSpin(false);
      navigation.navigate('dashboard');
    }, 4000);
    return () => clearTimeout(timer);
  }

  const backiconclick = () => {
    navigation.navigate('dashboard');
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
              source={require('./../lotties/loader/53635-loader.json')}
              animationStyle={styles.lottiespin}
              speed={1}
            >
        </AnimatedLoader>
        
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 30}
            style={{ flex: 1}}
          >
           <View style={{flex:0.8,
                      flexDirection:'row',
                      backgroundColor:'transparent',
                      paddingTop:30,
                      marginHorizontal: 20,
                      paddingBottom:0
                      }}>
            <Grid>
                <Col size={15}>
                  <Button
                    type="clear"
                    onPress={backiconclick}
                    buttonStyle={{
                        backgroundColor: "#dedede",
                        borderRadius: 30
                    }}
                    containerStyle={{borderRadius: 30}}
                    icon={<MaterialIcons name="arrow-back-ios" style={{paddingLeft:6}} size={30} color="black" />}
                    />
                    </Col>
                    <Col size={15}>
                    </Col>
                    <Col size={55}>
                        <Text style ={styles.headingtext}>Feedback</Text>
                    </Col>
                    <Col size={15}>
                    </Col>
                </Grid>
            </View>
              <View style={{flex:1.2}}>
                <LottieView
                          ref={animation}
                          loop={false}
                          source={require('./../lotties/image/10028-feedback.json')}
                      />
              </View>
              <View style={{flex:5,marginTop:15}}>
              <Formik initialValues={{ username: '', feedback: '' , phoneno: '' , city: '' }} 
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
                    //   label="UserName"
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

                <View style={styles.textAreaContainer} >
                    <TextInput
                    style={styles.textArea}
                    value={values.feedback}
                    onChangeText={handleChange('feedback')}
                    textAlignVertical= 'top'
                    underlineColorAndroid="transparent"
                    placeholder="Enter Your valuable Feedback."
                    placeholderTextColor="lightgrey"
                    numberOfLines={8}
                    multiline={true}
                    />
                </View>
                <Text style={styles.errtextstylefeedback}>
                    {errors.feedback}
                </Text>
                <View
                        style={{
                            justifyContent: 'flex-start',
                            backgroundColor: 'black',
                            borderRadius: 10,
                            marginLeft: 25,
                            marginRight: 25,
                        }}
                        >
                        <AirbnbRating
                            selectedColor="orange"
                            reviewColor="orange"
                            count={5}
                            reviews={["Rating: 1/5", "Rating: 2/5", "Rating: 3/5", "Rating: 4/5", "Rating: 5/5"]}
                            defaultRating={5}
                            size={28}
                            // ratingContainerStyle={{marginLeft:14}}
                            starContainerStyle={{ padding: 10,marginLeft: 25,marginBottom: 10,marginRight: 25, backgroundColor: 'transparent' }}
                            // onFinishRating={setRating}
                        />
                    </View>
                 

                <TouchableOpacity
                      onPress={takemePress} 
                      style ={styles.registerButton}>
                        <Text style ={{color:'white',fontFamily:'Avenir-Roman'}}>SUBMIT</Text>
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
    headingtext: {
        color: '#000000',
        fontSize:24,
        paddingTop:4,
        marginHorizontal: 20,
        fontFamily:'Avenir-Medium'
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
      fontFamily: 'Avenir-Roman',
      fontWeight: 'normal',
      marginLeft: 20,
    },
    errtextstyle: {
      fontFamily: 'Avenir-Roman',
      fontWeight: 'normal',
      marginLeft: 30,
      marginTop: 12,
      color:'red',
    },
    errtextstylefeedback: {
        fontFamily: 'Avenir-Roman',
        fontWeight: 'normal',
        marginLeft: 30,
        marginBottom: 12,
        color:'red',
      },
    registerButton: {
      borderRadius:6,
      height:40,
      marginLeft: 20,
      marginRight: 20,
      marginBottom:20,
      marginTop:20,
      backgroundColor:'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    lottiespin: {
      width: 100,
      height: 100
    },
    textAreaContainer: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',  
        padding: 20,
        overflow: 'hidden', 
        marginTop: 10, 
        borderRadius: 25,
        marginLeft:25,
        marginRight:25
      },
      textArea: {
        fontFamily: 'Avenir-Roman',
        fontWeight: 'normal',
        fontSize:18,
        justifyContent: "flex-start"
      }
});