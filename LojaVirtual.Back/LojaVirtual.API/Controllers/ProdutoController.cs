using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;

namespace LojaVirtual.API.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;
        public ProdutoController(IProdutoRepositorio produtoRepositorio, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _produtoRepositorio  = produtoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment  = hostingEnvironment;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Json(_produtoRepositorio.ObterTodos());
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
                produto.Validate();
                if(!produto.EhValido){
                    return BadRequest(produto.ObterMensagensValidacao());
                }
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile           = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo        = formFile.FileName;
                string novoNomeArquivo = GerarNovoNome(nomeArquivo);

                var pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";
                var nomeCompleto  = pastaArquivos + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNome(string nomeArquivo)
        {
            string extensao       = nomeArquivo.Split(".").Last();
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo   = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo       = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}";
            novoNomeArquivo       = novoNomeArquivo + "." + extensao;
            return novoNomeArquivo;
        }
    }
}
