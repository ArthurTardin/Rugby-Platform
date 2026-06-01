namespace RugbyAPI.Models;

public class Referee
{
    public int Id {get; set;}
    public string Name {get; set; } = string.Empty;
    public string Email {get; set;} = string.Empty;
    public string Level {get; set;} = string.Empty;
    public string State {get; set;} = string.Empty;
    public int MatchesOfficiated {get; set;}
}