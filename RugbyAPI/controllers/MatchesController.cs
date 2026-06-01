using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RugbyAPI.Data;
using RugbyAPI.DTOs;
using RugbyAPI.Models;

namespace RugbyAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MatchesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var matches = await _context.Matches.ToListAsync();

        return Ok(matches);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        CreateMatchDto dto
    )
    {
        var match = new Match
        {
            HomeTeam = dto.HomeTeam,
            AwayTeam = dto.AwayTeam,
            MatchDate = dto.MatchDate,
            Stadium = dto.Stadium
        };

        _context.Matches.Add(match);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetAll),
            new { id = match.Id },
            match
        );
    }
}