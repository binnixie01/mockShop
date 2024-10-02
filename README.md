# MockShopp
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-FF69B4)

## Features

- **Responsive Design**: Optimized for various screen sizes.
- **Search Functionality**: Implemented using Fuse.js for fuzzy search.
- **Type Safety**: Built with TypeScript to enhance code reliability.
- **Secure Deployment**: Deployed on Vercel with environment variables securely managed.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Search**: Fuse.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 🔧 Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/binnixie01/mockShop.git
   cd mockShop
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running Locally

1. **Create a `.env` File**

   Create a `.env` file in the root directory of your project. **Do not** commit this file to your repository.

   ```env
   VITE_API_URL=
   ```

2. **Start the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173` (default Vite port).

## 🔗 Deployment

The project is deployed on **Vercel**, ensuring seamless and efficient deployments.

### Steps to Deploy on Vercel

1. **Link GitHub Repository to Vercel**

   - Log in to [Vercel](https://vercel.com/).
   - Click on **"New Project"**.
   - Select your GitHub repository.
   - Follow the prompts to set up the project.

2. **Configure Build Settings**

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` or `yarn build`
   - **Output Directory**: `dist`

3. **Set Environment Variables**

   Add the necessary environment variables in the Vercel dashboard under **Project Settings > Environment Variables**.

4. **Deploy**

   Vercel will automatically deploy your project on every push to the specified branches.


### Dependencies

- **React**: Frontend library.
- **Vite**: Build tool.
- **TypeScript**: Static typing.
- **Zustand**: State management.
- **React Router DOM**: Routing.
- **Fuse.js**: Search functionality.
- **Tailwind CSS**: Styling.
- **Framer Motion**: Animations.
- **Vercel**: Deployment.

## 📫 Contact

Thangjam Binson Singh -(https://www.linkedin.com/in/binson-thangjam/) - binsonthangjam7@gmail.com

Project Link: https://mockshopp.vercel.app

---







