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
      tripid:'p1',
      title:"Sakrebailu",
      description: "18 km from city center.",
      image: require('../../assets/travel/sakrebailu/elephant1.jpg')
    },
    {
      tripid:'p2',
      title:"Agumbe",
      description: "98 km from city center.",
      image:require('../../assets/travel/agumbe/agumbe1.jpg')
    },
    {
      tripid:'p3',
      title:"Kavaledurga",
      description: "85 km from city center.",
      image:require('../../assets/travel/kavaledurga/kavaledurga4.jpg')
    }
  ]

  const allplaceData1 = [
    {
      tripid:'1',
      title:"Mattur",
      description: "10 km from city center.",
      image:require('../../assets/travel/mattur/mattur.jpg')
    },
    {
      tripid:'2',  
      title:"Kudli",
      description: "20 km from city center.",
      image:require('../../assets/travel/koodli/kudli1.jpg')
    },
	{
      tripid:'3', 
      title:"Gajanur Dam",
      description: "20 km from city center.",
      image:require('../../assets/travel/gajanur/gajanur.jpg')
    },
    {
      tripid:'4',
      title:"Badra Wildlife Sanctuary",
      description: "26 km from city center.",
      image:require('../../assets/travel/badrawild/badrawild0.jpg')
    },
    {
      tripid:'5',
      title:"Mandagadde Bird Sanctuary",
      description: "36 km from city center.",
      image:require('../../assets/travel/mandgadde/mandgadde4.jpg')
    },
    {
      tripid:'6',
      title:"Amruthapura",
      description: "47 km from city center.",
      image:require('../../assets/travel/amruthapura/amruthapura5.jpg')
    },
    {
      tripid:'7',
      title:"Kallathigiri Falls",
      description: "60 km from city center.",
      image:require('../../assets/travel/kallathigiri/kallathigiri2.jpg')
    },
    {
      tripid:'8',
      title:"Z-Point Peak",
      description: "66 km from city center.",
      image:require('../../assets/travel/zpoint/zpoint7.jpg')
    },
    {
      tripid:'9',
      title:"Kemmangundi Peak",
      description: "70 km from city center.",
      image:require('../../assets/travel/kemmangundi/kemmangundi7.jpg')
    },
    {
      tripid:'10',
      title:"Bheemankatte Matha",
      description: "71 km from city center.",
      image:require('../../assets/travel/bheemankatte/bheemankatte0.jpg')
    },
  ]
  
const allplaceData2 = [
    {
      tripid:'11',
      title:"Hebbe Falls",
      description: "74 km from city center.",
      image:require('../../assets/travel/hebbe/hebbe1.jpg')
    },
    {
      tripid:'12',  
      title:"Achakanya Falls",
      description: "77 km from city center.",
      image: require('../../assets/travel/achakanya/achakanya.jpg')
    },
    {
      tripid:'13',
      title:"Dabbe Falls",
      description: "79 km from city center.",
      image:require('../../assets/travel/dabbe/dabbe.jpg')
    },
    {
      tripid:'14', 
      title:"Keladi",
      description: "88 km from city center.",
      image:require('../../assets/travel/keladi/keladi.jpg')
    },
    {
      tripid:'15',
      title:"Nagara Fort",
      description: "90 km from city center.",
      image:require('../../assets/travel/nagara/nagara3.jpg')
    },
    {
      tripid:'16',
      title:"Ayyanakere Lake",
      description: "90 km from city center.",
      image:require('../../assets/travel/ayyanakere/ayyanakere4.jpg')
    },
    {
      tripid:'17',
      title:"Kundadri",
      description: "94 km from city center.",
      image:require('../../assets/travel/kundadri/kundadri7.jpg')
    },
    {
      tripid:'18',
      title:"Onake Abbi Falls",
      description: "96 km from city center.",
      image: require('../../assets/travel/onakefalls/onake5.jpg')
    },
    {
      tripid:'19',
      title:"Barkana Falls",
      description: "98 km from city center.",
      image:require('../../assets/travel/barkana/barkana.jpg')
    },
    {
      tripid:'20',
      title:"Jogi Gundi Falls",
      description: "100 km from city center.",
      image:require('../../assets/travel/jogigundi/jogigundi0.jpg')
    },
  ]
  
const allplaceData3 = [
    {
      tripid:'21',
      title:"Kunchikal Falls",
      description: "101 km from city center.",
      image:require('../../assets/travel/kunchikal/kunchi.jpg')
    },
    {
      tripid:'22',  
      title:"Belavadi",
      description: "103 km from city center.",
      image: require('../../assets/travel/belavadi/belavadi1.jpg')
    },
    {
      tripid:'23',
      title:"Honnemaradu",
      description: "106 km from city center.",
      image:require('../../assets/travel/honnemaradu/honne13.jpg')
    },
    {
      tripid:'24', 
      title:"Gudavi Bird Sanctuary",
      description: "106 km from city center.",
      image:require('../../assets/travel/gudavi/gudavi1.jpg')
    },
    {
      tripid:'25',
      title:"Linganamakki Dam",
      description: "106 km from city center.",
      image:require('../../assets/travel/linganamakki/linganamakki0.jpg')
    },
    {
      tripid:'26',
      title:"Sigandur",
      description: "112 km from city center.",
      image:require('../../assets/travel/sigandur/sigandur1.jpg')
    },
    {
      tripid:'27',
      title:"Kodachadri",
      description: "112 km from city center.",
      image:require('../../assets/travel/kodachadri/kodachadri3.jpg')
    },
    {
      tripid:'28',
      title:"Mullayangiri Peak",
      description: "113 km from city center.",
      image:require('../../assets/travel/mullayangiri/mullayangiri.jpg')
    },
    {
      tripid:'29',
      title:"Baba Budan Giri Peak",
      description: "113 km from city center.",
      image:require('../../assets/travel/bababudangiri/bababudangiri4.jpg')
    },
    {
      tripid:'30',
      title:"Deviramma Betta",
      description: "113 km from city center.",
      image:require('../../assets/travel/deviramma/deviramma1.jpg')
    },
  ]
  
