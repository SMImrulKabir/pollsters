using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using VoteCast.Configuration;

namespace VoteCast.Web.Host.Startup
{
    [DependsOn(
       typeof(VoteCastWebCoreModule))]
    public class VoteCastWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public VoteCastWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(VoteCastWebHostModule).GetAssembly());
        }
    }
}
