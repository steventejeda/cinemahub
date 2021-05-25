import { future } from "@theme-ui/presets";
import { Theme, merge } from "theme-ui";
import { alpha } from "@theme-ui/color";


const theme: Theme = future as Theme;
// const theme: Theme = merge(future as Theme, {
//   initialColorModeName: "light",
//   useColorSchemeMediaQuery: true,
//   sizes: {
//     container: 800
//   },
//   fonts: {
//     heading: "PT Serif",
//     body: "system-ui, sans-serif",
//     mono: "Monolisa, Fira Code, Hasklig, Hack, Menlo, Monaco"
//   },
//   radii: {
//     tiny: "4px",
//     small: "5px",
//     medium: "10px"
//   },
//   styles: {
//     root: {},
//     time: {
//       fontWeight: "200",
//       color: "gray"
//     },
//     article: {
//       backgroundColor: "muted",
//       marginBottom: "6px",
//       display: "flex",
//       flexDirection: "column",
//       padding: "10px",
//       borderRadius: "6px",
//       "> div": {
//         display: "flex",
//         fontWeight: "bold",
//         paddingBottom: "6px",
//         "> p": {
//           fontWeight: "200",
//           paddingLeft: "5px"
//         }
//       }
//     },
//     textarea: {
//       fontFamily: "body"
//     },
//     section: {
//       overflow: "scroll",
//       width: "100%"
//     },
//     p: {
//       my: 2,
//       width: "70ch",
//       maxWidth: "100%"
//     }
//   },
//   buttons: {
//     primary: {
//       fontFamily: "inherit",
//       fontWeight: "bold",
//       cursor: "pointer",
//       transition: "transform 150ms linear",
//       ":hover, :focus": {
//         transform: "translateY(-0.125rem)"
//       },
//       "&&": {
//         color: "background",
//         ":hover, :focus": {
//           textDecoration: "none"
//         }
//       }
//     }
//   },
//   messages: {
//     primary: {
//       backgroundColor: alpha("secondary", 0.2)
//     }
//   }
// });

export default theme;
 