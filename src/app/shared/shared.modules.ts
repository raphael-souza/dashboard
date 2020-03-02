import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule, MatIconModule, MatToolbarRow, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        AreaComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatListModule,
        RouterModule,
        HighchartsChartModule,
        MatCardModule,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        AreaComponent,
        
    ],
    providers: [],
})
export class SharedModule {}