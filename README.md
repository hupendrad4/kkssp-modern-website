# KKSSP Dhule - Modern Website

A modern, responsive website for कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे (Krushi Khate Sevak Sahakari Patsanstha Marya, Dhule).

## Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Animations**: Smooth animations using Framer Motion
- **Multilingual**: Content in Marathi with proper Devanagari font support
- **Performance**: Optimized for fast loading and smooth user experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Noto Sans Devanagari for Marathi text

## Sections

1. **Hero Section**: Eye-catching landing with organization info
2. **About Us**: History, mission, and objectives
3. **Board Members**: Complete list of directors and officials
4. **Loan Schemes**: Different loan options with detailed information
5. **Contact**: Contact form and office information
6. **Footer**: Additional links and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:9001](http://localhost:9001) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components (Header)
│   └── sections/       # Page sections
└── styles/             # Global styles
```

## Key Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid layouts

### Modern Animations
- Smooth page transitions
- Hover effects
- Scroll-triggered animations
- Loading states

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Focus management
- Screen reader friendly

### Performance
- Optimized images
- Code splitting
- Lazy loading
- Fast loading times

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- Primary: Blue shades
- Secondary: Yellow/Gold shades
- Additional utility colors

### Fonts
- Marathi text: Noto Sans Devanagari
- English text: Inter

### Content
All content is in Marathi and can be easily modified in the respective component files.

## Deployment

The website is configured to run on port 9001 and can be deployed to any hosting platform that supports Node.js applications.

## License

© 2024 कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे. All rights reserved.

Developed by Quorium Technologies Pvt Ltd.
