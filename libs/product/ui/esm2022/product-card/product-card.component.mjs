import { CurrencyPipe, NgOptimizedImage, SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonSkeletonText, } from '@ionic/angular/standalone';
import * as i0 from "@angular/core";
function ProductCardComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-card-subtitle", 4)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 7);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 3, ctx_r1.product.discountedPrice, "PHP"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 6, ctx_r1.product.price, "PHP"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("(", ctx_r1.product.discount, "% off)");
} }
function ProductCardComponent_Conditional_0_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-card-subtitle", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r1.product.price, "PHP"), " ");
} }
function ProductCardComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-card", 0)(1, "div", 1)(2, "img", 2);
    i0.ɵɵlistener("error", function ProductCardComponent_Conditional_0_Template_img_error_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.product.imageUrl = "assets/image/placeholder.png"); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "ion-card-header")(4, "ion-card-title", 3);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ProductCardComponent_Conditional_0_Conditional_6_Template, 9, 9, "ion-card-subtitle", 4)(7, ProductCardComponent_Conditional_0_Conditional_7_Template, 3, 4, "ion-card-subtitle", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ion-card-content", 5);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSrc", ctx_r1.product.imageUrl)("priority", ctx_r1.isPriority);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.product.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.product.discount > 0 ? 6 : 7);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(10, 5, ctx_r1.product.description, 0, 50), "... ");
} }
function ProductCardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-card", 0)(1, "div", 1);
    i0.ɵɵelement(2, "img", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-card-header")(4, "ion-card-title", 3);
    i0.ɵɵelement(5, "ion-skeleton-text", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ion-card-subtitle", 4);
    i0.ɵɵelement(7, "ion-skeleton-text", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "ion-card-content", 5);
    i0.ɵɵelement(9, "ion-skeleton-text", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
} }
export class ProductCardComponent {
    constructor() {
        this.product = null;
        /**
         * Set image priority.
         * If image is above the fold (set to true roughly when the product card is one of the top 5 cards loaded)
         */
        this.isPriority = false;
    }
    static { this.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductCardComponent, selectors: [["pc-product-card"]], inputs: { product: "product", isPriority: "isPriority" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[1, "product-card"], [1, "image-container"], ["fill", "", 1, "product-image", 3, "error", "ngSrc", "priority"], [1, "product-name"], [1, "product-price"], [1, "product-description"], [1, "discounted"], [1, "original"], [1, "discount"], ["ngSrc", "assets/image/placeholder.png", "fill", "", "priority", "", 1, "product-image"], [2, "width", "60%", 3, "animated"], [2, "width", "40%", 3, "animated"], [2, "width", "80%", 3, "animated"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProductCardComponent_Conditional_0_Template, 11, 9, "ion-card", 0)(1, ProductCardComponent_Conditional_1_Template, 10, 3, "ion-card", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.product !== null ? 0 : 1);
        } }, dependencies: [IonCard,
            IonCardHeader,
            IonCardTitle,
            IonCardSubtitle,
            IonCardContent,
            NgOptimizedImage,
            CurrencyPipe,
            SlicePipe,
            // For loading
            IonSkeletonText], styles: ["[_nghost-%COMP%]{display:block;width:100%}.product-card[_ngcontent-%COMP%]{display:grid}.image-container[_ngcontent-%COMP%]{position:relative;height:150px;width:100%}.product-image[_ngcontent-%COMP%]{height:150px;object-fit:cover}.product-price[_ngcontent-%COMP%]{display:flex;gap:.5em;align-items:center;font-size:.8rem}.product-price[_ngcontent-%COMP%] > .original[_ngcontent-%COMP%]{text-decoration:line-through}.product-price[_ngcontent-%COMP%] > .discount[_ngcontent-%COMP%]{font-size:.6rem}@media (width > 768px){.product-card[_ngcontent-%COMP%]{grid-template:auto auto/auto 1fr}.product-card[_ngcontent-%COMP%] > .image-container[_ngcontent-%COMP%]{width:300px;grid-row:1/-1}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductCardComponent, [{
        type: Component,
        args: [{ selector: 'pc-product-card', standalone: true, imports: [
                    IonCard,
                    IonCardHeader,
                    IonCardTitle,
                    IonCardSubtitle,
                    IonCardContent,
                    IonItem,
                    NgOptimizedImage,
                    CurrencyPipe,
                    SlicePipe,
                    // For loading
                    IonSkeletonText,
                ], template: "@if(product !== null) {\n<ion-card class=\"product-card\">\n  <div class=\"image-container\">\n    <img\n      class=\"product-image\"\n      [ngSrc]=\"product.imageUrl\"\n      fill\n      [priority]=\"isPriority\"\n      (error)=\"product.imageUrl = 'assets/image/placeholder.png'\"\n    />\n  </div>\n  <ion-card-header>\n    <ion-card-title class=\"product-name\">{{ product.name }}</ion-card-title>\n    @if (product.discount > 0) {\n    <ion-card-subtitle class=\"product-price\">\n      <span class=\"discounted\">{{\n        product.discountedPrice | currency : 'PHP'\n      }}</span>\n      <span class=\"original\">{{ product.price | currency : 'PHP' }}</span>\n      <span class=\"discount\">({{ product.discount }}% off)</span>\n    </ion-card-subtitle>\n    } @else {\n    <ion-card-subtitle class=\"product-price\">\n      {{ product.price | currency : 'PHP' }}\n    </ion-card-subtitle>\n    }\n  </ion-card-header>\n\n  <ion-card-content class=\"product-description\">\n    {{ product.description | slice : 0 : 50 }}...\n  </ion-card-content>\n</ion-card>\n\n} @else {\n<ion-card class=\"product-card\">\n  <div class=\"image-container\">\n    <img\n      class=\"product-image\"\n      ngSrc=\"assets/image/placeholder.png\"\n      fill\n      priority\n    />\n  </div>\n  <ion-card-header>\n    <ion-card-title class=\"product-name\"\n      ><ion-skeleton-text\n        [animated]=\"true\"\n        style=\"width: 60%\"\n      ></ion-skeleton-text\n    ></ion-card-title>\n    <ion-card-subtitle class=\"product-price\"\n      ><ion-skeleton-text\n        [animated]=\"true\"\n        style=\"width: 40%\"\n      ></ion-skeleton-text\n    ></ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content class=\"product-description\">\n    <ion-skeleton-text [animated]=\"true\" style=\"width: 80%\"></ion-skeleton-text>\n  </ion-card-content>\n</ion-card>\n}\n", styles: [":host{display:block;width:100%}.product-card{display:grid}.image-container{position:relative;height:150px;width:100%}.product-image{height:150px;object-fit:cover}.product-price{display:flex;gap:.5em;align-items:center;font-size:.8rem}.product-price>.original{text-decoration:line-through}.product-price>.discount{font-size:.6rem}@media (width > 768px){.product-card{grid-template:auto auto/auto 1fr}.product-card>.image-container{width:300px;grid-row:1/-1}}\n"] }]
    }], null, { product: [{
            type: Input,
            args: [{ required: true }]
        }], isPriority: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "product-card.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdC91aS9wcm9kdWN0LWNhcmQvc3JjL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3QvdWkvcHJvZHVjdC1jYXJkL3NyYy9wcm9kdWN0LWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQ0wsT0FBTyxFQUNQLGNBQWMsRUFDZCxhQUFhLEVBQ2IsZUFBZSxFQUNmLFlBQVksRUFDWixPQUFPLEVBQ1AsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDOzs7SUNJN0IsQUFERiw0Q0FBeUMsY0FDZDtJQUFBLFlBRXZCOztJQUFBLGlCQUFPO0lBQ1QsK0JBQXVCO0lBQUEsWUFBc0M7O0lBQUEsaUJBQU87SUFDcEUsK0JBQXVCO0lBQUEsWUFBNkI7SUFDdEQsQUFEc0QsaUJBQU8sRUFDekM7OztJQUxPLGVBRXZCO0lBRnVCLGlGQUV2QjtJQUNxQixlQUFzQztJQUF0Qyx1RUFBc0M7SUFDdEMsZUFBNkI7SUFBN0IsNkRBQTZCOzs7SUFHdEQsNENBQXlDO0lBQ3ZDLFlBQ0Y7O0lBQUEsaUJBQW9COzs7SUFEbEIsY0FDRjtJQURFLGtGQUNGOzs7O0lBckJBLEFBREYsQUFERixtQ0FBK0IsYUFDQSxhQU96QjtJQURBLCtNQUE0Qiw4QkFBOEIsS0FBQztJQUUvRCxBQVBFLGlCQU1FLEVBQ0U7SUFFSixBQURGLHVDQUFpQix3QkFDc0I7SUFBQSxZQUFrQjtJQUFBLGlCQUFpQjtJQVN0RSxBQVJGLHlHQUE0Qiw0RkFRbkI7SUFLWCxpQkFBa0I7SUFFbEIsMkNBQThDO0lBQzVDLFlBQ0Y7O0lBQ0YsQUFERSxpQkFBbUIsRUFDVjs7O0lBMUJMLGVBQTBCO0lBRTFCLEFBRkEsK0NBQTBCLCtCQUVIO0lBS1ksZUFBa0I7SUFBbEIseUNBQWtCO0lBQ3ZELGNBWUM7SUFaRCxxREFZQztJQUlELGVBQ0Y7SUFERSw0RkFDRjs7O0lBS0EsQUFERixtQ0FBK0IsYUFDQTtJQUMzQix5QkFLRTtJQUNKLGlCQUFNO0lBRUosQUFERix1Q0FBaUIsd0JBRVo7SUFBQSx3Q0FJRjtJQUFBLGlCQUFpQjtJQUNsQiw0Q0FDRztJQUFBLHdDQUlGO0lBQ0gsQUFERyxpQkFBb0IsRUFDTDtJQUVsQiwyQ0FBOEM7SUFDNUMsd0NBQTRFO0lBRWhGLEFBREUsaUJBQW1CLEVBQ1Y7O0lBZkgsZUFBaUI7SUFBakIsK0JBQWlCO0lBTWpCLGVBQWlCO0lBQWpCLCtCQUFpQjtJQU9GLGVBQWlCO0lBQWpCLCtCQUFpQjs7QUR4QnhDLE1BQU0sT0FBTyxvQkFBb0I7SUFwQmpDO1FBcUI2QixZQUFPLEdBQTBCLElBQUksQ0FBQztRQUVqRTs7O1dBR0c7UUFDTSxlQUFVLEdBQUcsS0FBSyxDQUFDO0tBQzdCO3FGQVJZLG9CQUFvQjtvRUFBcEIsb0JBQW9CO1lDRi9CLEFBakNGLG1GQUF1QixzRUFpQ2Q7O1lBakNULDhDQThEQzs0QkQzQ0csT0FBTztZQUNQLGFBQWE7WUFDYixZQUFZO1lBQ1osZUFBZTtZQUNmLGNBQWM7WUFFZCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFNBQVM7WUFFVCxjQUFjO1lBQ2QsZUFBZTs7aUZBS04sb0JBQW9CO2NBcEJoQyxTQUFTOzJCQUNFLGlCQUFpQixjQUNmLElBQUksV0FDUDtvQkFDUCxPQUFPO29CQUNQLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsT0FBTztvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osU0FBUztvQkFFVCxjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2dCQUswQixPQUFPO2tCQUFqQyxLQUFLO21CQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQU1oQixVQUFVO2tCQUFsQixLQUFLOztrRkFQSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJyZW5jeVBpcGUsIE5nT3B0aW1pemVkSW1hZ2UsIFNsaWNlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIElvbkNhcmQsXG4gIElvbkNhcmRDb250ZW50LFxuICBJb25DYXJkSGVhZGVyLFxuICBJb25DYXJkU3VidGl0bGUsXG4gIElvbkNhcmRUaXRsZSxcbiAgSW9uSXRlbSxcbiAgSW9uU2tlbGV0b25UZXh0LFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcblxuaW1wb3J0IHR5cGUgeyBQcm9kdWN0RGlzcGxheSB9IGZyb20gJ0Bwcm9kdWN0L3NoYXJlZC1kdG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYy1wcm9kdWN0LWNhcmQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ2FyZCxcbiAgICBJb25DYXJkSGVhZGVyLFxuICAgIElvbkNhcmRUaXRsZSxcbiAgICBJb25DYXJkU3VidGl0bGUsXG4gICAgSW9uQ2FyZENvbnRlbnQsXG4gICAgSW9uSXRlbSxcbiAgICBOZ09wdGltaXplZEltYWdlLFxuICAgIEN1cnJlbmN5UGlwZSxcbiAgICBTbGljZVBpcGUsXG5cbiAgICAvLyBGb3IgbG9hZGluZ1xuICAgIElvblNrZWxldG9uVGV4dCxcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIHByb2R1Y3Q6IFByb2R1Y3REaXNwbGF5IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFNldCBpbWFnZSBwcmlvcml0eS5cbiAgICogSWYgaW1hZ2UgaXMgYWJvdmUgdGhlIGZvbGQgKHNldCB0byB0cnVlIHJvdWdobHkgd2hlbiB0aGUgcHJvZHVjdCBjYXJkIGlzIG9uZSBvZiB0aGUgdG9wIDUgY2FyZHMgbG9hZGVkKVxuICAgKi9cbiAgQElucHV0KCkgaXNQcmlvcml0eSA9IGZhbHNlO1xufVxuIiwiQGlmKHByb2R1Y3QgIT09IG51bGwpIHtcbjxpb24tY2FyZCBjbGFzcz1cInByb2R1Y3QtY2FyZFwiPlxuICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCJcbiAgICAgIFtuZ1NyY109XCJwcm9kdWN0LmltYWdlVXJsXCJcbiAgICAgIGZpbGxcbiAgICAgIFtwcmlvcml0eV09XCJpc1ByaW9yaXR5XCJcbiAgICAgIChlcnJvcik9XCJwcm9kdWN0LmltYWdlVXJsID0gJ2Fzc2V0cy9pbWFnZS9wbGFjZWhvbGRlci5wbmcnXCJcbiAgICAvPlxuICA8L2Rpdj5cbiAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICA8aW9uLWNhcmQtdGl0bGUgY2xhc3M9XCJwcm9kdWN0LW5hbWVcIj57eyBwcm9kdWN0Lm5hbWUgfX08L2lvbi1jYXJkLXRpdGxlPlxuICAgIEBpZiAocHJvZHVjdC5kaXNjb3VudCA+IDApIHtcbiAgICA8aW9uLWNhcmQtc3VidGl0bGUgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImRpc2NvdW50ZWRcIj57e1xuICAgICAgICBwcm9kdWN0LmRpc2NvdW50ZWRQcmljZSB8IGN1cnJlbmN5IDogJ1BIUCdcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJvcmlnaW5hbFwiPnt7IHByb2R1Y3QucHJpY2UgfCBjdXJyZW5jeSA6ICdQSFAnIH19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkaXNjb3VudFwiPih7eyBwcm9kdWN0LmRpc2NvdW50IH19JSBvZmYpPC9zcGFuPlxuICAgIDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgfSBAZWxzZSB7XG4gICAgPGlvbi1jYXJkLXN1YnRpdGxlIGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAge3sgcHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5IDogJ1BIUCcgfX1cbiAgICA8L2lvbi1jYXJkLXN1YnRpdGxlPlxuICAgIH1cbiAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgPGlvbi1jYXJkLWNvbnRlbnQgY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAge3sgcHJvZHVjdC5kZXNjcmlwdGlvbiB8IHNsaWNlIDogMCA6IDUwIH19Li4uXG4gIDwvaW9uLWNhcmQtY29udGVudD5cbjwvaW9uLWNhcmQ+XG5cbn0gQGVsc2Uge1xuPGlvbi1jYXJkIGNsYXNzPVwicHJvZHVjdC1jYXJkXCI+XG4gIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICA8aW1nXG4gICAgICBjbGFzcz1cInByb2R1Y3QtaW1hZ2VcIlxuICAgICAgbmdTcmM9XCJhc3NldHMvaW1hZ2UvcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgIGZpbGxcbiAgICAgIHByaW9yaXR5XG4gICAgLz5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgPGlvbi1jYXJkLXRpdGxlIGNsYXNzPVwicHJvZHVjdC1uYW1lXCJcbiAgICAgID48aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHRcbiAgICA+PC9pb24tY2FyZC10aXRsZT5cbiAgICA8aW9uLWNhcmQtc3VidGl0bGUgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCJcbiAgICAgID48aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiA0MCVcIlxuICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHRcbiAgICA+PC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgPGlvbi1jYXJkLWNvbnRlbnQgY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgPGlvbi1za2VsZXRvbi10ZXh0IFthbmltYXRlZF09XCJ0cnVlXCIgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgPC9pb24tY2FyZC1jb250ZW50PlxuPC9pb24tY2FyZD5cbn1cbiJdfQ==