import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCollegesComponent } from './map-colleges.component';

describe('MapCollegesComponent', () => {
  let component: MapCollegesComponent;
  let fixture: ComponentFixture<MapCollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
