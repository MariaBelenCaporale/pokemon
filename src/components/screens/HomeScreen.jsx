import React from "react";
import { FlatList, Image, StyleSheet, View, Text } from "react-native";
import { usePokemonPaginate } from "../../hooks/usePokemonPaginate";


export default function HomeScreen() {
  const { pokemonList, loadPokemons } = usePokemonPaginate();
  

  return (
    <>
      <Image source={require("../../assets/poke.png")} 
      style={ styles.bgPokeball}
      />
      {
        pokemonList.length > 0 && (
          <View style={styles.containerList}>
            <FlatList 
              data={pokemonList}
              numColumns={2}
              keyExtractor={(pokemon)=> String(pokemon.id) }
              renderItem={({ item }) => <Text>{item.name}</Text> }
              ListHeaderComponent={<Text style={styles.title}>Pokedex</Text>}
            />
          </View>
        )
      }
    </>
  );
}


const styles = StyleSheet.create({
  bgPokeball: {
    width: 300,
    height: 300,
    position: "absolute",
    top: -130,
    right: -130,
    marginHorizontal: 20,
    opacity: 0.2,
  },
  containerList: {
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginHorizontal: 20,
  }
})

