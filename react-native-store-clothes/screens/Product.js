import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../component/Comment";
import CommentProduct from "../classes/CommentProduct";
import { DataContext } from "../dummy-data/data";
import COLORS from "../assets/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Product = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, setChosenProduct, setShoppingCart, numberWithCommas } =
    useContext(DataContext);
  const [comment, setComment] = useState("");
  const [newCommentId, setNewCommentId] = useState(null);
  const inputRef = useRef(0);

  const product = items.find((product) => product.title === navigation.getParam("productName"));
  Product.navigationOptions = (navigationData) => {
    const productName = navigationData.navigation.getParam("productName");
    console.log(productName);
    return {
      headerTitle: productName,
    };
  };

  const renderItem = ({ item }) => (
    <Comment
      item={item}
      userName={item.userName}
      msg={item.msg}
    />
  );

  const onChangeComment = (content) => {
    setComment(content);
  };

  const postComment = () => {
    product.comments.push(
      new CommentProduct(
        product.comments[0].userName,
        comment
      )
    );
    setNewCommentId(product.comments[product.comments.length - 1]);
    inputRef.current.clear();
  };

  useEffect(() => {
    setChosenProduct(product);
  }, []);
  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBG}
        imageStyle={{ resizeMode: "cover" }}
        source={{ uri: product.imgUrl }}
      >
        <ScrollView style={styles.descriptionScroll}>
          <Text style={styles.infoContent}>{product.paragraph}</Text>
        </ScrollView>
        <View style={styles.productTitle}>
          <Text style={styles.titleContent}>{product.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              setShoppingCart((prev) => [...prev, product]);
              setModalVisible(true);
            }}
            style={styles.addToCart}
          >
            <Text style={styles.addText}>Add to the shopping list</Text>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
        
        {Object.keys(product).map((key, index) => {
          if (index > 2 && index < Object.keys(product).length - 2)
            return (
              <View key={index} style={styles.contentRow}>
                <Text style={styles.infoContentBold}>
                  {key.includes("_") ? key.replace("_", " ") : key}:
                </Text>
                <Text style={styles.infoContent}>
                  {key == "final_price"
                    ? numberWithCommas(product[key]) + "Nis"
                    : product[key]}
                </Text>
              </View>
            );
        })}

        <View style={styles.inputRow}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            onChangeText={onChangeComment}
            placeholder="Enter comment please"
            keyboardType="default"
          />
          <TouchableOpacity style={styles.button} onPress={postComment}>
            <Ionicons name="ios-send" size={26} color={"blue"} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.commentsContainer}>
          <FlatList
            data={product.comments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={newCommentId}
          />
        </ScrollView>
      </View>
      <Modal
        animationType="Fancy!"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={Modalstyles.centeredView}>
          <View style={Modalstyles.modalView}>
            <Text style={Modalstyles.modalText}>
              Your item added to your shopping!!
            </Text>
            <Pressable
              style={[Modalstyles.button, Modalstyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={Modalstyles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
	imgBG: {
		flex: 0,
		width: "100%",
		height:250,
		justifyContent: "flex-start",
	},
  titleContent: {
    color: COLORS.secondary,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Amatic-Bold",
  },
  productTitle: {
    backgroundColor: "rgba(1,1,1,1.5)",
  },
  infoContainer: {
    flex:0,
    width: "60%",
  },
  infoContent: {
    fontSize: 18,
    fontFamily: "Amatic-Bold",
    textAlign: "center",
  },
  infoContentBold: {
    fontSize: 22,
    fontFamily: "Amatic-Bold",
  },
  commentsContainer: {
    marginTop: 1,
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    marginLeft: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontFamily: "Amatic-Bold",
  },
  input: {
    width: 300,
    padding: 20,
    alignSelf: "center",
    borderWidth: 8,
    borderColor: "black",
  },
  inputRow: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    
  },
  descriptionScroll: {
    height: 200,
  },
  btnContainer: {
    alignSelf: "center",
    width: 1000,
  },
  addToCart: {
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
  },
  addText: {
    fontSize: 18,
    fontFamily: "Amatic-Bold",
    color: "black",
    marginRight: 10,
  },
});

const Modalstyles = StyleSheet.create({
  centeredView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2.25,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    borderRadius: 1,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: COLORS.secondary,
    fontFamily: "Amatic-Bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Product;