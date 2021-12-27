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



export default function FoodScreen({navigation}) {

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
        title:"Royal Orchid Central",
        description: "0.4 km from KSRTC Bus Terminal.",
        place: "B H Road",
        category:'both',
        image: require('../../assets/food/royal/royal.jpg')
    },
    {
        hotelid:'p2',
        title:"Jewel Rock",
        description: "1.2 km from KSRTC Bus Terminal.",
        place: "JPN Road, Durgigudi.",
        category:'both',
        image:require('../../assets/food/jewelrock/jewel0.jpg')
    },
    {
        hotelid:'p3',
        title:"Anmol Pure Veg",
        description: "1.2 km from KSRTC Bus Terminal.",
        place: "Durgigudi Road",
        category:'veg',
        image:require('../../assets/food/anmolveg/anmol0.jpg')
    },
    {
        hotelid:'p4',
        title:"Ashoka Grand",
        description: "1.6 km from KSRTC Bus Terminal.",
        place: "Sagar Road",
        category:'veg',
        image:require('../../assets/food/ashokagrand/ashoka.jpg')
    }
  ]

  const allplaceData1 = [
    {
      hotelid:'1',
      title:"Samrat ashoka",
      description: "0.45 km from KSRTC Bus Terminal.",
      place: "B H Road",
      category:'veg',
      image:require('../../assets/food/samrat/samrat.jpg')
    },
    {
      hotelid:'2',
      title:"Sri Sai International",
      description: "3 km from KSRTC Bus Terminal.",
      place: "Gopala Gowda Extension",
      category:'both',
      image:require('../../assets/food/srisai/srisai2.jpg')
    },
	{
      hotelid:'3', 
      title:"Harsha the Fern",
      description: "4.8 km from KSRTC Bus Terminal.",
      place: "Sagar Road",
      category:'both',
      image:require('../../assets/food/harsha/harsha1.jpg')
    },
    {
      hotelid:'4',
      title:"Shubham",
      description: "0.9 km from KSRTC Bus Terminal.",
      place: "LLR Road, Durgigudi",
      category:'veg',
      image:require('../../assets/food/shubham/shubham0.jpg')
    },
    {
      hotelid:'5',
      title:"Surya Comforts",
      description: "1.2 km from KSRTC Bus Terminal.",
      place: "Durgigudi Road",
      category:'veg',
      image:require('../../assets/food/surya/surya.jpg')
    },
    {
      hotelid:'6',
      title:"Akash Inn",
      description: "1.4 km from KSRTC Bus Terminal.",
      place: "Durgigudi Road",
      category:'both',
      image:require('../../assets/food/akashinn/akashinn.jpg')
    },
    {
      hotelid:'7',
      title:"Lakshmi Palace",
      description: "2.1 km from KSRTC Bus Terminal.",
      place: "Sagar Road",
      category:'veg',
      image:require('../../assets/food/laxshmi/laxshmi.jpg')
    },
    {
      hotelid:'8',
      title:"Bright Palace",
      description: "1.4 km from KSRTC Bus Terminal.",
      place: "Tilak Nagar, Durgigudi",
      category:'both',
      image:require('../../assets/food/bright/bright.jpg')
    },
    {
      hotelid:'9',
      title:"Mathura Paradise",
      description: "1.2 km from KSRTC Bus Terminal.",
      place: "Mahaveera Circle Road",
      category:'veg',
      image:require('../../assets/food/mathura/mathura.jpg')
    },
    {
      hotelid:'10',
      title:"Cliff Embassey",
      description: "1.5 km from KSRTC Bus Terminal.",
      place: "Kuvempu Road, Sharavathi Nagar",
      category:'both',
      image:require('../../assets/food/cliff/cliff.jpg')
    },
  ]
  
