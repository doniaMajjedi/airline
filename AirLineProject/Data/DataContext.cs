using Microsoft.EntityFrameworkCore;
namespace AirLineProject.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Passenger> SuperHeroes => Set<Passenger>();
    }
}
