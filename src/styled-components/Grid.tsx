import styled from 'styled-components';
type viewType = "list" | "grid";
interface GridProps {
    view: viewType
}
const Grid = styled.div<GridProps>`
.grid {
  width: 100%;
  ${props =>
        props.view === "grid" && `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
            grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
            grid-gap: 1rem;`
    }
    ${props =>
        props.view === "list" && `
            display: flex;
            flex-direction: column;
            row-gap: 1rem;`
    }
  &__item {
    border-radius: 5px;
    border: 3px solid #f6f7f8;
    display: flex;
    ${props =>
        props.view === "grid" && `
        flex-direction: column;
    `}
    ${props =>
        props.view === "list" && `
            flex-direction: row;
            justify-content: flex-start;
            column-gap: 1rem;
                .col {
                    display: flex;
                    flex-direction: column;
                    row-gap: 1rem;
                }`
    }
    row-gap: 1rem;
    &__row {
      position: relative;
      .title {
        font-weight: bold;
        font-size: pxToRem(18);
        line-height: 150%;
        letter-spacing: 0.5px;
        color: #223263;
        ${props =>
          props.view === "grid" && `
          text-align: center;
        `}
        ${props =>
          props.view === "list" && `
          text-align: left;
        `}
      }
      .label {
        position: absolute;
        top: 0;
        left: 0;
        background: #ff4858;
        font-size: pxToRem(18);
        padding: 0.5rem 1rem;
        line-height: 22px;
        color: #ffffff;
        border-radius: 5px;
      }
      img {
        ${props =>
        props.view === "grid" && `
                width: 100%
            `}
        }
      }
      .description {
        ${props =>
        props.view === "grid" && `
                display: none;
        `}
        ${props =>
        props.view === "list" && `
                display: inherit;
            `}
      }
      .action {
        
        display: flex;
        column-gap: 1rem;
        button {
          font-size: 14px;
          display: flex;
          column-gap: .5rem;
          justify-content: center;
          align-items: center;
          background: rgba(51, 160, 255, .1);
          padding: 1rem 2rem;
          color: #33A0FF;
          border: none;
          cursor: pointer;
         
          img {
          width: pxToRem(15.95);
          height: 1rem;
        }

        &:active {
          background: rgba(51, 160, 255, .2);
        }
        }

        
      }
    }
  }
}
.stars {
  display: flex;
  align-items: center;
  ${props =>
        props.view === "grid" && `
        justify-content: center;
    `}
  ${props =>
        props.view === "list" && `
        justify-content: flex-start;
    `}
  .star {
    cursor: pointer;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    width: 20px;
    height: 20px;
  }
  .enabled {
    background: #ffc600;
  }
  .disabled {
    background: #c1c8ce;
  }
}
.price {
  display: flex;
  align-items: center;
  ${props =>
        props.view === "grid" && `
        justify-content: center;
   `}
  ${props =>
        props.view === "list" && `
        justify-content: flex-start;
  `}
  column-gap: 0.5rem;
  &--red {
    font-style: normal;
    font-weight: normal;
    font-size: pxToRem(20);
    line-height: pxToRem(30);
    color: #ff4858;
  }
  &--original {
    font-weight: bold;
    font-size: pxToRem(18);
    line-height: 180%;
    letter-spacing: 0.5px;
    color: #40bfff;
  }
  &--old {
    font-weight: normal;
    font-size: pxToRem(14);
    line-height: 150%;
    letter-spacing: 0.5px;
    text-decoration-line: line-through;
    color: #9098b1;
  }
  &--discound {
    font-weight: bold;
    font-size: pxToRem(14);
    line-height: 150%;
    letter-spacing: 0.5px;
    color: #fb7181;
  }
}
`;
export default Grid;