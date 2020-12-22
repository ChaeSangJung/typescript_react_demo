import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
    redColor: string;
  }
}

// import "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     colors: {
//         blueColor: string;
//         redColor: string;
//     }    
//   }
// }