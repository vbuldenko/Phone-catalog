# React + TypeScript + Vite: Phone catalog

- [Figma design of the app](https://www.figma.com/file/FRxncC4lfyhs6og1L6FGEU/Phone-catalog-(V2)-Rounded-Style-2?node-id=0%3A1)


## 🚀 Demo

- [Click here to view the demo](https://vbuldenko.github.io/react_phone-catalog/)

## 📖 Description

This project is a modern and fully responsive phone catalog built with React, featuring a shopping cart and a favorites page. The application allows users to browse through a catalog of phones, add items to their cart, and mark their favorite products for easy access. The UI is designed based on a Figma mockup, ensuring a sleek and user-friendly experience. The app leverages various React hooks and libraries to provide efficient and smooth functionality, including real-time search with debounce, custom infinite carousel, and seamless state management with context and local storage.

## 🛠️ Technologies Used
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)


## ⚙️ Features

- 📱 Responsive web design
- ⚡️ Custom Infinity Carousel (Slider)
- 📄 Product Pagination
- 🗂️ Filtering Options
- 🔍 Product Search with Debounce
- ✅ Valid HTML5 & CSS3
- 🌐 Semantic Markup

## 📂 Project Structure


```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Carousel.js
│   │   ├── ProductCard.js
│   │   ├── ...
│   ├── pages
│   │   ├── Catalog.js
│   │   ├── Cart.js
│   │   └── ...
│   ├── hooks
│   │   ├── useDebounce.js
│   │   └── ...
│   ├── context
│   │   ├── CartContext.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```


## 🔧 Installation and Setup

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/vbuldenko/Phone-catalog.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Phone-catalog
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   npm start
   ```
5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the project.

## 📚 Documentation

### React Hooks Used

- `useState`
- `useContext`
- `useEffect`
- `useCallback`
- `useMemo`
- `useRef`
- `useSearchParams`
- `useParams`

### Additional Libraries

- React Router
- Local Storage (for cart and favorites)
- Debounce (for product search)
"""
