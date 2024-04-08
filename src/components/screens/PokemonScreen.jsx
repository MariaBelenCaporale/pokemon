import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export  function PokemonScreen ({ route, navigation }) {
    const {pokemonSelected} = route.params;
  return (
    <View>
      <Text>pokemon</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>VOLVER</Text>
      </TouchableOpacity>
    </View>
  )
}


