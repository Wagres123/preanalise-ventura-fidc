# 📋 Formulário de Pré-Análise Comercial Ventura FIDC

Formulário eletrônico profissional para coleta de dados de pré-análise comercial com design responsivo e validação de dados em tempo real.

## 🚀 Acesso Rápido

**Formulário ao Vivo:** https://wagres123.github.io/preanalise-ventura-fidc/

Qualquer pessoa pode acessar diretamente do navegador - sem instalação necessária!

## ✨ Funcionalidades

- ✅ Validação de CNPJ em tempo real
- ✅ Formatação automática de moeda brasileira (R$)
- ✅ Salvamento local de dados (localStorage)
- ✅ Interface responsiva (funciona em desktop, tablet e mobile)
- ✅ Design profissional com cores Ventura Invest
- ✅ Mensagens de sucesso e erro intuitivas
- ✅ 4 seções de formulário bem organizadas

## 📋 Campos do Formulário

### Seção 1: Informações Básicas
- Origem da Indicação
- Tempo de Relacionamento (meses)
- CNPJ (com validação)

### Seção 2: Dados Financeiros
- Faturamento Médio Mensal (em R$)
- Volume Pretendido/Operado (em R$)
- Volume de Recebíveis Pretendido (em R$)

### Seção 3: Características da Operação
- Prazo de Entrega (0-3, 3-6, ... até 27-30 dias)
- % de Mercadoria Performada (0-100)
- Modalidade de Recebíveis (Boleto, Cheque, Contratos, etc.)

### Seção 4: Informações Complementares
- Observações (mínimo 10 caracteres)

## 🔧 Instalação Local

Se quiser rodar localmente no seu computador:

```bash
# 1. Clonar o repositório
git clone https://github.com/Wagres123/preanalise-ventura-fidc.git
cd preanalise-ventura-fidc

# 2. Abrir o arquivo index.html no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou simplesmente abra o arquivo `index.html` diretamente no seu navegador!

## 📤 Integração com Backend (Opcional)

Se você quer enviar os dados para um servidor:

### Opção 1: Heroku (Recomendado)

1. **Instalar Node.js:** https://nodejs.org
2. **Instalar Heroku CLI:** https://devcenter.heroku.com/articles/heroku-cli
3. **Seguir o guia:** Veja `GUIA_DEPLOYMENT_HEROKU.md`

### Opção 2: Seu próprio servidor

Modifique o JavaScript para fazer POST dos dados:

```javascript
fetch('/api/enviar-preanalise', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
})
.then(res => res.json())
.then(data => console.log('Sucesso:', data))
```

## 🎨 Design

- **Cores:** Gradiente Ventura Invest (#1b8a8a para #0f5a5a)
- **Font:** System fonts (otimizado para performance)
- **Layout:** Responsivo para todos os tamanhos de tela
- **Componentes:** HTML puro + CSS + JavaScript vanilla

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop, Tablet, Mobile
- ✅ Sem dependências externas (HTML puro)

## 📂 Estrutura do Projeto

```
preanalise-ventura-fidc/
├── index.html                    # Formulário (GitHub Pages)
├── server.js                     # Backend Node.js (opcional)
├── package.json                  # Dependências Node.js
├── .env.example                  # Configuração de email
├── Procfile                      # Deploy no Heroku
├── README.md                     # Este arquivo
├── INSTRUCOES_SETUP.md          # Setup detalhado
└── GUIA_DEPLOYMENT_HEROKU.md    # Deploy no Heroku
```

## 🔒 Segurança

- ✅ Validação de entrada no cliente
- ✅ Sem envio automático de dados (controle total)
- ✅ LocalStorage apenas no navegador do usuário
- ✅ CNPJ validado com algoritmo oficial

## 💾 Dados Salvos

Os dados preenchidos são salvos automaticamente no `localStorage` do navegador:
- Cada campo é salvo ao mudar de foco
- Dados persistem mesmo após fechar o navegador
- Para limpar: Use o botão "Limpar Formulário"

## 📧 Envio de Email (Opcional)

Se integrado com backend Node.js/Heroku, os dados são enviados para:
```
cadastro@venturainvest.com.br
```

## 🐛 Troubleshooting

### O formulário não carrega
→ Verifique se tem JavaScript ativado no navegador

### CNPJ inválido
→ Use o formato: 12.345.678/0001-99

### Moeda não formata
→ Digite apenas números, a formatação é automática

## 🚀 Deploy no GitHub Pages

Este repositório já está configurado para GitHub Pages!

A URL pública é: **https://wagres123.github.io/preanalise-ventura-fidc/**

Para atualizar o formulário:
1. Edite o `index.html`
2. Faça commit e push para `main`
3. Aguarde 1-2 minutos
4. Atualize o navegador

## 📞 Suporte

Para dúvidas ou relatórios de erro, entre em contato com a equipe de TI da Ventura Invest.

## 📝 Licença

© 2026 Ventura Invest FIDC - Todos os direitos reservados

## 🔗 Links Úteis

- **GitHub:** https://github.com/Wagres123/preanalise-ventura-fidc
- **GitHub Pages:** https://wagres123.github.io/preanalise-ventura-fidc/
- **Heroku Docs:** https://devcenter.heroku.com
- **Node.js:** https://nodejs.org

---

**Criado com ❤️ para Ventura Invest FIDC**
