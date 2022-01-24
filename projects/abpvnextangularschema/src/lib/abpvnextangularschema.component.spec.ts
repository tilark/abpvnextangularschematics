import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbpvnextangularschemaComponent } from './abpvnextangularschema.component';

describe('AbpvnextangularschemaComponent', () => {
  let component: AbpvnextangularschemaComponent;
  let fixture: ComponentFixture<AbpvnextangularschemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbpvnextangularschemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbpvnextangularschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
