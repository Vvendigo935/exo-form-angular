import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Series } from './pages/series/series';
import { Librairie } from './pages/librairie/librairie';
import { Formulaire } from './pages/librairie/formulaire/formulaire'

export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series},
    {path: "librairie", component: Librairie},
    {path: "formulaire", component: Formulaire},
];
