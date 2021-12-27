import React,{useState, useRef,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import {
          SafeAreaView,
          ScrollView,
          Text,
          StyleSheet,
          View,
          ImageBackground,
          Animated,
          useWindowDimensions,
          LogBox,
          TouchableOpacity,
          Image
        } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,Feather,FontAwesome5,
         Entypo,FontAwesome,MaterialIcons,
         AntDesign,MaterialCommunityIcons,Foundation } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { Row, Col, Grid } from "react-native-easy-grid";

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

const ProfileScreen = (props) => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(false);

  const backiconclick = () => {
    props.navigation.navigate('dashboard');
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
        <StatusBar backgroundColor="#abbabb" barStyle="light-content" />
              <LinearGradient
                                colors={['#abbabb', '#ffffff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1}}>
                <ImageBackground source={require('../../assets/background.png')} 
                                 style={styles.backgroundImage} />
                  <View style={{flex:0.2,
                      flexDirection:'row',
                      backgroundColor:'transparent',
                      paddingTop:50,
                      marginHorizontal: 20,
                      paddingBottom:2}}>
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
                        <Col size={10}>
                        </Col>
                        <Col size={60}>
                            <Text style ={styles.headingtext}>Profile Card</Text>
                        </Col>
                        <Col size={15}>
                        </Col>
                    </Grid>
                </View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:1}}>
                  <Card containerStyle={{ marginTop: 15,borderRadius:20 }}>
                    <View style={{flexDirection:'row',justifyContent:'center',paddingBottom: 15}}>
                        <Avatar
                                size={80}
                                rounded
                                icon={{name:"user-alt", type:"font-awesome-5", size: 30}}
                                containerStyle={{ backgroundColor: '#000000'}}
                            />
                        
                    </View>
                    <Card.Divider />
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:4,marginBottom:8}}>
                      <FontAwesome 
                            name="id-card" 
                            size={25}
                            style={{paddingRight:20,paddingTop:0}} 
                            color="black" />
                            <Text style ={styles.namestyle}>Sanath S Karanth</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:4,marginBottom:8}}>
                      <Ionicons 
                            name="mail" 
                            size={25}
                            style={{paddingRight:20,paddingTop:0}} 
                            color="black" />
                            <Text style ={styles.namestyle}>sanathsk97@gmail.com</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:4,marginBottom:8}}>
                      <FontAwesome 
                            name="phone" 
                            size={25}
                            style={{paddingRight:20,paddingTop:0}} 
                            color="black" />
                            <Text style ={styles.namestyle}>+91 9449685219</Text>
                    </View>
                  </Card>
                </View>

                <View style={{flex:1}}>
                  <Card containerStyle={{ marginTop: 5,borderRadius:20 }}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:4,marginBottom:8}}>
                      <Ionicons 
                            name="location-sharp" 
                            size={25}
                            style={{paddingRight:10,paddingTop:0}} 
                            color="black" />
                            <Text style ={styles.namestyle}>Shivamogga</Text>
                    </View>
                  </Card>
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
    headingtext: {
        color: '#000000',
        fontSize:24,
        paddingTop:4,
        marginHorizontal: 20,
        fontFamily:'Avenir-Medium'
      },
    namestyle: {
        color: '#8c8c8c',
        fontSize:18,
        fontFamily:'Avenir-Medium'
      },
    headertextwelcome: {
      color: '#727272',
      fontSize:24,
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
    },
    slidecontainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    scrollContainer: {
      height: 240,
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 16,
      borderRadius: 5,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      backgroundColor: "rgba(0,0,0, 0.7)",
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 5
    },
    infoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold"
    },
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "black",
      marginHorizontal: 4
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    cardcontainer: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginTop: 15,
      paddingBottom: 15,
      justifyContent: 'center',
      backgroundColor: "#FBF8F3",
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  },
    cardsubcontainer: {
        flexBasis: '50%',
        paddingVertical: 6,
        paddingTop: 8,
    },
    lottieimage: {
      width: 70, 
      height: 70,
    },
    bottomcard: {
      alignItems: "center",
      justifyContent: "center"
    },
    lineimg: {
      backgroundColor:'#FBF8F3',
      width: 60,
      height: 3,
  },
  backgroundImage: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.9,
  }
});

export default ProfileScreen;


