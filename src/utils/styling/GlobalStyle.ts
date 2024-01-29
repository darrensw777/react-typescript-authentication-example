import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {

        .card-container {
            margin-top: 3rem;
            max-width: 720px;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        .full-width {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            .card-inner {
                max-width: 350px !important;
                padding: 40px 40px;
                background-color: #f7f7f7;
                margin: 0 auto 25px;
                margin-top: 50px;
                border-radius: 2px;
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
                position: relative;
                display: flex;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
                background-clip: border-box;
                border: 1px solid rgba(0, 0, 0, 0.125);
                .form-group {
                    display: flex;
                    flex-wrap: wrap;
                    label {
                        width: 100%;
                    }
                    input {
                        flex-direction: row;
                        flex: 1;
                    }
                }
            }
        }

        .form-group {
            margin-bottom: 1rem;
            .form-control {
                display: block;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            .alert-danger {
                color: #721c24;
                background-color: #f8d7da;
                border-color: #f5c6cb;
            }
            .alert {
                position: relative;
                padding: 0.75rem 1.25rem;
                border: 1px solid transparent;
                border-radius: 0.25rem;
                width: 100%;
            }
        }
        
        .profile-img-card {
            width: 96px;
            height: 96px;
            margin: 0 auto 10px;
            display: block;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            border-radius: 50%;
        }

        h1, h2, h3, h4 {
            font-family: "Roboto Slab", serif;
            font-weight: 400;
            letter-spacing: 1px;
        }

        h1 {
            font-size: 48px;
            line-height: 48px;
        }

        h2 {
            font-size: 36px;
            line-height: 36px;
        }

        h3 {
            font-size: 24px;
            line-height: 24px;
        }

        h4 {
            font-size: 16px;
            line-height: 16px;
        }
    }
`;

export default GlobalStyle;
