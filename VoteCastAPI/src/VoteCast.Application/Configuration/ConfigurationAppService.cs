using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using VoteCast.Configuration.Dto;

namespace VoteCast.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : VoteCastAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
