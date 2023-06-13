import React, { useState } from "react";
import { View, Image,Text } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { FormInput, TextButton,Header,IconButton } from "../../components";
import { utils } from "../../utils";

const RequestPassword = ({ navigation }) => {
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
          marginTop: 30,
          marginRight: 160,
        }}
        title=""
        leftComponent={<IconButton
          containerStyle={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",

            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
          }}
          icon={icons.back}
          iconStyle={{ width: 20, height: 20, tintColor: COLORS.black, marginRight: 10, }}
          onPress={() => navigation.goBack()} />} />





    </View><AuthLayout

      title={""}
      subTitle={"Hello!You are receiving this email because we received a password reset request for your account."}
      titleContainerStyle={{ marginTop: SIZES.padding, marginTop: 50 }}
    >

        {/* text input */}


        {/* submit button  */}
        <TextButton
          label="Request password"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            marginTop: 60,
            borderRadius: SIZES.radius,
            backgroundColor: "#002248"
          }}
          onPress={() => navigation.navigate("PasswordCreate")} />
        <Text style={{ color: COLORS.darkGray, ...FONTS.body3, textAlign: "center", marginTop: 10 }}>
          The password reset link will expire in 60 minutes.
        </Text>
        <Text style={{ color: COLORS.darkGray, ...FONTS.body3, textAlign: "center", marginTop: 40 }}>
          If you did not request a password reset,no further action is required.Regards,Piyotero.
        </Text>
      </AuthLayout></>
  );
};

export default RequestPassword;
