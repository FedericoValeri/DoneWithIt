import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
