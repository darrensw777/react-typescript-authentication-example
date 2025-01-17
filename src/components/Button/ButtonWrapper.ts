import styled from 'styled-components';

const ButtonWrapper = styled.div`
    .btn {
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &.btn-block {
            display: block;
            width: 100%;
        }
        &.btn-primary {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`;

export default ButtonWrapper;
