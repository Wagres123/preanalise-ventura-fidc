# 🚀 GUIA RÁPIDO - PUBLICAR NO GITHUB PAGES

## Seu Repositório GitHub foi criado! ✅

**Repositório:** https://github.com/Wagres123/preanalise-ventura-fidc

---

## 📋 PASSO 1: Extrair os Arquivos

1. **Baixe o arquivo ZIP:** `formulario-preanalise-ventura.zip`
2. **Extraia para uma pasta** no seu computador
3. **Abra o terminal/PowerShell** nessa pasta

---

## 💾 PASSO 2: Fazer Upload para GitHub (3 opções)

### ✨ OPÇÃO MAIS FÁCIL - Windows (Recomendado)

1. **Copie todos os arquivos** da pasta extraída
2. **Abra PowerShell** na pasta: `Win + R` → `powershell`
3. **Cole este comando:**

```powershell
git add .
git commit -m "Upload do formulário para GitHub Pages"
git push -u origin main
```

**Pronto!** Seu formulário estará disponível em alguns minutos.

---

### Opção 2 - Script Automático (Windows)

1. **Extraia a pasta**
2. **Duplo clique em `PUSH_GITHUB.bat`**
3. **Pronto!** O script faz tudo automaticamente

---

### Opção 3 - Script Automático (Mac/Linux)

```bash
# 1. Extrair a pasta
unzip formulario-preanalise-ventura.zip
cd formulario-preanalise-ventura

# 2. Executar o script
bash PUSH_GITHUB.sh
```

---

## 🎉 RESULTADO FINAL

Depois de fazer o push, seu formulário estará disponível em:

```
https://wagres123.github.io/preanalise-ventura-fidc/
```

✅ **Qualquer pessoa pode acessar este link**
✅ **Sem necessidade de instalação**
✅ **Funciona em desktop, tablet e mobile**

---

## 📝 Arquivos Inclusos

```
formulario-preanalise-ventura/
├── index.html                    # ⭐ O FORMULÁRIO
├── README.md                     # Documentação
├── PUSH_GITHUB.bat              # Script Windows
├── PUSH_GITHUB.sh               # Script Mac/Linux
├── server.js                     # Backend (opcional)
├── package.json                  # Dependências Node
├── .env.example                  # Config de email
├── GUIA_DEPLOYMENT_HEROKU.md   # Deploy no Heroku
└── INSTRUCOES_SETUP.md          # Setup completo
```

---

## ⚡ PRÓXIMOS PASSOS (OPCIONAL)

### Se quiser enviar emails automaticamente:
1. Siga o `GUIA_DEPLOYMENT_HEROKU.md`
2. Configure um backend Node.js
3. Integre com seu servidor

### Se quiser editar o formulário:
1. Abra `index.html` no editor de texto
2. Modifique conforme necessário
3. Salve e faça `git push`

---

## 🔗 LINKS IMPORTANTES

- **GitHub Pages:** https://wagres123.github.io/preanalise-ventura-fidc/
- **Repositório:** https://github.com/Wagres123/preanalise-ventura-fidc
- **GitHub Docs:** https://docs.github.com/pages

---

## ❓ PERGUNTAS FREQUENTES

**P: Quanto tempo leva para ficar online?**
R: 1-2 minutos após o push

**P: Posso editar depois?**
R: Sim! Edite os arquivos e faça `git push` novamente

**P: Como compartilho com externos?**
R: Envie o link: https://wagres123.github.io/preanalise-ventura-fidc/

**P: Posso usar em produção?**
R: Sim! É totalmente seguro e profissional

**P: E se eu quiser enviar dados para email?**
R: Use o `server.js` com Node.js/Heroku (veja GUIA_DEPLOYMENT_HEROKU.md)

---

## 📞 RESUMO DO PROCESSO

```
1. Extrair ZIP
   ↓
2. Executar: git add . && git commit -m "..." && git push
   ↓
3. Aguardar 1-2 minutos
   ↓
4. Acessar: https://wagres123.github.io/preanalise-ventura-fidc/
   ↓
5. 🎉 PRONTO!
```

---

**© 2026 Ventura Invest FIDC**

Perguntas? Entre em contato com a equipe de TI!
