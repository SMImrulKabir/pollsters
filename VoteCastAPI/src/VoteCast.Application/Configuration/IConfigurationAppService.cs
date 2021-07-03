using System.Threading.Tasks;
using VoteCast.Configuration.Dto;

namespace VoteCast.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
