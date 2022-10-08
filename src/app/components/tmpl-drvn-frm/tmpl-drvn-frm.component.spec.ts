import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplDrvnFrmComponent } from './tmpl-drvn-frm.component';

describe('TmplDrvnFrmComponent', () => {
  let component: TmplDrvnFrmComponent;
  let fixture: ComponentFixture<TmplDrvnFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmplDrvnFrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmplDrvnFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
