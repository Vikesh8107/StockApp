# StockApp


StockApp is a React Native mobile application designed to fetch stock data from the Polygon API and display a list of stocks with their prices, updating at specified intervals.

## Project Structure

- **frontend:** React Native app has been used
- **backend:** Node.Js has been used

## Getting Started

### Prerequisites

- Node.js installed
- React Native development environment set up

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vikesh8107/StockApp.git
   cd StockApp
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Run the Metro server.

   ```bash
   npm start
   ```

4. Start the application on Android or iOS.

   ```bash
   # For Android
   npm run android

   # For iOS
   npm run ios
   ```

   This will install the required Node.js packages and set up the project for you.

## Features

- Fetch and display stock data from the Polygon API.
- Customizable refresh intervals for real-time stock updates.


1. **User Input:**
   - Takes an integer "n" from the user as input.

2. **Fetching Stocks:**
   - Fetches "n" stocks from the Polygon API.
   - Adds a unique key called "refreshInterval" for each stock, with intervals ranging between 1-5 seconds.

3. **Previous Close Prices:**
   - Fetches and stores the previous close prices of the stocks.
   - Stores the prices in a single file for reference.

4. **Real-time Updates:**
   - Updates stock prices at specified refresh intervals.
   - Prices are updated with random values.
   - Updates are made from the same file where the prices are stored.

5. **UI Display:**
   - Displays a list of stocks with their current prices.
   - Supports real-time updates for each stock.


## Assignment Tasks

### 1. User Input

Take an integer "n" from the user as input.

### 2. Fetching Stocks

Fetch n stocks from the Polygon API and add a unique key called "refreshInterval" for each, ranging between 1-5 seconds.

### 3. Previous Close Prices

Fetch previous close prices for the stocks and store them in a file.

### 4. Real-time Updates

Update stock prices at specified refresh intervals with random values. These updates are made from the same file where the prices are stored.

## Display Output Images and Video

Check out some snapshots and a video of our app:

<div style="display: flex; gap: 300px;">
    <img src="/OutPut/Image1.jpeg" alt="Stock Image 1" width="200"/>
    <img src="/OutPut/Image2.jpeg" alt="Stock Image 2" width="200"/>
    <img src="/OutPut/Image3.jpeg" alt="Stock Image 3" width="200"/>
    <img src="/OutPut/Image4.jpeg" alt="Stock Image 4" width="200"/>
</div>




[![Watch the Video](https://img.shields.io/badge/Watch%20the%20Video-Click%20Here-orange)](/OutPut/Video.mp4)



## Acknowledgments

Special thanks to the Polygon API for providing real-time stock data.

## License

This project is licensed under the [MIT License](LICENSE).
