import React, { useState } from "react";
import { View, Text, Image, Animated, ImageBackground } from "react-native";




import { useDrawerProgress } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../store/tab/tabActions";


import {
  SIZES,
  COLORS,
  FONTS,
  icons,
  constants,
  dummyData,
  images,
} from "../constants";
import { Header, TabButton,TextButton, IconButton, } from "../components";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useRef } from "react";

const MainLayout = ({ navigation, selectedTab, setSelectedTab }) => {
  //FlatList Ref
  const flatListRef = useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  
 

  
  const progress = useDrawerProgress();

  


  const Dots = () => {
    //retreive the dot position
    const dotsPostion = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop:-150,
          
          
          
          
        }}
      >
      
      
      
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotsPostion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightGray1,
              COLORS.primary,
              COLORS.lightGray1,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotsPostion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 10, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 15,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
                
              }}
            />
          );
        })}
      </View>
    );
  };
  

  function renderOnboard() {
    return (
      <View
        style={{
          height: 350,
          marginTop: 25,
        }}
      >
        {/* Pagination */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Dots />
          
        </View>
        <View style={{  }}>
        
        <TextButton
              label="Direct Delivery (To Your Doorstep)"
              buttonContainerStyle={{
                height: 160,
                borderRadius: SIZES.radius,
                marginTop: -100,
              }}
              onPress={() => {
                navigation.navigate("Vehicle");
              }}
              
            />
            
            
            </View>
            <View style={{  }}>
            <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -130,
              marginLeft: 160,
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.navigator3}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.white}}
           
          />

            </View>
           
        
            <View style={{  }}>
        {/* Buttons */}
        <TextButton
              label="Choose Pick up Station"
            onPress={() =>  navigation.navigate("Map")}
              buttonContainerStyle={{
                height: 160,
                borderRadius: SIZES.radius,
                marginTop: 50,
                backgroundColor:"#002248"
                
                
              }}
             
              
            />
            </View>
            <View style={{  }}>
            <IconButton
            containerStyle={{
              width: 50,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -130,
              marginLeft: 160,
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.pickup}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.white}}
           
          />

            </View>
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
              marginLeft: 150,
              marginTop: 250,
            }}
          >
          
          
            
        
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
          
         
          </View>
          
        )}
      </View>
      
      
      
    );
  }
  
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        
        
      }}
    >
      {/* Header */}
      <View style={{  }}>
         
          
        
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
             
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              width: 40,
              height: 40,
            }}
            onPress={() =>  navigation.navigate("Notification")}
          >
         <Image source={icons.notification2} />
          </TouchableOpacity>
        }
      />
      </View>
      
     
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
           
            borderTopLeftRadius: 120,
            borderTopRightRadius: 120,
            backgroundColor: COLORS.white,
            marginTop: 10,
          }}
        >
         <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        
        
      }}
    >
     
      <Animated.FlatList
        horizontal
        pagingEnabled
        ref={flatListRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        data={constants.onboarding_screens}
        scrollEventThrottle={3}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            
            <View style={{ width: SIZES.width,marginTop: -200, }}>
              {/* Header */}
              <View style={{ flex: 8,marginTop: 100, }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: index == 1 ? "93%" : "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>
              
              {/* Detail */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
              
              </View>
            </View>
          );
        }}
      />
      {renderOnboard()}
      
    </View>
    
    

       
        </View>
     
    </Animated.View>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
