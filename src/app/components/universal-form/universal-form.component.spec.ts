import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalFormComponent } from './universal-form.component';

describe('UniversalFormComponent', () => {
  let component: UniversalFormComponent;
  let fixture: ComponentFixture<UniversalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
