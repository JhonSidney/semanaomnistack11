const connection = require('../database/connection');

module.exports = {
    /**criou metodo criar para login */
    async create(request,response){
        const { id }= request.body;

        const ong = await connection('ongs')
            .where('id',id)
            .select('name') /**selecionou somente o nome  */
            .first();

            if(!ong){ /**caso nao existir */
                return response.status(400).json({error: 'No ONG found with this ID' })
            }

            return response.json(ong);

    }



}