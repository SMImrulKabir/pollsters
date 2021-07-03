using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using VoteCast.Authorization;

namespace VoteCast
{
    [DependsOn(
        typeof(VoteCastCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class VoteCastApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<VoteCastAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(VoteCastApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
