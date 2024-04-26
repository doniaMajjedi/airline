using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Numerics;

namespace AirLineProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult <List<Passenger>>> GetAllPassengers()
        {
            return new List<Passenger>
            {
                new Passenger
                {
                    name="Donia",
                    passportnumber="3263623652",
                    phone="28157391",
                    nationalite="Tunisie",
                    gender="Homme"
                }
            };
        }
    }
}
