import { tv } from "tailwind-variants";

export const title = tv({
  base: "text-2xl font-bold",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      gray: "text-gray",
      destructive: "text-destructive",
      muted: "text-muted-foreground",
      accent: "text-accent",
    },
    size: {
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "lg",
    weight: "bold",
  },
});

export const subtitle = tv({
  base: "text-xl font-semibold",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      gray: "text-gray",
      destructive: "text-destructive",
      muted: "text-muted-foreground",
      accent: "text-accent",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    weight: "semibold",
  },
});

export const paragraph = tv({
  base: "text-base",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      gray: "text-gray",
      destructive: "text-destructive",
      muted: "text-muted-foreground",
      accent: "text-accent",
    },
    size: {
      sm: "text-sm",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      semibold: "font-semibold",
    },
  },
});

export const container = tv({
  base: "container mx-auto px-4 max-w-screen-xl",
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    margin: {
      none: "m-0",
      sm: "m-4",
      md: "m-6",
      lg: "m-8",
      xl: "m-10",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
    border: {
      none: "border-none",
      solid: "border",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
    },
    borderColor: {
      primary: "border-primary",
      secondary: "border-secondary",
      gray: "border-gray",
      destructive: "border-destructive",
      muted: "border-muted-foreground",
      accent: "border-accent",
    },
    borderWidth: {
      none: "border-0",
      default: "border",
      0: "border-0",
      2: "border-2",
      4: "border-4",
      8: "border-8",
    },
    borderRadius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      t: "rounded-t",
      r: "rounded-r",
      b: "rounded-b",
      l: "rounded-l",
      tl: "rounded-tl",
      tr: "rounded-tr",
      br: "rounded-br",
      bl: "rounded-bl",
    },
    boxShadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    opacity: {
      0: "opacity-0",
      5: "opacity-5",
      10: "opacity-10",
      20: "opacity-20",
      25: "opacity-25",
      30: "opacity-30",
      40: "opacity-40",
      50: "opacity-50",
      60: "opacity-60",
      70: "opacity-70",
      75: "opacity-75",
      80: "opacity-80",
      90: "opacity-90",
      95: "opacity-95",
      100: "opacity-100",
    },
    zIndex: {
      auto: "z-auto",
      0: "z-0",
      10: "z-10",
      20: "z-20",
      30: "z-30",
      40: "z-40",
      50: "z-50",
    },
    flex: {
      none: "flex-none",
      1: "flex-1",
      auto: "flex-auto",
      initial: "flex-initial",
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse",
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
      grow: "flex-grow",
      "grow-0": "flex-grow-0",
      "grow-1": "flex-grow-1",
      shrink: "flex-shrink",
      "shrink-0": "flex-shrink-0",
      "shrink-1": "flex-shrink-1",
      "basis-auto": "flex-basis-auto",
      "basis-0": "flex-basis-0",
      "basis-1": "flex-basis-1",
      "basis-2": "flex-basis-2",
      "basis-3": "flex-basis-3",
      "basis-4": "flex-basis-4",
      "basis-5": "flex-basis-5",
      "basis-6": "flex-basis-6",
      "basis-7": "flex-basis-7",
      "basis-8": "flex-basis-8",
      "basis-9": "flex-basis-9",
      "basis-10": "flex-basis-10",
      "basis-11": "flex-basis-11",
      "basis-12": "flex-basis-12",
      "basis-14": "flex-basis-14",
      "basis-16": "flex-basis-16",
      "basis-20": "flex-basis-20",
      "basis-24": "flex-basis-24",
      "basis-28": "flex-basis-28",
      "basis-32": "flex-basis-32",
      "basis-36": "flex-basis-36",
      "basis-40": "flex-basis-40",
      "basis-44": "flex-basis-44",
      "basis-48": "flex-basis-48",
      "basis-52": "flex-basis-52",
      "basis-56": "flex-basis-56",
      "basis-60": "flex-basis-60",
      "basis-64": "flex-basis-64",
      "basis-72": "flex-basis-72",
      "basis-80": "flex-basis-80",
      "basis-96": "flex-basis-96",
      "basis-px": "flex-basis-px",
    },
    flexDirection: {
      none: "flex-none",
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      col: "flex-col",
      colReverse: "flex-col-reverse",
    },
    flexWrap: {
      none: "flex-nowrap",
      wrap: "flex-wrap",
      wrapReverse: "flex-wrap-reverse",
    },
    alignItems: {
      none: "items-stretch",
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
    },
  },
});

