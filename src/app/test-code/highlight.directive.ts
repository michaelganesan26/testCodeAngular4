import { Directive, ElementRef, HostListener, Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})

export class HighlightDirective {
  @Input('textHighLightColors') highlightColor:string;

  constructor(private el: ElementRef,private renderer:Renderer2) {

    //el.nativeElement.style.backgroundColor = "yellow";

  }

  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;

  }


  @HostListener('mouseenter')
  onMouseEnter() {
    if(!this.highlightColor){
      this.renderer.addClass(this.el.nativeElement,"magentaText");
    }
    else{
      this.highlight(this.highlightColor);
    }
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if(!this.highlightColor){
     this.renderer.removeClass(this.el.nativeElement,"magentaText");
      return;
    }
    else{
      this.highlight(null);

    }
  
   
  }

}
