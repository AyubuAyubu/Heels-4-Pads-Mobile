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

const Location = ({ navigation }) => {
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
        title="Edit Address"
        titleContainerStyle={{ marginTop: SIZES.padding }}
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
        }}
      >
        <VerticalFormInput
          label={"County"}
          onChange={(value) => setName(value)}
        />
        <VerticalFormInput
          label={"City"}
          onChange={(value) => setPhoneNumber(value)}
        />
        <VerticalFormInput
          label={"Address"}
          onChange={(value) => setIDCard(value)}
        />
    
        <VerticalFormInput
          label={"Zip code"}
          onChange={(value) => setEmail(value)}
        />
        <VerticalFormInput
          label={"Additional Information"}
          onChange={(value) => setAddress(value)}
          containerStyle={{ marginBottom: SIZES.radius * 3,height: 90, }}
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
          marginTop: 69
        }}
        label={"Save"}
        onPress={() =>
          console.log({
            name: name,
            phoneNumber: phoneNumber,
            IDCard: IDCard,
            DOB: DOB,
            gender: gender,
            email: email,
            address: address,
          })
        }
      />
    </View>
  );
};

export default Location;
