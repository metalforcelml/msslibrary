import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsslibraryComponent } from './msslibrary.component';

describe('MsslibraryComponent', () => {
  let component: MsslibraryComponent;
  let fixture: ComponentFixture<MsslibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsslibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsslibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
