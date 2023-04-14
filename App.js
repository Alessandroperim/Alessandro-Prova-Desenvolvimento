import React from 'react';
import reactDom from 'react-dom';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const GameCard = ({ image, name, description, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <Text style={styles.cardButtonText}>Trocar</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const handleCardPress = (cardName) => {
    console.log(`Botão de troca pressionado para o item: ${cardName}`);
  };

  return (
    <View style={styles.container}>
      <GameCard
        image="https://reinodeshirom.weebly.com/uploads/1/5/3/5/15354286/102625659.jpg"
        name="Espada dos Deuses"
        description="Poder de ataque: 210, Defesa: 20"
        onPress={() => handleCardPress('Item 1')}
      />
      <GameCard
        image="http://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png"
        name="Escudo Viking"
        description="Poder de ataque: 10, Defesa: 85"
        onPress={() => handleCardPress('Item 2')}
      />
      <GameCard
        image="https://reinodeurfic.weebly.com/uploads/1/0/9/4/10944662/6410283.jpg"
        name="Cajado Real"
        description="Poder de ataque: 110, Defesa: 10"
        onPress={() => handleCardPress('Item 3')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 300,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardDetails: {
    flex: 1,
    marginLeft: 12,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 4,
    color: 'gray',
  },
  cardButton: {
    backgroundColor: 'green',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;