## React + Vite

This template provides a minimal setup to get React working in Vite and some ESLint rules.


### Clone the repository

git clone https://github.com/medhamishra2794/Noventiq-assignment/tree/main/nq-assignment-app


### Install dependencies

After cloning the project repository, run this command in the project directory to install dependencies:

`npm install`


### Start the development server

Once the dependencies are installed, start the development server:

`npm run dev`


## Testing Guide

### Quick Start

```bash
# Run all tests
npm test -- --run

# Run tests in watch mode
npm test
```

### Test Files

- Login Component: `src/components/login/__tests__/Login.test.jsx`

  - Tests form rendering
  - Email validation
  - Password visibility
  - Language selection
  - Remember me functionality

- Dashboard Component: `src/components/tickets/__tests__/Dashboard.test.jsx`
  - Tests header section
  - Ticket list rendering
  - Action buttons

### Common Testing Commands

```bash
# Run specific test file
npm test -- src/components/login/__tests__/Login.test.jsx
```

### Test Structure

- Tests use React Testing Library and Vitest
- Each component has its own `__tests__` directory
- Test files follow the pattern: `ComponentName.test.jsx`


## Folder structure

```sh
    │
    ├── public                  # public files (favicon, language locales)
    ├── src                     # source files
    │   ├── assets
    │       ├── scss            # scss files
    │   │   └── images          # images
    │   ├── components
    │   │   ├── login           # login component
    │   │   └── tickets         # tickets component
    │   ├── App.jsx
    │   ├── Constant.js         #constants
    │   ├── i18n.js             #language translation
    │   ├── main.jsx
    │   └── setupTests.js       #test setup
    ├── eslint.config.js
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── README.md
    └── vite.config.js
    └── vitest.config.js
```

## External libraries used

- Tailwind CSS (For UI components and responsive)

- React Icons

- react-i18next (Internationalization and Translation)
