import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import our pipe for filters cities on searches
import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  declarations: [FilterSearchPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterSearchPipe]
})
export class PipesModule { }
