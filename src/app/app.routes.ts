import { Routes } from '@angular/router';
import { HomeComponent } from './components/paginas/home/home.component';
import { QuemSomosComponent } from './components/paginas/quem-somos/quem-somos.component';
import { PortfolioComponent } from './components/paginas/portfolio/portfolio.component';
import { DepoimentosComponent } from './components/paginas/depoimentos/depoimentos.component';
import { OrcamentoComponent } from './components/paginas/orcamento/orcamento.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"quem-somos",
        component:QuemSomosComponent,
    },
    {
        path:"portfolio",
        component:PortfolioComponent,
    },
    {
        path:"depoimentos",
        component:DepoimentosComponent,
    },
    {
        path:"orcamento",
        component:OrcamentoComponent,
    },
];
