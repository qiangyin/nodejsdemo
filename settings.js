(function() {
    var settings;

    settings = {
        db: {
            host: '192.168.100.17',     //本地数据库
            port: '3306',
            user: 'root',          //数据库用户名
            password: '123456',          //数据库密码
            database: 'mouku_data'  //数据库名称
        }
    };

    module.exports = settings;

}).call(this);