import { useEffect, useState } from 'react';

import gitLogo from '../assets/github.png'
import { Alert, Button, Input, ItemRepo, Loading } from '../components';
import { Container, Logo } from './styles';
import { api } from '../services/api';

export const App = () => {

  const [state, setState] = useState({
    loading: false,
    error: null,
    repositories: []
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

        const repositories = alreadInArray
            ? prev.repositories
            : [ ...prev.repositories, data]
        
        const error = alreadInArray
            ? 'O repositório já foi adicionado à lista'
            : null

        return {
          ...prev,
          repositories,
          loading: false,
          error
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