export const button = tv({
  base: "rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90",
  variants: {
    color: {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-secondary text-white hover:bg-secondary/90",
      gray: "bg-gray text-white hover:bg-gray/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90",
      outline: "bg-transparent text-white hover:bg-transparent/90",
      ghost: "bg-transparent text-white hover:bg-transparent/90",
    },
    size: {
      sm: "rounded-lg px-3 py-1 text-sm",
      md: "rounded-lg px-4 py-2 text-sm",
      lg: "rounded-lg px-5 py-3 text-sm",
      xl: "rounded-lg px-6 py-4 text-sm",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      default:
        "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      secondary:
        "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      ghost:
        "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
    class: {
      "text-sm": "text-sm",
      "text-base": "text-base",
      "text-lg": "text-lg",
      "text-xl": "text-xl",
      "text-2xl": "text-2xl",
      "text-3xl": "text-3xl",
      "text-4xl": "text-4xl",
      "text-5xl": "text-5xl",
      "text-6xl": "text-6xl",
      "text-7xl": "text-7xl",
      "text-8xl": "text-8xl",
      "text-9xl": "text-9xl",
    },
    style: {
      "text-left": "text-left",
      "text-center": "text-center",
      "text-right": "text-right",
      "text-justify": "text-justify",
    },
    transform: {
      none: "transform-none",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      "normal-case": "normal-case",
      inherit: "inherit",
      initial: "initial",
      revert: "revert",
      unset: "unset",
    },
    transition: {
      none: "transition-none",
      all: "transition-all",
      colors: "transition-colors",
      opacity: "transition-opacity",
      shadow: "transition-shadow",
      transform: "transition-transform",
      "scale-x": "transition-transform scale-x",
      "scale-y": "transition-transform scale-y",
      scale: "transition-transform scale",
      "rotate-x": "transition-transform rotate-x",
      "rotate-y": "transition-transform rotate-y",
      rotate: "transition-transform rotate",
      "skew-x": "transition-transform skew-x",
      "skew-y": "transition-transform skew-y",
      skew: "transition-transform skew",
      "translate-x": "transition-transform translate-x",
      "translate-y": "transition-transform translate-y",
      translate: "transition-transform translate",
      "ease-linear": "transition-timing-linear",
      "ease-in": "transition-timing-linear",
      "ease-out": "transition-timing-linear",
      "ease-in-out": "transition-timing-linear",
    },
  },
});

export const input = tv({
  base: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "rounded-lg border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      md: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      lg: "rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      xl: "rounded-lg border border-input bg-background px-5 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "2xl": "rounded-lg border border-input bg-background px-6 py-5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    margin: {
      none: "m-0",
      sm: "m-4",
      md: "m-6",
      lg: "m-8",
      xl: "m-10",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
    border: {
      none: "border-none",
      solid: "border",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
    },
    borderColor: {
      primary: "border-primary",
      secondary: "border-secondary",
      gray: "border-gray",
      destructive: "border-destructive",
      muted: "border-muted-foreground",
      accent: "border-accent",
    },
    borderWidth: {
      none: "border-0",
      default: "border",
      0: "border-0",
      2: "border-2",
      4: "border-4",
      8: "border-8",
    },
    borderRadius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      t: "rounded-t",
      r: "rounded-r",
      b: "rounded-b",
      l: "rounded-l",
      tl: "rounded-tl",
      tr: "rounded-tr",
      br: "rounded-br",
      bl: "rounded-bl",
    },
    boxShadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    opacity: {
      0: "opacity-0",
      5: "opacity-5",
      10: "opacity-10",
      20: "opacity-20",
      25: "opacity-25",
      30: "opacity-30",
      40: "opacity-40",
      50: "opacity-50",
      60: "opacity-60",
      70: "opacity-70",
      75: "opacity-75",
      80: "opacity-80",
      90: "opacity-90",
      95: "opacity-95",
      100: "opacity-100",
    },
    zIndex: {
      auto: "z-auto",
      0: "z-0",
      10: "z-10",
      20: "z-20",
      30: "z-30",
      40: "z-40",
      50: "z-50",
    },
  },
});

