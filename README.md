# Company Stats

This project is a Company Stats dashboard that visualizes company data in various chart formats and tables. Built using React, TypeScript, React Chartjs 2, and Chart.js, , and styled with Tailwind CSS.

## Deployment

- Backend: [api-company-stats.hackimtech.com](http://api-company-stats.hackimtech.com)
- Frontend: [company-stats.hackimtech.com](http://company-stats.hackimtech.com)

## Example Account for Login

- Username: admin
- Password: admin#1234

## Features

- Visualize company data using Bar, Line, Radar, Pie, Doughnut, and Polar Area charts.
- Display company data in table format with search functionality.
- Responsive design.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/hackim18/Company-Stats
   ```
2. Navigate to the project directory:
   ```
   cd frontend && cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Project

#### Frontend

Start the frontend development server:

```
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

#### Backend

Start the backend server:

```
npm run server
```

The backend will be running at [http://localhost:3000](http://localhost:3000).

## Usage

### ChartPage

The ChartPage component displays various types of charts (Bar, Line, Pie, and Doughnut) based on the selected option from a dropdown menu. This component fetches company data using the getAllCompanies API.

### TablePage

The TablePage component displays company data in table format. It includes a search function to filter the table data by company name.

### Components

#### Chart

The Chart component is a reusable component for rendering various types of charts. It uses react-chartjs-2 to create the charts.

#### DataTable

The DataTable component displays company data in table format. It includes columns for company name, total revenue, total expenses, total profit, number of transactions, market share, and employee count.

### Backend

#### Endpoints

- GET /: Returns a welcome message.
- POST /login: Authenticates the user and returns an access token.
- GET /companies: Fetches all company data (protected by authentication middleware).

#### Example Account for Login

- Username: admin
- Password: admin#1234

#### API Result

- GET /

  ```json
  {
    "message": "Company Revenue"
  }
  ```

- POST /login
  Request Body:

  ```json
  {
    "username": "admin",
    "password": "admin#1234"
  }
  ```

  Response:

  ```json
  {
    "access_token": "your_access_token"
  }
  ```

- GET /companies
  Headers:
  ```json
  {
    "Authorization": "Bearer your_access_token"
  }
  ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
