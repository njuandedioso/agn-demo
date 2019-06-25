import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule

} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule
    ]
})

export class MaterialModule{}