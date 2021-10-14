import styled from 'styled-components';
import { pxToRem } from 'styled-components/functions';
import { Section5SCSSProps } from 'interfaces'

const Section5SCSS = styled.div<Section5SCSSProps>`
.default-margin-top {
  margin-top: 4rem;
}
.section5 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  background-color: #40bfff;
  .item-1 {
    ${props =>
        props.variant === "Home" && `
          max-width: ${pxToRem(592)};
    `}
    ${props =>
        props.variant === "HotDeals" && `
        display:none;
        max-width: ${pxToRem(350)};
    `}
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: flex-start;
  }
  &__item {
    .title {
      color: #ffffff;
      font-style: normal;
      font-weight: normal;
    }
    .title1 {
      font-weight: 600;
      ${props =>
        props.variant === "Home" && `
          font-size: ${pxToRem(55)};
          line-height: ${pxToRem(82)};
      `}
        ${props =>
        props.variant === "HotDeals" && `
          font-size: ${pxToRem(30)};
          line-height: ${pxToRem(45)};
        };
    `}
    }
    .title2 {
      ${props =>
        props.variant === "Home" && `
          font-size: ${pxToRem(24)};
          line-height: ${pxToRem(36)};
        `}
        ${props =>
        props.variant === "HotDeals" && `
          font-size: ${pxToRem(14)};
          line-height: ${pxToRem(21)};
        };
    `}
    }
    .title3 {
      position: relative;
      font-weight: 600;
      font-size: ${pxToRem(20)};
      line-height: ${pxToRem(30)};
      display: flex;
      border-bottom: 2px solid currentColor;
    }
    .title3::after {
      content: "";
      width: 40%;
      height: 3px;
      position: absolute;
      right: 0;
      border-bottom: 3px solid #40bfff;
      bottom: -3px;
    }
    .shoe {
      position: relative;
      width: 100%;
      transform: translateY(-4rem);
    }
  }
}

`;
export default Section5SCSS;