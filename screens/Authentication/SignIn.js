import { View, Text, Image } from "react-native";
// import jwt_decode from 'jwt-decode'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Toast from 'react-native-toast-message'
import React, { useContext, useState } from "react";
import { AuthLayout } from "../";

import { COLORS, FONTS, icons, SIZES } from "../../constants";
import {
  CustomSwitch,
  FormInput,
  TextButton,
  TextIconButton,
} from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { utils } from "../../utils";
import { AppContext } from "../../appContext/AppContextProvider";
// context
// import AuthGlobal from '../context/stores/AuthGlobal'
// import { loginUser } from '../context/actions/Auth.actions'


import disabledAlert from "../../components/Alerts";

const SignIn = ({ navigation }) => {
  const { state, authContext, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  




  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
    
  }


  return (
    <AuthLayout

    >
      <Image
        source={icons.logo}
        style={{ marginLeft: SIZES.padding,marginTop: 20, height: 150, width: 180,position:"absolute",   marginLeft: 100, }}
      />
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}

      >
        {/* Form Input Secxtion */}
        <FormInput
          label="Phone Number"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) =>
          // validate email
          {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }
          }
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && emailError == ""
                        ? COLORS.green
                        : COLORS.red,
                }}
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          secureTextEntery={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate email
            setPassword(value)
          }
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                marginTop: SIZES.body3,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                source={showPass ? icons.eye_close : icons.eye}
              />
            </TouchableOpacity>
          }
        />
        {/* SignIn */}
        <TextButton
          label="LOGIN"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: 50,
            borderRadius: SIZES.radius,
            backgroundColor:"#F39C11",
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() =>
            dispatch({ type: "SIGN_IN", token: "dummy-auth-token" })
          }
        />
        {/* Remember me / forgot ForgotPassword */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            marginBottom: 100,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label="Forgot your password?"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>



        {/* Footer */}

       
     



     
        {/* SignUp */}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 80,
            justifyContent: "center",
            borderRadius: 50,

          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </AuthLayout>
    
  );
};

export default SignIn;
