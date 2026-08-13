module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#f7fafe",
        "outline": "#77767e",
        "secondary-fixed": "#d9e2ff",
        "on-primary-fixed": "#151a31",
        "on-tertiary-container": "#7073ff",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#07006c",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "tertiary-fixed": "#e1e0ff",
        "on-tertiary-fixed": "#07006c",
        "secondary": "#0057c2",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#004398",
        "eco-success": "#16865B",
        "tertiary-fixed-dim": "#c0c1ff",
        "on-primary-fixed-variant": "#41455e",
        "on-surface-variant": "#46464d",
        "on-surface": "#181c1f",
        "warning-amber": "#F59E0B",
        "surface-container-low": "#f1f4f8",
        "primary": "#000000",
        "on-background": "#181c1f",
        "on-primary-container": "#7e829e",
        "danger-red": "#EF4444",
        "primary-fixed": "#dde1ff",
        "inverse-on-surface": "#eef1f5",
        "surface-variant": "#e0e3e7",
        "surface": "#f7fafe",
        "on-primary": "#ffffff",
        "tertiary": "#000000",
        "primary-fixed-dim": "#c1c5e3",
        "surface-bright": "#f7fafe",
        "violet-accent": "#8B5CF6",
        "inverse-primary": "#c1c5e3",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#afc6ff",
        "inverse-surface": "#2d3134",
        "on-tertiary-fixed-variant": "#2f2ebe",
        "outline-variant": "#c7c5ce",
        "primary-container": "#151a31",
        "on-secondary-container": "#fefcff",
        "dark-navy-text": "#111827",
        "surface-tint": "#585d77",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#e0e3e7",
        "surface-container": "#ebeef2",
        "surface-container-high": "#e5e8ec",
        "muted-gray": "#667085",
        "on-tertiary": "#ffffff",
        "surface-dim": "#d7dade",
        "on-secondary-fixed": "#001a43",
        "cool-white": "#F9FAFF",
        "secondary-container": "#246fe7"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xl": "40px",
        "xs": "4px",
        "md": "16px",
        "sm": "8px",
        "margin-desktop": "32px",
        "unit": "4px",
        "gutter": "16px",
        "lg": "24px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "label-xs": ["Inter"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "label-sm": ["Inter"],
        "headline-xl": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-xs": ["12px", { "lineHeight": "16px", "fontWeight": "700" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
        "label-sm": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }]
      },
      boxShadow: {
        "premium-card": "0 4px 12px 0 rgba(11, 16, 38, 0.04)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
