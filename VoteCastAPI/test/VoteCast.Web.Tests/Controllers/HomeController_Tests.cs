using System.Threading.Tasks;
using VoteCast.Models.TokenAuth;
using VoteCast.Web.Controllers;
using Shouldly;
using Xunit;

namespace VoteCast.Web.Tests.Controllers
{
    public class HomeController_Tests: VoteCastWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}