# Launchly - React Next.js App Landing Page Template

A beautiful, responsive React Next.js template to showcase your mobile application with style. Built with modern technologies and best practices.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component-Based**: Modular, reusable components for easy customization
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized images and fast loading times
- **Accessibility**: Semantic HTML and accessibility best practices

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Hero.tsx             # Hero section with navigation and CTA
│   ├── Demos.tsx            # Demo showcase grid
│   └── Footer.tsx           # Footer with social links
public/
└── images/                  # Placeholder images directory
```

## 🎨 Sections

### Hero Section
- Navigation bar with brand and CTA button
- Large hero banner with gradient background
- Brand logo and tagline
- Description text
- Primary and secondary CTA buttons
- Device mockups showcase

### Demo Showcase
- Grid layout of demo previews
- Three categories: App Showcase, Layout Types, Page Types
- Interactive hover effects
- Responsive grid system

### Footer
- Social media links
- Navigation links
- Copyright information
- Back to top functionality

## 🛠️ Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add placeholder images**:
   - Add your images to the `public/images/` directory
   - See `public/images/README.md` for required image specifications

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization

### Branding
- Replace "Launchly" with your app name throughout the components
- Update the logo in `Hero.tsx` and `Footer.tsx`
- Modify colors in `tailwind.config.js`

### Content
- Update text content in each component
- Replace placeholder images with your app screenshots
- Modify demo cards in `Demos.tsx`

### Styling
- Customize colors, fonts, and spacing in `tailwind.config.js`
- Add custom CSS in `globals.css`
- Modify component styles using Tailwind classes

## 🎯 Key Components

### Hero Component (`src/components/Hero.tsx`)
- Navigation header
- Main hero content with branding
- CTA buttons with hover effects
- Device mockup showcase
- Responsive design

### Demos Component (`src/components/Demos.tsx`)
- 3x3 grid of demo cards
- Hover animations and effects
- Category-based organization
- Responsive grid layout

### Footer Component (`src/components/Footer.tsx`)
- Social media icons
- Navigation links
- Copyright and legal links
- Back to top button

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processor
- **ESLint** - Code linting and formatting

## 📱 Responsive Design

The template is fully responsive and optimized for:
- **Desktop**: Large screens (1024px+)
- **Tablet**: Medium screens (768px - 1023px)
- **Mobile**: Small screens (320px - 767px)

## 🎨 Color Scheme

The template uses a modern color palette:
- **Primary**: Purple gradient (`#9333ea` to `#7c3aed`)
- **Secondary**: Blue gradient (`#3b82f6` to `#2563eb`)
- **Accent**: Cyan and pink gradients
- **Neutral**: Gray scale for text and backgrounds

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Made with ❤️ using Next.js and Tailwind CSS**
