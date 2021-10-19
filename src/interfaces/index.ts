import { variant } from "types";

export interface Section5SCSSProps {
    variant: variant;
}

export interface Section5Props {
    marginTop?: string;
    variant: variant;
}

export interface TabInterface {
    id: number;
    title: string;
    content: JSX.Element
}