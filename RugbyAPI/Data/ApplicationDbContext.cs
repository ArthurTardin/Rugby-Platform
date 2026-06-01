using Microsoft.EntityFrameworkCore;
using RugbyAPI.Models;

namespace RugbyAPI.Data;

public class ApplicationDbContext : DbContext
{
    
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext>
        options
    ) : base(options)
    {
        
    }

    public DbSet<Match> Matches {get; set;}
    public DbSet<Referee> referees {get; set;}
    
}