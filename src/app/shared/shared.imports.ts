import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonTableComponent, InputTextComponent, SelectComponent } from './components';
import { NgModule } from '@angular/core';
import { PrimengImports } from './primeng.import';

const SharedImports = [CommonModule, FormsModule, ReactiveFormsModule, ...PrimengImports, InputTextComponent, CommonTableComponent, SelectComponent, RouterLink];
@NgModule({
    imports: [...SharedImports],
    exports: [...SharedImports]
})
export class SharedModule {}
