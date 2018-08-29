import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbKecamatanComponent } from './rekap-ab-kecamatan.component';

describe('RekapAbKecamatanComponent', () => {
  let component: RekapAbKecamatanComponent;
  let fixture: ComponentFixture<RekapAbKecamatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbKecamatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbKecamatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
