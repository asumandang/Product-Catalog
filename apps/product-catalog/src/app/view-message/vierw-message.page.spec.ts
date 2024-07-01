import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePage } from './view-message.page';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

describe('ViewMessagePage', () => {
  let component: ViewMessagePage;
  let fixture: ComponentFixture<ViewMessagePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewMessagePage],
      imports: [
        IonicModule.forRoot(),
        ViewMessagePageRoutingModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
