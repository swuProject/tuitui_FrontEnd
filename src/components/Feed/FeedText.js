import React from "react";
import { View, TextInput } from "react-native";

const Text = () => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
      }}
    >
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
      />
    </View>
  );
};

export default Text;
