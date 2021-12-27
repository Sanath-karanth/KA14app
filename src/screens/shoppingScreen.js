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
import { useScrollToTop } from '@react-navigation/native';
import { Card, ListItem, Button, Icon , Divider } from 'react-native-elements';
import { Row, Col, Grid } from "react-native-easy-grid";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { FontAwesome,Entypo,MaterialCommunityIcons,
          Feather,MaterialIcons,Ionicons } from '@expo/vector-icons';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};



export default function ShoppingScreen({navigation}) {

  const scrollRef = useRef();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(false);
  const [digitone, setDigitone] = useState(true);
  const [digittwo, setDigittwo] = useState(false);
  const [digitthree, setDigitthree] = useState(false);
  const [digitfour, setDigitfour] = useState(false);

  const [onecolor, setOnecolor] = useState('');
  const [onebgcolor, setOnebgcolor] = useState('');
  const [twocolor, setTwocolor] = useState('');
  const [twobgcolor, setTwobgcolor] = useState('');
  const [threecolor, setThreecolor] = useState('#000000');
  const [threebgcolor, setThreebgcolor] = useState('#FFFFFF');
  const [fourcolor, setFourcolor] = useState('#000000');
  const [fourbgcolor, setFourbgcolor] = useState('#FFFFFF');
  
  const onscrollup = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  const loadertimeout = () => {
    setSpin(true);
    const timer = setTimeout(() => {
      setSpin(false);
      onscrollup();
    }, 3000);
    return () => clearTimeout(timer);
  }

  const popularplaceData = [
    {
        hotelid:'p1',
        title:"Bearys City Center Mall",
        description: "0.7 km from KSRTC Bus Terminal.",
        place: "B H Road",
        image: require('../../assets/shopping/bearys/bearys.jpg')
    },
    {
        hotelid:'p2',
        title:"Reliance Digital Store",
        description: "0 km from KSRTC Bus Terminal.",
        place: "KSRTC Dipo",
        image:require('../../assets/shopping/reliance/reliance3.jpg')
    },
    {
        hotelid:'p3',
        title:"Vishal Mega Mart",
        description: "3 km from KSRTC Bus Terminal.",
        place: "Alkola Circle",
        image:require('../../assets/shopping/vishalmart/vishal3.jpg')
    }
  ]

  const allplaceData1 = [
    {
      hotelid:'1',
      title:"Gandhi Bazar",
      description: "0.75 km from KSRTC Bus Terminal.",
      place: "Gandhi Bazar",
      image:require('../../assets/shopping/gandhibazar/gandhi.jpg')
    },
    {
      hotelid:'2',
      title:"More Supermarket",
      description: "0 km from KSRTC Bus Terminal.",
      place: "KSRTC Dipo",
      image:require('../../assets/shopping/more/more.jpg')
    },
	{
      hotelid:'3', 
      title:"Harsha Showroom",
      description: "1.5 km from KSRTC Bus Terminal.",
      place: "B H Road",
      image:require('../../assets/shopping/harsha/harsha6.jpg')
    },
    {
      hotelid:'4',
      title:"Pai International Showroom",
      description: "1.5 km from KSRTC Bus Terminal.",
      place: "B H Road",
      image:require('../../assets/shopping/pai/pai.jpg')
    }
  ]
  
  const digitoneclick = () => {
    setDigitone(true);
    setDigittwo(false);
    setDigitthree(false);
    setDigitfour(false);
    setOnecolor('#FFFFFF');
    setOnebgcolor('#000000');
    setTwocolor('#000000');
    setTwobgcolor('#DEDEDE');
    setThreecolor('#000000');
    setThreebgcolor('#DEDEDE');
    setFourcolor('#000000');
    setFourbgcolor('#DEDEDE');
    loadertimeout();
  }

  const backiconclick = () => {
    navigation.navigate('dashboard');
  }

  useEffect(() => {
    if(fontLoaded)
    {
      digitoneclick();
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
        <View style={{flex:0.1,
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
                <Col size={15}>
                </Col>
                <Col size={55}>
                    <Text style ={styles.headingtext}>Shopping</Text>
                </Col>
                <Col size={15}>
                </Col>
            </Grid>
        </View>

        <ScrollView style={{flex:1}} ref={scrollRef} vertical={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex:1,backgroundColor:'transparent'}}>
              <Text style ={styles.headingtext}>Popular Places</Text>
              <ScrollView  
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        >
                { popularplaceData.map((item,key) => {
                  return(
                    <View key={key} style={{padding:8}}>
                      <Card containerStyle={{borderRadius:10,padding:8,margin:0,width: 250}}>
                        <View style={styles.imagecontainer}>
                          <Image
                            style={styles.topcardimage}
                            source={item.image}
                          />
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row',paddingTop:4}}>
                          <Text style={styles.cardtitletext}>{item.title}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingTop:4,paddingLeft:4}}>
                          <MaterialCommunityIcons 
                            name="map-marker-radius" 
                            size={28}
                            style={{paddingRight:4,paddingBottom:8}} 
                            color="black" />
                          <Text style={styles.topcarddistancetext}>{item.description}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingTop:0,paddingLeft:4}}>
                          <FontAwesome 
                            name="road" 
                            size={18}
                            style={{paddingLeft:4,paddingRight:6,paddingTop:8}} 
                            color="black" />
                          <Text style={styles.topcardplacetext}>{item.place}</Text>
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
            <Text style ={styles.headingtext}>All Places ({allplaceData1.length})</Text>
            { digitone && allplaceData1.map((item,key) => {
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
                      <Text style={styles.cardtitletext}>{item.hotelid}.{' '}{item.title}</Text>
                  </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:2,paddingLeft:4}}>
                          <MaterialCommunityIcons 
                              name="map-marker-radius" 
                              size={28}
                              style={{paddingRight:4,paddingBottom:8}} 
                              color="black" />
                            <Text style={styles.bottomcarddistancetext}>{item.description}</Text> 
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:0,paddingLeft:4,paddingBottom:8}}>
                          <FontAwesome 
                            name="road" 
                            size={18}
                            style={{paddingLeft:4,paddingRight:6,paddingTop:8}} 
                            color="black" />
                          <Text style={styles.bottomcardplacetext}>{item.place}</Text>
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

          <View style={{flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row',
                paddingBottom:12
                }}>
          </View>
        </ScrollView>
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
      // marginHorizontal: 20,
      backgroundColor:'#FBF8F3',
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
      width: 180,
      paddingTop: 4,
    },
    topcardplacetext: {
        color: '#000000',
        justifyContent: 'center',
        fontSize:16,
        fontFamily:'Avenir-Roman',
        width: 180,
        paddingTop: 4,
      },
    bottomcardplacetext: {
        color: '#000000',
        justifyContent: 'center',
        fontSize:16,
        fontFamily:'Avenir-Roman',
        width: 250,
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
      width: '100%',
      height: 180,
      borderRadius:8,
    },
    bottomcardimage: {
      width: '100%',
      height: 180,
      borderRadius:8,
    },
    digit: {
      color: '#000000',
      fontFamily:'Avenir-Roman',
    },
    digittouch: {
      // color: '#000000',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      // backgroundColor: '#DEDEDE',
      marginRight:12
    },
    vegimg: {
        margin: 5,
        position: "absolute",
        top: 0,
        left: 0,
        width: 25,
        height: 25,
      },
    nonvegimg: {
        margin: 5,
        position: "absolute",
        top: 0,
        right: 0,
        width: 25,
        height: 25,
      }
});