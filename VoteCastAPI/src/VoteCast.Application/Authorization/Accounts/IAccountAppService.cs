using System.Threading.Tasks;
using Abp.Application.Services;
using VoteCast.Authorization.Accounts.Dto;

namespace VoteCast.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
