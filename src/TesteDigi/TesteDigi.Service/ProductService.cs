using TesteDigi.Repository;
using TesteDigi.Repository.Model;

namespace TesteDigi.Service
{
    public class ProductService
    {
        private readonly ProductRepository _productRepository;

        public ProductService(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public List<Product> GetAll() => _productRepository.GetAll();
    }
}
