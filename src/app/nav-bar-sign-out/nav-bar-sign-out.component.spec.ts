import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSignOutComponent } from './nav-bar-sign-out.component';

describe('NavBarSignOutComponent', () => {
  let component: NavBarSignOutComponent;
  let fixture: ComponentFixture<NavBarSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSignOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
