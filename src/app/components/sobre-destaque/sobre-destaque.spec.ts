import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDestaque } from './sobre-destaque';

describe('SobreDestaque', () => {
  let component: SobreDestaque;
  let fixture: ComponentFixture<SobreDestaque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreDestaque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreDestaque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
