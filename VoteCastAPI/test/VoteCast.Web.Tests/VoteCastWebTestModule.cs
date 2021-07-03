using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using VoteCast.EntityFrameworkCore;
using VoteCast.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace VoteCast.Web.Tests
{
    [DependsOn(
        typeof(VoteCastWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class VoteCastWebTestModule : AbpModule
    {
        public VoteCastWebTestModule(VoteCastEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(VoteCastWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(VoteCastWebMvcModule).Assembly);
        }
    }
}