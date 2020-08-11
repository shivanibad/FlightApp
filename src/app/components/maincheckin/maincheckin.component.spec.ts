import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincheckinComponent } from './maincheckin.component';

describe('MaincheckinComponent', () => {
  let component: MaincheckinComponent;
  let fixture: ComponentFixture<MaincheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
