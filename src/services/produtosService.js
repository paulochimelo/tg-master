const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM PRODUTOS', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM PRODUTOS WHERE codigo = ?', [codigo], (error, results)=> {
                if(error) {rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },
    inserir: (modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO PRODUTOS (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); //insertId
                }
            );
        });
    },
    alterar:(codigo, modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE PRODUTOS SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM PRODUTOS WHERE codigo = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};