import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesModal } from './cookies-modal';

describe('CookiesModal', () => {
  let component: CookiesModal;
  let fixture: ComponentFixture<CookiesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
