/**
 * 给不同的数据库引擎提供不同的配置信息
 */
module.exports = {
	sequelize: {
		//可以配置多台sql服务器
		read: {
			host: '127.0.0.1',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'test',
		}
	},
	lokijs: {
		//注意这里面的db类似于mysql的host
		read: {
			db: './db.json'
		}
	}
}