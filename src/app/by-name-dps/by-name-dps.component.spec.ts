import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByNameDpsComponent } from './by-name-dps.component';

describe('ByNameDpsComponent', () => {
  let component: ByNameDpsComponent;
  let fixture: ComponentFixture<ByNameDpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByNameDpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByNameDpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
