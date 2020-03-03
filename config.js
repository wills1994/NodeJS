const config = {
    dbUrl : process.env.DB_URL || 'mongodb+srv://willy:prueba1234@cluster0-02ibv.mongodb.net/telegram?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host:process.env.HOST || 'http://localhost',
    publicRoute:process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE ||'files'
};

module.exports = config;