using Abp.Authorization;
using VoteCast.Authorization.Roles;
using VoteCast.Authorization.Users;

namespace VoteCast.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
