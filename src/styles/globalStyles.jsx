import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
}
body {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
}
:root {
    /* Colors */
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-secundary: #59323F;
    --grey-0: #F8F9FA;
    --grey-4: #121214;
    --grey-20: #868E96;
    --grey-50: #343B41;
    --grey-100: #212529;
    --white: #ffffff;
    --sucess: #3FE864;
    --negative: #E83F5B;
    /* Font-family */
    --font-family-default: 'Inter', sans-serif;
    /* Font-size */
    --title-size-1: 26px;
    --title-size-2: 22px;
    --title-size-3: 18px;
    --title-size-4: 14px;
    --headline-size: 16px;
    --body-size-1: 14px;
    --body-size-2: 14px;
    --caption-size: 12px;
    
    /* Font-weight */
    
    --title-weight-1: bold;
    --title-weight-2: bold;
    --title-weight-3: bold;
    --title-weight-4: bold;
    --headline-weight: 700;
    --body-weight-1: 500;
    --body-weight-2: 600;
    --caption-weight: 400;
}
`;
export default GlobalStyles;