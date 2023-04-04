using Microsoft.AspNetCore.Mvc;
using SopHiaSqlProject.Data;
using SopHiaSqlProject.Models;
using System.Diagnostics;

namespace SopHiaSqlProject.Controllers
{
    public class HomeController : Controller

        
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            Slider sliders =  _context.Sliders.FirstOrDefault();
            return View(sliders);

        }
    }
}
       