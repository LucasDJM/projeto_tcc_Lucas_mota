import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebooks } from './ebooks';

describe('Ebooks', () => {
  let component: Ebooks;
  let fixture: ComponentFixture<Ebooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ebooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ebooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
