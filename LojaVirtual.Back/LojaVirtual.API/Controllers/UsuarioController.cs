using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LojaVirtual.API.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok("API rodando...");
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
                var usuarioRetorno = _usuarioRepositorio.Obter(usuario.Email, usuario.Senha);

                //if(usuario.Email == "jorcelino@live.com" && usuario.Senha == "123")
                if(usuarioRetorno != null)
                    return Ok(usuarioRetorno);
                 
                return BadRequest("Usuário e/ou senha inválido.");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioCadastrado = _usuarioRepositorio.Obter(usuario.Email);
                if(usuarioCadastrado != null)
                    return BadRequest("Usuário já cadastrado no sistema.");
                
                // usuario.EhAdministrador = true;

                _usuarioRepositorio.Adicionar(usuario);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
