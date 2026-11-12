/* ============================================================
   CONFIGURAÇÃO DO WORKSHOP — edite este arquivo (dá para editar direto no GitHub)
   Depois de salvar, a Netlify publica sozinha em cerca de 1 minuto.
   ============================================================ */
Object.assign(CONFIG, {
  // 1. Cole aqui a configuração do app web do Firebase (veja o README).
  //    Enquanto ficar null, o site roda em MODO ENSAIO: cada aparelho fica isolado e a plateia não aparece no telão.
  firebase: null,
  /* Exemplo:
  firebase: {
    apiKey: "...",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    appId: "..."
  },
  */

  // 2. Um nome por turma. Trocar o nome começa tudo do zero.
  sessao: "workshop-ia",

  // 3. Opcional: PIN para abrir o telão (#telao) e o palco (#palco).
  pinTelao: "",

  // 4. Endereço que vai no QR Code do telão. Vazio = o próprio endereço do site.
  urlPlateia: "",

  // 5. Links do YouTube dos cases (o da Volkswagen já está preenchido).
  videos: {
    cadbury: "",
    heinz: "",
    coca: "",
    elis: "https://www.youtube.com/watch?v=aMl54-kqphE"
  },

  // 6. Cupom da Creator Lab no fechamento (opcional).
  cupom: ""
});
