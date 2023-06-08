using File_Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Program
{
    static void Main()
    {
        string filePath = @"D:\daneshgah\term2\programming\exercises\tamrin3\File_Query\info.txt";
        List <PersonInfo> personList = new List <PersonInfo> ();
        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
             // Split the line by commas
            string[] parts = line.Split(',');
            // Extract the values
            int id = int.Parse(parts[0].Split('=')[1].Trim());
            string title = parts[1].Split('=')[1].Trim().Trim('"');
            string author = parts[2].Split('=')[1].Trim().Trim('"');
            decimal price = decimal.Parse(parts[3].Split('=')[1].Trim());
            PersonInfo person=new PersonInfo(id,title,author,price);
            personList.Add(person);
        }
        // a for write in file
        string output = "";
        // work with linq

        //choose books which their price is more than 10 & oreder decending
        output += "Books which their price is more than 10 & oreder decending\n";
        string OutputFile = @"D:\daneshgah\term2\programming\exercises\tamrin3\File_Query\Outputs.txt";
        var Price_More_than_10=personList.Where(b=>b.Price>10).OrderByDescending(b=>b.Price);
        foreach (var item in Price_More_than_10)
        {   
            Console.WriteLine($"Price: {item.Price} , Title: {item.Title}");
            output += $"Price: {item.Price} , Title: {item.Title}\n";
        }
        //find  Id & Price of Madeline book
        var MadelineInfo = personList.FirstOrDefault(b => b.Title == "Madeline");
        string Info = $"\n*********************" +
            $"\nMadeline Info\n" +
            $"Id : {MadelineInfo.Id},Price: {MadelineInfo.Price}\n" +
            $"***********************\n";
        Console.WriteLine(Info);
        output += Info;
        //Odd Id & order by price

        var Odd_Id = personList.Where(b => b.Id % 2 != 0).OrderBy(b => b.Price);
        Console.WriteLine("Odd Ids");
        output += "Odd Ids\n";
        foreach (var item in Odd_Id)
        {
            Console.WriteLine($"Id: {item.Id}, Price:{item.Price}");
            output +=$"Id: {item.Id}, Price:{item.Price}\n";
        }
        Console.WriteLine("*****************\n");
        output += "********************\n";
        //Find Id or Title of Dr.Seuss or Don Freeman 

        //  var authors = personList.Where(b => b.Author == "Dr. Seuss"|| b.Author == "Don Freeman");
        output += "\nFind Id or Title of Dr.Seuss or Don Freeman \n";
        var authors=from auth in personList
                    where auth.Author == "Dr. Seuss" || auth.Author == "Don Freeman"
                    select auth;
        foreach (var author in authors)
        {
            Console.WriteLine($"Authore : {author.Author} , Id: {author.Id} , Title: {author.Title}");
            output += $"Authore : {author.Author} , Id: {author.Id} , Title: {author.Title}\n";
        }




        // write to file
        File.WriteAllText(OutputFile,output);
        //Console.ReadLine();
    }
}
