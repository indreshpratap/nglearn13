import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector:'[highlight]',
})
export class HightLightDirective {

    @Input("highlight") highlightColor;
    private _currentBg;
    constructor(private element:ElementRef){

    }

    ngOnInit(): void {
       this._currentBg =  this.element.nativeElement.style.background;
     
    }

    @HostListener('mouseenter')
    onMouseEnter(){
   // console.log('coming to mouse enter', this.element.nativeElement);
    this.element.nativeElement.style.background = this.highlightColor||'yellow';
    }

    @HostListener('mouseleave')
    onMouseLeave(){
   // console.log('coming to mouseleave', this.element.nativeElement);
    this.element.nativeElement.style.background = this._currentBg;
    }
 }