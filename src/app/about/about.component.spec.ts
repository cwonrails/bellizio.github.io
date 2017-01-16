import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';
import { DebugElement }   from '@angular/core';
import { AboutComponent } from './about.component';

describe('About Component', () => {
  let comp:    AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ]
    });

    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
  });

  it ('should contain a <div> element', () => {
    expect(el).toBeDefined();
  });
});
