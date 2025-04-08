# Energy and Load Plotter

This project is a web application that visualizes energy and load data from a specified JSON endpoint. It fetches data from a PowerPDU device and displays the energy consumption and load for four outputs in a graphical format.

## Overview
This repository contains the work supported by the [6G-REMIX Open Call](https://6g-xr.eu/open-calls/oc2-results/) of the [6G-XR](https://6g-xr.eu) project.

## Project Structure

```
visualisation
├── src
│   ├── index.html       # HTML structure for the web application
│   ├── app.js           # JavaScript code for fetching and processing data
│   └── styles.css       # CSS styles for the web application
├── package.json         # npm configuration file
├── LICENSE.md         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

To set up and run the application, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/minhkstn/6G-REMIX-Visualisation.git
   cd visualisation
   ```

   Replace `<netio-ip>` in the `proxy-server.js` file with the IP of your NETIO device.

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Run the application:**
   Start a proxy server by 
   ```
   node proxy-server.js
   ```
   
   You can use a local server to serve the `index.html` file. For example, you can use the `http-server` package:
   ```
   npx http-server src
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port specified by your server) to view the application.

## Functionality

- The application fetches JSON data from the Open API of NETIO device.
- It processes the data to extract energy and load values for all four outputs.
- The extracted data is plotted using a charting library, providing a visual representation of energy consumption and load.

## Dependencies

This project may use the following dependencies (check `package.json` for the complete list):

- Charting library (e.g., Chart.js, D3.js) for plotting data.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International Public License License. See the LICENSE file for more details.
