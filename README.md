# AK Memorial Homoeopathic Clinic

A modern, highly interactive, and performant web application built for Dr. MD Akhtaruzzaman and AK Memorial Homoeopathic Clinic. This version focuses on stronger 3D depth, richer motion, real local clinic imagery, and a more direct booking flow.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/) building Single Page Application (SPA) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, type-safe code
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (via shadcn/ui integration)
- **Animations**:
  - [GSAP (GreenSock)](https://gsap.com/) for complex scroll-triggered animations and timelines
  - [Framer Motion](https://www.framer.com/motion/) for declarative component-level transitions
  - Custom CSS 3D Transforms
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form combined with Zod for validation

## ✨ Key Features

- **Immersive Animations**: Experience parallax drifts, floating elements, dark section wipe reveals, and 3D doctor profile carousels.
- **Micro-interactions**: Engaging magnetic buttons, 3D tilt cards, custom cursors, and text scramble effects on hover.
- **Responsive & Performant**: Fully adaptable layout that degrades animations gracefully on mobile devices to preserve battery and performance.
- **Accessibility Ready**: Built-in support for `prefers-reduced-motion` to ensure a comfortable experience for all users.

## 📂 Project Structure

```text
AK-Memorial-Homoeopathic-Clinic/
├── app/
│   ├── src/
│   │   ├── components/   # Configured UI components (buttons, dialogs) and custom animated components
│   │   ├── hooks/        # Custom React hooks (e.g., scroll progress, mouse tracking)
│   │   ├── lib/          # Helper utilities and global animation configurations
│   │   ├── sections/     # Core page sections (Hero, About, Services, Doctor Profile, FAQ, etc.)
│   │   ├── App.tsx       # Root layout and component composition
│   │   ├── main.tsx      # Application entry point and GSAP registration
│   │   └── index.css     # Global styles and Tailwind imports
│   ├── public/           # Static image assets and favicons
│   ├── package.json      # App dependencies and scripts
│   ├── tailwind.config.js# Tailwind theme and plugin configuration
│   └── vite.config.ts    # Vite bundler options
├── TechSpec.md           # Extensive technical documentation and animation planning
└── README.md             # Project overview (this file)
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed (v18 or higher recommended).

### Installation & Local Development

1. **Navigate to the application directory**:
   ```bash
   cd app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will deploy locally to `http://localhost:5173`.

### Local Mac Preview With Flask

If you want to serve the built website through Flask on your Mac, use the project root instead of the `app` folder:

1. **Create the virtual environment**:
   ```bash
   cd HomeoCare_2.0
   python3 -m venv .venv
   source .venv/bin/activate
   ```

2. **Install Python dependencies**:
   ```bash
   python -m pip install --upgrade pip
   python -m pip install -r requirements.txt
   ```

3. **Install frontend dependencies and build the site**:
   ```bash
   cd app
   npm install
   npm run build
   cd ..
   ```

4. **Run Flask locally**:
   ```bash
   python app.py
   ```
   Open `http://127.0.0.1:5000` in your browser.

5. **Shortcut script**:
   ```bash
   chmod +x run_local.sh
   ./run_local.sh
   ```
   This script creates `.venv` if needed, installs the Python requirements, installs the frontend packages, builds the frontend, and starts Flask.

### Building for Production

To create an optimized, minified production build:
```bash
cd app
npm run build
```

To preview your production build locally before deploying:
```bash
npm run preview
```

## 🎨 Animation System Details

This project utilizes a multi-layered animation strategy meticulously planned out in `TechSpec.md` to ensure a smooth 60fps experience:

- **GSAP ScrollTrigger**: Manages heavy-lifting scroll animations, ensuring components pin and unpin reliably while scrubbing linked animations.
- **Framer Motion**: Handles simple state-based animations (like hover/tap variants) intuitively.
- **CSS Animations**: Powers infinite-looping idle states (like background glows or floating elements) to keep the main JavaScript thread free.

_To dive deeper into the technical architecture and animation behavior, refer to the `TechSpec.md` file._
# AK-Memorial
