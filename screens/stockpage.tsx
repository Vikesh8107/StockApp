import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

const StockPage = () => {
  const [stockData, setStockData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=Uuc2J73WWc22LcUhvpmhZcPjPptbRLbE',
        );
        const data = await response.json();
        const formattedData = data.results.map((stock) => ({
          symbol: stock.T,
          high: stock.h,
          low: stock.l,
          open: stock.o,
          close: stock.c,
          timestamp: stock.t, 
          volume: stock.v, 
          volumeWeighted: stock.vw, 
          numberOfTrades: stock.n, 
        }));
        setStockData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredStockData = searchValue ? stockData.slice(0, parseInt(searchValue)) : stockData;

  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Enter a number"
        placeholderTextColor="white" 
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
      <FlatList
        data={filteredStockData}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.stockItem}>
            <Text style={[styles.stockText, styles.symbolText]}>{`${item.symbol}`}</Text>
            <View style={styles.stockInfoContainer}>
              <View style={styles.stockInfoLeft}>
                <Text style={styles.stockText}>{`High: ${item.high}`}</Text>
                <Text style={styles.stockText}>{`Open: ${item.open}`}</Text>
              </View>
              <View style={styles.stockInfoRight}>
                <Text style={styles.stockText}>{`Low: ${item.low}`}</Text>
                <Text style={styles.stockText}>{`Close: ${item.close}`}</Text>
              </View>
            </View>
            <Text style={styles.stockText}>{`Timestamp: ${item.timestamp}`}</Text>
            <Text style={styles.stockText}>{`Volume: ${item.volume}`}</Text>
            <Text style={styles.stockText}>{`Volume Weighted: ${item.volumeWeighted}`}</Text>
            <Text style={styles.stockText}>{`Number of Trades: ${item.numberOfTrades}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius:10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    color:'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8, 
  },
  stockItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  stockText: {
    color: '#333',
    fontSize: 16,
    marginBottom: 4,
  },
  symbolText: {
    marginRight:20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue', 
  },
  stockInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  stockInfoLeft: {
    flex: 1,
    marginRight: 8,
  },
  stockInfoRight: {
    flex: 1,
    marginLeft: 8,
  },
  divider: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StockPage;
