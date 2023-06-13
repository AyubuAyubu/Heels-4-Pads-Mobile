import { View, Text, TouchableOpacity,TextInput,SafeAreaView } from "react-native";
import React from "react";
import {
  DisplayText,
  Header,
  IconButton,
  FormInput,
  LineDivider,
  TextButton,
  VerticalFormInput
  
} from "../../components";
import { COLORS, FONTS, icons, SIZES,images } from "../../constants";




const ForgotPassword = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 60,
          marginRight: 160,
        }}
        title=""
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
        rightComponent={
          <IconButton
            containerStyle={{
              width: 180,
              height: 180,
              justifyContent: "center",
              alignItems: "center",
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
              marginTop: 30,
              marginRight: 40,
              
            }}
            icon={images.favourite_food}
            iconStyle={{
              width: 180,
              height: 180,
              
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
              
              marginLeft: 55,

              
            }}
            
          />
          
          
        }

        
    
      />
    );
  }
  

  
  function renderTopInfoBox() {
    return (
      
      <><Text style={{ color: COLORS.black, ...FONTS.body3, textAlign: "center", marginTop: 150, marginRight: 25 }}>
        
      </Text><View
          style={{
            height: SIZES.height / 3,
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
          
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
         
          }}
        >
        


















          {/* DOB */}


        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 1,
            justifyContent: "center",
          }}
        >
             <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: -250, }}>
             Please confirm your phone number to receive
a verification code.
        </Text>
        </View>
        </>
        
      
    );
  }
  function renderInputBox() {
    return (
     
        <View
          style={{
            
            marginHorizontal: SIZES.padding,
            marginTop: -150,
            
          }}
        >
          {/* Current Password*/}
          <FormInput
            label={"Phone number"}
         
           
          
          />
            <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.editround}
            iconStyle={{ width: 30, marginLeft: 560, height: 30, tintColor: COLORS.black,marginTop: -95 }}
            onPress={() => navigation.goBack()}
          />
       
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
        <TextButton
              label="Continue"
            onPress={() =>  navigation.navigate("Otp")}
              buttonContainerStyle={{
                height: 60,
                width:300,
                borderRadius: SIZES.radius,

                marginTop: 50,
                marginRight: 220,
                backgroundColor:"#F39C11"

                
                
              }}
              
             
              
            />
            
          
      
      

      
     
        
       
         
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
      {renderInputBox()}
      {renderBottomInfoBox()}
    </View>
  );
};

export default ForgotPassword;
