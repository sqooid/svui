export interface ThemeOptions {
  background: string
  text: string

  placeholder: string

  elev1: string
  elev2: string

  primary: string
  onPrimary: string

  secondary: string
  onSecondary: string

  error: string
  onError: string
}

export interface GeneralOptions {
  shadow: string
  font: string
}

export interface SvuiOptions {
  themes: {
    light: ThemeOptions
    dark: ThemeOptions
  }
  general: GeneralOptions
}
