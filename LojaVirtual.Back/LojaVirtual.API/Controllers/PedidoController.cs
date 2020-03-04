using System;
using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace LojaVirtual.API.Controllers
{
    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoRepositorio _pedidoRespositorio;
        public PedidoController(IPedidoRepositorio pedidoRepositorio)
        {
            this._pedidoRespositorio = pedidoRepositorio;
        }

        [HttpPost]
        public ActionResult Post([FromBody]Pedido pedido)
        {
            try
            {
                _pedidoRespositorio.Adicionar(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}