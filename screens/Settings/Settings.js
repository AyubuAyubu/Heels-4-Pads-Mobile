import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";
import {
  DisplayText,
  Header,
  IconButton,
  CustomSwitch,
  FormInput,
  LineDivider,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, SIZES, images } from "../../constants";
import { PrivateValueStore } from "@react-navigation/native";



const Settings = ({ navigation }) => {
  function renderHeader() {
    return (

      <Header

        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="Settings"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",


              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, marginRight: 20, height: 20, tintColor: COLORS.black }}
            onPress={() => navigation.goBack()}
          />

        }



      />
    );
  }


  const [saveMe, setSaveMe] = useState(false);
  function renderTopInfoBox() {
    return (
     
      <View
        style={{
          height: SIZES.height / 1,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          marginTop: 1,
        }}
      >








<Text style={{ color: COLORS.black, ...FONTS.body3, textAlign: "justify", marginTop: 30, marginRight: 1 }}>
          General Settings

        </Text>
     
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
        <IconButton
            containerStyle={{
              width: 10,
              height: 10,
             
             
              
            }}
            icon={icons.dropdown}
            iconStyle={{ width: 22,marginLeft: 290, height: 25, tintColor: COLORS.black,marginTop:-10, }}
            
         
          />          
          Account Settings

        </Text>
        

        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: -20, marginLeft: 24 }}>
        


        </Text>
        
        <TouchableOpacity
            style={{ }}
            onPress={() => navigation.navigate("ChangePassword")}
          >
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginLeft: 25 }}>
          Change Password
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ }}
            onPress={() => navigation.navigate("Verify")}
          >
          <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginLeft: 25 }}>
          Verify phone
          

        </Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{ }}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
          Privacy

        </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{ }}
            onPress={() => navigation.navigate("Notification")}
          >
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
          Notifications

        </Text>
        </TouchableOpacity>
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
          Status

        </Text>
        <View style={{ marginLeft: SIZES.padding * 1.5 ,marginLeft: 5,marginTop: 10, }}>
          <CustomSwitch
            Text          label={false}
            value={!saveMe}
            onChange={(value) => setSaveMe(value)}
          />
        </View>
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
          Reset default settings

        </Text>
        <Text style={{ color: COLORS.gray2, ...FONTS.body3, textAlign: "justify", marginTop: 20, marginRight: 1 }}>
          Reset account to default

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
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.radius,

        }}

      >








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

export default Settings;
