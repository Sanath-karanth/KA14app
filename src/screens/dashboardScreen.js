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
import { Ionicons,Feather,FontAwesome5,Entypo,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLoader from "react-native-animated-loader";
// import PagerView from 'react-native-pager-view';
import Carousel from 'react-native-snap-carousel';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const fetchFonts = () => {
  return Font.loadAsync({
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  });
};

const images = new Array(4).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

const Drawer = createDrawerNavigator();

const DashboardScreen = (props) => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [spin, setSpin] = useState(false);
  const animationtravel = useRef(null);
  const animationfood = useRef(null);
  const animationshopping = useRef(null);
  const animationhealthcare = useRef(null);
  const animationeducation = useRef(null);
  const animationbank = useState(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])

    const toggleDrawer = () => {
      props.navigation.toggleDrawer();
    };

    const travelclick = () => {
      props.navigation.navigate('travel');
    };

  const explorepress = () => {
    setSpin(true);
    const timer = setTimeout(() => {
      setSpin(false);
      navigation.navigate('register');
    }, 4000);
    return () => clearTimeout(timer);
  }

    const carouselItems = [
        {
            title:"Shivamogga",
            text: "Text 1",
            image: require('../../assets/shivamogga/nightview.jpg')
        },
        {
            title:"KSRTC",
            text: "Text 3",
            image:require('../../assets/shivamogga/mapview.jpg')
        },
        {
            title:"Bears City Center",
            text: "Text 4",
            image:require('../../assets/shivamogga/citycenter1.jpg')
        },
        {
          title:"Tunga River",
          text: "Text 5",
          image:require('../../assets/shivamogga/bridge.jpg')
      }
      ]

      const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        }];

 
  const _renderItem = ({item,index}) => {
    return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }


  useEffect(() => {
    if(fontLoaded)
    {
      animationtravel.current.play();
      animationfood.current.play();
      animationshopping.current.play();
      animationhealthcare.current.play();
      animationeducation.current.play();
      animationbank.current.play();
      // return null;
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
                                  <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage} />
                <View style={{ flex: 0.1,
                               paddingTop: 50,
                               flexDirection:'row',
                               justifyContent:'space-around'}}>
                  <TouchableOpacity onPress={toggleDrawer}>
                    <MaterialIcons 
                        style={{ justifyContent:'center',
                                 transform: [{rotate: '90deg'}]}} 
                        name="bar-chart" 
                        size={35} 
                        color="black" />
                  </TouchableOpacity>
                  
                  <Text style ={styles.headertextwelcome}>Welcome to {''}
                    <Text style ={styles.headertextgatway}>KA-14</Text>
                  </Text>

                  <TouchableOpacity>
                    <FontAwesome style={{ justifyContent:'center',paddingTop: 5}} name="bell" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <ScrollView vertical={true} style={{flex: 1}} bounces={false}>
                <SafeAreaView style={styles.slidecontainer}>
                  <View style={styles.scrollContainer}>
                    <ScrollView
                      horizontal={true}
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      onScroll={Animated.event([
                        {
                          nativeEvent: {
                            contentOffset: {
                              x: scrollX,
                            }
                          }
                        }
                      ])}
                      
                      scrollEventThrottle={1}
                    >
                      {carouselItems.map((imgitem, imageIndex) => {
                        return (
                          <View
                            style={{ width: windowWidth, height: 210 }}
                            key={imageIndex}
                          >
                            <ImageBackground source={imgitem.image} style={styles.card}>
                              <View style={styles.textContainer}>
                                <Text style={styles.infoText}>
                                  {imgitem.title}
                                </Text>
                              </View>
                            </ImageBackground>
                          </View>
                        );
                      })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                      {carouselItems.map((imgitem, imageIndex) => {
                        const width = scrollX.interpolate({
                          inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1)
                          ],
                          outputRange: [8, 16, 8],
                          extrapolate: "clamp"
                        });
                        return (
                          <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { width }]}
                          />
                        );
                      })}
                    </View>
                  </View>
                </SafeAreaView>

                <View style={styles.cardcontainer}>
                  <View style={{flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                flexBasis: '100%',
                                marginTop:20}}>
                  {/* <Ionicons name="remove-outline" size={30} color="black" /> */}
                  {/* <Text style={styles.headertextgatway}>Category</Text> */}
                    <Image
                        style={styles.lineimg}
                        source={require('../../assets/grayline.jpg')}>
                    </Image>
                    
                  </View>
                  
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity onPress={travelclick}>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Travel</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationtravel}
                              source={require('./../lotties/travel/23697-travelling-icon-animation.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Food</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationfood}
                              source={require('./../lotties/food/17100-food.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Shopping</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationshopping}
                              source={require('./../lotties/shopping/86539-shopping-cart-icon.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Health Care</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationhealthcare}
                              source={require('./../lotties/healthcare/4096-heal.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Education</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationeducation}
                              source={require('./../lotties/education/28893-book-loading.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardsubcontainer}>
                      <TouchableOpacity>
                        <Card containerStyle={{backgroundColor:'#FFFFFF'}}>
                          <Card.Title>Banking</Card.Title>
                            {/* <Card.Divider/> */}
                          <View style={styles.bottomcard}>
                          <LottieView
                              autoPlay={false} 
                              style={styles.lottieimage}
                              ref={animationbank}
                              source={require('./../lotties/banking/62796-bank.json')}
                          />
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>

                  </View>
                </ScrollView>                
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
    headertextgatway: {
      color: '#000000',
      fontSize:24,
      fontFamily:'Avenir-Roman'
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

export default DashboardScreen;


