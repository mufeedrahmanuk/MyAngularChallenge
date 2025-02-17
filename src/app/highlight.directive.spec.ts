import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;

  beforeEach(() => {
    // Create a mock ElementRef with a basic div element
    elementRef = new ElementRef(document.createElement('div'));
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