export const select = tv({
  base: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "rounded-lg border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      md: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      lg: "rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      xl: "rounded-lg border border-input bg-background px-5 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    margin: {
      none: "m-0",
      sm: "m-4",
      md: "m-6",
      lg: "m-8",
      xl: "m-10",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
    border: {
      none: "border-none",
      solid: "border",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
    },
    borderColor: {
      primary: "border-primary",
      secondary: "border-secondary",
      gray: "border-gray",
      destructive: "border-destructive",
      muted: "border-muted-foreground",
      accent: "border-accent",
    },
    borderWidth: {
      none: "border-0",
      default: "border",
      0: "border-0",
      2: "border-2",
      4: "border-4",
      8: "border-8",
    },
    borderRadius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      t: "rounded-t",
      r: "rounded-r",
      b: "rounded-b",
      l: "rounded-l",
      tl: "rounded-tl",
      tr: "rounded-tr",
      br: "rounded-br",
      bl: "rounded-bl",
    },
    boxShadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    opacity: {
      0: "opacity-0",
      5: "opacity-5",
      10: "opacity-10",
      20: "opacity-20",
      25: "opacity-25",
      30: "opacity-30",
      40: "opacity-40",
      50: "opacity-50",
      60: "opacity-60",
      70: "opacity-70",
      75: "opacity-75",
      80: "opacity-80",
      90: "opacity-90",
      95: "opacity-95",
      100: "opacity-100",
    },
    zIndex: {
      auto: "z-auto",
      0: "z-0",
      10: "z-10",
      20: "z-20",
      30: "z-30",
      40: "z-40",
      50: "z-50",
    },
  },
});

export const checkbox = tv({
  base: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    sm: "rounded-lg border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    md: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    lg: "rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    xl: "rounded-lg border border-input bg-background px-5 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  },
  compoundVariants: [
    {
      variant: "sm",
      class: "text-sm",
    },
    {
      variant: "md",
      class: "text-base",
    },
    {
      variant: "lg",
      class: "text-lg",
    },
    {
      variant: "xl",
      class: "text-xl",
    },
  ],
});

export const radio = tv({
  base: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    sm: "rounded-lg border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    md: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    lg: "rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    xl: "rounded-lg border border-input bg-background px-5 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  },
});

export const badge = tv({
  base: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    sm: "rounded-lg border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    md: "rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    lg: "rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    xl: "rounded-lg border border-input bg-background px-5 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  },
});

export const accordion = tv({
  base: "border-none",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    transform: {
      none: "transform-none",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      "normal-case": "normal-case",
      inherit: "inherit",
      initial: "initial",
      revert: "revert",
      unset: "unset",
    },
    transition: {
      none: "transition-none",
      all: "transition-all",
      colors: "transition-colors",
      opacity: "transition-opacity",
      shadow: "transition-shadow",
      transform: "transition-transform",
      "scale-x": "transition-transform scale-x",
      "scale-y": "transition-transform scale-y",
      scale: "transition-transform scale",
      "rotate-x": "transition-transform rotate-x",
      "rotate-y": "transition-transform rotate-y",
      rotate: "transition-transform rotate",
      "skew-x": "transition-transform skew-x",
      "skew-y": "transition-transform skew-y",
      skew: "transition-transform skew",
      "translate-x": "transition-transform translate-x",
      "translate-y": "transition-transform translate-y",
      translate: "transition-transform translate",
      "ease-linear": "transition-timing-linear",
      "ease-in": "transition-timing-linear",
      "ease-out": "transition-timing-linear",
      "ease-in-out": "transition-timing-linear",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
});

export const avatar = tv({
  base: "rounded-full",
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
    },
    variant: {
      square: "rounded-full",
      circle: "rounded-full",
      rounded: "rounded-full",
    },
    border: {
      none: "border-none",
      solid: "border",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
    },
    borderColor: {
      primary: "border-primary",
      secondary: "border-secondary",
      gray: "border-gray",
      destructive: "border-destructive",
      muted: "border-muted-foreground",
      accent: "border-accent",
    },
    borderWidth: {
      none: "border-0",
      default: "border",
      0: "border-0",
      2: "border-2",
      4: "border-4",
      8: "border-8",
    },
    borderRadius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      t: "rounded-t",
      r: "rounded-r",
      b: "rounded-b",
      l: "rounded-l",
      tl: "rounded-tl",
      tr: "rounded-tr",
      br: "rounded-br",
      bl: "rounded-bl",
    },
    boxShadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    opacity: {
      0: "opacity-0",
      5: "opacity-5",
      10: "opacity-10",
      20: "opacity-20",
      25: "opacity-25",
      30: "opacity-30",
      40: "opacity-40",
      50: "opacity-50",
      60: "opacity-60",
      70: "opacity-70",
      75: "opacity-75",
      80: "opacity-80",
      90: "opacity-90",
      95: "opacity-95",
      100: "opacity-100",
    },
    zIndex: {
      auto: "z-auto",
      0: "z-0",
      10: "z-10",
      20: "z-20",
      30: "z-30",
      40: "z-40",
      50: "z-50",
    },
  },
});
