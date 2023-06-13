import React, { useState } from "react";
import { View, Text, Image, Animated, ImageBackground } from "react-native";
import { TextButton } from "../../components";
import { constants, images, FONTS, SIZES, COLORS } from "../../constants";

const OnBoarding = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    //retreive the dot position
    const dotsPostion = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          
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
                borderRadius: 5,
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



  function renderFooter() {
    return (
      <View
        style={{
          height: 160,
        }}
      >
        {/* Pagination */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Dots />
        </View>
        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
              marginLeft: 150,
              marginBottom: 80,
            }}
          >
            <TextButton
              label="SKIP"
              labelStyle={{
                color: COLORS.darkGray2,
              }}
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
        
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Lets Get Started"
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </View>
        )}
      </View>
    );
  }

  return (
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
        scrollEventThrottle={6}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SIZES.width,marginTop: 1 }}>
              {/* Header */}
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
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
                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
