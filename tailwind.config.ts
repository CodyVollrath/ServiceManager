// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',        // we’ll flip <html class="dark">
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // Next.js “app” router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // (or the old pages router)
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',          // if you keep code in /src
  ],
  theme: {
    extend: {
      colors: {
        primary:       'var(--color-primary)',
        'primary-dark':'var(--color-primary-dark)',
        surface:       'var(--color-surface)',
        elev:          'var(--color-surface-elev)',
        muted:         'var(--color-muted)',
      }
    },
  },
};
