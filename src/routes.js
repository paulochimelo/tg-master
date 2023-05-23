const { Router } = require("express");
const router = new Router();

const produtosController = require('./controllers/produtosController')
const localizacaoController = require('./controllers/localizacaoController')
const movimentacaoController = require('./controllers/movimentacaoController')
const tipoMovController = require('./controllers/tipoMovController')

router.get('/produtos', produtosController.buscarTodos);
router.get('/localizacao', localizacaoController.buscarTodos);
router.get('/movimentacao', movimentacaoController.buscarTodos);
router.get('/tipoMov', tipoMovController.buscarTodos);

router.get('/produtos/:codigo', produtosController.buscarUm);
router.get('/localizacao/:codigo', localizacaoController.buscarUm);
router.get('/movimentacao/:codigo', movimentacaoController.buscarUm);
router.get('/tipoMov/:codigo', tipoMovController.buscarUm);

router.post('/produtos', produtosController.inserir);
router.put('/produtos/:codigo', produtosController.alterar);
router.delete('/produtos/:codigo', produtosController.excluir);

router.post('/localizacao', produtosController.inserir);
router.put('/localizacao/:codigo', produtosController.alterar);
router.delete('/localizacao/:codigo', produtosController.excluir);

router.post('/movimentacao', produtosController.inserir);
router.put('/movimentacao/:codigo', produtosController.alterar);
router.delete('/movimentacao/:codigo', produtosController.excluir);

router.post('/tipoMov', produtosController.inserir);
router.put('/tipoMov/:codigo', produtosController.alterar);
router.delete('/tipoMov/:codigo', produtosController.excluir);

module.exports = router;