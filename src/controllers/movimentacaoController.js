const movimentacaoService = require('../services/movimentacaoService');


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let movimentacao = await movimentacaoService.buscarTodos();

        for(let i in movimentacao){
            json.result.push({
               codigo: movimentacao[i].codigo,
               data: movimentacao[i].data,
               tipo: movimentacao[i].tipo,
               produto: movimentacao[i].produto,
               usuario: movimentacao[i].usuario,
               qtde: movimentacao[i].qtde,
               observacao: movimentacao[i].observacao
            });
        }
        res.json(json);
    },
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let movimentacao = await movimentacaoService.buscarUm(codigo);

        if (movimentacao) {
            json.result = movimentacao;
        }

        res.json(json);
}
}