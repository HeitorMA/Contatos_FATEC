import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatoComponent } from './contato.component';

describe('ConatoComponent', () => {
  let component: ConatoComponent;
  let fixture: ComponentFixture<ConatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
