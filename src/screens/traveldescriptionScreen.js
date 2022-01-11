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
            TextInput,
            Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,Feather,FontAwesome5,Entypo,FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Input,Button,Rating, RatingProps,AirbnbRating } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { Row, Col, Grid } from "react-native-easy-grid";
import { SliderBox } from "react-native-image-slider-box";

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

export default function TraveldescriptionScreen({navigation}) {

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

const loadertimeout = () => {
    setSpin(true);
    const timer = setTimeout(() => {
      setSpin(false);
    }, 3000);
    return () => clearTimeout(timer);
  }

  const backiconclick = () => {
    navigation.navigate('dashboard');
  }

  const slideimages = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",         
  ]
  
  useEffect(() => {
    if(fontLoaded)
    {
        loadertimeout();
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
          {/* <View style={styles.imagecontainer}>
                    <Image
                    style={styles.topcardimage}
                    source={require('../../assets/travel/mattur/mattur.jpg')}
                    />
          </View> */}
          <View>
          <SliderBox
            images={slideimages}
            sliderBoxHeight={200}
            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            // inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
          />
          </View>

        <View style={{flex:1,
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
        
        <AnimatedLoader
              visible={spin}
              overlayColor="rgba(0,0,0,0.5)"
              source={require('./../lotties/loader/53635-loader.json')}
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
      imagecontainer: {
        flex:1,
        padding: 4,
      },
      topcardimage: {
        width: '100%',
        height: 300,
        // resizeMode: 'contain',
        // flex: 1,
        // aspectRatio: 1 ,
        borderRadius:8,
      },
});