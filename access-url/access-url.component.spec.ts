import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlComponent } from './access-url.component';

describe('AccessUrlComponent', () => {
  let component: AccessUrlComponent;
  let fixture: ComponentFixture<AccessUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
