# Visa Navigator : 

A React-based  website designed for Visa Navigator Portal to simplify the process of checking visa requirements,applying for visas online, and tracking applications .

- **Live Website Link**: [https://stellar-muffin-9a927b.netlify.app/](https://jovial-parfait-df020d.netlify.app/)



## Key Features

1. **Filter data**: The user can get the required data according to their choice by filtering.
2. **Secure Data**: Sensitive data are protected by private route.
3. **Animation**: Using different beautiful animation is visible in the homepage.
4. **Personalize Section**: The user can see the visas they have applied for.
5. **Error Handling**: Includes a custom 404 error page for incorrect routes, enhancing navigation and usability.

6. **Simple and Intuitive User Interface**: The website's user interface is designed to be simple and intuitive, allowing users to interact easily.

7. **Modification & Deletion**: The website's user can modify or update data and also delete  or add data.


## npm-packages
I have used several npm packages, two of them are-

1. **lottie**: Used to make beautiful animated image.
2. **Type-writer**: Used to bring animation in the homepage header.


# Local Installation

This guide provides step-by-step instructions on how to run the ScholarEase client-side project locally.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Download and install from [Node.js Official Website](https://nodejs.org/)
- **Git**: Download and install from [Git Official Website](https://git-scm.com/)

Verify installations by running:

```bash
node -v
npm -v
git --version
```

## Installation Steps

### 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/MHShiqder/ScholarEase-Client-Side.git
```

### 2. Navigate to the Project Directory

```bash
cd ScholarEase-Client-Side
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

VITE_apiKey=AIzaSyBB2CpmEbkkShwa1mSpvpjJr9llZeSInY8
VITE_authDomain=assignment-10-ph-ca700.firebaseapp.com
VITE_projectId=assignment-10-ph-ca700
VITE_storageBucket=assignment-10-ph-ca700.firebasestorage.app
VITE_messagingSenderId=445453725835
VITE_appId=1:445453725835:web:b0d524dc63ba575001e48e

### 5. Start the Development Server

Run the following command to start the application:

```bash
npm run dev
```

The project should now be running locally.




