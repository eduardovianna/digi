using Microsoft.AspNetCore.Mvc;
using System.Net;
using TesteDigi.Repository;
using TesteDigi.Service;

namespace TesteDigi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        /// <summary>
        /// Listar Produtos
        /// </summary>
        /// <response code="500">Internal Server Error</response>
        /// <remarks>Obtém a lista de produtos oriunda do arquivo JSON</remarks>
        /// <returns></returns>
        [HttpGet("getAll")]
        public IActionResult GetAll()
        {
            try
            {
            var o = _productService.GetAll();

            return Ok(o);

            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
