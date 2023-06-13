import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DisplayText,
  Header,
  IconButton,
  LineDivider,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, SIZES,images } from "../../constants";

const MyProfile = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
          
        }}
        title="Profile"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
              marginTop: 5,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
            onPress={() => navigation.goBack()}
          />
          
        }
        rightComponent={
          <IconButton
            containerStyle={{
              width: 180,
              height: 180,
              justifyContent: "center",
              alignItems: "center",
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
              marginTop: 50,
              marginRight: 40,
              
            }}
            icon={images.profile}
            iconStyle={{
              width: 180,
              height: 180,
              borderWidth: 1,
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
              borderRadius: 150,
              marginRight: 60,

              
            }}
            onPress={() => navigation.navigate("Home")}
          />
          
        }
        
    
      />
    );
  }
  

  
  function renderTopInfoBox() {
    return (
      <View
        style={{
          height: SIZES.height / 5,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          marginTop: 280,
        }}
      >
      
      
      
          {/* ID CARD */}
         
        
          <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 5 }}
            onPress={() => navigation.navigate("Overview")}
          >
             <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
              
            }}
            icon={icons.edit}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
            onPress={() => navigation.navigate("Overview")}
          />
          </TouchableOpacity>
          <DisplayText title={"Personal Information"} />
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3,textAlign: "center",marginTop: 10,marginLeft: -215 }}>
           JohnWhick                  
          </Text>
          
        {/* DOB */}
      
    
      </View>
    );
  }
  function renderBottomInfoBox() {
    return (
      <><View
        style={{
          height: SIZES.height / 5,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          
        }}
        
      >
      
        {/* ID CARD */}
        
        <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 5 }}
            onPress={() => navigation.navigate("MyAddress")}
          >
             <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.edit}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2,marginTop: 19, }}
            onPress={() => navigation.navigate("MyAddress")}
          />
          </TouchableOpacity>
          <DisplayText title={"Address Information"} />
        <Text style={{ color: COLORS.darkGray, ...FONTS.body3,textAlign: "center",marginTop: 10,marginLeft: -85 }}>
            Your default shipping address
          </Text>
         
        {/* DOB */}

      </View><Text style={{ color: COLORS.darkGray, ...FONTS.body3, textAlign: "center", marginTop: 50 }}>
        </Text></>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* user information I*/}
      {renderTopInfoBox()}
      {/* user information II*/}
      {renderBottomInfoBox()}
    </View>
  );
};

export default MyProfile;
