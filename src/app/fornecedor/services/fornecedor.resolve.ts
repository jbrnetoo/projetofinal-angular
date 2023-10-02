import { Injectable, Injector } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from './fornecedor.service';

@Injectable()
export class FornecedorResolve implements Resolve<Fornecedor> {

    constructor(private injector: Injector) { }

    resolve(route: ActivatedRouteSnapshot) {
        const fornecedorService = this.injector.get(FornecedorService);
        return fornecedorService.obterPorId(route.params['id']);
    }
}