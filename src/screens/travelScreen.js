import React,{useState, useRef,useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
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
import { Card, ListItem, Button, Icon , Divider } from 'react-native-elements';
import { Row, Col, Grid } from "react-native-easy-grid";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { FontAwesome,Entypo,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons } from '@expo/vector-icons';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

export default function TravelScreen({navigation}) {

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

  const popularplaceData = [
    {
        title:"Sakrebailu",
        description: "18 km from city.",
        image: require('../../assets/travel/sakrebailu/elephant1.jpg')
    },
    {
        title:"Agumbe",
        description: "98 km from city.",
        image:require('../../assets/travel/agumbe/agumbe1.jpg')
    },
    {
        title:"Kavaledurga",
        description: "85 km from city.",
        image:require('../../assets/travel/kavaledurga/kavaledurga4.jpg')
    }
  ]

  const allplaceData = [
    {
        title:"Jog Falls",
        description: "115 km from city.",
        image: require('../../assets/travel/jogfalls/jogfalls7.jpg')
    },
    {
        title:"Kodachadri",
        description: "112 km from city.",
        image:require('../../assets/travel/kodachadri/kodachadri3.jpg')
    },
    {
        title:"Honnemaradu",
        description: "106 km from city.",
        image:require('../../assets/travel/honnemaradu/honne13.jpg')
    },
    {
      title:"Kudli",
      description: "22 km from city.",
      image:require('../../assets/travel/koodli/kudli1.jpg')
    }
  ]

  const backiconclick = () => {
    navigation.navigate('dashboard');
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
      
        <View style={{flex:0.1,flexDirection:'row',backgroundColor:'transparent',paddingTop:20,marginHorizontal: 20,paddingBottom:10}}>
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
                <Col size={20}>
                </Col>
                <Col size={45}>
                    <Text style ={styles.headingtext}>Travel</Text>
                </Col>
                <Col size={20}>
                </Col>
            </Grid>
        </View>

        <ScrollView style={{flex:1}} vertical={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex:1,backgroundColor:'transparent'}}>
              <Text style ={styles.headingtext}>Popular Places</Text>
              <ScrollView  
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        >
                { popularplaceData.map((item,key) => {
                  return(
                    <View key={key} style={{padding:8}}>
                      <Card containerStyle={{borderRadius:10,padding:8,margin:0}}>
                        <View style={styles.imagecontainer}>
                          <Image
                            style={styles.topcardimage}
                            source={item.image}
                          />
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row',paddingTop:4}}>
                          <Text style={styles.cardtitletext}>{item.title}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingTop:2,paddingLeft:4}}>
                        <MaterialCommunityIcons 
                            name="map-marker-radius" 
                            size={28}
                            style={{paddingRight:4,paddingBottom:8}} 
                            color="black" />
                          <Text style={styles.topcarddistancetext}>{item.description}</Text>
                          
                        </View>
                        {/* <Divider orientation="horizontal" style={{marginBottom:4}} /> */}
                        <View style={{padding:10}}>
                          <Button
                              title="EXPLORE"
                              type="outline"
                            />
                        </View>
                      </Card>
                    </View>
                  )
                })}          
                
              </ScrollView>
          </View>

          <View style={{flex:1,backgroundColor:'transparent',paddingTop:10,paddingBottom:15}}>
            <Text style ={styles.headingtext}>All Places</Text>
            { allplaceData.map((item,key) => {
              return(
              <View key={key}>
                <Card containerStyle={{padding:8}}>
                  <View style={styles.imagecontainer}>
                      <Image
                        style={styles.bottomcardimage}
                        source={item.image}
                      />
                  </View>
                  <View style={{justifyContent:'center',flexDirection:'row',paddingTop:4}}>
                      <Text style={styles.cardtitletext}>{item.title}</Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row',paddingTop:2,paddingLeft:4}}>
                          <MaterialCommunityIcons 
                              name="map-marker-radius" 
                              size={28}
                              style={{paddingRight:4,paddingBottom:8}} 
                              color="black" />
                            <Text style={styles.bottomcarddistancetext}>{item.description}</Text>
                            
                          </View>
                  <View style={{padding:8}}>
                  <Button
                      title="EXPLORE"
                      type="solid"
                    />
                  </View>
                </Card>
              </View>
              )
            })}
            
            
          </View>
        </ScrollView>
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
      // marginHorizontal: 20,
      backgroundColor:'#FBF8F3',
      marginTop: 25,
    },
    headingtext: {
      color: '#000000',
      fontSize:24,
      paddingTop:4,
      marginHorizontal: 20,
      fontFamily:'Avenir-Medium'
    },
    cardtitletext: {
      color: '#a9a9a9',
      justifyContent: 'center',
      fontSize:18,
      fontFamily:'Avenir-Heavy',
    },
    topcarddistancetext: {
      color: '#000000',
      justifyContent: 'center',
      fontSize:16,
      fontFamily:'Avenir-Roman',
      width: 150,
      paddingTop: 4,
    },
    bottomcarddistancetext: {
      color: '#000000',
      justifyContent: 'center',
      fontSize:16,
      fontFamily:'Avenir-Roman',
      width: 250,
      paddingTop: 4,
    },
    lottiespin: {
      width: 100,
      height: 100
    },
    imagecontainer: {
      paddingBottom: 0,
    },
    topcardimage: {
      width: 210,
      height: 180,
      borderRadius:8,
    },
    bottomcardimage: {
      width: '100%',
      height: 180,
      borderRadius:8,
    },
});