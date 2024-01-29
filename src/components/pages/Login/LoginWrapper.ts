import styled from 'styled-components';

const LoginWrapper = styled.div`
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
`;

export default LoginWrapper;
