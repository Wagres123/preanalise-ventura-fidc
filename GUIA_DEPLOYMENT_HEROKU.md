# 📋 GUIA DE DEPLOYMENT NO HEROKU
## Pré-Análise Comercial Ventura FIDC

### Seu App Heroku: **preanalise-ventura-fidc**

---

## ✅ PASSO 1: Preparar os Arquivos (JÁ FEITO)

Os arquivos estão prontos:
```
formulario-preanalise-ventura/
├── server.js                 ✓
├── package.json              ✓
├── .env.example              ✓
├── .gitignore               ✓
├── Procfile                 ✓
├── README.md                ✓
└── public/
    └── index.html           ✓
```

---

## 🔑 PASSO 2: Configurar Variáveis de Ambiente no Heroku

**Via Terminal/PowerShell:**

```bash
# Configure as credenciais de email
heroku config:set SMTP_HOST=smtp.gmail.com -a preanalise-ventura-fidc
heroku config:set SMTP_PORT=465 -a preanalise-ventura-fidc
heroku config:set SMTP_USER=seu-email@gmail.com -a preanalise-ventura-fidc
heroku config:set SMTP_PASSWORD=sua-senha-de-app -a preanalise-ventura-fidc
heroku config:set SMTP_FROM=noreply@venturainvest.com.br -a preanalise-ventura-fidc
heroku config:set PORT=443 -a preanalise-ventura-fidc
heroku config:set NODE_ENV=production -a preanalise-ventura-fidc

# Verificar se tudo foi configurado
heroku config -a preanalise-ventura-fidc
```

---

## 📤 PASSO 3: Fazer Push para Heroku (CRITICAL)

**Via Terminal/PowerShell na pasta do projeto:**

```bash
# Verificar que está na pasta correta
cd caminho\formulario-preanalise-ventura

# Se ainda não inicializou git
git init

# Configure git (primeira vez apenas)
git config --global user.email "wagner.oliveira@venturainvest.com.br"
git config --global user.name "Wagner Oliveira"

# Conectar ao app Heroku
heroku git:remote -a preanalise-ventura-fidc

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Deploy inicial do formulário Pré-Análise Ventura FIDC"

# Push para Heroku (isso fará o deploy)
git push heroku master
```

**Você verá uma mensagem como:**
```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
...
remote: -----> App will be running as a web process (specified in Procfile)
remote: -----> Compiled slug size: 45.2M
remote: -----> Launching...
remote:        Released v3
remote:        https://preanalise-ventura-fidc.herokuapp.com/ deployed to Heroku
remote: 
remote: Verefs changed in your 'origin' remote.
To https://git.heroku.com/preanalise-ventura-fidc.git
 * [new branch]      master -> master
```

---

## ✨ PASSO 4: Testar o Formulário Público

1. **Acesse no navegador:**
   ```
   https://preanalise-ventura-fidc.herokuapp.com
   ```

2. **Preencha o formulário** com dados de teste

3. **Clique em "Enviar Análise"**

4. **Verifique o email:**
   - Acesse: cadastro@venturainvest.com.br
   - O email deve chegar em segundos

---

## 🔐 PASSO 5: Verificar Logs (Se houver Problemas)

```bash
# Ver logs em tempo real
heroku logs --tail -a preanalise-ventura-fidc

# Ver últimos 100 linhas de log
heroku logs -n 100 -a preanalise-ventura-fidc
```

---

## 📊 Checklist Final

- [ ] Arquivos copiados para a pasta do projeto
- [ ] Git inicializado e conectado ao Heroku
- [ ] Variáveis de ambiente configuradas no Heroku
- [ ] `git push heroku master` executado com sucesso
- [ ] Acessou https://preanalise-ventura-fidc.herokuapp.com
- [ ] Preencheu e enviou o formulário
- [ ] Email recebido em cadastro@venturainvest.com.br
- [ ] Formulário está pronto para externos!

---

## 🚀 Resultado Final

**URL Pública para Compartilhar:**
```
https://preanalise-ventura-fidc.herokuapp.com
```

Qualquer pessoa pode acessar este link e preencher o formulário. Os dados irão para:
```
cadastro@venturainvest.com.br
```

---

## 📞 Problemas Comuns

### "heroku: command not found"
→ Instale Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

### "Permission denied (publickey)"
→ Configure suas chaves SSH do Heroku:
```bash
heroku login
heroku keys:add
```

### "ENOENT: no such file or directory"
→ Certifique-se que está na pasta certa com todos os arquivos

### Email não chegando
→ Verifique as credenciais SMTP no Heroku:
```bash
heroku config -a preanalise-ventura-fidc
```

### Erro 503 no Heroku
→ Veja os logs:
```bash
heroku logs --tail -a preanalise-ventura-fidc
```

---

## 💡 Próximas Melhorias (Futuro)

- [ ] Adicionar 2FA nas credenciais
- [ ] Backup automático de dados
- [ ] Dashboard admin para visualizar submissões
- [ ] Integração com Google Sheets
- [ ] Notificações via Slack

---

**© 2026 Ventura Invest FIDC**
