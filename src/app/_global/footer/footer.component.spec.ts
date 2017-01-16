import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
  let comp:    FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    });

    fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('footer'));
    el = de.nativeElement;
  });

  it ('should exist', () => {
    expect(el).toBeDefined();
  });
});