const allplaceData4 = [
    {
      tripid:'31',
      title:"Jog Falls",
      description: "115 km from city center.",
      image: require('../../assets/travel/jogfalls/jogfalls7.jpg')
    },
    {
      tripid:'32',  
      title:"Kalasa",
      description: "117 km from city center.",
      image:require('../../assets/travel/kalasa/kalasa0.jpg')
    },
    {
      tripid:'33',
      title:"Hidlumane Falls",
      description: "127 km from city center.",
      image:require('../../assets/travel/hidlumane/hidlumane4.jpg')
    },
    {
      tripid:'34', 
      title:"Ballalarayana Durga Fort",
      description: "127 km from city center.",
      image:require('../../assets/travel/ballalarayanadurga/ballafort0.jpg')
    },
    {
      tripid:'35',
      title:"Kudremukh Peak",
      description: "138 km from city center.",
      image:require('../../assets/travel/kudremukh/kudremukh8.jpg')
    },
    {
      tripid:'36',
      title:"Unchalli Falls",
      description: "146 km from city center.",
      image:require('../../assets/travel/unchalli/unchalli0.jpg')
    },
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

  const digittwoclick = () => {
    setDigitone(false);
    setDigittwo(true);
    setDigitthree(false);
    setDigitfour(false);
    setOnecolor('#000000');
    setOnebgcolor('#DEDEDE');
    setTwocolor('#FFFFFF');
    setTwobgcolor('#000000');
    setThreecolor('#000000');
    setThreebgcolor('#DEDEDE');
    setFourcolor('#000000');
    setFourbgcolor('#DEDEDE');
    loadertimeout();
  }

  const digitthreeclick = () => {
    setDigitone(false);
    setDigittwo(false);
    setDigitthree(true);
    setDigitfour(false);
    setOnecolor('#000000');
    setOnebgcolor('#DEDEDE');
    setTwocolor('#000000');
    setTwobgcolor('#DEDEDE');
    setThreecolor('#FFFFFF');
    setThreebgcolor('#000000');
    setFourcolor('#000000');
    setFourbgcolor('#DEDEDE');
    loadertimeout();
  }

  const digitfourclick = () => {
    setDigitone(false);
    setDigittwo(false);
    setDigitthree(false);
    setDigitfour(true);
    setOnecolor('#000000');
    setOnebgcolor('#DEDEDE');
    setTwocolor('#000000');
    setTwobgcolor('#DEDEDE');
    setThreecolor('#000000');
    setThreebgcolor('#DEDEDE');
    setFourcolor('#FFFFFF');
    setFourbgcolor('#000000');
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
                <Col size={20}>
                </Col>
                <Col size={45}>
                    <Text style ={styles.headingtext}>Travel</Text>
                </Col>
                <Col size={20}>
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
            <Text style ={styles.headingtext}>All Places (36)</Text>
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
                      <Text style={styles.cardtitletext}>{item.tripid}.{' '}{item.title}</Text>
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

            { digittwo && allplaceData2.map((item,key) => {
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
                      <Text style={styles.cardtitletext}>{item.tripid}.{' '}{item.title}</Text>
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

        { digitthree && allplaceData3.map((item,key) => {
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
                      <Text style={styles.cardtitletext}>{item.tripid}.{' '}{item.title}</Text>
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

          { digitfour && allplaceData4.map((item,key) => {
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
                      <Text style={styles.cardtitletext}>{item.tripid}.{' '}{item.title}</Text>
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

          <View style={{flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row',
                paddingBottom:12
                }}>
            <TouchableOpacity
              onPress={digitoneclick}
              style={[styles.digittouch,{backgroundColor:onebgcolor}]}>
              <Text style={[styles.digit,{color:onecolor}]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={digittwoclick}
              style={[styles.digittouch,{backgroundColor:twobgcolor}]}>
              <Text style={[styles.digit,{color:twocolor}]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={digitthreeclick}
              style={[styles.digittouch,{backgroundColor:threebgcolor}]}>
              <Text style={[styles.digit,{color:threecolor}]}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={digitfourclick}
              style={[styles.digittouch,{backgroundColor:fourbgcolor}]}>
              <Text style={[styles.digit,{color:fourcolor}]}>4</Text>
            </TouchableOpacity>
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
      width: 170,
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
      width: 220,
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
});