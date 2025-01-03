# User Directory Application

A modern, responsive React application for managing and displaying user information with seamless offline support.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Offline Support**: Continues to work without internet connection
- **Modern UI**: Clean and intuitive interface using Tailwind CSS
- **Real-time Updates**: Using SWR for efficient data fetching
- **Type Safety**: Built with TypeScript for robust code quality

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Router**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4
- **State Management**: SWR 2.3
- **Build Tool**: Vite 6
- **Language**: TypeScript 5.6
- **Node Version**: 20.10.0
- **Package Manager**: Yarn 1.22.19

## 📦 Project Structure

```
user-directory/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── DescriptionItem.tsx
│   │   │   ├── ErrorDisplay.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── HomePage.tsx
│   │   ├── UserCard.tsx
│   │   └── UserDetails.tsx
│   ├── services/
│   │   └── api.ts
│   └── assets/
├── public/
└── package.json
```

## 🚀 Getting Started

1. **Prerequisites**
   ```bash
   node -v # Must be >= 20.10.0
   yarn -v # Must be >= 1.22.19
   ```

2. **Installation**
   ```bash
   yarn install
   ```

3. **Development**
   ```bash
   yarn dev
   ```

4. **Production Build**
   ```bash
   yarn build
   ```

## 🧪 Key Components

- **UserDetails**: Displays comprehensive user information
- **UserCard**: Compact user information display
- **Common Components**:
  - `DescriptionItem`: Reusable component for label-value pairs
  - `SectionHeader`: Standardized section headers
  - `ErrorDisplay`: Error handling with visual feedback
  - `Loader`: Loading state indicator

## 🔄 Data Management

- **SWR Integration**: Implements stale-while-revalidate strategy
- **Offline Support**: LocalStorage caching for offline access
- **Type Safety**: Comprehensive TypeScript interfaces

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Responsive design patterns
- Dark mode support
- Consistent typography and spacing

## 🚀 Deployment

The application is configured for deployment on Netlify:

```toml
[build]
  command = "yarn build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20.10.0"
  YARN_VERSION = "1.22.19"
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Commit Convention

- `feat:` New features
- `fix:` Bug fixes
- `perf:` Performance improvements
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Testing updates
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
