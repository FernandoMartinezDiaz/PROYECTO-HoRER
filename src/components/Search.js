import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search artist or song"
        value={search}
        onChangeText={setSearch}
        onIconPress={() => navigation.push("SearchResults", { search })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

export default Search;