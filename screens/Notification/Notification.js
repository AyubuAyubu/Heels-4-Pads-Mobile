import { View, Text, TouchableOpacity,TextInput,SafeAreaView } from "react-native";
import React from "react";
import {
  DisplayText,
  Header,
  IconButton,
  FormInput,
  LineDivider,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, SIZES,images } from "../../constants";


const Notification = ({ navigation }) => {
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
        Do you want to receive notifications?
      </Text><Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: 35, marginRight: 30 }}>
          Please tick on the options below
        </Text><View
          style={{
            height: SIZES.height / 3,
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            marginTop: 10,
          }}
        >







          <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: 42, marginRight: 39 }}>
            Special offers
            <IconButton
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={icons.tick}
              iconStyle={{ width: 20, marginLeft: -330, height: 20, tintColor: COLORS.orange, marginTop: -2, }} />
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: 30, marginRight: 25 }}>
            Top Sale offers
            <IconButton
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={icons.tick}
              iconStyle={{ width: 20, marginLeft: -360, height: 20, tintColor: COLORS.orange, marginTop: -2, }} />
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: 30, marginRight: 24 }}>
            Exclusive rewards
            <IconButton
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={icons.tick}
              iconStyle={{ width: 20, marginLeft: -385, height: 20, tintColor: COLORS.orange, marginTop: -2, }} />
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign: "center", marginTop: 30, marginRight: 1 }}>
            Daily discount promotions
            <IconButton
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={icons.tick}
              iconStyle={{ width: 20, marginLeft: -470, height: 20, tintColor: COLORS.orange, marginTop: -2, }} />
          </Text>












          {/* DOB */}


        </View></>
      
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
              label="TURN NOTIFICATIONS ON"
            onPress={() =>  navigation.navigate("NotificationSettings")}
              buttonContainerStyle={{
                height: 60,
                width:300,
                borderRadius: SIZES.radius,
                marginTop: 10,
                marginRight: 220,
                backgroundColor:"#F39C11"

                
                
              }}
              
             
              
            />
            
            <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 45,marginRight: 10 }}>
           Skip for now              
          </Text>
      
      

      
     
        
       
         
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
      {renderBottomInfoBox()}
    </View>
  );
};

export default Notification;
