import React,{useState, useRef,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
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
            Image,
            useWindowDimensions  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,Feather,FontAwesome5,Entypo,FontAwesome,MaterialCommunityIcons,MaterialIcons,AntDesign } from '@expo/vector-icons';
import { Input,Button,Rating, RatingProps,AirbnbRating,Card } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
import { Row, Col, Grid } from "react-native-easy-grid";
import { SliderBox } from "react-native-image-slider-box";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ViewMoreText from 'react-native-view-more-text';

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

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'About' },
    { key: 'second', title: 'Overview' },
  ]);

  const FirstRoute = () => (
      <ScrollView style={styles.aboutdesp}>
        <View style={{ padding: 15}}>
        <ViewMoreText
            numberOfLines={9}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
            //textStyle={{fontFamily: 'Avenir-Roman',color:'red'}}
            >
            <Text>On the Shimoga Thirthahalli road, around 14 km from Shimoga is the Sakrebailu Elephant Camp. The camp houses several captive elephants. Sakrebailu is an eco-tourism center. The elephants in these camps are trained by skilled Mahouts. The camp is located on the banks of the River Tunga.</Text>
            <Text>On the Shimoga Thirthahalli road, around 14 km from Shimoga is the Sakrebailu Elephant Camp. The camp houses several captive elephants. Sakrebailu is an eco-tourism center. The elephants in these camps are trained by skilled Mahouts. The camp is located on the banks of the River Tunga.</Text>
        </ViewMoreText>
        </View>
      </ScrollView>
  );
  
  const SecondRoute = () => (
    <View style={styles.overviewdesp}>
      <View style={styles.overviewsubdesp}>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.cardsubhead}>Rating</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Entypo 
                  name="star" 
                  size={24}
                  style={{paddingRight:0}} 
                  color="#FF9529" />
              <Text style={styles.cardhead}>4.5</Text> 
            </View>
          </Card>
      </View>
      <View style={styles.overviewsubdesp}>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.cardsubhead}>Distance</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Entypo 
                  name="location-pin" 
                  size={24}
                  style={{paddingRight:4}} 
                  color="#FF0000" />
              <Text style={styles.cardhead}>4.5 km</Text> 
            </View>
          </Card>
      </View>
      <View style={styles.overviewsubdesp}>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.cardsubhead}>Duration</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <MaterialCommunityIcons 
                  name="clock" 
                  size={22}
                  style={{paddingRight:4}} 
                  color="#000000" />
              <Text style={styles.cardhead}>2 hr</Text> 
            </View>
          </Card>
      </View>
      <View style={styles.overviewsubdesp}>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.cardsubhead}>Temperature</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Entypo 
                  name="cloud" 
                  size={20}
                  style={{paddingRight:4}} 
                  color="#A3E8FD" />
              <Text style={styles.cardhead}>50 &deg;C</Text> 
            </View>
          </Card>
      </View>
    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <Text
              size={20}
              style={{ color: 'black', margin: 8 }}>
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={{ backgroundColor: 'black'}}
        style={{backgroundColor: '#FFFFFF'}}
      />
    );
  };
 
  const renderViewMore = (handlePress) => {
    return (
      <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  const renderViewLess = (handlePress) => {
    return (
      <Text style={{color: 'red', marginTop: 5}} onPress={handlePress}>
        Read less
      </Text>
    );
  }

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
        <StatusBar backgroundColor="#abbabb" barStyle="light-content" />
          <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow:1}}>
          
            <SliderBox
              images={slideimages}
              sliderBoxHeight={280}
              // style={{paddingLeft:0}}
              // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              dotColor="#FFFFFF"
              // inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              inactiveDotColor="#c3c3c3"
              // resizeMode={'cover'}
              ImageComponentStyle={{borderTopLeftRadius: 15,borderTopRightRadius:15, width: '97%'}}
            >
            </SliderBox>
            <Button
                      type="clear"
                      onPress={backiconclick}
                      buttonStyle={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: 30
                      }}
                      containerStyle={{borderRadius: 30,position:'absolute',left:15,top:15}}
                      icon={<MaterialIcons name="arrow-back-ios" style={{padding:0,left:5}} size={30} color="black" />}
                      />
            

            <View style={{flex:0.5,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingTop:10,
                        marginHorizontal: 0,
                        paddingRight:20
                        }}>
                          <Grid>
                      <Col size={95}>
                        <Row style={{marginVertical:2}}>
                          <Text style ={styles.titletext}>Sakrebailu SakrebailuSakrebailu  </Text>
                        </Row>
                        <Row style={{marginVertical:-8}}>
                        <MaterialCommunityIcons 
                            name="map-marker-radius" 
                            size={20}
                            style={{paddingLeft: 20,paddingRight:4}} 
                            color="black" />
                            <Text style ={styles.subtitletext}>Shivamogga</Text>
                        </Row>
                      </Col>
                      <Col size={5}>
                        <FontAwesome name="bookmark-o" size={24} color="black" style={{paddingTop:10}} />
                        {/* <FontAwesome name="bookmark" size={24} color="black" style={{paddingTop:10}} /> */}
                      </Col>
                  </Grid>
              </View>

          {/* <View style={{flex:1,
                        flexDirection:'row',
                        backgroundColor:'transparent',
                        paddingTop:8,
                        marginHorizontal: 0,
                        paddingBottom:0
                        }}>

                  
              <Grid>
                  <Col size={15}>
                    
                      </Col>
                      <Col size={15}>
                      </Col>
                      <Col size={55}>
                          <Text style ={styles.headingtext}>Feedback</Text>
                      </Col>
                      <Col size={15}>
                      </Col>
                  </Grid>
              </View> */}
              <View style={{flex:4}}>
              <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width }}
                  renderTabBar={renderTabBar}
                />
                
              </View>
              <View>
              <TouchableOpacity
                      // onPress={takemePress} 
                      style ={styles.registerButton}>
                        <Text style ={{color:'white',fontFamily:'Avenir-Roman'}}>GET DIRECTION</Text>
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
      paddingTop:40,
      backgroundColor:'#FFFFFF'
    },
    titletext: {
      color: '#000000',
      fontSize:20,
      paddingLeft: 20,
      fontFamily:'Avenir-Medium'
    },
    subtitletext: {
        color: '#a9a9a9',
        fontSize:14,
        fontFamily:'Avenir-Roman'
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
      marginTop:10,
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
      aboutdesp: {
        flex: 1,
        backgroundColor:'#FFFFFF'
      },
      overviewdesp: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#FFFFFF",
      },
      overviewsubdesp: {
        flexBasis: '50%',
      },
      cardhead: {
        color: '#000000',
        fontSize:18,
        fontFamily:'Avenir-Heavy'
      },
      cardsubhead: {
        color: '#a9a9a9',
        fontSize:14,
        fontFamily:'Avenir-Roman'
      },
});