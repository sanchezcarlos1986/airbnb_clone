import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
// import firebase from "~/database/firebase";
import { styles } from "./Profile.styles";
import {
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import reviews from "../../../assets/data/reviews";
import { Review } from "~/components";

const avatar =
  "https://media-exp1.licdn.com/dms/image/C4D03AQG14MveQyItiw/profile-displayphoto-shrink_200_200/0/1606485965221?e=1615420800&v=beta&t=MrFCf8X85vjNe7teshJc_mpBLHwkFPzDX1phEu4oUcI";

const Profile = () => {
  return (
    <ScrollView style={styles.root}>
      {/* Profile */}
      <View style={styles.myImageView}>
        <View>
          <Text style={styles.title}>Hola, soy Carlos</Text>
          <Text style={styles.joined}>Se unió en octubre, 2020</Text>
        </View>
        <Image
          style={styles.myImage}
          source={{
            uri: avatar,
          }}
        />
      </View>

      {/* Identity */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <MaterialCommunityIcons
              name="shield-check"
              size={24}
              color="#16a085"
            />
          </View>
          <Text style={styles.sectionItemText}>Identidad verificada</Text>
        </View>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <Foundation name="comment-quotes" size={24} color="#f39c12" />
          </View>
          <Text style={styles.sectionItemText}>{reviews.length} reseñas</Text>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acerca de</Text>
        {/* Description */}
        <View style={styles.aboutDescription}>
          <FontAwesome5 name="quote-left" size={24} color="#ccc" />
          <Text style={styles.aboutDescriptionText}>Hola a todos!!!!</Text>
          <FontAwesome5 name="grip-lines" size={24} color="#ccc" />
        </View>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <FontAwesome name="home" size={18} color="black" />
          </View>
          <Text style={styles.sectionItemText}>Vive en Santiago, Chile</Text>
        </View>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <MaterialIcons name="language" size={18} color="black" />
          </View>
          <Text style={styles.sectionItemText}>Habla Español</Text>
        </View>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <MaterialIcons name="work" size={18} color="black" />
          </View>
          <Text style={styles.sectionItemText}>
            Trabaja en Front End Developer
          </Text>
        </View>
      </View>

      {/* Confirm */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Confirmamos a Carlos</Text>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="#16a085"
            />
          </View>
          <Text style={styles.sectionItemText}>Identidad</Text>
        </View>
        <View style={styles.sectionItem}>
          <View style={styles.sectionIcon}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="#16a085"
            />
          </View>
          <Text style={styles.sectionItemText}>Número de teléfono</Text>
        </View>
      </View>

      {/* Reviews */}
      <View>
        <Text style={styles.sectionTitle}>{reviews.length} Reseñas</Text>

        {/* 1 Review */}
        {reviews.map((item) => (
          <Review key={item.id} review={item} />
        ))}
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 8,
        }}
      >
        <Button
          icon="account-edit"
          onPress={() => navigation.navigate("CreatePatient", employee)}
          title="Edit"
        />
        <Button
          icon="delete"
          onPress={() => openConfirmationAlert(id)}
          title="Delete"
        />
      </View> */}
    </ScrollView>
  );
};

export default Profile;
