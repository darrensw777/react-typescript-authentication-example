import { ReactNode } from "react";
import ButtonWrapper from "./ButtonWrapper";

interface ButtonProps {
    children: ReactNode;
    loading: boolean;
}

const Button = ({ children, loading }: ButtonProps) => {
    return (
        <ButtonWrapper>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                <span>{children}</span>
            </button>
        </ButtonWrapper>
    );
};

export default Button;
