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

const Vehicle = ({ navigation,props }) => {
  function renderHeader() {
    return (
      
      <Header
      
      containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          marginRight: 160,
        }}
        title="Package details"
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
          marginBottom: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
         
        }}
      >
      
              <View
          style={{
            
            marginTop: 380,
            marginLeft:-10,
            flexDirection: "row",
            justifyContent: "space-between",
           
            
          }}
        >
        
          <IconButton
          
            icon={images.bike}
            iconStyle={{
              width: 40,
              height: 40,
          
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
            
              marginRight: 60,

              
            }}
            onPress={() => navigation.navigate("Home")}
          />
            <IconButton
        
            icon={images.tuktuk}
            iconStyle={{
              width: 40,
              height: 40,
             
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
           
              marginRight: 60,

              
            }}
            onPress={() => navigation.navigate("Home")}
          />
               <IconButton
           
            icon={images.pickup2}
            iconStyle={{
              width: 40,
              height: 40,
             
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
              
              marginRight: 60,

              
            }}
            onPress={() => navigation.navigate("Home")}
          />
               <IconButton
         
            icon={images.truk}
            iconStyle={{
              width: 40,
              height: 40,
             
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
         
              marginRight: 60,

              
            }}
            onPress={() => navigation.navigate("Home")}
          />
        
        
        
         
      
         
       
        </View>
        <View
          style={{
            
            marginTop: 30,
            marginLeft:1,
          
            
          }}
        >
         <Text style={{ color: COLORS.black, ...FONTS.body3,textAlign: "center",marginTop: -110,marginRight: 185 }}>
           Choose Vehicle             
          </Text>
          
         </View>
      
         <View
          style={{
            
            marginTop: 30,
          
            flexDirection: "row",
            justifyContent: "space-between",
          
            
          }}
        >
         <Text style={{ color: COLORS.gray, ...FONTS.body3,textAlign: "center",marginTop: -55,marginLeft: -15, }}>
           Motorbike        
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3,textAlign: "center",marginTop: -55,marginRight: 110, }}>
           Tuktuk        
          </Text>
          <View
          style={{ marginTop: 30,
            justifyContent: "space-between",
            flexDirection: "center",
          
            
          }}
        >
          <Text style={{ color: COLORS.gray, ...FONTS.body3,textAlign: "center",marginTop: -85,marginLeft: -105, }}>
          Pickup        
          </Text>
         

        </View>
        <View
          style={{ marginTop: 30,
            
          
            
          }}
        >
        <Text style={{ color: COLORS.gray, ...FONTS.body3,textAlign: "center",marginTop: -85,marginRight: -25, }}>
          Truck      
          </Text>
         </View>
          
          
         </View>
 
 
       
      
      
    
      </View>
      
    );
  }


  
  function renderFooter() {
    return (
      
      <><View
        style={{
          height: SIZES.height / 1,
          marginTop: -350,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.radius,
          
        }}
        
      >
                <FormInput
            label={"Description"}
         
           
          
          />
         



 
          
          <TextButton
              label="Next"
            onPress={() =>  navigation.navigate("Summary")}
              buttonContainerStyle={{
                height: 60,
                width:300,
                borderRadius: SIZES.radius,
                marginTop: 50,
                marginRight: 220,
                backgroundColor:"#F39C11"

                
                
              }}
              
             
              
            />
      
      

      
     
        
       
         
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
      {renderFooter()}
    </View>
  );
};

export default Vehicle;
