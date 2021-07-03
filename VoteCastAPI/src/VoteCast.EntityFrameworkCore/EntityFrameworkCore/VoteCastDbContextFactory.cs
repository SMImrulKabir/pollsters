using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using VoteCast.Configuration;
using VoteCast.Web;

namespace VoteCast.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class VoteCastDbContextFactory : IDesignTimeDbContextFactory<VoteCastDbContext>
    {
        public VoteCastDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<VoteCastDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            VoteCastDbContextConfigurer.Configure(builder, configuration.GetConnectionString(VoteCastConsts.ConnectionStringName));

            return new VoteCastDbContext(builder.Options);
        }
    }
}
