import {Directive,ElementRef,Renderer} from 'angular2/core'

@Directive({
    selector:'[growonFocus]',
    host:{
        '(focus)':'onfocus()',
        '(blur)':'onBlur()'
    }
})

export class GrowOnfocusDirective{    
       
    constructor(private el: ElementRef, private renderer:Renderer)
    {
        
    }
    
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','400');
    }
    
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','150');
    }
    
}