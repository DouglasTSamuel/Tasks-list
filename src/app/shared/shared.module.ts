import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeColorDirective } from './directives/change-color.directive';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ChangeColorDirective],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, ChangeColorDirective],
})
export class SharedModule {}
