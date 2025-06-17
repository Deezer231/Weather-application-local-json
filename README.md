GITHUB PAGES LINK -
https://deezer231.github.io/Weather-application-local-json/

Used "https://www.vantajs.com/?effect=clouds" (vanta.js) + correspondong code for animated background

Lab 2 for CS230

## Introduction

-The objective of this project was to develop a web application that retrieves weather data from a local JSON file(sample.json) and dynamically updates the page content based on the received information. 
 Users can input their location (city name), and the application will display relevant weather forecast details such as temperature, humidity, UV index, wind speed, etc.

## Objective

- Develop a web application structured into organized HTML, CSS, and JavaScript files.
- Utilize JavaScript to fetch data from a JSON file and display it dynamically.
- Implement CSS styles that adjust based on the user's input location, including background images, icon colors, and page appearance, reflecting the weather conditions.

## Task Description

### Task 1: HTML (Hypertext Markup Language) 

This section focuses on creating the basic structure of the web application.

#### Requirements:

- **Boilerplate **: Initialize the web application with an organized folder structure containing `index.html`, `styles.css`, and `script.js` and a folder for the following HTMl pages.
- **Home Page **: Develop a Home Page featuring a heading, an input field for the city name, a button to submit the input, and a navbar with four buttons to pages for Temperature, Humidity, UV Index, and Wind Speed.
- **Temperature Section **: Create a HTML page displaying the temperature with a title, a paragraph (with an id for temperature data), a toggle button for Fahrenheit and Celsius, and space for a thermometer icon.
- **Humidity Section **: Develop a HTML page displaying the humidity with a title, a paragraph (with an id for humidity data), and space for a drop icon.
- **UV Index Section **: Implement a HTML page displaying the UV Index with a title, a paragraph (with an id for UV data), and space for a sun icon.
- **Wind Speed Section **: Create a HTML page displaying wind speed with a title, a paragraph (with an id for wind data), and space for a gust of air icon.

### Task 2: CSS (Cascading Style Sheets) (10%)

This section involves styling the web application dynamically based on weather data.

#### Requirements:

- **Boilerplate **: Ensure each HTML page has appropriate styling using `styles.css`.
- **Background Color **: Give each HTML page a unique background color.

### Task 3: JS (JavaScript) 

This section focuses on implementing functionality using JavaScript, including fetching data from the JSON file and updating styles dynamically.

#### Requirements:

- **JSON Data Integration **: Upon user input (city search), fetch weather data from a local JSON file using the Fetch API. Parse the received data and update the respective elements (Temperature, Humidity, UV Index, Wind Speed) with data from the input city accordingly.
- **Style Updates **: Dynamically adjust the color of icons within each section based on weather conditions. For example, if the temperature exceeds 20°C, the temperature icon should turn yellow; otherwise, it should remain blue.
- Apply similar color adjustments for wind speed, humidity, and UV (you can choose the threshold).
