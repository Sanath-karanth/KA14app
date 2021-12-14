import React,{useState, useRef,useEffect} from 'react';
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
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Card, ListItem, Button, Icon , Divider } from 'react-native-elements';
import { FontAwesome,Entypo,MaterialCommunityIcons,Feather,MaterialIcons } from '@expo/vector-icons';

const fetchFonts = () => {
    return Font.loadAsync({
      'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
      'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
      'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
      'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
    });
  };

const DrawerList = ({navigation}) => {

    const [fontLoaded, setFontLoaded] = useState(false);
    const [dropdown,setDropdown] = useState(false);

    const categorypress = () => {
        setDropdown(!dropdown);
    }

    const homeclick = () => {
        navigation.closeDrawer();
      };

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

    return(
        <View style={styles.container}>
            <ScrollView style={{paddingTop:20,marginBottom:55}}>
            <View style={{flex:1,padding:20,backgroundColor: '#ffffff',borderBottomRightRadius:25,borderBottomLeftRadius:25}}>
                <Text style ={styles.welcometext}>Welcome</Text>
                <TouchableOpacity>
                <Text style ={styles.nametext}>Sanath S karanth</Text>
                </TouchableOpacity>
                {/* <Divider orientation="horizontal" style={{paddingTop:10}} /> */}
            </View>
            <View style={{flex:1,margin:8,marginTop:10}}>
                <Button
                    onPress={homeclick}
                    title="Home"
                    titleStyle={styles.drawertext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <FontAwesome name="home" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                />
            </View>
            <View style={{flex:1,margin:6,marginTop:0}}>
                <Button
                    onPress={categorypress}
                    title={<View
                        style={{
                          flex: 1,
                          flexDirection:'row',
                          justifyContent:'space-between',
                          paddingTop:4,
                        }}>
                        <Text style={styles.drawertext}>
                          Category
                        </Text>
                        {dropdown ? 
                            <Entypo name="chevron-small-down" style={{paddingTop:3}} size={26} color="black" />
                            :
                            <Entypo name="chevron-small-right" style={{paddingTop:3}} size={26} color="black" />
                        }
                      </View>}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <Entypo name="grid" style={{paddingRight:8,paddingBottom:3}} size={24} color="black" />
                    }
                   
                ></Button>
            </View>
            <View>
                <Divider orientation="horizontal" />
            </View>
            {dropdown &&
            <>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Travel"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <Entypo name="globe" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Food"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <MaterialCommunityIcons name="food" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Shopping"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <Feather name="shopping-cart" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Health Care"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <MaterialIcons name="local-hospital" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Education"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <FontAwesome name="book" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            <View style={{flex:1,paddingLeft:30,paddingRight:30,marginTop:-4,paddingTop:10}}>
            <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Banking"
                    titleStyle={styles.drawersubtext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <FontAwesome name="bank" style={{paddingRight:12,paddingBottom:3}} size={20} color="black" />
                    }
                ></Button>
            </View>
            </> 
            }
            
            <View style={{flex:1,margin:8,marginTop:4}}>
                <Button
                    onPress={() => { console.log('pressed'); }}
                    title="About"
                    titleStyle={styles.drawertext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <Entypo name="info-with-circle" style={{paddingRight:12}} size={20} color="black" />
                    }
                />
            </View>
            <View style={{flex:1,margin:8,marginTop:0,paddingBottom:8}}>
                <Button
                    onPress={() => { console.log('pressed'); }}
                    title="Feedback"
                    titleStyle={styles.drawertext}
                    buttonStyle={{ justifyContent: 'flex-start'}}
                    type="clear"
                    icon={
                        <MaterialIcons name="feedback" style={{paddingRight:12}} size={20} color="black" />
                    }
                />
            </View>
            
           
            </ScrollView>
             <View style={styles.bottomView}>
                <Text style ={styles.versiontext}>Version 1.0.0</Text>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //   marginHorizontal: 20,
    },
    welcometext: {
      color: '#CECECE',
      justifyContent: 'center',
      fontSize:30,
      fontFamily:'Avenir-Roman'
    },
    nametext: {
        color: '#000000',
        justifyContent: 'center',
        fontSize:22,
        fontFamily:'Avenir-Book'
      },
      drawertext: {
        color: '#000000',
        // justifyContent: 'center',
        fontSize:18,
        fontFamily:'Avenir-Roman'
      },
      drawersubtext: {
        color: '#000000',
        fontSize:16,
        fontFamily:'Avenir-Book'
      },
      versiontext: {
        color: '#000000',
        fontSize:16,
        fontFamily:'Avenir-Roman',
      },
      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
      }
});

export default DrawerList;