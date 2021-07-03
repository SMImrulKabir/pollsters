using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using VoteCast.Authorization.Roles;
using VoteCast.Authorization.Users;
using VoteCast.MultiTenancy;

namespace VoteCast.EntityFrameworkCore
{
    public class VoteCastDbContext : AbpZeroDbContext<Tenant, Role, User, VoteCastDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public VoteCastDbContext(DbContextOptions<VoteCastDbContext> options)
            : base(options)
        {
        }
    }
}
