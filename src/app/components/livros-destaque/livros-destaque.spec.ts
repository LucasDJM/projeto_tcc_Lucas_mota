import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDestaque } from './livros-destaque';

describe('LivrosDestaque', () => {
  let component: LivrosDestaque;
  let fixture: ComponentFixture<LivrosDestaque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosDestaque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosDestaque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
