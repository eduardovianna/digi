using TesteDigi.Repository.Data;
using TesteDigi.Repository.Model;

namespace TesteDigi.Repository
{
    public class ProductRepository
    {
        private ProductData data;

        public ProductRepository() 
        {
            data = new ProductData();
        }

        public List<Product> GetAll()
        {
            return data.GetProducts();
        }
    }
}
