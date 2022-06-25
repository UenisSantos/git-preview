import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    input{
        border: 1px solid #ccc;
        border-radius:8px;
        width: 100%;
        height: 35px;
        padding: 10px;
    }

    button{
        border-radius: 8px;
        background-color: #ccc;
        padding: 8px 16px;
        margin:0 8px ;
        &:hover{

            background-color: aquamarine;
            transition:0.5s;
        }

        span{
            font-weight: bold;
            color:rgb(61, 59, 59);
        }
    }
`;
