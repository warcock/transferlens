/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium color system - human-designed palette
        'primary': '#0f172a',        // Deep slate - sophisticated primary
        'primary-hover': '#1e293b',  // Lighter slate for hover
        'primary-light': '#f1f5f9',  // Light slate for backgrounds
        'primary-accent': '#3b82f6', // Accent blue for interactive elements
        
        'secondary': '#059669',      // Emerald - success/positive states
        'secondary-hover': '#10b981',
        'secondary-light': '#ecfdf5',
        
        'tertiary': '#d97706',       // Amber - warnings and attention
        'tertiary-hover': '#f59e0b',
        'tertiary-light': '#fffbeb',
        
        'error': '#dc2626',          // Red - errors and critical states
        'error-hover': '#ef4444',
        'error-light': '#fef2f2',
        
        // Neutral surfaces with subtle warmth
        'background': '#fafbfc',    // Subtle warm white background
        'surface': '#ffffff',        // Pure white surface
        'surface-alt': '#f8fafc',    // Cool gray alternative surface
        'surface-elevated': '#ffffff',
        
        // Text colors with better contrast
        'text-primary': '#0f172a',   // Deep slate primary text
        'text-secondary': '#475569', // Slate secondary text
        'text-tertiary': '#94a3b8',  // Muted tertiary text
        'text-inverse': '#ffffff',   // White inverse text
        
        // Borders with subtle variation
        'border': '#e2e8f0',         // Subtle border
        'border-subtle': '#f1f5f9',  // Very subtle border
        'border-strong': '#cbd5e1',  // Stronger border
        'border-focus': '#3b82f6',   // Focus state border
        
        // Legacy support for existing code
        'on-primary': '#ffffff',
        'on-surface': '#1a365d',
        'on-surface-variant': '#64748b',
        'on-background': '#1a365d',
        'surface-variant': '#f1f5f9',
        'surface-elevated': '#ffffff',
        'outline': '#94a3b8',
        'outline-variant': '#e2e8f0',
        'surface-container': '#f8fafc',
        'surface-container-low': '#f1f5f9',
        'surface-container-lowest': '#ffffff',
        'on-secondary': '#ffffff',
        'on-error': '#ffffff',
        'on-error-container': '#7f1d1d',
        'error-container': '#fee2e2',
        'secondary-container': '#ccfbf1',
        'on-secondary-container': '#134e4a',
        'primary-container': '#e2e8f0',
        'on-primary-container': '#1a365d',
      },
      borderRadius: {
        'DEFAULT': '8px',           // More refined corner radius
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px'
      },
      spacing: {
        'sidebar-width': '280px',   // More generous sidebar
        'margin-page': '40px',      // More breathing room
        'container-max': '1400px',  // Wider max container
        'header-height': '72px',    // Taller header for elegance
        
        // Refined spacing scale with more options
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        
        // Legacy support
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '24px',
        'gutter': '24px',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'label': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'code': ['JetBrains Mono', 'Fira Code', 'monospace'],
        
        // Legacy support
        'display-lg': ['Inter'],
        'body-md': ['Inter'],
        'body-sm': ['Inter'],
        'headline-lg': ['Inter'],
        'display-md': ['Inter'],
        'label-md': ['Inter'],
        'code': ['JetBrains Mono'],
        'headline-md': ['Inter'],
        'body-lg': ['Inter']
      },
      fontSize: {
        // Refined typography scale
        'xs': ['12px', { 'lineHeight': '16px', 'letterSpacing': '0.02em' }],
        'sm': ['14px', { 'lineHeight': '20px', 'letterSpacing': '0.01em' }],
        'base': ['16px', { 'lineHeight': '24px' }],
        'lg': ['18px', { 'lineHeight': '28px' }],
        'xl': ['20px', { 'lineHeight': '28px' }],
        '2xl': ['24px', { 'lineHeight': '32px' }],
        '3xl': ['30px', { 'lineHeight': '38px' }],
        '4xl': ['36px', { 'lineHeight': '44px', 'letterSpacing': '-0.01em' }],
        '5xl': ['42px', { 'lineHeight': '50px', 'letterSpacing': '-0.02em' }],
        
        // Legacy support
        'display-xs': ['32px', { 'lineHeight': '40px', 'letterSpacing': '-0.01em', 'fontWeight': '700' }],
        'display-sm': ['36px', { 'lineHeight': '44px', 'letterSpacing': '-0.01em', 'fontWeight': '700' }],
        'display-md': ['42px', { 'lineHeight': '52px', 'letterSpacing': '-0.02em', 'fontWeight': '700' }],
        'display-lg': ['48px', { 'lineHeight': '56px', 'letterSpacing': '-0.02em', 'fontWeight': '700' }],
        'headline-sm': ['20px', { 'lineHeight': '28px', 'fontWeight': '600' }],
        'headline-md': ['24px', { 'lineHeight': '32px', 'fontWeight': '600' }],
        'headline-lg': ['30px', { 'lineHeight': '38px', 'fontWeight': '600' }],
        'body-sm': ['14px', { 'lineHeight': '20px', 'fontWeight': '400' }],
        'body-md': ['16px', { 'lineHeight': '24px', 'fontWeight': '400' }],
        'body-lg': ['18px', { 'lineHeight': '28px', 'fontWeight': '400' }],
        'label-sm': ['12px', { 'lineHeight': '16px', 'letterSpacing': '0.05em', 'fontWeight': '500' }],
        'label-md': ['14px', { 'lineHeight': '20px', 'letterSpacing': '0.05em', 'fontWeight': '500' }],
        'label-lg': ['16px', { 'lineHeight': '24px', 'letterSpacing': '0.05em', 'fontWeight': '500' }],
        'code': ['14px', { 'lineHeight': '20px', 'fontWeight': '400' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'floating': '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
        'inner-glow': 'inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      }
    }
  },
  plugins: [],
}
