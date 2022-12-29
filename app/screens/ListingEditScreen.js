import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#ff6666",
    icon: "table-furniture",
  },
  { label: "Cars", value: 2, backgroundColor: "#ff9933", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#ffff66", icon: "camera" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#66ff66",
    icon: "gamepad-variant",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#00b3b3",
    icon: "shoe-heel",
  },
  {
    label: "Sport",
    value: 6,
    backgroundColor: "#33adff",
    icon: "soccer",
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="100%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="100%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
