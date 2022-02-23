export interface Theme {
  font: string

  background: string
  text: string

  elev1: string
  elev2: string

  primary: string
  onPrimary: string

  secondary: string
  onSecondary: string

  error: string
  onError: string
}

export interface ThemeOverrides {
  light?: Partial<Theme>
  dark?: Partial<Theme>
}
