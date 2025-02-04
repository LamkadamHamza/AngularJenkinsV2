import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeymentComponent } from './new-peyment.component';

describe('NewPeymentComponent', () => {
  let component: NewPeymentComponent;
  let fixture: ComponentFixture<NewPeymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPeymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPeymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
