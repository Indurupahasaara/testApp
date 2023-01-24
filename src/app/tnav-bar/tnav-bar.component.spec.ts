import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnavBarComponent } from './tnav-bar.component';

describe('TnavBarComponent', () => {
  let component: TnavBarComponent;
  let fixture: ComponentFixture<TnavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
