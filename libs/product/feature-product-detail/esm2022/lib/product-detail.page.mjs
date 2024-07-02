import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, numberAttribute, } from '@angular/core';
import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonProgressBar, IonRow, IonTitle, IonToolbar, } from '@ionic/angular/standalone';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';
import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';
import { ProductDetailStateService } from './product-detail-state.service';
import * as i0 from "@angular/core";
function ProductDetailPage_ion_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-progress-bar", 6);
} }
function ProductDetailPage_ion_row_9_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dt");
    i0.ɵɵtext(1, "Discounted Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "dd", 13);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "dt");
    i0.ɵɵtext(6, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "dd", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 2, product_r1.discountedPrice, "PHP"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", product_r1.discount, "%");
} }
function ProductDetailPage_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row")(1, "ion-col", 7);
    i0.ɵɵelement(2, "img", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-col", 9)(4, "h2", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "dl")(7, "dt");
    i0.ɵɵtext(8, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "dd", 11);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ProductDetailPage_ion_row_9_Conditional_12_Template, 9, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSrc", product_r1.imageUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r1.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 5, product_r1.price, "PHP"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(product_r1.discount > 0 ? 12 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r1.description);
} }
function ProductDetailPage_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row")(1, "ion-col", 14);
    i0.ɵɵtext(2, "No Product Found");
    i0.ɵɵelementEnd()();
} }
export class ProductDetailPage {
    constructor() {
        this._stateService = inject(ProductDetailStateService, {
            self: true,
        });
        this.product$ = this._stateService.product$;
        this.isLoading$ = this._stateService.isLoading$;
        this.id = '';
        addIcons({ caretBack });
    }
    ngOnInit() {
        console.log(this.id);
    }
    static { this.ɵfac = function ProductDetailPage_Factory(t) { return new (t || ProductDetailPage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductDetailPage, selectors: [["pc-product-detail"]], inputs: { id: [2, "id", "id", numberAttribute] }, standalone: true, features: [i0.ɵɵProvidersFeature([], [ProductDetailStateService]), i0.ɵɵInputTransformsFeature, i0.ɵɵStandaloneFeature], decls: 12, vars: 4, consts: [["noProduct", ""], ["slot", "start"], ["icon", "caret-back", "defaultHref", "/products"], ["type", "indeterminate", 4, "rxIf"], [3, "fixed"], [4, "rxIf", "rxIfElse"], ["type", "indeterminate"], ["size-md", "6", "size", "12", 1, "image-container"], ["width", "300", "height", "300", "priority", "", 1, "product-image", 3, "ngSrc"], ["size-md", "6", "size", "12"], [1, "product-name"], [1, "product-price", "item-details", "product-price"], [1, "product-description"], [1, "item-details"], ["size", "12", 1, "no-product-text"]], template: function ProductDetailPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1);
            i0.ɵɵelement(3, "ion-back-button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ion-title");
            i0.ɵɵtext(5, " Products ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ProductDetailPage_ion_progress_bar_6_Template, 1, 0, "ion-progress-bar", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "ion-content")(8, "ion-grid", 4);
            i0.ɵɵtemplate(9, ProductDetailPage_ion_row_9_Template, 15, 8, "ion-row", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(10, ProductDetailPage_ng_template_10_Template, 3, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const noProduct_r2 = i0.ɵɵreference(11);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("rxIf", ctx.isLoading$);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("fixed", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rxIf", ctx.product$)("rxIfElse", noProduct_r2);
        } }, dependencies: [IonHeader,
            IonToolbar,
            IonTitle,
            IonProgressBar,
            IonContent,
            IonGrid,
            IonRow,
            IonCol,
            IonButtons,
            IonBackButton,
            NgOptimizedImage,
            RxIf,
            CurrencyPipe], styles: ["[_nghost-%COMP%]{display:block}.image-container[_ngcontent-%COMP%]{text-align:center}.product-image[_ngcontent-%COMP%]{object-fit:contain}.item-details[_ngcontent-%COMP%]{margin-bottom:.5em}.no-product-text[_ngcontent-%COMP%]{text-align:center}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailPage, [{
        type: Component,
        args: [{ selector: 'pc-product-detail', standalone: true, imports: [
                    IonHeader,
                    IonToolbar,
                    IonTitle,
                    IonProgressBar,
                    IonContent,
                    IonGrid,
                    IonRow,
                    IonCol,
                    IonButtons,
                    IonBackButton,
                    NgOptimizedImage,
                    RxLet,
                    RxIf,
                    CurrencyPipe,
                ], changeDetection: ChangeDetectionStrategy.OnPush, viewProviders: [ProductDetailStateService], template: "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        icon=\"caret-back\"\n        defaultHref=\"/products\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title> Products </ion-title>\n    <ion-progress-bar\n      *rxIf=\"isLoading$\"\n      type=\"indeterminate\"\n    ></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid [fixed]=\"true\">\n    <ion-row *rxIf=\"product$; let product; else noProduct\">\n      <ion-col size-md=\"6\" size=\"12\" class=\"image-container\">\n        <img\n          class=\"product-image\"\n          [ngSrc]=\"product.imageUrl\"\n          width=\"300\"\n          height=\"300\"\n          priority\n      /></ion-col>\n      <ion-col size-md=\"6\" size=\"12\">\n        <h2 class=\"product-name\">{{product.name}}</h2>\n        <dl>\n          <dt>Price</dt>\n          <dd class=\"product-price item-details product-price\">\n            {{product.price | currency: 'PHP'}}\n          </dd>\n          @if(product.discount > 0){\n          <dt>Discounted Price</dt>\n          <dd class=\"item-details\">\n            {{product.discountedPrice | currency: 'PHP'}}\n          </dd>\n          <dt>Discount</dt>\n          <dd class=\"item-details\">{{product.discount}}%</dd>\n          }\n        </dl>\n        <p class=\"product-description\">{{product.description}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- Template if Product is not Found-->\n<ng-template #noProduct>\n  <ion-row>\n    <ion-col size=\"12\" class=\"no-product-text\">No Product Found</ion-col>\n  </ion-row>\n</ng-template>\n", styles: [":host{display:block}.image-container{text-align:center}.product-image{object-fit:contain}.item-details{margin-bottom:.5em}.no-product-text{text-align:center}\n"] }]
    }], () => [], { id: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductDetailPage, { className: "ProductDetailPage", filePath: "lib\\product-detail.page.ts", lineNumber: 55 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdC9mZWF0dXJlLXByb2R1Y3QtZGV0YWlsL3NyYy9saWIvcHJvZHVjdC1kZXRhaWwucGFnZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdC9mZWF0dXJlLXByb2R1Y3QtZGV0YWlsL3NyYy9saWIvcHJvZHVjdC1kZXRhaWwucGFnZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLGVBQWUsR0FFaEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGFBQWEsRUFDYixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsU0FBUyxFQUNULGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztJQ25CdkUsc0NBR29COzs7SUF1QmQsMEJBQUk7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBSztJQUN6Qiw4QkFBeUI7SUFDdkIsWUFDRjs7SUFBQSxpQkFBSztJQUNMLDBCQUFJO0lBQUEsd0JBQVE7SUFBQSxpQkFBSztJQUNqQiw4QkFBeUI7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFIakQsZUFDRjtJQURFLHdGQUNGO0lBRXlCLGVBQXFCO0lBQXJCLG1EQUFxQjs7O0lBckJsRCxBQURGLCtCQUF1RCxpQkFDRTtJQUNyRCx5QkFNQTtJQUFBLGlCQUFVO0lBRVYsQUFERixrQ0FBK0IsYUFDSjtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFFNUMsQUFERiwwQkFBSSxTQUNFO0lBQUEscUJBQUs7SUFBQSxpQkFBSztJQUNkLDhCQUFxRDtJQUNuRCxhQUNGOztJQUFBLGlCQUFLO0lBQ0wsNEVBQTBCO0lBUTVCLGlCQUFLO0lBQ0wsOEJBQStCO0lBQUEsYUFBdUI7SUFFMUQsQUFERSxBQUR3RCxpQkFBSSxFQUNsRCxFQUNGOzs7SUF2QkosZUFBMEI7SUFBMUIsMkNBQTBCO0lBTUgsZUFBZ0I7SUFBaEIscUNBQWdCO0lBSXJDLGVBQ0Y7SUFERSwrRUFDRjtJQUNBLGVBT0M7SUFQRCxtREFPQztJQUU0QixlQUF1QjtJQUF2Qiw0Q0FBdUI7OztJQVMxRCxBQURGLCtCQUFTLGtCQUNvQztJQUFBLGdDQUFnQjtJQUM3RCxBQUQ2RCxpQkFBVSxFQUM3RDs7QURDWixNQUFNLE9BQU8saUJBQWlCO0lBUzVCO1FBUmlCLGtCQUFhLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixFQUFFO1lBQ2pFLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsYUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLGVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNKLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHN0MsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7a0ZBZlUsaUJBQWlCO29FQUFqQixpQkFBaUIsb0VBT1IsZUFBZSw0REFUcEIsQ0FBQyx5QkFBeUIsQ0FBQztZQ2xEeEMsQUFERixBQURGLGtDQUFZLGtCQUNHLHFCQUNlO1lBQ3hCLHFDQUdtQjtZQUNyQixpQkFBYztZQUNkLGlDQUFXO1lBQUMsMEJBQVM7WUFBQSxpQkFBWTtZQUNqQyw0RkFHQztZQUVMLEFBREUsaUJBQWMsRUFDSDtZQUdYLEFBREYsbUNBQWEsa0JBQ2M7WUFDdkIsMkVBQXVEO1lBNkIzRCxBQURFLGlCQUFXLEVBQ0M7WUFHZCxxSEFBd0I7OztZQXhDakIsZUFBZ0I7WUFBaEIscUNBQWdCO1lBT1gsZUFBYztZQUFkLDRCQUFjO1lBQ1osY0FBZ0I7WUFBYSxBQUE3QixtQ0FBZ0IsMEJBQTJCOzRCRGdCckQsU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsY0FBYztZQUNkLFVBQVU7WUFDVixPQUFPO1lBQ1AsTUFBTTtZQUNOLE1BQU07WUFDTixVQUFVO1lBQ1YsYUFBYTtZQUNiLGdCQUFnQjtZQUVoQixJQUFJO1lBQ0osWUFBWTs7aUZBT0gsaUJBQWlCO2NBeEI3QixTQUFTOzJCQUNFLG1CQUFtQixjQUNqQixJQUFJLFdBQ1A7b0JBQ1AsU0FBUztvQkFDVCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxVQUFVO29CQUNWLE9BQU87b0JBQ1AsTUFBTTtvQkFDTixNQUFNO29CQUNOLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSixZQUFZO2lCQUNiLG1CQUdnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxDQUFDLHlCQUF5QixDQUFDO29CQVNILEVBQUU7a0JBQXhDLEtBQUs7bUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFOztrRkFQMUIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlLCBOZ09wdGltaXplZEltYWdlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIGluamVjdCxcbiAgSW5wdXQsXG4gIG51bWJlckF0dHJpYnV0ZSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgSW9uQmFja0J1dHRvbixcbiAgSW9uQnV0dG9ucyxcbiAgSW9uQ29sLFxuICBJb25Db250ZW50LFxuICBJb25HcmlkLFxuICBJb25IZWFkZXIsXG4gIElvblByb2dyZXNzQmFyLFxuICBJb25Sb3csXG4gIElvblRpdGxlLFxuICBJb25Ub29sYmFyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcblxuaW1wb3J0IHsgUnhJZiB9IGZyb20gJ0ByeC1hbmd1bGFyL3RlbXBsYXRlL2lmJztcbmltcG9ydCB7IFJ4TGV0IH0gZnJvbSAnQHJ4LWFuZ3VsYXIvdGVtcGxhdGUvbGV0JztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuaW1wb3J0IHsgY2FyZXRCYWNrIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuXG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbC1zdGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGMtcHJvZHVjdC1kZXRhaWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uSGVhZGVyLFxuICAgIElvblRvb2xiYXIsXG4gICAgSW9uVGl0bGUsXG4gICAgSW9uUHJvZ3Jlc3NCYXIsXG4gICAgSW9uQ29udGVudCxcbiAgICBJb25HcmlkLFxuICAgIElvblJvdyxcbiAgICBJb25Db2wsXG4gICAgSW9uQnV0dG9ucyxcbiAgICBJb25CYWNrQnV0dG9uLFxuICAgIE5nT3B0aW1pemVkSW1hZ2UsXG4gICAgUnhMZXQsXG4gICAgUnhJZixcbiAgICBDdXJyZW5jeVBpcGUsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybDogJy4vcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHZpZXdQcm92aWRlcnM6IFtQcm9kdWN0RGV0YWlsU3RhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0ZVNlcnZpY2UgPSBpbmplY3QoUHJvZHVjdERldGFpbFN0YXRlU2VydmljZSwge1xuICAgIHNlbGY6IHRydWUsXG4gIH0pO1xuXG4gIHByb2R1Y3QkID0gdGhpcy5fc3RhdGVTZXJ2aWNlLnByb2R1Y3QkO1xuICBpc0xvYWRpbmckID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmlzTG9hZGluZyQ7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGlkID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyBjYXJldEJhY2sgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgfVxufVxuIiwiPGlvbi1oZWFkZXI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLWJhY2stYnV0dG9uXG4gICAgICAgIGljb249XCJjYXJldC1iYWNrXCJcbiAgICAgICAgZGVmYXVsdEhyZWY9XCIvcHJvZHVjdHNcIlxuICAgICAgPjwvaW9uLWJhY2stYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT4gUHJvZHVjdHMgPC9pb24tdGl0bGU+XG4gICAgPGlvbi1wcm9ncmVzcy1iYXJcbiAgICAgICpyeElmPVwiaXNMb2FkaW5nJFwiXG4gICAgICB0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgPjwvaW9uLXByb2dyZXNzLWJhcj5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50PlxuICA8aW9uLWdyaWQgW2ZpeGVkXT1cInRydWVcIj5cbiAgICA8aW9uLXJvdyAqcnhJZj1cInByb2R1Y3QkOyBsZXQgcHJvZHVjdDsgZWxzZSBub1Byb2R1Y3RcIj5cbiAgICAgIDxpb24tY29sIHNpemUtbWQ9XCI2XCIgc2l6ZT1cIjEyXCIgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiXG4gICAgICAgICAgW25nU3JjXT1cInByb2R1Y3QuaW1hZ2VVcmxcIlxuICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAvPjwvaW9uLWNvbD5cbiAgICAgIDxpb24tY29sIHNpemUtbWQ9XCI2XCIgc2l6ZT1cIjEyXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPnt7cHJvZHVjdC5uYW1lfX08L2gyPlxuICAgICAgICA8ZGw+XG4gICAgICAgICAgPGR0PlByaWNlPC9kdD5cbiAgICAgICAgICA8ZGQgY2xhc3M9XCJwcm9kdWN0LXByaWNlIGl0ZW0tZGV0YWlscyBwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeTogJ1BIUCd9fVxuICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgQGlmKHByb2R1Y3QuZGlzY291bnQgPiAwKXtcbiAgICAgICAgICA8ZHQ+RGlzY291bnRlZCBQcmljZTwvZHQ+XG4gICAgICAgICAgPGRkIGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+XG4gICAgICAgICAgICB7e3Byb2R1Y3QuZGlzY291bnRlZFByaWNlIHwgY3VycmVuY3k6ICdQSFAnfX1cbiAgICAgICAgICA8L2RkPlxuICAgICAgICAgIDxkdD5EaXNjb3VudDwvZHQ+XG4gICAgICAgICAgPGRkIGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+e3twcm9kdWN0LmRpc2NvdW50fX0lPC9kZD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGw+XG4gICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPnt7cHJvZHVjdC5kZXNjcmlwdGlvbn19PC9wPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tZ3JpZD5cbjwvaW9uLWNvbnRlbnQ+XG5cbjwhLS0gVGVtcGxhdGUgaWYgUHJvZHVjdCBpcyBub3QgRm91bmQtLT5cbjxuZy10ZW1wbGF0ZSAjbm9Qcm9kdWN0PlxuICA8aW9uLXJvdz5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cIm5vLXByb2R1Y3QtdGV4dFwiPk5vIFByb2R1Y3QgRm91bmQ8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvbmctdGVtcGxhdGU+XG4iXX0=