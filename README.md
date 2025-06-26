# Product Listing Interface

This is a simple product listing interface built using Next.js, React, and Tailwind CSS.

## Features

- /products route displays a responsive product grid
- Each card includes: product name, price, image (placeholder), and a "View Details" button
- Optional dynamic product detail page at /products/[id]
- Shared navigation bar across all pages
- Fully responsive design using Tailwind CSS

## Tech Stack

- Next.js (Pages Router)
- React
- Tailwind CSS
- ESLint

## Project Structure

<pre> ## Folder Structure src/ ├── components/ # Reusable UI components (Navbar, ProductCard, ProductGrid) ├── data/ # Static product list ├── pages/ │ ├── index.js # Home page │ └── products/ │ ├── index.js # Product grid page │ └── [id].js # Optional product detail page ├── styles/ └── globals.css # Tailwind CSS setup </pre>


## Setup Instructions

1. Clone the repository


2. Install dependencies


3. Run the development server


4. Open your browser at  http://localhost:3000/products


## Notes

- Uses local dummy data (`src/data/products.js`)




