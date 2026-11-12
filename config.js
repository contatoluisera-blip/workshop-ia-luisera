/* ============================================================
   CONFIGURAÇÃO DO WORKSHOP — edite este arquivo (dá para editar direto no GitHub)
   Depois de salvar, a Netlify publica sozinha em cerca de 1 minuto.
   ============================================================ */
Object.assign(CONFIG, {
  // 1. Conexão com o Firebase (projeto workshop-ia-luisera). Se trocar por null, o site volta ao MODO ENSAIO.
  firebase: {
    apiKey: "AIzaSyB_1BhRDPQDVxUG7kZP3FozdThj-4hPDYY",
    authDomain: "workshop-ia-luisera.firebaseapp.com",
    projectId: "workshop-ia-luisera",
    storageBucket: "workshop-ia-luisera.firebasestorage.app",
    messagingSenderId: "723301154789",
    appId: "1:723301154789:web:6b37ac48823c4d700af90c"
  },
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
  videos: { cadbury: "", heinz: "", coca: "", elis: "" },

  // 6. Cupom da Creator Lab no fechamento (opcional).
  cupom: ""
});
