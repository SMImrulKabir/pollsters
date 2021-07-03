using System.ComponentModel.DataAnnotations;

namespace VoteCast.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}