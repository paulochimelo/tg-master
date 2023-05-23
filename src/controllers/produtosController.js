const produtosService = require('../services/produtosService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let produtos = await produtosService.buscarTodos();

        for(let i in produtos){
            json.result.push({
               codigo: produtos[i].codigo,
               descricao: produtos[i].descricao,
               dataat: produtos[i].dataat,
               userat: produtos[i].userat,
               validade: produtos[i].validade,
               status: produtos[i].status,
               valorcompra: produtos[i].valorcompra,
               valorvenda: produtos[i].valorvenda 
            });
        }
        res.json(json);
    },
    
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let produtos = await produtosService.buscarUm(codigo);

        if (produtos) {
            json.result = produtos;
        }

        res.json(json);
},

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa){
            let produtos = await produtosService.inserir(modelo, placa);
            json.result = {
                codigo: produtos,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa){
            await produtosService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await produtosService.excluir(req.params.codigo);
        
        res.json(json);
    },
}