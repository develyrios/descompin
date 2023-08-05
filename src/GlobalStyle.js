import { createGlobalStyle } from "styled-components";
import background from "/src/assets/blurry-gradient-background.svg";

export default createGlobalStyle`
    body {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    nav {
        margin-bottom: 16px;
    }

    .row {
        row-gap: 16px;
    }
`