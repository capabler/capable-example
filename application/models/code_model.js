module.exports = class extends MY_Model { 
	async saveCode(data) { 
		if (this.database_engine === 'lokijs') { 
			return await this.db_r.insert('code',data)
		}
	}

	async getCode(id) { 
		if (this.database_engine === 'lokijs') { 
			return await this.db_r.select('code', { id })	
		}
	}
}