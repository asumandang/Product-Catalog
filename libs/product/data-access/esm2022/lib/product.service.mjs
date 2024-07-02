import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import * as productJson from './products.json';
import * as i0 from "@angular/core";
export class ProductService {
    constructor() {
        this._json = productJson;
    }
    getProducts() {
        // adding delay to imitate api delay
        return of(this._json.products).pipe(delay(500));
    }
    getProduct(id) {
        // adding delay to imitate api delay
        return this.getProducts().pipe(map((products) => {
            return products?.find((product) => product.id === +id) ?? null;
        }));
    }
    static { this.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0L2RhdGEtYWNjZXNzL3NyYy9saWIvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQW1CLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2RCxPQUFPLEtBQUssV0FBVyxNQUFNLGlCQUFpQixDQUFDOztBQUsvQyxNQUFNLE9BQU8sY0FBYztJQUgzQjtRQUltQixVQUFLLEdBQUcsV0FBVyxDQUFDO0tBZXRDO0lBYkMsV0FBVztRQUNULG9DQUFvQztRQUNwQyxPQUFPLEVBQUUsQ0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDbkIsb0NBQW9DO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDNUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDZixPQUFPLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7K0VBZlUsY0FBYzt1RUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNOztpRkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGVsYXksIG1hcCwgdHlwZSBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHByb2R1Y3Qvc2hhcmVkLWR0byc7XG5cbmltcG9ydCAqIGFzIHByb2R1Y3RKc29uIGZyb20gJy4vcHJvZHVjdHMuanNvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2pzb24gPSBwcm9kdWN0SnNvbjtcblxuICBnZXRQcm9kdWN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RbXT4ge1xuICAgIC8vIGFkZGluZyBkZWxheSB0byBpbWl0YXRlIGFwaSBkZWxheVxuICAgIHJldHVybiBvZjxQcm9kdWN0W10+KHRoaXMuX2pzb24ucHJvZHVjdHMpLnBpcGUoZGVsYXkoNTAwKSk7XG4gIH1cblxuICBnZXRQcm9kdWN0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2R1Y3QgfCBudWxsPiB7XG4gICAgLy8gYWRkaW5nIGRlbGF5IHRvIGltaXRhdGUgYXBpIGRlbGF5XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdHMoKS5waXBlKFxuICAgICAgbWFwKChwcm9kdWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdHM/LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09ICtpZCkgPz8gbnVsbDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19