import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios"
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons, FONTS } from "../../constants";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEnableSignUp() {
    return (
      email != "" &&
      password != "" &&
      userName != "" &&
      emailError == "" &&
      usernameError == "" &&
      passwordError == ""
    );
  }
  const getUserData = async (email,password) => { 
    try {
        const response = await axios.post("https://whale-app-mv2nr.ondigitalocean.app/api/v1/signin")
        console.log(response)
        return response.data;
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <AuthLayout
   
    >
     <Image
        source={icons.logo}
        style={{ marginLeft: SIZES.padding,marginTop: 10, height: 80, width: 80,position:"absolute",   marginLeft: 150, }}
      />
      {/* form input  */}
      <View
        style={{
          flex: 1,
          marginTop: -70,
        }}
      >
                <FormInput
          label="Contact"
          keyboardType="email-address"
          autoCompleteType="email"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate email
            {
              setUserName(value);
            }
          }
          errorMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    userName == ""
                      ? COLORS.gray
                      : userName != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
                source={
                  userName == "" || (userName != "" && usernameError == "")
                    ? icons.call2
                    : icons.call2
                }
              />
            </View>
          }
        />
        {/* email */}
        <FormInput
          label="Age"
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
                    ? icons.age
                    : icons.age
                }
              />
            </View>
          }
        />
        {/* username */}
        <FormInput
          label="Username"
          keyboardType="email-address"
          autoCompleteType="email"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate email
            {
              setUserName(value);
            }
          }
          errorMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    userName == ""
                      ? COLORS.gray
                      : userName != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
                source={
                  userName == "" || (userName != "" && usernameError == "")
                    ? icons.wallet
                    : icons.walet
                }
              />
            </View>
          }
        />
        {/* password */}
        <FormInput
          label="Gender"
          secureTextEntery={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate password
            {
              utils.validatePassword(value, setPasswordError);
              setPassword(value);
            }
          }
          errorMsg={passwordError}
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
                source={showPass ? icons.gender : icons.gender}
              />
            </TouchableOpacity>
          }
        />
         <FormInput
          label="Location"
          secureTextEntery={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate password
            {
              utils.validatePassword(value, setPasswordError);
              setPassword(value);
            }
          }
          errorMsg={passwordError}
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
                source={showPass ? icons.locate : icons.locate}
              />
            </TouchableOpacity>
          }
        />
        {/* signup  */}
        <TextButton
          label="CREATE PROFILE"
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor:"#F39C11",
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("Otp")}
        />
         <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
            borderRadius: 50,

          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3,textAlign: "center" }}>
            By registering you agree to the Heels4Pads Terms of Use
          </Text>
          </View>
        {/* SignUp */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have have an account?
          </Text>
          <TextButton
            label="Login"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          
          />
        </View>
      </View>
     

      {/* footer */}
 
    </AuthLayout>
  );
};

export default SignUp;
