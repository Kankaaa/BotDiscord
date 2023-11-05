function pingBOT(interaction){


    const debutTIMER = Date.now(); // Moment où l'interaction est reçue
  
    interaction.reply("Calcul en cours...").then(reply => {
      const finTIMER = Date.now(); // Moment où la réponse est envoyée
      const msBOT = finTIMER - debutTIMER; // Calcul de la latence
  
      reply.edit(`La latence est de : ${msBOT} ms`);
    });


}module.exports={pingBOT}