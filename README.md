# Altair – Nord Theme

A [Nord Theme](https://www.nordtheme.com) Port for the GraphQL IDE [Altair](https://altair.sirmuel.design/).

## Installation

1. Go to your settings
2. Click on `Toggle Advanced Mode` until you see the JSON settings of Altair
3. Copy the contents of the [`themeConfig.json`](./themeConfig.json) into your settings.
4. Click `Save`
5. You're good to go!

## ThemeConfig

```json
"themeConfig": {
  "colors": {
    "primary": "#88C0D0",
    "secondary": "#8FBCBB",
    "bg": "#2E3440",
    "offBg": "#3B4252",
    "font": "#E5E9F0",
    "offFont": "#D8DEE9",
    "border": "#E5E9F0",
    "offBorder": "#D8DEE9",
    "headerBg": "#2E3440"
  },
  "shadow": {
    "color": "#434C5E",
    "opacity": 0.1
  },
  "editor": {
    "fontFamily": {
      "default": "Fira Code"
    },
    "fontSize": "14",
    "colors": {
      "comment": "#4C566A",
      "string": "#A3BE8C",
      "number": "#B48EAD",
      "variable": "#EBCB8B",
      "keyword": "#5E81AC",
      "atom": "#8FBCBB",
      "attribute": "#81A1C1",
      "property": "#D8DEE9",
      "punctuation": "#5E81AC",
      "definition": "#81A1C1",
      "builtin": "#88C0D0",
      "cursor": "#D8DEE9"
    }
  }
}
```

## Hints

I selected the font `Fira Code` in these settings, but you can always leave this setting empty or choose any other font family you like.

&copy; 2020 Joe Pantazidis
