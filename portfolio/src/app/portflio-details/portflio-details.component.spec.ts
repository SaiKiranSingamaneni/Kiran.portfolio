import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortflioDetailsComponent } from './portflio-details.component';

describe('PortflioDetailsComponent', () => {
  let component: PortflioDetailsComponent;
  let fixture: ComponentFixture<PortflioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortflioDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortflioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
