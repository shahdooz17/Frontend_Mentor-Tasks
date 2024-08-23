# Time Tracking Dashboard

## Overview

This time tracking dashboard is a web application built using React and CSS. It allows users to track their time spent on various activities and provides a visual representation of their time allocation.

## Technologies Used

- React
- CSS
- JSON

## Key Features

- **Time Tracking**: Users can track their time spent on different activities.
- **Activity Cards**: The dashboard displays activity cards with details such as the activity name, time spent, and a visual representation of the time.
- **Timeframe Selection**: Users can switch between different timeframes (e.g., daily, weekly, monthly) to view their time tracking data accordingly.

## Getting Started

### Clone the Repository:
```bash
git clone <repository-url>
```
### Install Dependencies:
```bash
cd time-tracking-dashboard
npm install
```
### Start the Development Server:
```bash
npm start
```
### Access the Dashboard:
Open your web browser and navigate to http://localhost:3000.
## Project Structure:
```bash
src/
  components/
    ActivityCard.js
    NameCard.js
    ActivityContainer.js
    NameCard.CSS
    ActivityCard.CSS
  data/
    data.json
  images/
  App.js
  index.js
  index.CSS
  App.CSS
public/
  index.html
```
### How it Works:
- The ```App.js``` component is the main entry point of the application.

- It uses ```React state``` to manage the current timeframe and previous timeframe.
- The ```NameCard``` component displays the user's name and a timeframe selector.
- The ```ActivityContainer``` component fetches activity data from ```data.json``` and renders ```ActivityCard``` components for each activity.
- The ```ActivityCard``` component displays the activity details, including the activity name, time spent, and a visual representation.
- CSS grids are used to create the layout of the dashboard, and selectors are used to style individual elements.
### Learning Resources:
- https://legacy.reactjs.org/
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://www.json.org/json-en.html
### Contributing:
Contributions are welcome! Please feel free to submit pull requests or open issues.
### License:
This project is licensed under the MIT License.

