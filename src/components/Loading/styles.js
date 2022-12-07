import styled from 'styled-components';

export const LoadingContainer = styled.div`
    background: #00000080;
    
    position: absolute;
    z-index: 10;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Spinner = styled.div`
    border: 10px solid #a9a9a9;
    border-top: 10px solid #3088c0;
    border-radius: 50%;

    width: 3rem;
    height: 3rem;
    margin: 0.5rem auto;
    
    animation: rotate 1s linear infinite;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`