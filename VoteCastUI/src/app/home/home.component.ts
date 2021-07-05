import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { UserLoginInfoDto } from '@shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  templateUrl: './home.component.html',
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends AppComponentBase {
  privacy_code: string = '';
  user: string;
  showBallot:boolean = false;
  constructor(injector: Injector, private _userService: AppSessionService,
    ) {
    super(injector);
    this.user = _userService.user.userName;
  }

  getRandomNumber(){
    this.privacy_code = '2130 F5T7 B890 7Y8U';
  }
}
