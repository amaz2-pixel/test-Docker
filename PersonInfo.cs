using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace File_Query
{
   public class PersonInfo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public decimal Price { get; set; }
        
        public PersonInfo(int id,string tit,string aut,decimal pri)
        {
            this.Id = id;
            this.Title = tit;
            this.Author = aut;
            this.Price = pri;
        }
    }
}
