import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';



@NgModule({
    declarations: [ContentComponent],
    exports: [
        ContentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }