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


const Helpandfeedback = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="Help and Feedback"
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
              How may we Help you              
          </Text>
         



<Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 22,marginRight: 29 }}>
SEND US FEEDBACK
           
          </Text>
          
          
          <Text style={{ color: COLORS.gray2, ...FONTS.body3,textAlign: "justify",marginTop: 20,marginRight: 24 }}>We are always ready to hear you out.     </Text>
       
            
          
  
 
   
    
 
  
       
        
          
        
          
      
          
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

export default Helpandfeedback;
