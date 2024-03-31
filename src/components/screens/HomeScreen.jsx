import React from "react";
import { Image, StyleSheet } from "react-native";
import { usePokemonPaginate } from "../../hooks/usePokemonPaginate";

export default function HomeScreen() {
  const { pokemonList, loadPokemons } = usePokemonPaginate();

  return (
    <>
      <Image source={require("../../assets/poke.png")} 
      style={ styles.bgPokeball}
      />
    </>
  );
}


const styles = StyleSheet.create({
  bgPokeball: {
    width: 100,
    height: 100,
  }
})

