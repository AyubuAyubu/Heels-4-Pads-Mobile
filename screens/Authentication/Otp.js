import { View, Text, Alert,Image } from "react-native";
import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import { COLORS, FONTS, SIZES,icons } from "../../constants";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { TextButton,IconButton,Header } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../appContext/AppContextProvider";

const Otp = () => {
  const { state, authContext, dispatch } = useContext(AppContext);

  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  
  return (
    
    <AuthLayout

      
      subTitle={
        ""
      }
      titleContainerStyle={{ marginTop: SIZES.padding }}
      
    >
      <Image
        source={icons.otp}
        style={{ marginLeft: SIZES.padding,marginTop: 110, height: 180, width: 180,position:"absolute",   marginLeft: 100, }}
      />
      



      {/* OTP input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
        
      >
      
      
        <OTPInputView
          pinCount={6}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 45,
            height: 45,
            marginTop: 350,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeChanged={(code) => {
            console.log(code);
          }}
        />
        {/* countdown Timer */}
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
            marginTop: 216,
          }}
        >
          <Text style={{ color: COLORS.red, ...FONTS.h3, }}>
            Resend code?
          </Text>
          <TextButton
            label={` (${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
              backgroundColor:"#FFFFFF",
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "center",
          }}
        >
             <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: -200, }}>
             Please enter the verification code sent to your phone number
        </Text>
        </View>
      </View>
      {/* Footer */}
      <View>
        <TextButton
          label={"Verify"}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            marginBottom: 126,
            backgroundColor: COLORS.primary,
            backgroundColor:"#F39C11",
          }}
          onPress={() =>
            Alert.alert("Success", "Your account has been created", [
              {
                text: "OK",
                onPress: () =>
                  dispatch({ type: "SIGN_OUT", token: "dummy-auth-token" }),
              },
            ])
          }
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
   

        
         
        </View>
      </View>
 
        
   
    </AuthLayout>
  );
};

export default Otp;
