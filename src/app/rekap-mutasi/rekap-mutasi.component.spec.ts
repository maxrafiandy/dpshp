import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapMutasiComponent } from './rekap-mutasi.component';

describe('RekapMutasiComponent', () => {
  let component: RekapMutasiComponent;
  let fixture: ComponentFixture<RekapMutasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapMutasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
