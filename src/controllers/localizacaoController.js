const localizacaoService = require('../services/localizacaoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let localizacao = await localizacaoService.buscarTodos();

        for(let i in localizacao){
            json.result.push({
               codigo: localizacao[i].codigo,
               descricao: localizacao[i].descricao,
               detalha: localizacao[i].detalha,
               unidade: localizacao[i].unidade,
               estmax: localizacao[i].estmax,
               bloq: localizacao[i].bloq
            });
        }
        res.json(json);
    },
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let localizacao = await localizacaoService.buscarUm(codigo);

        if (localizacao) {
            json.result = localizacao;
        }

        res.json(json);
}
}