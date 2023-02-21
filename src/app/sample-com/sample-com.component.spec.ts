import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComComponent } from './sample-com.component';

describe('SampleComComponent', () => {
  let component: SampleComComponent;
  let fixture: ComponentFixture<SampleComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
