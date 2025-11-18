# Fashion Store E-Commerce Platform

A modern, full-stack e-commerce platform for fashion retail built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Database**: Prisma (ready to connect)
- **Payments**: Stripe (ready to integrate)
- **Authentication**: NextAuth.js

## 📁 Project Structure

```
fashion-store/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   └── ProductCard.tsx # Product display card
├── lib/                # Utility functions
└── public/             # Static assets
```

## 🛠️ Features

- ✅ Responsive navbar with category navigation
- ✅ Product cards with wishlist and cart functionality
- ✅ Hero section with category showcase
- ✅ Newsletter subscription
- ✅ Mobile-friendly design
- 🚧 Shopping cart (in progress)
- 🚧 Product pages (in progress)
- 🚧 Checkout flow (in progress)
- 🚧 User authentication (in progress)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Environment Variables (To be configured)

Create a `.env.local` file:

```env
# Database
DATABASE_URL="your_database_url"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"

# Stripe
STRIPE_PUBLIC_KEY="your_stripe_public_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

## 🎨 Design System

- **Primary Color**: Black (#000000)
- **Accent Color**: White (#FFFFFF)
- **Typography**: Geist Sans & Geist Mono
- **Breakpoints**: Mobile-first responsive design

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

Deploy to Vercel (recommended for Next.js):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to Railway, Netlify, or any other hosting platform that supports Next.js.

## 📄 License

© 2025 Fashion Store. All rights reserved.

---

**Note**: This is a separate project from any other applications. All configurations are independent.
