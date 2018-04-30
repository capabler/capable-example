module.exports = class extends MY_Model{ 
	async bookList() { 
		if (this.database_engine === 'lokijs') { 
			return await this.db_r.select('book')
		}
	}

	async bookDetail(book_name) { 
		if (this.database_engine === 'lokijs') { 
			return await this.db_r.select('book', { book_name })		
		}
	}

	async addBook(data) { 
		if (this.database_engine === 'lokijs') {
			return await this.db_r.insert('book', data)		
		}
	}

	async deleteBook(data) { 
		if (this.database_engine === 'lokijs') {
			return await this.db_r.delete('book', data)		
		}
	}

	async updateBook(where,data) { 
		if (this.database_engine === 'lokijs') {
			return await this.db_r.update('book', where, data)		
		}
	}
}