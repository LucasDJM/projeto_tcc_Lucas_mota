import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaWattpad } from './cta-wattpad';

describe('CtaWattpad', () => {
  let component: CtaWattpad;
  let fixture: ComponentFixture<CtaWattpad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaWattpad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaWattpad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
