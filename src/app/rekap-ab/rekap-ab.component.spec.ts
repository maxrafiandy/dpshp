import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbComponent } from './rekap-ab.component';

describe('RekapAbComponent', () => {
  let component: RekapAbComponent;
  let fixture: ComponentFixture<RekapAbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
