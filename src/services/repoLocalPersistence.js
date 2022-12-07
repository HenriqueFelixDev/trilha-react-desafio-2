const repositoriesKey = 'repositories'

export const saveRepositoriesLocally = repositories => {
    localStorage.setItem(repositoriesKey, JSON.stringify(repositories))
}

export const getLocalRepositories = () => {
    const serializedRepositories = localStorage.getItem(repositoriesKey)

    return serializedRepositories
        ? JSON.parse(serializedRepositories)
        : []
}