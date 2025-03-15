# FutureConnect eSIM App

FutureConnect is a modern React application designed to provide hassle-free mobile connectivity through innovative eSIM technology. It offers users a seamless way to explore, select, and activate digital SIM cards for local, regional, and global data plans. With instant activation, global coverage, and flexible plans, FutureConnect eliminates the need for physical SIM cards, catering to frequent travelers, remote workers, and anyone seeking a convenient mobile experience.

## Features

- **Multi-Language Support**: Fully translated into English (`en`) and Arabic (`ar`) with RTL support for Arabic using `react-i18next`.
- **Data Plans Overview**: Browse categorized data plans (`local`, `regional`, `global`) with a searchable list of countries and regions.
- **Country Details**: View detailed information for each country/region, including pricing, features, and download options for iOS/Android apps.
- **FAQ Section**: Expandable FAQ section with details on features, descriptions, and technical aspects of eSIM usage.
- **Responsive Design**: Grid-based layout adjusts for different screen sizes (mobile, tablet, desktop).
- **Routing**: Navigate between home (`DataPlans`), country details (`CountryDetails`), and FAQ (`CountryFAQ`) using `react-router-dom`.
- **Image Integration**: Category-specific images (`local-image.avif`, `regional-image.avif`, `global-image.jpg`) for visual appeal.
- **Animations**: Smooth transitions for tab underlines, FAQ toggles, and card hover effects.

## Tech Stack

- **React**: Core framework for building the UI.
- **react-i18next**: Internationalization for multi-language support.
- **react-router-dom**: Client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and development server.
- **Ionicons**: Icons for buttons and features.

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Yussif20/Mars
   cd mars
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   Open `http://localhost:5173` in your browser to view the app.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
   The production-ready files will be in the `dist` folder.

## Project Structure

```
mars/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json  # English translations
│   │   └── ar/
│   │       └── translation.json  # Arabic translations
│   └── assets/
│       ├── local-image.avif      # Image for local countries
│       ├── regional-image.avif   # Image for regional plans
│       ├── global-image.jpg      # Image for global plan
│       ├── asia.jpg              # Regional flag image
│       ├── global.webp           # Global flag image
│       ├── north-america.jpg     # Regional flag image
│       ├── south-america.jpg     # Regional flag image
│       ├── europa.webp           # Regional flag image
│       └── africa.jpg            # Regional flag image
├── src/
│   ├── components/
│   │   ├── Button.jsx            # Reusable button component
│   │   ├── CountryCard.jsx       # Card for local countries
│   │   ├── RegionCard.jsx        # Card for regional/global plans
│   │   └── CountrySelector.jsx   # Tabbed selector for plans
│   ├── DataPlans.jsx             # Home page with plan overview
│   ├── CountryDetails.jsx        # Details page for a selected country
│   ├── CountryFAQ.jsx            # FAQ page
│   ├── LanguageSwitcher.jsx      # Language toggle component
│   ├── i18n.js                   # i18n configuration
│   ├── App.jsx                   # Main app component with routing
│   └── main.jsx                  # Entry point
├── package.json                  # Project dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## Usage

1. **Home Page (`/`)**

   - Displays `DataPlans` with tabs for `Local`, `Regional`, and `Global` plans.
   - Searchable list for local countries (e.g., "UK", "Switzerland").
   - Click a card to navigate to its details page.

2. **Country Details (`/country/:country`)**

   - Shows details for a selected country/region (e.g., `/country/uk`).
   - Includes an image, price, features, and app download buttons.
   - Uses a `key` field (e.g., `"uk"`) for consistent routing across languages.

3. **FAQ (`/faq`)**

   - Expandable FAQ section with translated content.
   - Toggle questions to reveal answers.

4. **Language Switching**
   - Use the `LanguageSwitcher` to toggle between English and Arabic.
   - Arabic displays in RTL layout.

## Live version

[Live Link]: (https://mars-lemon.vercel.app/)

### i18n Setup

- Translation files are in `public/locales/[lang]/translation.json`.
- Supported languages: `en` (English), `ar` (Arabic).
- Add new languages by creating a folder in `public/locales/` and updating `i18n.js`.

### Routing

- Routes are defined in `App.jsx` using `react-router-dom`.
- Add new routes as needed in the `<Routes>` component.

### Styling

- Tailwind CSS classes are used throughout. Customize in `index.css` or component files.
- Example: `hover:scale-105` for card hover effects.

## Data Structure

Translation files (`translation.json`) contain:

- `countrySelector`: Data for `local`, `regional`, and `global` plans with `key`, `name`, `flag`, `description`, and `price`.
- `dataPlans`: Titles and search placeholder for the home page.
- `countryDetails`: Static text and features for country details.
- `countryFAQ`: FAQ questions and answers.

Images are assigned dynamically:

- `localImage`: All local countries.
- `regionalImage`: All regional plans.
- `global`: Global plan.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, contact [yousefayman2000500](mailto:yousefayman2000500).
