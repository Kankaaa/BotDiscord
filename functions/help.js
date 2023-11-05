function helpBOT(interaction,commands){

    const commandList = commands.map((command) => {
        return `${command.name}: ${command.description}`;
      });
  
       interaction.reply(`Liste des commandes disponibles : \n${commandList.join('\n')}`);

}module.exports={helpBOT}