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

const ContactUs = ({ navigation }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="Contact Us"
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

        
    
      />
    );
  }
  

  
  function renderTopInfoBox() {
    return (
      <View
        style={{
          height: SIZES.height / 1,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          marginTop: 1,
        }}
      >
      
         
      
              <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 42,marginRight: 25 }}>
           Contact Us               
          </Text>
         
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1,marginTop: 32, height: 1, backgroundColor: 'lightgray'}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 1,marginTop: 32, backgroundColor: 'lightgray'}} />
</View>


<Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 42,marginRight: 39 }}>
           +254722856 876   
           <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.call2}
            iconStyle={{ width: 20,marginLeft: -300, height: 20, tintColor: COLORS.black,marginTop: -2, }}
         
          />          
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 30,marginRight: 25 }}>
           info@piyotero.com   
           <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.mail}
            iconStyle={{ width: 20,marginLeft: -350, height: 20, tintColor: COLORS.black,marginTop: -2, }}
         
          />          
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 30,marginRight: 24 }}>
           Karen,Nairobi,Kenya.   
           <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.locate}
            iconStyle={{ width: 20,marginLeft: -360, height: 20, tintColor: COLORS.black,marginTop: -2, }}
         
          />          
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 30,marginRight: 1 }}>
          www.piyotero.com   
           <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.website}
            iconStyle={{ width: 20,marginLeft: -360, height: 20, tintColor: COLORS.black,marginTop: -2, }}
         
          />          
          </Text>
            
          <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 42,marginRight: 25 }}>
           Message Us               
          </Text>
         
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1,marginTop: 32, height: 1, backgroundColor: 'lightgray'}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 1,marginTop: 32, backgroundColor: 'lightgray'}} />
</View>
    <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: 30,marginRight: 1 }}>
          Send us a message  
           <IconButton
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
             
             
              
            }}
            icon={icons.input}
            iconStyle={{ width: 20,marginLeft: -360, height: 20, tintColor: COLORS.black,marginTop: -2, }}
         
          />          
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1,marginTop: 52, height: 1, backgroundColor: 'lightgray'}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 1,marginTop: 52, backgroundColor: 'lightgray'}} />
</View>
  <Text style={{ color: COLORS.lightGray1, ...FONTS.body3,textAlign: "center",marginTop: 2,marginRight: 150 }}>
           How can we help?              
          </Text>
          
          <TextButton
              label="send"
            onPress={() =>  navigation.navigate("Map")}
              buttonContainerStyle={{
                height: 50,
                width:100,
                borderRadius: SIZES.radius,
                marginTop: 40,
                marginLeft: 220,
                backgroundColor:"#F39C11"

                
                
              }}
              
             
              
            />
              <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -45,
              marginLeft: 215,
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.send}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.white}}
           
          />
          
        
          
      
          
        {/* DOB */}
      
    
      </View>
      
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

export default ContactUs;
