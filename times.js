let times = [
{
   nome : " epa futsal ",
   goleiro : " dudu ",
   alaEsquerda : " josé ",
   alaDireita : " andré ",
   fixo : " xandy ",
   pivo : " hellmann ",
   técnico : " nelson ",
   vitórias : " 2 ",
   derrotas : " 1 ",
},
{
   nome : " dynamico ",
   goleiro : " helano ",
   alaEsquerda : " perereca ",
   alaDireita : " joaozinho ",
   fixo : " luisinho ",
   pivo : " caillot ",
   técnico : " preto ",
   vitórias : " 4 ",
   derrotas : " 0 ",

},
{
  nome : " interclasse ",
  goleiro : " macauli ",
  alaEsquerda : " josé ",
  alaDireita : " leonardo ",
  fixo : " xandy ",
  pivo : " vitinho  ",
  técnico : " eduardo ",
  vitórias : " 5 ",
  derrotas : " 0 ",
},
{
    nome : " acgf ",
    goleiro : " nego ",
    alaEsquerda : " negueba ",
    alaDireita : " traleski ",
    fixo : " luisinho ",
    pivo : " blageski ",
    técnico : " rafael ",
    vitórias : " 6 ",
    derrotas : " 1 ",
},
{
    nome : " campos gerais ",
   goleiro : " carlos ",
   alaEsquerda : " josé ",
   alaDireita : " leviski ",
   fixo : " xandy ",
   pivo :  " hellmann ",
   técnico : " nelson ",
   vitórias : " 3 ",
   derrotas : " 2 ",
},
]

function vertimes (){
   times.forEach( (time) => {
      console.log(time.nome + "-" + time.goleiro + "(goleiro)," + time.alaEsquerda + "(alaEsquerda)," + time.alaDireita + "(alaDireita),"  
      + time.fixo + "(fixo)," + time.pivo + "(pivo)," + time.técnico + "(técnico)," + time.vitórias + "(vitórias)," + time.derrotas + "(derrotas),")
   });
}
vertimes();