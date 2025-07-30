import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Series } from './pages/series/series';
import { Librairie } from './pages/librairie/librairie';
import { Pokedex } from './pages/pokemon/pokedex';


export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series},
    {path: "librairie", component: Librairie},
    {path: "pokedex", component: Pokedex},

];
