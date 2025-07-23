import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrContato } from './fomr-contato';

describe('FomrContato', () => {
  let component: FomrContato;
  let fixture: ComponentFixture<FomrContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomrContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomrContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
