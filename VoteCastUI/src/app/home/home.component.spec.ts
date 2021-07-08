/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppSessionService } from '@shared/session/app-session.service';
import { SessionServiceProxy } from '@shared/service-proxies/service-proxies';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [ HttpClientTestingModule ],
      providers: [AppSessionService, SessionServiceProxy, AppSessionService]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('First button text should be GENERATE PUBLIC CODE', async(() => {
    // const fixture = TestBed.createComponent(HomeComponent);
    component.user = 'voter';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('button')[0].textContent).toContain('GENERATE PRIVACY CODE');
  }));

  it('Second button text should be START VOTING', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('button')[1].textContent).toContain('START VOTING');
  }));

  it('Privacy button should remain enabled before click on it',()=>{
    component.user = 'voter';
    fixture.detectChanges();
    let privacyButton = fixture.debugElement.query(By.css('#privacyBtn'));
    expect(privacyButton.nativeElement.disabled).toBe(false);
  })

  it('Privacy button should be disabled after click on it',()=>{
    component.user = 'voter';
    fixture.detectChanges();
    let privacyButton = fixture.debugElement.query(By.css('#privacyBtn'));
    privacyButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(privacyButton.nativeElement.disabled).toBe(true);
    });
  });

  it('Voting start button should be disabled at the begining',()=>{
    component.user = 'voter';
    fixture.detectChanges();
    let votingButton = fixture.debugElement.query(By.css('#votingBtn'));
    expect(votingButton.nativeElement.disabled).toBe(true);
  })

  it('Voting start button should be enabled after click on Privacy button',()=>{
    component.user = 'voter';
    fixture.detectChanges();
    let privacyButton = fixture.debugElement.query(By.css('#privacyBtn'));
    privacyButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    let votingButton = fixture.debugElement.query(By.css('#votingBtn'));
    fixture.whenStable().then(() => {
      expect(votingButton.nativeElement.disabled).toBe(false);
    });
  });

  it('VOTING button will be enabled after Privacy Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#privacyBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const votingStartButton = fixture.debugElement.query(By.css('#votingBtn'));

    fixture.whenStable().then(() => {
      expect(votingStartButton.nativeElement.disabled).toBe(false);
    });

  }));

  it('Do not Show privacy code before Privacy Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const privacyCodeText = fixture.debugElement.query(By.css('#privacyCodeID'));
    expect(privacyCodeText).toBeNull();
  }));

  it('Do not Show the note before Privacy Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const noteText = fixture.debugElement.query(By.css('#noteID'));
    expect(noteText).toBeNull();
  }));

  it('Show a text i.e. privacy code after Privacy Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#privacyBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const privacyCodeText = fixture.debugElement.query(By.css('#privacyCodeID'));
    fixture.whenStable().then(() => {
      expect(privacyCodeText.nativeElement.textContent).length > 0;
    });
  }));

  it('After click Privacy button 16 digit privacy code',()=>{
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#privacyBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const privacyCodeText = fixture.debugElement.query(By.css('#privacyCodeID'));
    fixture.whenStable().then(() => {
      expect(privacyCodeText.nativeElement.textContent).length == 19;
    });
  });

  it('Do not show ballot view before Voting Start Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const ballotSection = fixture.debugElement.query(By.css('#SecondViewID'));
    expect(ballotSection).toBeNull();
  }));

  it('Show ballot view after Voting Start Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const ballotSection = fixture.debugElement.query(By.css('#SecondViewID'));
    expect(ballotSection.context).toBeDefined();
  }));

  it('Do not show initial view after Voting Start Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const firstSection = fixture.debugElement.query(By.css('#FirstViewID'));
    expect(firstSection).toBeNull();
  }));

  it('Show Instruction text after Voting Start Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const instructionText = fixture.debugElement.query(By.css('#insID'));
      expect(instructionText .nativeElement.textContent).toContain('Select the best President ever!');
    });
  }));

  it('Show Privacy note text after Voting Start Button clicked', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const instructionText = fixture.debugElement.query(By.css('#privacyNote'));
      expect(instructionText .nativeElement.textContent).toContain('Your vote is confidential.');
    });
  }));

  it('Show Privacy code after voter select a candidate', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const buttonSelect = fixture.debugElement.query(By.css('#selectBtn0'));
    buttonSelect.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const instructionText = fixture.debugElement.query(By.css('#codeConfirmation'));
      expect(instructionText .nativeElement.textContent).toContain('Your privacy code is:');
    });
  }));

  it('Show confirmation message after voter select a candidate', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const buttonSelect = fixture.debugElement.query(By.css('#selectBtn0'));
    buttonSelect.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const confirmationText = fixture.debugElement.query(By.css('#confirmation'));
      expect(confirmationText.nativeElement.textContent).toContain('You have voted for');
    });
  }));

  it('Show a selected name after voter select a candidate', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const buttonSelect = fixture.debugElement.query(By.css('#selectBtn0'));
    buttonSelect.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const selectedNameText = fixture.debugElement.query(By.css('#nameVotedFor'));
      expect(selectedNameText.nativeElement.textContent).length > 0;
    });
  }));

  it('Show confirmation message after voter select a candidate', async(() => {
    component.user = 'voter';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('#votingBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const buttonSelect = fixture.debugElement.query(By.css('#selectBtn0'));
    buttonSelect.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const messageText = fixture.debugElement.query(By.css('#message'));
      expect(messageText.nativeElement.textContent).toContain('Published result will show your privacy code and the name you voted for. Your name and identity will not be published');
    });
  }));

});
