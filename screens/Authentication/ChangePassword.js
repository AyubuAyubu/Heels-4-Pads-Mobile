import { View } from "react-native";
import React from "react";
import {
  Header,
  IconButton,
  TextButton,
  VerticalFormInput,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";

const ChangePassword = ({ navigation, onChangePassord }) => {
  const [disable, setDisable] = useState(false);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
        }}
        title="Change Password"
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
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }
  function renderInputBox() {
    return (
      <View style={{  marginTop: SIZES.padding }}>
        <View
          style={{
            height: SIZES.height / 2.8,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            MarginBottom:50,
          }}
        >
          {/* Current Password*/}
          <VerticalFormInput
            label={"Old Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
          {/* New Password */}
          <VerticalFormInput
            label={"New Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
          {/* Re-type Password */}
          <VerticalFormInput
            label={"Confirm Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <TextButton
        disabled={disable}
        buttonContainerStyle={{
          marginBottom:  210,
          borderRadius: SIZES.radius,
          backgroundColor:"#F39C11",
          height: 60,
          marginHorizontal: SIZES.padding,
        }}
        label={"SAVE CHANGES"}
        onPress={onChangePassord}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* user information I*/}
      {renderInputBox()}
      {renderFooter()}
    </View>
  );
};

export default ChangePassword;
