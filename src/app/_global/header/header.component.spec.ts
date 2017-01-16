import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  let comp:    HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('header'));
    el = de.nativeElement;
  });

  it ('should contain a <header> element', () => {
    expect(el).toBeDefined();
  });
});
