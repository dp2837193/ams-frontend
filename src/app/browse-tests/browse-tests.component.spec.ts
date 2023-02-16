import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTestsComponent } from './browse-tests.component';

describe('BrowseTestsComponent', () => {
  let component: BrowseTestsComponent;
  let fixture: ComponentFixture<BrowseTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
