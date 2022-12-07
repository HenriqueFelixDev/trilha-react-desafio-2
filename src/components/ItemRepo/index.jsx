import React from 'react'

import { ItemContainer, RemoveButton, RepoContent, RepositoryLink, RepositoryName, Title, UserAvatar, UserData } from './styles';

export const ItemRepo = ({repo, handleRemoveRepo}) => {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <RepoContent>
          <Title>{repo.name}</Title>

          <UserData>
            <UserAvatar
              src={repo.owner.avatar_url}
              alt={`Avatar do usuário ${repo.owner.login}`}
            />

            <RepositoryName>
              {repo.full_name}
            </RepositoryName>
          </UserData>
        </RepoContent>

        <RepositoryLink
          href={repo.html_url}
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Ver repositório"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
        </RepositoryLink>

        <RemoveButton
          onClick={handleRemove}
          aria-label="Remover repositório"
          title="Remover repositório"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </RemoveButton>
    </ItemContainer>
  )
}

export default ItemRepo;
