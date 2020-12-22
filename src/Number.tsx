import React from "react";
import styled from "styled-components";

// interface IContainer {
//     isBlue : boolean,
// }

const Container = styled.span< {isBlue: boolean} >`
    color: ${props => (props.isBlue ? props.theme.blueColor : props.theme.redColor)};
`;

// const Container = styled.span<IContainer>`
//     color:${props => props.isBlue ? "blue" : "red"}
// `;

// const Container = styled.span<{isBlue:boolean}>`
//     color:${props => props.isBlue ? "blue" : "red"}
// `;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => (
    <Container isBlue={count > 10}>{count}</Container>
);

export default Number;