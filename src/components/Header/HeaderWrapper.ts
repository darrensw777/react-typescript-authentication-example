import styled from 'styled-components';

const HeaderWrapper = styled.div`
    .header-container {
        background-color: #343a40 !important;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        position: relative;
        align-items: center;
        height: 40px;
        .header-left, .header-right {
            flex-direction: row;
            display: flex;
            list-style: none;
            div {
                display: flex;
                a {
                    color: white !important;
                    padding: 0.5rem 1rem;
                    text-decoration: none;
                }
            }
        }
        .header-left {
            margin-right: auto;+
        }
        .header-right {
            margin-left: auto;
        }
    }
`;

export default HeaderWrapper;
