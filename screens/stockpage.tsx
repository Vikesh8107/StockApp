import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

interface Stock {
  symbol: string;
  high: number;
  low: number;
  open: number;
  close: number;
  timestamp: number;
  volume: number;
  volumeWeighted: number;
  numberOfTrades: number;
  formattedTime: string;
}

const StockPage: React.FC = () => {
  const [stockData, setStockData] = useState<Stock[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=Uuc2J73WWc22LcUhvpmhZcPjPptbRLbE',
        );
        const data = await response.json();
        const formattedData = data.results.map((stock: any) => ({
          symbol: stock.T,
          high: stock.h,
          low: stock.l,
          open: stock.o,
          close: stock.c,
          timestamp: stock.t,
          volume: stock.v,
          volumeWeighted: stock.vw,
          numberOfTrades: stock.n,
          formattedTime: new Date(stock.t).toLocaleString(),
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
        style={[styles.searchBar, { color: 'white' }]}
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
            <View style={[styles.symbolBox, { backgroundColor: '#7752FE' }]}>
              <Text style={[styles.symbolText, styles.boldText, styles.symbolTypeText]}>
                {`${item.symbol}`}
              </Text>
            </View>
            <View style={styles.stockInfoContainer}>
              <View style={styles.stockInfoLeft}>
                <Text style={[styles.stockLabelText, styles.creativeText,{marginLeft: 7}]}>Low</Text>
                <Text style={[styles.stockValueText, styles.boldText, { color: 'red' }]}>{`${item.low}`}</Text>
              </View>
              <View style={styles.stockInfoRight}>
                <Text style={[styles.stockLabelText, styles.creativeText, { marginLeft: 73 }]}>High</Text>
                <Text style={[styles.stockValueText, styles.boldText, { color: 'green',marginLeft: 68  }]}>{`${item.high}`}</Text>
              </View>
            </View>
            <View style={styles.stockInfoContainer}>
              <View style={styles.stockInfoLeft}>
                <Text style={[styles.stockLabelText, styles.creativeText,{marginLeft: 5}]}>Open</Text>
                <Text style={[styles.stockValueText, styles.boldText]}>{`${item.open}`}</Text>
              </View>
              <View style={styles.stockInfoRight}>
                <Text style={[styles.stockLabelText, styles.creativeText, { marginLeft: 73 }]}>Close</Text>
                <Text style={[styles.stockValueText, styles.boldText, , { marginLeft: 68 }]}>{`${item.close}`}</Text>
              </View>
            </View>
            <Text style={[styles.stockLabelText, styles.creativeText, styles.centerText]}>Timestamp</Text>
            <Text style={[styles.stockValueText, styles.boldText, styles.centerText]}>{`${item.formattedTime}`}</Text>
            <View style={styles.volumeContainer}>
              <View style={styles.volumeLeft}>
                <Text style={[styles.stockLabelText, styles.creativeText, { marginLeft: 7 }]}>Volume</Text>
                <Text style={[styles.stockValueText, styles.boldText, { marginLeft: 2 }]}>
                  {`${item.volume}`}
                </Text>
              </View>
              <View style={styles.volumeRight}>
                <Text style={[styles.stockLabelText, styles.creativeText, { marginLeft: 23 }]}>Volume Weighted</Text>
                <Text style={[styles.stockValueText, styles.boldText, { marginLeft: 45 }]}>
                  {`${item.volumeWeighted}`}
                </Text>
              </View>
            </View>
            <Text style={[styles.stockLabelText, styles.creativeText, styles.centerText]}>No. of Trades</Text>
            <Text style={[styles.stockValueText, styles.boldText, styles.centerText]}>{`${item.numberOfTrades}`}</Text>
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
    borderRadius: 15,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
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
  symbolBox: {
    padding: 7,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolText: {
    fontSize: 20,
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  symbolTypeText: {
    fontStyle: 'italic',
  },
  stockInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  stockInfoLeft: {
    flex: 1,
    marginRight: 8,
  },
  stockInfoRight: {
    flex: 1,
    marginLeft: 8,
  },
  stockLabelText: {
    color: '#777',
    fontSize: 14,
    marginBottom: 4,
  },
  stockValueText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  creativeText: {
    color: '#5C469C',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
  },
  volumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  volumeLeft: {
    flex: 1,
    marginRight: 8,
  },
  volumeRight: {
    flex: 1,
    marginLeft: 8,
  },
});

export default StockPage;
