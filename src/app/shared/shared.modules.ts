import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule, MatToolbar } from '@angular/material';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatToolbar
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    providers: [],
})
export class SharedModule {}