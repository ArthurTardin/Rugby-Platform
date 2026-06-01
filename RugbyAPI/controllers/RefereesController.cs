using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RugbyAPI.Data;
using RugbyAPI.DTOs;
using RugbyAPI.Models;

namespace RugbyAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RefereesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public RefereesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _context.referees.ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateRefereeDto dto)
    {
        var referee = new Referee
        {
            Name = dto.Name,
            Email = dto.Email,
            Level = dto.Level,
            State = dto.State,
            MatchesOfficiated = 0
        };

        _context.referees.Add(referee);

        await _context.SaveChangesAsync();

        return Ok(referee);
    }
}