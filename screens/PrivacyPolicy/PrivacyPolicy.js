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


const PrivacyPolicy = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="Privacy Policy"
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
              Mobile application end-user license               
          </Text>
         



<Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginRight: 29 }}>
PLEASE READ THESE TERMS CAREFULLY
           
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 30,marginRight: 15 }}>
          This page is meant to inform our users regarding our policies with the collection, use and disclosure of personal information if anyone decides to use our services. 
          
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 24 }}>
          If you choose to use our services, then you can agree to the collection and use of information in relation to this policy. The personal information collected is used for providing and improving the services. The information will not be shared with anyone except as described in this privacy policy.  
               
          </Text>
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 1 }}>
          The terms used in this Privacy Policy ave the same meanings as in our Terms and Conditions  
           
          </Text>
            
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginLeft: -65 }}>
          Information collection and use              
          </Text>
  
    <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 1 }}>
    For better experience while using our services, we may require you to provide us with certain information or update the application to a new version.
          
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

export default PrivacyPolicy;
