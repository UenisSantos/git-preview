import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin:16px 16px;
    width: 250px;
    min-height: 150px;
    padding: 8px;
    align-content: center;

    &:hover{
        border: 1px solid aquamarine;
      
    }
`;

export const WrapperTitle = styled.h2`
    font-size:18px ;
    font-weight: bold;
     margin: 8px 0;

`;

export const WrapperFullName = styled.h2`
    font-size:16px ;
    font-weight: bold;
    margin: 8px 0;
    

`;

export const WrapperLink = styled.a`
    font-size:16px ;
    font-weight: bold;
    margin: 8px 0;
    &:hover{
        color: aquamarine;

    }
    
`;
