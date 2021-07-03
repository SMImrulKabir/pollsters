using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace VoteCast.Controllers
{
    public abstract class VoteCastControllerBase: AbpController
    {
        protected VoteCastControllerBase()
        {
            LocalizationSourceName = VoteCastConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
