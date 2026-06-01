namespace RugbyAPI.Models;

public class Match
{
    public int Id {get; set;}
    public string HomeTeam {get; set; } = string.Empty;
    public string AwayTeam {get; set;} = string.Empty;
    public DateTime MatchDate {get; set;}
    public string Stadium {get; set;} = string.Empty;
}