import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerFieldCellComponent } from './soccer-field-cell.component';

describe('SoccerFieldCellComponent', () => {
  let component: SoccerFieldCellComponent;
  let fixture: ComponentFixture<SoccerFieldCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerFieldCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerFieldCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
