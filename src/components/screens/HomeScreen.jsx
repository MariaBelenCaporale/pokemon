import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "../Card";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const cards = ["👽", "🤓", "💸", "🌎", "🤡", "💩"];
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));

  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);


  React.useEffect(() => {
    if(selectedCards.length < 2) return;
    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards])
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]) , 800);
      return () => clearTimeout(timeoutId)
    }
  }, [selectedCards])


  const handleTapCard = (index) => {
    if(selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  const didPlayerWin = () => matchedCards.length === board.length;
  const resetGame = () =>{ 
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
};
  return (
    <View style={[styles.container, { paddingTop: top + 1 }]}>
      <Text style={styles.title}>
        {didPlayerWin() ? "¡Ganaste!" : "MEMO"}</Text>
      <Text style={styles.titleDos}>Movimientos: {score}</Text>
      <View style={styles.borde}>
      {board.map((card, index) => {
        const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index)
        return (
          <Card
            key={index}
            isTurnedOver={isTurnedOver}
            onPress={() => handleTapCard(index)}
          >
            {card}
          </Card>
        );
      })}
      </View>
      {didPlayerWin() && 
      <TouchableOpacity style={styles.reinicio} onPress={resetGame} >
        <Text style={styles.texto}>
          Reiniciar
        </Text>
      </TouchableOpacity>
      // <Button style={styles.reinicio} onPress={resetGame} title="Reiniciar" />}
}
      <StatusBar style="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5E8DD",
  },
  title: {
    color: "#9CAFAA",
    fontSize: 22,
    fontWeight: "900",
  },
  titleDos: {
    color: "#9CAFAA",
    fontSize: 20,
  },
  borde: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  reinicio: {
    backgroundColor: "#9CAFAA",
    width: 200,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  texto: {
    fontSize: 18,
    padding: 10,
    width: 100,
    textAlign: "center",
    fontWeight: "700",
  },
});

// Para la mezcla de tarjetas
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
