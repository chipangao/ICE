import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamDetailComponent } from './steam-detail.component';

describe('SteamDetailComponent', () => {
  let component: SteamDetailComponent;
  let fixture: ComponentFixture<SteamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
