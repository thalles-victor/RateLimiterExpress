
# Rate Limiter com Express

## Iniciando o projeto

1 - clonar o projeto
```console
git clone https://github.com/thalles-victor/RateLimiterExpress.git
```

2º - Instalar as dependências dentro da pasta do projeto
```console
npm install
```

3º - Executar o projeto
```console
npm run dev
```

## Testando a aplicação

O teste você pode usar o cliente de sua preferência, mas caso queira usar o curl e embaixo está o exemplo.

```console
watch -n 0.5 'curl --request GET \
  --url http://localhost:3000/'
```

O watch é nativo do terminl e nesse caso, acada 500ms (0.5s) ele faz uma executa um comando que nesse caso e o curl para fazer a requisição para a nossa api.

