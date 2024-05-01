import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from  '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [],
    exports: [
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        NgxSpinnerModule,
        MatCardModule,
    ],
  })
  export class MaterialModule {
  }