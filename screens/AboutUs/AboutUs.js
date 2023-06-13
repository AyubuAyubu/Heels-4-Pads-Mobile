import { View, Text, TouchableOpacity,TextInput,SafeAreaView } from "react-native";
import React from "react";
import {
  DisplayText,
  Header,
  IconButton,
  FormInput,
  LineDivider,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, SIZES,images } from "../../constants";
import { PrivateValueStore } from "@react-navigation/native";



const AboutUs = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="About Us"
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
      
         
      
              <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 5,marginRight: 25 }}>
             Piyotero Mobile application              
          </Text>
         



<Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginRight: 29 }}>
vision
           
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 30,marginRight: 15 }}>
          The vision of Piyotero is to become the leading delivery platform of choice for everyone to have confidence in service delivery of their products.
          
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 24 }}>
           
               
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 1 }}>
          The terms used in this Privacy Policy have the same meanings as  our Terms and Conditions  
           
          </Text>
            
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginLeft: -65 }}>
          Philosopy           
          </Text>
  
    <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 1 }}>
    Our Philosophy. is to always ensure a customer's product always reaches on time and with confidence of payment.
          
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginLeft: -65 }}>
          Our Mission           
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 1 }}>
          Our Mission is to provide easy access to customers all over Africa and the whole world. 
           
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

export default AboutUs;
