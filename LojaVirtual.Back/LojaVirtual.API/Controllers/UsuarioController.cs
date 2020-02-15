using LojaVirtual.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LojaVirtual.API.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuarioController([FromBody] Usuario usuario)
        {
            try
            {   
                if(usuario.Email == "jorcelino@live.com" && usuario.Senha == "123")
                    return Ok(usuario);
                 
                return BadRequest("Usuário e/ou senha inválido");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post()
        {
            try
            {
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
