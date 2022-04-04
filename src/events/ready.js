
const shortcuts = require("../structures/shortcuts")

module.exports = async (client) => {

    console.log(`${client.user.tag} (${client.user.id}) hazır. Oyunlar önbelleğe yedeklenmeye başlıyor...`)
    
    await shortcuts.LoadGames(client)
    .then((games) => {
        console.log(`${games.length} Muhammed Emir oyun başarıyla önbelleğe alındı.`)
    })
    .catch((err) => {
        console.error(`Muhammed Emir Oyunları yüklerken hata oluştu: ${err}`)
    })


}


