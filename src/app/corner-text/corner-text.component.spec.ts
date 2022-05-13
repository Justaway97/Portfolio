import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerTextComponent } from './corner-text.component';

describe('CornerTextComponent', () => {
  let component: CornerTextComponent;
  let fixture: ComponentFixture<CornerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
