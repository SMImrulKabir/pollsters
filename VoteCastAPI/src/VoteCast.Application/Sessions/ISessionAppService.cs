using System.Threading.Tasks;
using Abp.Application.Services;
using VoteCast.Sessions.Dto;

namespace VoteCast.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
