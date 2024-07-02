import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxState } from '@rx-angular/state';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { ProductService } from '@product/product-data-access';
import * as i0 from "@angular/core";
export class ProductDetailStateService {
    constructor() {
        this._route = inject(ActivatedRoute);
        this._productService = inject(ProductService);
        /**
         * Component state and its initial values
         */
        this._state = rxState(({ set }) => {
            // set initial state
            set({ product: null, action: 'initial', errorMessage: null });
        });
        this.product$ = this._state.select('product').pipe(map((product) => product
            ? {
                ...product,
                discountedPrice: product.price - product.price * (product.discount / 100),
            }
            : null));
        this.isLoading$ = this._state
            .select('action')
            .pipe(map((action) => action === 'pending'));
        // observe when the ID in the params changes
        const idRouteChanges$ = this._route.params.pipe(map((params) => params['id']), distinctUntilChanged(), tap(() => this._state.set((state) => ({
            ...state,
            action: 'pending',
            product: null,
        }))));
        // reads from the route parameter for changes
        this._state.connect(idRouteChanges$.pipe(switchMap((id) => this._productService.getProduct(id))), (state, product) => {
            return { ...state, product, action: 'done' };
        });
    }
    static { this.ɵfac = function ProductDetailStateService_Factory(t) { return new (t || ProductDetailStateService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductDetailStateService, factory: ProductDetailStateService.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailStateService, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdC9mZWF0dXJlLXByb2R1Y3QtZGV0YWlsL3NyYy9saWIvcHJvZHVjdC1kZXRhaWwtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBVTlELE1BQU0sT0FBTyx5QkFBeUI7SUEwQnBDO1FBekJRLFdBQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsb0JBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDYyxXQUFNLEdBQUcsT0FBTyxDQUF5QixDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUNwRSxvQkFBb0I7WUFDcEIsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsYUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDZCxPQUFPO1lBQ0wsQ0FBQyxDQUFDO2dCQUNFLEdBQUcsT0FBTztnQkFDVixlQUFlLEVBQ2IsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7YUFDM0Q7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUNULENBQ0YsQ0FBQztRQUNGLGVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTthQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRzdDLDRDQUE0QztRQUM1QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBVyxDQUFDLEVBQ3ZDLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQixHQUFHLEtBQUs7WUFDUixNQUFNLEVBQUUsU0FBUztZQUNqQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxDQUNKLENBQ0YsQ0FBQztRQUVGLDZDQUE2QztRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDakIsZUFBZSxDQUFDLElBQUksQ0FDbEIsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUN2RCxFQUNELENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzswRkFsRFUseUJBQXlCO3VFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCOztpRkFBekIseUJBQXlCO2NBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyByeFN0YXRlIH0gZnJvbSAnQHJ4LWFuZ3VsYXIvc3RhdGUnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdAcHJvZHVjdC9wcm9kdWN0LWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAcHJvZHVjdC9zaGFyZWQtZHRvJztcblxuaW50ZXJmYWNlIFByb2R1Y3REZXRhaWxQYWdlU3RhdGUge1xuICBwcm9kdWN0OiBQcm9kdWN0IHwgbnVsbDtcbiAgYWN0aW9uOiAnaW5pdGlhbCcgfCAncGVuZGluZycgfCAnZXJyb3InIHwgJ2RvbmUnO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyB8IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsU3RhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcm91dGUgPSBpbmplY3QoQWN0aXZhdGVkUm91dGUpO1xuICBwcml2YXRlIF9wcm9kdWN0U2VydmljZSA9IGluamVjdChQcm9kdWN0U2VydmljZSk7XG4gIC8qKlxuICAgKiBDb21wb25lbnQgc3RhdGUgYW5kIGl0cyBpbml0aWFsIHZhbHVlc1xuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGUgPSByeFN0YXRlPFByb2R1Y3REZXRhaWxQYWdlU3RhdGU+KCh7IHNldCB9KSA9PiB7XG4gICAgLy8gc2V0IGluaXRpYWwgc3RhdGVcbiAgICBzZXQoeyBwcm9kdWN0OiBudWxsLCBhY3Rpb246ICdpbml0aWFsJywgZXJyb3JNZXNzYWdlOiBudWxsIH0pO1xuICB9KTtcblxuICBwcm9kdWN0JCA9IHRoaXMuX3N0YXRlLnNlbGVjdCgncHJvZHVjdCcpLnBpcGUoXG4gICAgbWFwKChwcm9kdWN0KSA9PlxuICAgICAgcHJvZHVjdFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICBkaXNjb3VudGVkUHJpY2U6XG4gICAgICAgICAgICAgIHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0LnByaWNlICogKHByb2R1Y3QuZGlzY291bnQgLyAxMDApLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKVxuICApO1xuICBpc0xvYWRpbmckID0gdGhpcy5fc3RhdGVcbiAgICAuc2VsZWN0KCdhY3Rpb24nKVxuICAgIC5waXBlKG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24gPT09ICdwZW5kaW5nJykpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIG9ic2VydmUgd2hlbiB0aGUgSUQgaW4gdGhlIHBhcmFtcyBjaGFuZ2VzXG4gICAgY29uc3QgaWRSb3V0ZUNoYW5nZXMkID0gdGhpcy5fcm91dGUucGFyYW1zLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtcykgPT4gcGFyYW1zWydpZCddIGFzIG51bWJlciksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgdGFwKCgpID0+XG4gICAgICAgIHRoaXMuX3N0YXRlLnNldCgoc3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgYWN0aW9uOiAncGVuZGluZycsXG4gICAgICAgICAgcHJvZHVjdDogbnVsbCxcbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIHJlYWRzIGZyb20gdGhlIHJvdXRlIHBhcmFtZXRlciBmb3IgY2hhbmdlc1xuXG4gICAgdGhpcy5fc3RhdGUuY29ubmVjdChcbiAgICAgIGlkUm91dGVDaGFuZ2VzJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KGlkKSlcbiAgICAgICksXG4gICAgICAoc3RhdGUsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3QsIGFjdGlvbjogJ2RvbmUnIH07XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19