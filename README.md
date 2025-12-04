# 🕹️ Secret Color Game

Uma versão estilizada e aprimorada do clássico jogo de adivinhação, agora com uma interface **Cyberpunk Neon** e lógica mais inteligente.  
O objetivo é simples: tente adivinhar a cor sorteada pelo sistema dentro de **3 tentativas**.

---

## 🚀 Tecnologias utilizadas

- **HTML5**
- **CSS3** (tema Cyberpunk com neon, glow e UI responsiva)
- **JavaScript** (manipulação do DOM, eventos e lógica do jogo)
- **Git & GitHub**
- **GitHub Pages**

---

## 🕹️ Como jogar

1. Ao iniciar, o sistema sorteia uma cor secreta.
2. Você digita uma cor em português (ex: azul, rosa, ciano…).
3. Você tem **3 tentativas** para acertar.
4. A cada erro:
   - ❌ Uma mensagem aparece  
   - 💡 O jogo fornece dicas inteligentes  
5. Se acertar:
   - 🎉 O fundo muda para a cor correta  
   - 🔁 O botão *"Jogar Novamente"* aparece  
6. Se errar as 3 tentativas:
   - 💀 O jogo revela qual era a cor

---

## 🧠 Lógica implementada

- **Array com lista de cores válidas**
- **Mapeamento PT → EN** para aplicar no CSS
- **Sorteio pseudoaleatório com `Math.random()`**
- **3 tentativas com decremento**
- **Duas dicas inteligentes:**
  - *Dica 1:* primeira letra da cor
  - *Dica 2:* quantidade de letras
- **Manipulação do DOM:**
  - atualização de mensagens
  - mudança de cor de fundo
  - habilitar/desabilitar botões
- **Transições suaves no visual**

---

## 🎨 Tema Cyberpunk

O estilo visual utiliza:

- Neon azul e roxo  
- Glassmorphism suave  
- Sombra colorida (glow)  
- Fonte futurista **Orbitron**  
- Botões com gradiente neon  
- Fundo escuro elegante  

## 🌐 Deploy

O jogo está disponível em:

🔗 **GitHub Pages:** _[Clique aqui para acessar](https://victor-alberto-dev.github.io/jogo-adivinhacao-cores/)_

---

## 👨‍💻 Autor

**Victor Alberto**  
Estudante de ADS — FAESA  
GitHub: https://github.com/victor-alberto-dev

---

## 📜 Licença

Projeto desenvolvido para fins acadêmicos, na disciplina de **Desenvolvimento Web 1** — FAESA.