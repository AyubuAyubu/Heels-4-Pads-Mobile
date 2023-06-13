import { View, Text } from "react-native";
import React from "react";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  FormInput,
  Header,
  IconButton,
  TextButton,
  VerticalFormInput,
} from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const Overview = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [IDCard, setIDCard] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(name);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
          marginBottom: SIZES.radius,
        }}
        title="Edit Profile"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
              marginRight: 1,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
            onPress={() => navigation.goBack()}
          />
        }
    
      />
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          height: 600,
          
        }}
      >
        <VerticalFormInput
          label={"First Name"}
          onChange={(value) => setName(value)}
        />
          <VerticalFormInput
          label={"Last Name"}
          onChange={(value) => setName(value)}
        />
          <VerticalFormInput
          label={"Email"}
          onChange={(value) => setEmail(value)}
        />
        <VerticalFormInput
          label={"Phone No"}
          onChange={(value) => setPhoneNumber(value)}
        />
        <VerticalFormInput
          label={"Gender"}
          onChange={(value) => setName(value)}
          icon={"chevron-thin-down"}
          onPress={() => setOpen()}
          open={open}
        />
        
        <VerticalFormInput
          label={"Date Of Birth"}
          onChange={(value) => setName(value)}
          placeholder={"DD/MM/YY"}
          icon={"calendar"}
          onPress={() => console.log("")}
        />
        
      
     
      </View>
      <TextButton
        disabled={disable}
        buttonContainerStyle={{
          borderRadius: SIZES.radius,
          marginVertical: SIZES.radius,
          marginHorizontal: SIZES.padding,
          backgroundColor: disable ? COLORS.gray : COLORS.primary,
          height: 60,
        }}
        label={"Save"}
        onPress={() =>
          console.log({
            name: name,
            phoneNumber: phoneNumber,

            DOB: DOB,
            gender: gender,
            email: email,
        
          })
        }
      />
    </View>
  );
};

export default Overview;
