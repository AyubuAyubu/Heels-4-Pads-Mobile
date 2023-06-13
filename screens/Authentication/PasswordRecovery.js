import React, { useState } from "react";
import { View, Image,Text } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const Passwordrecovery = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableSignIn() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
    
    
      title={"Check your email"}
      subTitle={"We have sent a password reset instructions to your email."}
      titleContainerStyle={{ marginTop: SIZES.padding,marginTop: 200, }}
    >
    
      {/* text input */}
      <Image
        source={icons.message}
        style={{ marginLeft: SIZES.padding,marginTop: 120, height: 180, width: 180,position:"absolute",   marginLeft: 100, }}
      />
      
      <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
   
  
        <Text style={{ color: COLORS.darkGray, ...FONTS.body3,marginTop: 10,textAlign: "center" }}>
           Did not receive the email?check your spam section or
          </Text>
          
         
          </View>
          <TextButton
            label="try another email address"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignIn")}
          />
    </AuthLayout>
  );
};

export default Passwordrecovery;
