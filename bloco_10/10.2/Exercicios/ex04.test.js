const fetch = require('node-fetch');

const getRepos = (url) => fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));

it('Verificar repos', async () => {
    expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain('sd-01-week4-5-project-todo-list');
    expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain('sd-01-week4-5-project-meme-generator');
});