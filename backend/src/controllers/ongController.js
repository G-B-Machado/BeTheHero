const crypto = require('crypto');
const generateUniqueId = ('../database/connection')
const connection = require('../database/conenection');
module.exports = {
	async index (request, response) {
		const ongs = await connection('ongs').select('*');
		return response.json(ongs);
	},
	async create (request, response) {
		const { name, email, whatsapp, city, uf } = request.body;

		const id = generateUniqueId();
		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf
		});
		return response.json({id});
	}
};