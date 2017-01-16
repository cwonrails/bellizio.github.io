import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }            from '@angular/platform-browser';
import { DebugElement }  from '@angular/core';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let comp:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
  });

  it ('should contain a <div> element', () => {
    expect(el).toBeDefined();
  });
});
