using Abp.Application.Services;
using VoteCast.MultiTenancy.Dto;

namespace VoteCast.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

