import { View, Text } from "react-native";
import React from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { CardItem, Header, IconButton, TextButton,FormInput,FormInputCheck } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const Summary = ({ navigation,route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");
 

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="Order Summary"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              
              borderRadius: SIZES.radius,
              borderColor: COLORS.black,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
            onPress={() => navigation.goBack()}
          />
        }
        
      />
    );
  }


  function renderAddNewCard() {
    return (
      
      <View
        style={{
          marginTop: 230,
        
          flexDirection: 'row', 
          justifyContent: 'space-between',
          
        }}
      >
      
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Payment Method
        </Text>
        
        
        {dummyData.allCards.map((card, index) => {
          return (
            <CardItem
              key={`NewCard-${card.id}`}
              item={card}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${card.id}`
              }
              onPress={() => setSelectedCard({ ...card, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  }


  function renderFooter() {
    return (
      
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginBottom:12,
        }}
      >
         <View
        style={{
          marginBottom:12,
        }}
      >
        {/* Cardholder Name */}
        <FormInput
          label="Cardholder Name"
          value={cardName}
          autoCompleteType="number"
          onChange={(value) =>
            // validate
            {
              utils.validateInput(value, 1, setCardNameError);
              setCardName(value);
            }
          }
          errorMsg={setCardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
          containerStyle={{
            marginTop: SIZES.padding,
          }}
        />
        
      </View>
         <View
        style={{
          marginBottom:12,
        }}
      >
      
            {/* Card Number */}
            <FormInput
          label="Card Number"
          keyboardType="number-pad"
          autoCompleteType="number"
          maxLength={19}
          value={cardNumber}
          onChange={(value) =>
            // validate email
            {
              utils.validateInput(value, 19, setCardNumberError);
              setCardNumber(
                value
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()
              );
            }
          }
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />
        </View>
         {/* Expiry Date */}
         <View
          style={{
            marginBottom: 12,
            
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormInput
            label="Expiry Date"
            placeHolder={"MM/YY"}
            maxLength={5}
            value={expiryDate}
            containerStyle={{
              flex: 1,
            }}
            onChange={(value) =>
              // validate
              {
                utils.validateInput(value, 5, setExpiryDateError);
                setExpiryDate(value);
              }
            }
            errorMsg={expiryDateError}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          <FormInput
            label="CVV"
            maxLength={3}
            onChange={(value) =>
              // validate
              {
                utils.validateInput(value, 3, setCvvError);
                setCvv(value);
              }
            }
            errorMsg={cvvError}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
          />
        </View>
      
      
        <TextButton
          label={selectedCard?.key == "NewCard" ? "CHECKOUT" : "CHECKOUT"}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.primary : COLORS.primary,
          }}
          disabled={selectedCard == null}
          onPress={() =>
            selectedCard?.key == "NewCard"
              ? navigation.navigate("AddCard", { cardDetails: selectedCard })
              : navigation.navigate("Checkout", { cardDetails: selectedCard })
          }
        />
      
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
      

        {/* Add New Card */}
        {renderAddNewCard()}
       
      </ScrollView>
     
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default Summary;
