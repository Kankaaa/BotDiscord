









// const puppeteer = require('puppeteer');
// const { EmbedBuilder, Colors } = require('discord.js');

/*
async function pray_timeBOT(interaction) {



  if (interaction && interaction.replied) {
    // Vous pouvez répondre à l'interaction
  } else {
    console.log("L'interaction n'est plus valable.");
  }





  const browser = await puppeteer.launch(); // Ouvrir une instance de Chrome
const page = await browser.newPage(); // Ouvrir une nouvelle page

await page.goto('https://www.guidemusulman.com/horaires-prieres/mensuel/ville/32076/velizy%20villacoublay-78140?angle=15'); // Accéder à la page que vous souhaitez scraper

const title = await page.title();

// Utilisez page.evaluate pour extraire la date
const date = await page.evaluate(() => {
  const dateElement = document.querySelector('#timetable > tbody > tr:nth-child(1) > td:nth-child(2)');
  return dateElement.textContent;
});

const TabPray = [];

for (let i = 3; i <= 8; i++) {
  const priere = await page.evaluate((i) => {
    const horrairesElement = document.querySelector(`#timetable > tbody > tr:nth-child(1) > td:nth-child(${i})`);
    return horrairesElement.textContent;
  }, i);
  TabPray.push(priere);
}

console.log(`Le titre de la page est : ${title}`);
console.log(`La date est : ${date}`);

TabPray.forEach((time, i) => {
  console.log(`heure pray ${i + 1} est : ${time}`);
});

await browser.close(); // Fermez le navigateur lorsque vous avez fini


  /*
  
    const browser = await puppeteer.launch(); // Ouvrir une instance de Chrome
    const page = await browser.newPage(); // Ouvrir une nouvelle page

    await page.goto('https://www.guidemusulman.com/horaires-prieres/mensuel/ville/32076/velizy%20villacoublay-78140?angle=15'); // Accéder à la page que vous souhaitez scraper

    const title = await page.title(); 

   


    // Utilisez page.evaluate pour extraire la date
  const date = await page.evaluate(() => {
    const dateElement = document.querySelector('#timetable > tbody > tr:nth-child(1) > td:nth-child(2)');
    return dateElement.textContent;
  });

  const priere1 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(3)");
    return horrairesElement.textContent;
  });


  const priere2 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(4)");
    return horrairesElement.textContent;
  });


  const priere3 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(5)");
    return horrairesElement.textContent;
  });

  const priere4 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(6)");
    return horrairesElement.textContent;
  });

  const priere5 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(7)");
    return horrairesElement.textContent;
  });

  const priere6 = await page.evaluate(() => {
    const horrairesElement = document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(8)");
    return horrairesElement.textContent;
  });







  console.log(`Le titre de la page est : ${title}`);
  console.log(`La date est : ${date}`);
  
  console.log(`heure pray 1 est : ${priere1}`)
  console.log(`heure pray 2 est : ${priere2}`)
  console.log(`heure pray 3 est : ${priere3}`)
  console.log(`heure pray 4 est : ${priere4}`)
  console.log(`heure pray 5 est : ${priere5}`)
  console.log(`heure pray 6 est : ${priere6}`)


 


const PrayTimeEmbed = new EmbedBuilder()
	.setColor(0x619F74)
	.setTitle('🕌 Les heures de priere a Velizy 🕌')
	.setURL('https://www.guidemusulman.com/horaires-prieres/mensuel/ville/32076/velizy%20villacoublay-78140?angle=15')
    .setDescription(date)
	.addFields(
		{ name: ' 🤲 Subh', value: priere1 },
        { name: ' 🤲 Shuruq *', value: priere2 },
        { name: ' 🤲 Zhur', value: priere3 },
        { name: ' 🤲 Asr', value: priere4 },
        { name: ' 🤲 Maghrib', value: priere5},
        { name: ' 🤲 Isha', value: priere6},

    
		
	)

    await interaction.reply({ embeds: [PrayTimeEmbed] })
    */
   /*
    const PrayTimeEmbed = new EmbedBuilder()
    .setColor(0x619F74)
    .setTitle('🕌 Les heures de priere a Velizy 🕌')
    .setURL('https://www.guidemusulman.com/horaires-prieres/mensuel/ville/32076/velizy%20villacoublay-78140?angle=15')
      .setDescription(date)
    .addFields(
      { name: ' 🤲 Subh', value: TabPray[0] },
          { name: ' 🤲 Shuruq *', value: TabPray[1] },
          { name: ' 🤲 Zhur', value: TabPray[2] },
          { name: ' 🤲 Asr', value: TabPray[3] },
          { name: ' 🤲 Maghrib', value: TabPray[4] },
          { name: ' 🤲 Isha', value: TabPray[5] }
    );
  
  await interaction.reply({ embeds: [PrayTimeEmbed] });
  
       








  }


module.exports = { pray_timeBOT }; */
/*
document.querySelector("#timetable > tbody > tr:nth-child(1) > td:nth-child(2)")


//*[@id="timetable"]

document.querySelector("#timetable")

*/
