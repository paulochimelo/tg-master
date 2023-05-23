const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM MOVIMENTACAO', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM MOVIMENTACAO WHERE codigo = ?', [codigo], (error, results)=> {
                if(error) {rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    }
};