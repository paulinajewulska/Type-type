import styled from 'styled-components';
import { devices } from './breakpoints';

const Section = styled.section`
    position: relative;
    padding: 0.75rem;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    color: #000;
    overflow: hidden;

    @media ${devices.tablet} {
        padding: 2rem;
    }
    @media ${devices.desktop} {
        padding: 3rem;
    }
`

const ColorButton = styled.button`
    margin: 1rem 0;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    background-color: #f8d57e;  
    font-size: 1rem;

    @media ${devices.tablet} {
        width: 50%;
    }
    @media ${devices.desktop} {
        width: 40%;
    }
`

const FullButton = styled(ColorButton)`
   width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    form {
        margin: 1rem 0;
        width: 100%;
        z-index: 9;
        
        @media ${devices.tablet} {
            width: 50%;
        }
        @media ${devices.desktop} {
            width: 30%;
        }
    }
`

export { Section, ColorButton, FullButton, Wrapper }