const allplaceData2 = [
    {
      hotelid:'11',
      title:"Rice Bowl (Green View)",
      description: "2.2 km from KSRTC Bus Terminal.",
      place: "Railway Station Road",
      category:'both',
      image:require('../../assets/food/ricebowl/ricebowl.jpg')
    },
    {
      hotelid:'12',  
      title:"Atithi Pure Veg",
      description: "1.2 km from KSRTC Bus Terminal.",
      place: "Durgigudi Road",
      category:'veg',
      image:require('../../assets/food/atithi/atithi.jpg')
    },
    {
      hotelid:'13',
      title:"Vidhatri Bhavan",
      description: "2.3 km from KSRTC Bus Terminal.",
      place: "Savalanga Road, Gandhi Nagar",
      category:'veg',
      image:require('../../assets/food/vidhatri/vidhatri.jpg')
    },
    {
      hotelid:'14', 
      title:"Meenakshi Bhavan",
      description: "1.7 km from KSRTC Bus Terminal.",
      place: "Meenakshi Bhavan Stop",
      category:'veg',
      image:require('../../assets/food/meenakshi/meenakshi0.jpg')
    },
    {
      hotelid:'15',
      title:"Shanthi Sagar",
      description: "1.5 km from KSRTC Bus Terminal.",
      place: "Kuvempu Road",
      category:'veg',
      image:require('../../assets/food/shantisagar/shanti0.jpg')
    },
    {
      hotelid:'16',
      title:"Isiri Milti Cuisine",
      description: "0.8 km from KSRTC Bus Terminal.",
      place: "Durgigudi Road",
      category:'both',
      image:require('../../assets/food/isiri/isiri.jpg')
    },
    {
      hotelid:'17',
      title:"Bon Appetit",
      description: "4 km from KSRTC Bus Terminal.",
      place: "APMC Market Road",
      category:'both',
      image:require('../../assets/food/bon/bon0.jpg')
    },
    {
      hotelid:'18',
      title:"Lassi Plus",
      description: "2.3 km from KSRTC Bus Terminal.",
      place: "Savalanga Road",
      category:'veg',
      image:require('../../assets/food/lassi/lassi.jpg')
    },
    {
      hotelid:'19',
      title:"Ibaco",
      description: "2.4 km from KSRTC Bus Terminal.",
      place: "Rajendra Nagar",
      category:'veg',
      image:require('../../assets/food/ibaco/ibaco7.jpg')
    },
    {
      hotelid:'20',
      title:"Cafe Charcoal",
      description: "3 km from KSRTC Bus Terminal.",
      place: "Gopala Gowda Extension",
      category:'veg',
      image:require('../../assets/food/cafe/cafe0.jpg')
    },
  ]
  
const allplaceData3 = [
    {
      hotelid:'21',
      title:"Domino's Pizza",
      description: "0.7 km from KSRTC Bus Terminal.",
      place: "B H Road",
      category:'both',
      image:require('../../assets/food/dominos/dominos.jpg')
    },
    {
      hotelid:'22',  
      title:"Pizza Hut",
      description: "1.2 km from KSRTC Bus Terminal.",
      place: "Tilak Nagar, Durgigudi",
      category:'both',
      image:require('../../assets/food/pizzahut/pizzahut0.jpg')
    },
    {
      hotelid:'23',
      title:"KFC",
      description: "1.2 km from KSRTC Bus Terminal.",
      place: "Tilak Nagar, Durgigudi",
      category:'both',
      image:require('../../assets/food/kfc/kfc0.jpg')
    },
    {
      hotelid:'24', 
      title:"Polar Bear",
      description: "4.3 km from KSRTC Bus Terminal.",
      place: "LBS Nagar",
      category:'veg',
      image:require('../../assets/food/polar/polar3.jpg')
    },
    {
      hotelid:'25',
      title:"Panchatara Ice Cream",
      description: "1 km from KSRTC Bus Terminal.",
      place: "Gopi Circle",
      category:'veg',
      image:require('../../assets/food/panchatara/panchatara.jpg')
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
                    <Text style ={styles.headingtext}>Food</Text>
                </Col>
                <Col size={15}>
                </Col>
            </Grid>
        </View>

        <ScrollView style={{flex:1}} ref={scrollRef} vertical={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex:1,backgroundColor:'transparent'}}>
              <Text style ={styles.headingtext}>Popular Restaurants</Text>
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
                          { item.category === 'veg' && 
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                          }
                          { item.category === 'nonveg' &&
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                          }
                          { item.category === 'both' &&
                            <>
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                            </>
                          }
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
            <Text style ={styles.headingtext}>All Restaurants ({allplaceData1.length+allplaceData2.length+allplaceData3.length})</Text>
            { digitone && allplaceData1.map((item,key) => {
              return(
              <View key={key}>
                <Card containerStyle={{padding:8}}>
                  <View style={styles.imagecontainer}>
                          <Image
                            style={styles.bottomcardimage}
                            source={item.image}
                          />
                          { item.category === 'veg' && 
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                          }
                          { item.category === 'nonveg' &&
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                          }
                          { item.category === 'both' &&
                            <>
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                            </>
                          }
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

            { digittwo && allplaceData2.map((item,key) => {
              return(
                <View key={key}>
                <Card containerStyle={{padding:8}}>
                  <View style={styles.imagecontainer}>
                          <Image
                            style={styles.bottomcardimage}
                            source={item.image}
                          />
                          { item.category === 'veg' && 
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                          }
                          { item.category === 'nonveg' &&
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                          }
                          { item.category === 'both' &&
                            <>
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                            </>
                          }
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

        { digitthree && allplaceData3.map((item,key) => {
              return(
                <View key={key}>
                <Card containerStyle={{padding:8}}>
                  <View style={styles.imagecontainer}>
                          <Image
                            style={styles.bottomcardimage}
                            source={item.image}
                          />
                          { item.category === 'veg' && 
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                          }
                          { item.category === 'nonveg' &&
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                          }
                          { item.category === 'both' &&
                            <>
                            <Image
                            resizeMode="cover"
                            style={styles.vegimg}
                            source={require('../../assets/food/vegicon.png')}
                            />
                            <Image
                            resizeMode="cover"
                            style={styles.nonvegimg}
                            source={require('../../assets/food/nonvegicon.png')}
                            />
                            </>
                          }
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