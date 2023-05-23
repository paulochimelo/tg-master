const tipoMovService = require('../services/tipoMovService');


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let tipoMov = await tipoMovService.buscarTodos();

        for(let i in tipoMov){
            json.result.push({
               codigo: tipoMov[i].codigo,
               desc: tipoMov[i].desc,
               dataAt: tipoMov[i].dataAt,
               usuario: tipoMov[i].usuario,
               operacao: tipoMov[i].operacao,
               status: tipoMov[i].status
            });
        }
        res.json(json);
    },
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let tipoMov = await tipoMovService.buscarUm(codigo);

        if (tipoMov) {
            json.result = tipoMov;
        }

        res.json(json);
}  
}