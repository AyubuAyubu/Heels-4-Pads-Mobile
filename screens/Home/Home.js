import { View, Text, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useEffect } from "react";
import {
  HorizontalFoodCard,
  VerticalFoodCard,
  Section,
} from "../../components";

import { connect } from "react-redux";
import { setProducts } from "../../store/products/productActions";
import { setLoadCoupons } from "../../store/coupons/couponActions";

import FilterModal from "./FilterModal";

const Home = ({
  navigation,
  setProducts,
  favourites,
  coupons,
  setLoadCoupons,
}) => {
  const [selectedCatergoryId, setSelectedCatergoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadAssets = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    //load products to store
    setProducts(dummyData.products);
    handleChangeCategory(selectedCatergoryId, selectedMenuType);

    //load coupons if empty
    if (!(coupons && coupons.length)) {
      setLoadCoupons(dummyData.coupons);
    }

    return () => {
      clearTimeout(loadAssets);
    };
  }, [favourites]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
 
  
   
  
    //find menu
    let selectedMenu = dummyData.menu.find((item) => item.id == menuTypeId);
    //set menu
    setMenuList(
      selectedMenu.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  
 

  
  

  return (
    <View
      style={{
        flex: 1,
      }}
    >
    
      {/* List */}
    
    </View>
  );
};
function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => {
      return dispatch(setProducts(products));
    },
    setLoadCoupons: (coupons) => {
      return dispatch(setLoadCoupons(coupons));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
