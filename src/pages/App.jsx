import { useEffect, useState } from 'react';

import gitLogo from '../assets/github.png'
import { Alert, Button, Input, ItemRepo, Loading } from '../components';
import { Container, Logo } from './styles';
import { api } from '../services/api';
import { getLocalRepositories, saveRepositoriesLocally } from '../services/repoLocalPersistence';

export const App = () => {

  const [state, setState] = useState({
    loading: false,
    error: null,
    repositories: getLocalRepositories()
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!state.loading && !state.error) {
      setSearch('')
    }
  }, [state])

  const handleSearchRepo = async () => {
    try {
      setState(prev => ({
        ...prev,
        loading: true,
        error: null
      }))
  
      const { data } = await api.get(`repos/${search}`)

      setState(prev => {
        const alreadInArray = state.repositories.some(repo => repo.id === data.id);

        if (alreadInArray) {
          return {
            ...prev,
            loading: false,
            error: 'O repositório já foi adicionado à lista',
          }
        }

        const newRepository = {
          id: data.id,
          name: data.name,
          fullname: data.full_name,
          url: data.html_url,
          user: {
            avatar: data.owner.avatar_url,
            username: data.owner.login,
          }
        }

        const repositories = [
          ...prev.repositories,
          newRepository
        ]
        
        saveRepositoriesLocally(repositories)

        return {
          ...prev,
          repositories,
          loading: false
        }
      })
    } catch (e) {
      let error = 'Erro ao buscar pelo repositório'

      if (e.response.status === 404) {
        error = 'Repositório não encontrado'
      }

      setState(prev => ({
        ...prev,
        loading: false,
        error
      }))
    }

  }

  const handleRemoveRepo = (id) => {
    setState(prev => {
      const repositories = prev.repositories
          .filter(repo => repo.id !== id)

      saveRepositoriesLocally(repositories)
      
      return {
        ...prev,
        repositories 
      }
    })
  }


  return (
    <Container>
      <Logo src={gitLogo} alt="github logo" />

      <Input
        placeholder="Digite um repositório (ex: HenriqueFelixDev/trilha-react-desafio-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

      <Button onClick={handleSearchRepo}/>

      { state.error ? <Alert message={state.error} /> : null}

      {state.repositories.map(repo => (
        <ItemRepo
          key={repo.id}
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
        />
      ))}

      { state.loading ? <Loading /> : null }
    </Container>
  );
}