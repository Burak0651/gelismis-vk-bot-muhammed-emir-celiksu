module.exports = {
    MANAGEMENT: {
        /**
         * @BotOwners Bot sahiplerinin kullanıcı ID listesi.
         * @AllowedServers Bot komutlarını çalıştırmaya izni olan sunucu ID listesi. 
         * @Prefix Bot prefixi.
         * @Token Bot tokeni.
         * @MongoURI MongoDB bağlantı anahtarı.
         */
        BotOwners: [""],
        AllowedServers: ["928282219271815179"], // !! Burada olmayan bir sunucuda komutlar cevap vermez. !!
        Prefix: "vk!",
        Token: "OTYwMTUxNDc1Nzk4MDM2NTIx.YkmQvg.TI3EGtDRrnZshkp9Tbiaa21VIzg", // Örnek token istersen dene :D
        MongoURI: "mongodb+srv://Bot:171919Ec@cluster0.1idsi.mongodb.net/Bot?retryWrites=true&w=majority" // Örnek URI istersen dene :D
    },


    LOGS: {
        /**
         * @GameLogs Biten oyunların oyun bilgisinin loglanacağı kanal ID'si.
         * @ChatLogs Biten oyunların metin kayıtlarının loglanacağı kanal ID'si.
         */
        GameLogs: true,
        ChatLogs: true
    },

    GAME: {
        /**
         * Botun eşleşeceği oyun lobileri, her bir metin kanalı yanındaki ses kanalına ait bir lobi olur.
         */
        Lobbies: [
            {TextChannel: "960157735842881546", VoiceChannel: "960157756839575583"}
        ],

        /**
         * Bot komutunu kullanabilecek rolleri belirtiniz, burada tanımlanmamış roldeki üyeler sadece "Durum" komutunu kullanabilir.
         * @ADMIN Tüm oyunları yönetebilir, bitirebilir. Her komutta tam izine sahiptir.
         * @MODERATOR Sadece kendi başlattığı oyunu yönetebilir.
         * @BLOCKED Komutlardan engellenen roldür, hiçbir komutu kullanamaz.
         * 
         * @param Guild Belirtilen rolün sunucu ID'si.
         * @param Role Belirtilen rolün ID'si.
         * @param Permission Belirtilen rolün sahip olduğu izin. İzinler hakkıında bilgi için biraz üste bakınız.
         */

        Host: [
            {Guild: "928282219271815179", Role: "960166598054912013", Permission: "ADMIN"},
            {Guild: "", Role: "", Permission: "MODERATOR"},
            {Guild: "", Role: "", Permission: "BLOCKED"},

        ],        
    }
}

