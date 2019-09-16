import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSlideContainerComponent } from './side-slide-container.component';

describe('SlideMenuComponent', () => {
  let component: SideSlideContainerComponent;
  let fixture: ComponentFixture<SideSlideContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSlideContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSlideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
