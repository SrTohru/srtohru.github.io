# Personal Portfolio

This is the repository for my personal portfolio website, built with Next.js and Tailwind CSS. The portfolio showcases my skills, projects, and provides a way for visitors to contact me.

## Features

-   **Responsive Design**: The website is fully responsive and works on all devices.
-   **Internationalization**: The content is available in both English and Spanish.
-   **Project Showcase**: A dedicated section to display my projects.
-   **Contact Form**: A form to allow visitors to send me a message.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm

### Installation

1.  Clone this repository to your local machine.
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js `app` directory structure.

-   `src/app/`: Contains all the pages and components of the application.
    -   `components/`: Shared components used across the application.
    -   `providers/`: React context providers.
    -   `contact/`, `projects/`: The different pages of the application.
-   `src/i18n/`: Contains the internationalization files.
    -   `dictionary.ts`: The translations for the application.
-   `public/`: Contains all the static assets, such as images and fonts.

## Internationalization

The internationalization is implemented using a React context provider. The `LanguageProvider` component wraps the application and provides the language context to all the components. The translations are stored in the `src/i18n/dictionary.ts` file.

To add a new language, you need to:

1.  Add a new key to the `messages` object in `src/i18n/dictionary.ts` with the translations for the new language.
2.  Add a new option to the language switcher in the `Navbar` component.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
