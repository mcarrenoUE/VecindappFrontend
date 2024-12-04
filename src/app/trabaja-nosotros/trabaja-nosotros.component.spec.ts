import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaNosotrosComponent } from './trabaja-nosotros.component';

describe('TrabajaNosotrosComponent', () => {
  let component: TrabajaNosotrosComponent;
  let fixture: ComponentFixture<TrabajaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrabajaNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
