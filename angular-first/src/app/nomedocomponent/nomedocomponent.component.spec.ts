import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomedocomponentComponent } from './nomedocomponent.component';

describe('NomedocomponentComponent', () => {
  let component: NomedocomponentComponent;
  let fixture: ComponentFixture<NomedocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomedocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomedocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
