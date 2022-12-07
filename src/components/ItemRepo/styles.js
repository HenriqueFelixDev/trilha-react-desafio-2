import styled from "styled-components";

export const ItemContainer = styled.div`
    border-bottom: thin solid #FAFAFA20;
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
`

export const RepoContent = styled.div`
    flex: 1;
`

export const UserData = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`

export const UserAvatar = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
`

export const Title = styled.h2`
    font-size: 2rem;
    color: #FAFAFA;
`

export const RepositoryName = styled.p`
    font-size: 1rem;
    color: #FAFAFA60;
`

export const RepositoryLink = styled.a`
    color: inherit;
    margin: 0.5rem;
    padding: 0.5rem;
`

export const RemoveButton = styled.button`
    color: #FF0000;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
`