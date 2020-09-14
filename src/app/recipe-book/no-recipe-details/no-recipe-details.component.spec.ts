import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeDetailsComponent } from './no-recipe-details.component';

describe('NoRecipeDetailsComponent', () => {
  let component: NoRecipeDetailsComponent;
  let fixture: ComponentFixture<NoRecipeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRecipeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
