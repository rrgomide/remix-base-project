/**
 * Daisy UI Default Themes
 * https://daisyui.com/docs/default-themes
 */
const DAISY_UI_THEMES = [
  'aqua',
  'black',
  'bumblebee',
  'cmyk',
  'corporate',
  'cupcake',
  'cyberpunk',
  'dark',
  'dracula',
  'emerald',
  'fantasy',
  'forest',
  'garden',
  'halloween',
  'light', // default
  'lofi',
  'luxury',
  'pastel',
  'retro',
  'synthwave',
  'valentine',
  'wireframe',
]

/**
 * Converting array of strings to object
 * where each entry meets the following
 * template: {value: "value"}
 * https://stackoverflow.com/a/36388401
 */
const DAISY_UI_THEME_OBJECT: { [key: string]: string } = DAISY_UI_THEMES.reduce(
  (accumulator, current) => ({ ...accumulator, [current]: current }),
  {}
)

/**
 * Change your default theme here
 */
export const defaultTheme = DAISY_UI_THEME_OBJECT.light
