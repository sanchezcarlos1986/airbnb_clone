import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Button,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
// import firebase from "~/database/firebase";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { styles } from "./EditProfile.styles";
import { pickImageFrom } from "~/helpers/pickImageFrom";

const avatar =
  "https://media-exp1.licdn.com/dms/image/C4D03AQG14MveQyItiw/profile-displayphoto-shrink_200_200/0/1606485965221?e=1615420800&v=beta&t=MrFCf8X85vjNe7teshJc_mpBLHwkFPzDX1phEu4oUcI";

const profile = {
  name: "Carlos",
  phone: "11111",
  description: "Holi!",
  languages: "Español",
  location: "Santiago de Chile",
  occupation: "Front End Developer",
};

const EditProfile = ({ route }) => {
  // const [name, setName] = useState(profile?.name || "");
  // const [phone, setPhone] = useState(profile?.phone || "");
  const [description, setDescription] = useState(profile?.description || "");
  const [location, setLocation] = useState(profile?.location || "");
  const [occupation, setOccupation] = useState(profile?.occupation || "");
  const [picture, setPicture] = useState(avatar);
  const [languages, setLanguages] = useState(profile?.languages || "");
  // const [loadingImage, setLoadingImage] = useState(false);

  const uploadImage = async (type) => {
    const imgURL = await pickImageFrom(type, setLoadingImage);
    console.log("imgURL:", imgURL);

    if (imgURL) {
      setPicture(imgURL);
    }
  };

  const updateProfile = async () => {
    const data = {
      description,
      location,
      occupation,
      picture,
      languages,
    };

    console.log({ data });

    // const dbRef = await firebase.db
    //   .collection("airbnb-profile")
    //   .doc(employee.id);
    // dbRef.set(data);

    // navigation.navigate("Profile");
  };

  return (
    <ScrollView style={styles.root}>
      {/* Profile */}
      <View style={styles.myImageView}>
        <Image
          style={styles.myImage}
          source={{
            uri: picture,
          }}
        />
        <View style={styles.camera}>
          <Pressable
            style={styles.editAvatar}
            onPress={() => uploadImage("camera")}
          >
            <AntDesign name="camera" size={24} color="#f15454" />
          </Pressable>
          <Pressable
            style={styles.editAvatar}
            onPress={() => uploadImage("gallery")}
          >
            <Entypo name="images" size={24} color="#f15454" />
          </Pressable>
        </View>
        <View>
          <Text style={styles.title}>Hola, soy Carlos</Text>
          <Text style={styles.joined}>Se unió en octubre, 2020</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Descripción</Text>
        </View>
        <TextInput
          placeholder="Ej: Hola a todos!"
          multiline
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>

      {/* Location */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Ubicación</Text>
        </View>
        <TextInput
          placeholder="Ej: Santiago de Chile"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      {/* Occupation */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Trabajo</Text>
        </View>
        <TextInput
          placeholder="Ej: Prevencionista de riesgos"
          value={occupation}
          onChangeText={(text) => setOccupation(text)}
        />
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
        </View>
        <TextInput
          placeholder="Ej: Prevencionista de riesgos"
          value={languages}
          disabled={true}
        />
      </View>

      {/* Save */}
      <View style={styles.btnSave}>
        <Button title="Guardar" onPress={updateProfile} />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
