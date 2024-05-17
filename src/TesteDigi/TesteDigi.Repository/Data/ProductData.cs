using Newtonsoft.Json;
using TesteDigi.Repository.Model;

namespace TesteDigi.Repository.Data
{
    public class ProductData
    {
        private List<Product>? _products;

        public ProductData() 
        {
            using (StreamReader r = new StreamReader("products.json"))
            {
                string json = r.ReadToEnd();
                _products = JsonConvert.DeserializeObject<List<Product>>(json)!;
            }
        }

        public List<Product> GetProducts()
        {
            return _products ?? new List<Product>();
        }

        public void AddProduct(Product product)
        {
            _products?.Add(product);
        }

        public void Update(Product product)
        {
            _products?.Add(product);
        }
    }
}
