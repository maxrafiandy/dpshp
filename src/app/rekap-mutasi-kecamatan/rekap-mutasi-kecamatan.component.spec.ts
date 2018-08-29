import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapMutasiKecamatanComponent } from './rekap-mutasi-kecamatan.component';

describe('RekapMutasiKecamatanComponent', () => {
  let component: RekapMutasiKecamatanComponent;
  let fixture: ComponentFixture<RekapMutasiKecamatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapMutasiKecamatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapMutasiKecamatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
