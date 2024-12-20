import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialodAddUserComponent } from './dialod-add-user.component';

describe('DialodAddUserComponent', () => {
  let component: DialodAddUserComponent;
  let fixture: ComponentFixture<DialodAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialodAddUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialodAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
