import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { NgModule } from '@angular/core';

// ISSUE: not statically analyzable during import ith lib dist
// export const MaterialFormsUtils = [
//     MatButtonModule,
//     MatInputModule,
//     MatFormFieldModule,
// ];

// ISSUE: not statically analyzable during import ith lib dist
// const MaterialFormsUtils = [
//     MatButtonModule,
//     MatInputModule,
//     MatFormFieldModule,
// ];
// export default MaterialFormsUtils;

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ] 
})
export class MaterialFormsUtils {}; 
