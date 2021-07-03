using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace VoteCast.EntityFrameworkCore
{
    public static class VoteCastDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<VoteCastDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<VoteCastDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
