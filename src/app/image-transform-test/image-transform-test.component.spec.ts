import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTransformTestComponent } from './image-transform-test.component';

describe('ImageTransformTestComponent', () => {
  let component: ImageTransformTestComponent;
  let fixture: ComponentFixture<ImageTransformTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTransformTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTransformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
