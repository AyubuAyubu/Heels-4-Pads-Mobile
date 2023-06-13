import React, { useState } from "react";
import { View, Image } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { FormInput, TextButton,Header,IconButton } from "../../components";
import { utils } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const PasswordCreate= ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableSignIn() {
    return email != "" && emailError == "";
  }

  return (
    <><View style={{}}>
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 130,
        }}
        title="Create new password"
        leftComponent={<IconButton
          containerStyle={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",

            borderRadius: SIZES.radius,
            borderColor: COLORS.white,
          }}
          icon={icons.back}
          iconStyle={{ width: 20, height: 20, tintColor: COLORS.black, marginRight: 10, }}
          onPress={() => navigation.goBack()} />} />





    </View><AuthLayout

     
      subTitle={"Your new password must be different from previously used password."}
      titleContainerStyle={{ marginTop: SIZES.padding, marginTop: -40, }}
    >



        {/* text input */}
        <FormInput
          label="New password"

          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius, marginTop: 40, }}
          onChange={(value) =>
            // validate email
            setPassword(value)}
          appendComponent={<TouchableOpacity
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
              source={icons.padlock} />
          </TouchableOpacity>} />

        <FormInput
          label="Confirm password"

          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius, marginTop: 40, }}
          onChange={(value) =>
            // validate email
            setPassword(value)}
          appendComponent={<TouchableOpacity
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
              source={icons.padlock} />
          </TouchableOpacity>} />
        {/* submit button  */}
        <TextButton
          label="RESET PASSWORD"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            marginTop: 40,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("PasswordRecovery")} />
      </AuthLayout></>
  );
};

export default PasswordCreate;
