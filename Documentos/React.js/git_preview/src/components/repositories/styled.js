import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

export const WrapperTabs = styled(Tabs)`
    font-size: 1rem;
    width: 100%;
    margin-top: 1rem;
    color:white;

`;

export const WrapperTabList = styled(TabList)`
    list-style-type:none;
    padding:0.25rem;
    display: flex;
    color: rgb(45 45 46);


`;
WrapperTabList.tabsRole = "TabList";


export const WrapperTab = styled(Tab)`
    border-radius: 12px;
    border:1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index:99999;
    background-color: grey;

    &:focus{
        outline:none;

color:white
    }

    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius:16px ;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #fff;
    }
`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
    display:none;
    padding: 16px;
    border:1px solid #ccc;
    box-shadow: 0 0 1em rgba(0,0,0,0.2);
    margin-top: -5px;

    &.is-selected{
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
