import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./CustomDrawer";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  PasswordCreate,
  RequestPassword,
  PasswordRecovery,
  Otp,
  Verify,
  Home,
  FoodDetail,
  Cart,
  MyCard,
  MyCart,
  AddCard,
  Checkout,
  Success,
  DeliveryStatus,
  Map,
  MyOrders,
  Overview,
  MyAddress,
  MyWallet,
  RateOrder,
  MyCoupons,
  Settings,
  MyProfile,
  EditProfile,
  ChangePassword,
  NotificationSettings,
  Notification,
  ContactUs,
  AboutUs,
  PrivacyPolicy,
  Feedback,
  Helpandfeedback,
  Vehicle,
  Summary,
} from "../screens";

import { AppContext } from "../appContext/AppContextProvider";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { state } = useContext(AppContext);
  // console.log(state);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />

            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="PasswordCreate" component={PasswordCreate} />
            
            <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />

            <Stack.Screen name="RequestPassword" component={RequestPassword} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          

           
          </>
        ) : (
          // User is signed in
          <>
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Home"
              component={CustomDrawer}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="FoodDetail"
              component={FoodDetail}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyCart"
              component={MyCart}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Cart"
              component={Cart}
            />
             <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Vehicle"
              component={Vehicle}
            />
              <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Summary"
              component={Summary}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyCard"
              component={MyCard}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="AddCard"
              component={AddCard}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Checkout"
              component={Checkout}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Success"
              component={Success}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="DeliveryStatus"
              component={DeliveryStatus}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Map"
              component={Map}
            />
             <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Helpandfeedback"
              component={Helpandfeedback}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="OrderHisotry"
              component={MyOrders}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyWallet"
              component={MyWallet}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="RateOrder"
              component={RateOrder}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyCoupons"
              component={MyCoupons}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Settings"
              component={Settings}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyProfile"
              component={MyProfile}
            />
              <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Verify"
              component={Verify}
            />
                <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Otp"
              component={Otp}
            />

              <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Overview"
              component={Overview}
            />
                <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyAddress"
              component={MyAddress}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="EditProfile"
              component={EditProfile}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="ChangePassword"
              component={ChangePassword}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="NotificationSettings"
              component={NotificationSettings}
            />
             <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="ContactUs"
              component={ContactUs}
            />
              <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="AboutUs"
              component={AboutUs}
            />
             <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="PrivacyPolicy"
              component={PrivacyPolicy}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Feedback"
              component={Feedback}
            />
            
               <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Notification"
              component={Notification}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
