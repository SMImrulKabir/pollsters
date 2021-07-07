import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
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
  selectedCandidate:string = '';
  voted:boolean = false;

  constructor(injector: Injector, private _userService: AppSessionService,
    ) {
    super(injector);
    this.user = _userService.user.userName;
  }

  getRandomNumber(){
    this.privacy_code = getRandomString(19);
  }

  confirmVote(selection:string){
    this.selectedCandidate = selection;
    this.voted = true;
  }

  

  //this data will come from API after API call is implemented
  //Test data is for JavaScript code implementaion purpose only
  testData = [
    {
      "name":"Donald Trump",
      "pic": "assets/img/donald.jpg"
    },
    {
      "name":"Barack Obama",
      "pic": "assets/img/obama.jpg"
    },
    {
      "name":"George Bush",
      "pic": "assets/img/bush.jpg"
    },
    {
      "name":"Bill Clinton",
      "pic": "assets/img/clinton.jpg"
    }
  ];
}

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var result = '';
  for ( var i = 1; i <= length; i++ ) {
      (i%5 == 0)? result += ' ':  result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
