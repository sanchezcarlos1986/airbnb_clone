import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Button,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { styles } from "./EditProfile.styles";
import { pickImageFrom } from "~/helpers/pickImageFrom";
import firebase from "~/database/firebase";

const avatar =
  "https://media-exp1.licdn.com/dms/image/C4D03AQG14MveQyItiw/profile-displayphoto-shrink_200_200/0/1606485965221?e=1615420800&v=beta&t=MrFCf8X85vjNe7teshJc_mpBLHwkFPzDX1phEu4oUcI";

const EditProfile = ({ navigation }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [picture, setPicture] = useState(avatar);
  const [languages, setLanguages] = useState("Español");
  const [loadingImage, setLoadingImage] = useState(false);

  const saveData = async (img) => {
    const profile = {
      id,
      name,
      description,
      location,
      occupation,
      picture: img || picture,
      languages,
    };

    const dbRef = await firebase.db.collection("profile").doc(id);
    await dbRef.set(profile);

    navigation.navigate("Profile");
  };

  const uploadImage = async (type) => {
    const imgURL = await pickImageFrom(type, setLoadingImage);

    if (imgURL) {
      setPicture(imgURL);
      setLoadingImage(false);
      saveData(imgURL);
    }
  };

  const getProfile = async () => {
    firebase.db.collection("profile").onSnapshot((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const profile = doc.data();

        profile?.id && setId(profile.id);
        profile?.name && setName(profile.name);
        profile?.description && setDescription(profile.description);
        profile?.location && setLocation(profile.location);
        profile?.occupation && setOccupation(profile.occupation);
        profile?.picture && setPicture(profile.picture);
        profile?.languages && setLanguages(profile.languages);
      });
    });
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      getProfile();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const updateProfile = async () => {
    try {
      saveData();
      // navigation.navigate("Profile");
    } catch (err) {
      console.error(`Error on save: ${err}`);
    }
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
        {loadingImage ? (
          <ActivityIndicator size="large" color="#f15454" />
        ) : null}
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
          <Text style={styles.title}>Hola, soy {name}</Text>
          <Text style={styles.joined}>Se unió en octubre, 2020</Text>
        </View>
      </View>

      {/* Name */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Nombre</Text>
        </View>
        <TextInput
          placeholder="Ej: Carlos"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
          placeholder="Ej: Español"
          value={languages}
          onChangeText={(text) => setLanguages(text)}
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
