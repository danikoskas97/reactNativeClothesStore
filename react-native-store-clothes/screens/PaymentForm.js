import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { DataContext } from "../dummy-data/data";
import COLORS from "../assets/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


const PaymentForm = ({ navigation }) => {
  const { setShoppingCart } = useContext(DataContext);
  const [inputdata, setinputdata] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnChange = (text, name) => {
    setinputdata((prev) => {
      return { ...prev, [name]: text };
    });

    console.log(inputdata);
  };

  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    let Continued = true;
    setMessage("");

    let userNameValidation = /^[A-Za-z]+$/;
    let addressesValidation = /^[A-Za-z ]+$/;
    let emailValidation = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;

    if (
      !inputdata.firstName ||
      inputdata.firstName.length < 3 ||
      !userNameValidation.test(inputdata.firstName)
    ) {
      setMessage((prev) => prev + "\ninvalid first name" );
      Continued = false;
    }
    if (
      !inputdata.lastName ||
      inputdata.lastName.length < 3 ||
      !userNameValidation.test(inputdata.lastName)
    ) {
      setMessage((prev) => prev + "\ninvalid last name" );
      Continued = false;
    }
    if (!inputdata.email || emailValidation.test(inputdata.email)) {
      setMessage((prev) => prev + "\ninvalid email" );
      Continued = false;
    }
    if (
      !inputdata.phonenumber ||
      inputdata.phonenumber.length < 11
    ) {
      setMessage((prev) => prev + "\ninvalid phonenumber");
      Continued = false;
    }
    if (
      !inputdata.state ||
      inputdata.state.length < 6 ||
      !addressesValidation.test(inputdata.state)
    ) {
      setMessage((prev) => prev + "\ninvalid state" );
      Continued = false;
    }
    if (
      !inputdata.city ||
      inputdata.city.length < 3 ||
      !addressesValidation.test(inputdata.city)
    ) {
      setMessage((prev) => prev + "\ninvalid city name" );
      Continued = false;
    }
    if (!inputdata.address || inputdata.address.length < 3) {
      setMessage((prev) => prev + "\ninvalid address" );
      Continued = false;
    }
    if (
      !inputdata.ownerName ||
      inputdata.ownerName.length < 2 ||
      !addressesValidation.test(inputdata.ownerName)
    ) {
      setMessage((prev) => prev + "\ninvalid owner name" );
      Continued = false;
    }
    if (!inputdata.ownerId || inputdata.ownerId.length !== 9) {
      setMessage((prev) => prev + "\ninvalid id" );
      Continued = false;
    }
    if (
      !inputdata.cardNumber ||
      inputdata.cardNumber.length !== 12
    ) {
      setMessage((prev) => prev + "\ninvalid card number ");
      Continued = false;
    }
    if (
      !inputdata.day ||
      isNaN(parseInt(inputdata.day)) ||
      parseInt(inputdata.day) < 1 ||
      parseInt(inputdata.day) > 31
    ) {
      setMessage((prev) => prev + "\ninvalid day");
      Continued = false;
    }
    if (
      !inputdata.month ||
      isNaN(parseInt(inputdata.month)) ||
      parseInt(inputdata.month) < 1 ||
      parseInt(inputdata.month) > 12
    ) {
      setMessage((prev) => prev + "\ninvalid month");
      Continued = false;
    }
    if (
      !inputdata.year ||
      isNaN(parseInt(inputdata.year)) ||
      parseInt(inputdata.year) < 2021
    ) {
      setMessage((prev) => prev + "\ninvalid year");
      Continued = false;
    }
    if (
      new Date(
        inputdata.year,
        parseInt(inputdata.month) - 1,
        inputdata.day
      ) < Date.now()
    ) {
      setMessage((prev) => prev + "\ninvalid date, card not valid anymore");
      Continued = false;
    }

    if (!inputdata.cvv || inputdata.cvv.length !== 3) {
      setMessage((prev) => prev + "\ninvalid cvv" );
      Continued = false;
    }
    if (Continued) {
      navigation.navigate("OrderMessage");
      setShoppingCart([]);
    } else setModalVisible(true);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>

  
      <Text style={styles.title}>The User details:</Text>
      <View style={styles.formRow}>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "firstName")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={" Enter First Name"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "lastName")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={" Enter Last Name"}
        />
      </View>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "email")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="email-address"
        placeholder={" Enter Your Email"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "phonenumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={" Enter Cellphone Number"}
      />
      <View style={styles.formRow}>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "state")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={" Enter State"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "city")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={" Enter City"}
        />
      </View>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "address")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={" Enter Your Street Address"}
      />
      <Text style={styles.title}>Payment details:</Text>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerName")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={" Enter Your Card Owner Name"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerId")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={" Enter Your Id"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "cardNumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={" Enter Card Number"}
      />
      <View style={styles.dateFormRow}>
        <View style={styles.dateContainer}>
          <TextInput
            onChangeText={(text) => handleOnChange(text, "day")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Day"}
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "month")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Month"}
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "year")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Year"}
          />
        </View>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "cvv")}
          style={[styles.inputStyle, styles.cvv]}
          keyboardType="numeric"
          placeholder={" Enter CVV"}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
        <Text style={styles.paymentText}>Submit</Text>
        <MaterialIcons name="payment" size={24} color={COLORS.secondary} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={Modalstyles.centeredView}>
          <View style={Modalstyles.modalView}>
            <Text style={Modalstyles.modalText}>{message}</Text>
            <Pressable
              style={[Modalstyles.button, Modalstyles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={Modalstyles.textStyle}>return</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  formLabel: {
    fontSize: 20,
    fontFamily: "Amatic-Bold",
    color: COLORS.iconColor,
  },

  inputStyle: {
    marginTop: 20,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  inputStyleRegular: {
    width: "100%",
  },
  rowInputStyle: {
    width: "100%",
  },
  formRow: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    marginTop: 15,
    fontFamily: "Ariel",
    fontSize: 10,
  },
  btnContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  btn: {
    backgroundColor: COLORS.primary,
  },
  paymentText: {
    fontFamily: "Amatic-Bold",
    color: COLORS.secondary,
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  date: {
    width: "28%",
  },
  dateFormRow: {
    flexDirection: "column",
    width: "92%",
    justifyContent: "space-between",
  },
  cvv: {
    width: "38%",
  },
});

const Modalstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 100,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 4,
    elevation: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "green",
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

export default PaymentForm;