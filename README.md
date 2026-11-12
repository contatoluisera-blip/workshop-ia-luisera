# Workshop · IA como Ferramenta, Não como Atalho

Site interativo da aula: slides da história, votações ao vivo, jogo das cartas, duelos, cases com vídeo e perguntas da plateia.

| Tela | Endereço | Quem usa |
| --- | --- | --- |
| Plateia | `https://workshop-ia-luisera.netlify.app` | Todo mundo, pelo QR Code |
| Telão | `https://workshop-ia-luisera.netlify.app/#telao` | O notebook ligado ao projetor |
| Palco | `https://workshop-ia-luisera.netlify.app/#palco` | Só você: notas, próximo passo e controles |

## 1. Publicar na Netlify

1. Em app.netlify.com, clique em **Add new site > Import an existing project** e escolha este repositório.
2. Deixe o comando de build vazio e a pasta de publicação como `.` (o `netlify.toml` já faz isso).
3. Em **Site configuration > Change site name**, use `workshop-ia-luisera`. É o endereço dos QR Codes impressos da pasta `qr/`.

A cada alteração salva no GitHub, a Netlify publica de novo em cerca de 1 minuto.

## 2. Ligar a interação entre os celulares (Firebase)

Sem isso, o site roda em **modo ensaio**: cada aparelho fica isolado e as respostas da plateia não chegam ao telão.

1. Em console.firebase.google.com, crie um projeto separado do da Creator Lab (ex.: `workshop-ia`). O plano gratuito atende uma turma de até ~100 pessoas.
2. Abra **Firestore Database > Criar banco de dados**, região `southamerica-east1`, modo de produção.
3. Na aba **Regras**, cole o conteúdo de `firestore.rules` e publique.
4. Em **Configurações do projeto > Seus apps**, crie um app Web (`</>`) e copie o objeto `firebaseConfig`.
5. No GitHub, abra `config.js`, clique no lápis, cole o objeto no lugar de `null` em `firebase:` e salve.

Para testar: abra o telão no notebook e a plateia em 2 ou 3 celulares. O contador de conectados deve subir.

## 3. Ajustes em `config.js`

- `sessao`: um nome por turma. Trocar começa tudo do zero.
- `pinTelao`: PIN opcional para o telão e o palco.
- `videos`: links do YouTube dos cases. Sem internet no local, arraste o .mp4 para cima do vídeo no telão.
- `cupom`: cupom da Creator Lab no fechamento.

Os textos dos slides e as notas do palco ficam no bloco `ROTEIRO` dentro do `index.html`.

## 4. Comandos no telão

**→ ou espaço** avança · **←** volta · **V** abre ou fecha a votação · **A** mural da pergunta-âncora · **P** perguntas · **R** roteiro · **Esc** fecha painéis.

A barra de controle fica quase invisível no rodapé: passe o mouse ou clique em Fixar.

## QR Codes

A pasta `qr/` tem os QR Codes em PNG e SVG e o arquivo `cartazes-qr.pdf`, com dois cartazes A4 prontos para imprimir: um para a plateia entrar e outro da Creator Lab. O QR do telão é gerado sozinho com o endereço real do site.

## Depois do evento

Os dados ficam no Firestore. Para fechar o acesso, troque `if true` por `if false` nas regras.
