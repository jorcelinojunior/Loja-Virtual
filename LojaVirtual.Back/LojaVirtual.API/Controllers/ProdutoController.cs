using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LojaVirtual.API.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.ObterTodos());
                //if(condicao == false)
                //{
                //    return BadRequest("Aconteceu um erro devido à XYZ");
                //}
            }
            catch (Exception ex)
            {
                return BadRequest("Aconteceu algum erro: " + ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody]Produto produto)
        {
            try
            {
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto",produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
