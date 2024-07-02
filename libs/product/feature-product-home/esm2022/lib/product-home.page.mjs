import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonProgressBar, IonRefresher, IonRefresherContent, IonSearchbar, IonText, IonTitle, IonToast, IonToolbar, } from '@ionic/angular/standalone';
import { RxFor } from '@rx-angular/template/for';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';
import { RxPush } from '@rx-angular/template/push';
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline } from 'ionicons/icons';
import { ProductCardComponent } from '@product/product-ui/product-card';
import { ProductHomeStateService } from './product-home-state.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
const _c0 = a0 => ["/products", a0];
const _c1 = () => [1, 2];
function ProductHomePage_ion_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-progress-bar", 6);
} }
function ProductHomePage_ion_content_7_Case_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ProductHomePage_ion_content_7_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProductHomePage_ion_content_7_Case_1_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const loading_r2 = i0.ɵɵreference(11);
    i0.ɵɵproperty("ngTemplateOutlet", loading_r2);
} }
function ProductHomePage_ion_content_7_Case_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ProductHomePage_ion_content_7_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProductHomePage_ion_content_7_Case_2_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const error_r3 = i0.ɵɵreference(13);
    i0.ɵɵproperty("ngTemplateOutlet", error_r3);
} }
function ProductHomePage_ion_content_7_Case_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ProductHomePage_ion_content_7_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProductHomePage_ion_content_7_Case_3_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const products_r4 = i0.ɵɵreference(9);
    i0.ɵɵproperty("ngTemplateOutlet", products_r4);
} }
function ProductHomePage_ion_content_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-content");
    i0.ɵɵtemplate(1, ProductHomePage_ion_content_7_Case_1_Template, 1, 1, "ng-container")(2, ProductHomePage_ion_content_7_Case_2_Template, 1, 1, "ng-container")(3, ProductHomePage_ion_content_7_Case_3_Template, 1, 1, "ng-container");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    const action_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_5_0 = action_r5) === "pending" ? 1 : tmp_5_0 === "error" ? 2 : tmp_5_0 === "done" ? 3 : -1);
} }
function ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 14);
} }
function ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 15);
} }
function ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 14);
} }
function ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 15);
} }
function ProductHomePage_ng_template_8_ion_buttons_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-buttons")(1, "ion-button", 11);
    i0.ɵɵlistener("click", function ProductHomePage_ng_template_8_ion_buttons_1_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.sortBy("name")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-button", 11);
    i0.ɵɵlistener("click", function ProductHomePage_ng_template_8_ion_buttons_1_Template_ion_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.sortBy("price")); });
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_6_Template, 1, 0, "ion-icon", 12)(7, ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_7_Template, 1, 0, "ion-icon", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ion-button", 11);
    i0.ɵɵlistener("click", function ProductHomePage_ng_template_8_ion_buttons_1_Template_ion_button_click_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.sortBy("discounted")); });
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Discounted");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_11_Template, 1, 0, "ion-icon", 12)(12, ProductHomePage_ng_template_8_ion_buttons_1_ion_icon_12_Template, 1, 0, "ion-icon", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sortProduct_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("fill", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "name" ? "solid" : "outline");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "name" && (sortProduct_r8 == null ? null : sortProduct_r8.sort) === "descending" ? "Z-A" : "A-Z", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("fill", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "price" ? "solid" : "outline");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("rxIf", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "price" && (sortProduct_r8 == null ? null : sortProduct_r8.sort) === "ascending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("rxIf", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "price" && (sortProduct_r8 == null ? null : sortProduct_r8.sort) === "descending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("fill", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "discounted" ? "solid" : "outline");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("rxIf", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "discounted" && (sortProduct_r8 == null ? null : sortProduct_r8.sort) === "ascending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("rxIf", (sortProduct_r8 == null ? null : sortProduct_r8.by) === "discounted" && (sortProduct_r8 == null ? null : sortProduct_r8.sort) === "descending");
} }
function ProductHomePage_ng_template_8_ion_list_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item", 17);
    i0.ɵɵelement(1, "pc-product-card", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ɵ$index_76_r10 = ctx.$index;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, product_r9.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("product", product_r9)("isPriority", ɵ$index_76_r10 < 5);
} }
function ProductHomePage_ng_template_8_ion_list_2_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item", 18);
    i0.ɵɵtext(1, "No Products Found");
    i0.ɵɵelementEnd();
} }
function ProductHomePage_ng_template_8_ion_list_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-list", 16);
    i0.ɵɵrepeaterCreate(1, ProductHomePage_ng_template_8_ion_list_2_For_2_Template, 2, 5, "ion-item", 17, _forTrack0, false, ProductHomePage_ng_template_8_ion_list_2_ForEmpty_3_Template, 2, 0, "ion-item", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const products_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(products_r11);
} }
function ProductHomePage_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-toolbar", 8);
    i0.ɵɵtemplate(1, ProductHomePage_ng_template_8_ion_buttons_1_Template, 13, 8, "ion-buttons", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, ProductHomePage_ng_template_8_ion_list_2_Template, 4, 1, "ion-list", 9);
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵtext(4, "You have reached the end of the page");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("rxLet", ctx_r6.sortProduct$);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rxLet", ctx_r6.product$);
} }
function ProductHomePage_ng_template_10_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item");
    i0.ɵɵelement(1, "pc-product-card", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("product", null);
} }
function ProductHomePage_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-list");
    i0.ɵɵrepeaterCreate(1, ProductHomePage_ng_template_10_For_2_Template, 2, 1, "ion-item", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c1));
} }
function ProductHomePage_ng_template_12_ion_text_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-text")(1, "p", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const error_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(error_r12);
} }
function ProductHomePage_ng_template_12_ion_toast_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-toast", 23);
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    i0.ɵɵproperty("isOpen", !!error_r13)("message", error_r13)("duration", 5000);
} }
function ProductHomePage_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProductHomePage_ng_template_12_ion_text_0_Template, 3, 1, "ion-text", 5)(1, ProductHomePage_ng_template_12_ion_toast_1_Template, 1, 3, "ion-toast", 21);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("rxLet", ctx_r6.error$);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rxLet", ctx_r6.error$);
} }
export class ProductHomePage {
    constructor() {
        this.stateService = inject(ProductHomeStateService, { self: true });
        this.product$ = this.stateService.product$;
        this.isLoading$ = this.stateService.isLoading$;
        this.error$ = this.stateService.error$;
        this.action$ = this.stateService.action$;
        this.sortProduct$ = this.stateService.sort$;
        /**
         * Seach input debounce time
         * Using the value as debounce time by approximating average human reaction
         * @see {@link https://humanbenchmark.com/tests/reactiontime/statistics|Human Reaction Statistics}
         */
        this.debounceTime = 300;
        addIcons({ arrowUpOutline, arrowDownOutline });
    }
    ngOnInit() {
        this.stateService.loadProducts();
    }
    searchProduct(event) {
        const searchText = event.detail.value;
        if (searchText) {
            this.stateService.searchProduct(searchText);
        }
    }
    resetSearch() {
        this.stateService.searchProduct(null);
    }
    sortBy(sortBy) {
        this.stateService.sortBy(sortBy);
    }
    static { this.ɵfac = function ProductHomePage_Factory(t) { return new (t || ProductHomePage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductHomePage, selectors: [["pc-product-home"]], standalone: true, features: [i0.ɵɵProvidersFeature([], [ProductHomeStateService]), i0.ɵɵStandaloneFeature], decls: 14, vars: 3, consts: [["products", ""], ["loading", ""], ["error", ""], [3, "ionInput", "ionClear", "debounce"], ["type", "indeterminate", 4, "rxIf"], [4, "rxLet"], ["type", "indeterminate"], [4, "ngTemplateOutlet"], [1, "sort-toolbar"], ["class", "product-list", 4, "rxLet"], [1, "end-text"], [3, "click", "fill"], ["name", "arrow-up-outline", "aria-label", "Ascending", 4, "rxIf"], ["name", "arrow-down-outline", "aria-label", "Ascending", 4, "rxIf"], ["name", "arrow-up-outline", "aria-label", "Ascending"], ["name", "arrow-down-outline", "aria-label", "Ascending"], [1, "product-list"], [3, "routerLink"], [1, "empty-text"], [3, "product", "isPriority"], [3, "product"], ["position", "top", "color", "danger", 3, "isOpen", "message", "duration", 4, "rxLet"], [1, "error-text"], ["position", "top", "color", "danger", 3, "isOpen", "message", "duration"]], template: function ProductHomePage_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
            i0.ɵɵtext(3, " Products ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "ion-toolbar")(5, "ion-searchbar", 3);
            i0.ɵɵlistener("ionInput", function ProductHomePage_Template_ion_searchbar_ionInput_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchProduct($event)); })("ionClear", function ProductHomePage_Template_ion_searchbar_ionClear_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.resetSearch()); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ProductHomePage_ion_progress_bar_6_Template, 1, 0, "ion-progress-bar", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, ProductHomePage_ion_content_7_Template, 4, 1, "ion-content", 5)(8, ProductHomePage_ng_template_8_Template, 5, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(10, ProductHomePage_ng_template_10_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(12, ProductHomePage_ng_template_12_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("debounce", ctx.debounceTime);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rxIf", ctx.isLoading$);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rxLet", ctx.action$);
        } }, dependencies: [IonContent,
            IonHeader,
            IonItem,
            IonList,
            IonSearchbar,
            IonTitle,
            IonToolbar,
            IonProgressBar,
            IonToast,
            IonText,
            IonButton,
            IonButtons,
            IonIcon,
            RxIf,
            RxLet,
            RouterLink,
            ProductCardComponent,
            NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}.error-text[_ngcontent-%COMP%]{margin:1em}.sort-toolbar[_ngcontent-%COMP%]{padding-inline:.5em}.end-text[_ngcontent-%COMP%]{text-align:center;margin:3em}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductHomePage, [{
        type: Component,
        args: [{ selector: 'pc-product-home', standalone: true, imports: [
                    IonContent,
                    IonHeader,
                    IonItem,
                    IonList,
                    IonRefresher,
                    IonRefresherContent,
                    IonSearchbar,
                    IonTitle,
                    IonToolbar,
                    IonProgressBar,
                    IonToast,
                    IonText,
                    IonButton,
                    IonButtons,
                    IonIcon,
                    RxFor,
                    RxIf,
                    RxLet,
                    RxPush,
                    RouterLink,
                    ProductCardComponent,
                    NgTemplateOutlet,
                ], viewProviders: [ProductHomeStateService], template: "<ion-header>\n  <ion-toolbar>\n    <ion-title> Products </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar\n      [debounce]=\"debounceTime\"\n      (ionInput)=\"searchProduct($event)\"\n      (ionClear)=\"resetSearch()\"\n    ></ion-searchbar>\n    <ion-progress-bar\n      *rxIf=\"isLoading$\"\n      type=\"indeterminate\"\n    ></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *rxLet=\"action$; let action\">\n  @switch (action) { @case('pending') {\n  <ng-container *ngTemplateOutlet=\"loading\"> </ng-container>\n  } @case('error') {\n  <ng-container *ngTemplateOutlet=\"error\"> </ng-container>\n  } @case('done') {\n  <ng-container *ngTemplateOutlet=\"products\"> </ng-container>\n  } }\n</ion-content>\n\n<!-- Template For Displaying Products -->\n<ng-template #products>\n  <ion-toolbar class=\"sort-toolbar\">\n    <ion-buttons *rxLet=\"sortProduct$; let sortProduct\">\n      <ion-button\n        [fill]=\"sortProduct?.by === 'name' ? 'solid' : 'outline'\"\n        (click)=\"sortBy('name')\"\n        >{{ sortProduct?.by === 'name' && sortProduct?.sort === 'descending' ?\n        'Z-A' : 'A-Z'}}\n      </ion-button>\n      <ion-button\n        [fill]=\"sortProduct?.by === 'price' ? 'solid' : 'outline'\"\n        (click)=\"sortBy('price')\"\n        ><span>Price</span>\n        <ion-icon\n          *rxIf=\"sortProduct?.by === 'price' && sortProduct?.sort === 'ascending'\"\n          name=\"arrow-up-outline\"\n          aria-label=\"Ascending\"\n        ></ion-icon\n        ><ion-icon\n          *rxIf=\"sortProduct?.by === 'price' && sortProduct?.sort === 'descending'\"\n          name=\"arrow-down-outline\"\n          aria-label=\"Ascending\"\n        ></ion-icon\n      ></ion-button>\n      <ion-button\n        [fill]=\"sortProduct?.by === 'discounted' ? 'solid' : 'outline'\"\n        (click)=\"sortBy('discounted')\"\n        ><span>Discounted</span>\n        <ion-icon\n          *rxIf=\"sortProduct?.by === 'discounted' && sortProduct?.sort === 'ascending'\"\n          name=\"arrow-up-outline\"\n          aria-label=\"Ascending\"\n        ></ion-icon\n        ><ion-icon\n          *rxIf=\"sortProduct?.by === 'discounted' && sortProduct?.sort === 'descending'\"\n          name=\"arrow-down-outline\"\n          aria-label=\"Ascending\"\n        ></ion-icon\n      ></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-list class=\"product-list\" *rxLet=\"product$; let products\">\n    @for(product of products; track product.id; let index = $index) {\n    <ion-item [routerLink]=\"['/products', product.id]\">\n      <pc-product-card\n        [product]=\"product\"\n        [isPriority]=\"index < 5\"\n      ></pc-product-card>\n    </ion-item>\n    } @empty {\n    <ion-item class=\"empty-text\">No Products Found</ion-item>\n    }\n  </ion-list>\n  <div class=\"end-text\">You have reached the end of the page</div>\n</ng-template>\n\n<!-- Template When Loading -->\n<ng-template #loading>\n  <ion-list>\n    @for(_ of [1,2]; track _;) {\n    <ion-item>\n      <pc-product-card [product]=\"null\"></pc-product-card>\n    </ion-item>\n    }\n  </ion-list>\n</ng-template>\n\n<!-- Template For Error -->\n<ng-template #error>\n  <ion-text *rxLet=\"error$; let error\"\n    ><p class=\"error-text\">{{error}}</p></ion-text\n  >\n  <ion-toast\n    *rxLet=\"error$; let error\"\n    [isOpen]=\"!!error\"\n    [message]=\"error\"\n    [duration]=\"5000\"\n    position=\"top\"\n    color=\"danger\"\n  ></ion-toast>\n</ng-template>\n", styles: [":host{display:block}.error-text{margin:1em}.sort-toolbar{padding-inline:.5em}.end-text{text-align:center;margin:3em}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductHomePage, { className: "ProductHomePage", filePath: "lib\\product-home.page.ts", lineNumber: 67 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ob21lLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3QvZmVhdHVyZS1wcm9kdWN0LWhvbWUvc3JjL2xpYi9wcm9kdWN0LWhvbWUucGFnZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdC9mZWF0dXJlLXByb2R1Y3QtaG9tZS9zcmMvbGliL3Byb2R1Y3QtaG9tZS5wYWdlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLE9BQU8sRUFDUCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFVBQVUsR0FFWCxNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztB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WUFNVCxjQUFnQjtZQUFoQixtQ0FBZ0I7NEJEd0IxQixVQUFVO1lBQ1YsU0FBUztZQUNULE9BQU87WUFDUCxPQUFPO1lBR1AsWUFBWTtZQUNaLFFBQVE7WUFDUixVQUFVO1lBQ1YsY0FBYztZQUNkLFFBQVE7WUFDUixPQUFPO1lBQ1AsU0FBUztZQUNULFVBQVU7WUFDVixPQUFPO1lBRVAsSUFBSTtZQUNKLEtBQUs7WUFFTCxVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLGdCQUFnQjs7aUZBSVAsZUFBZTtjQS9CM0IsU0FBUzsyQkFDRSxpQkFBaUIsY0FDZixJQUFJLFdBR1A7b0JBQ1AsVUFBVTtvQkFDVixTQUFTO29CQUNULE9BQU87b0JBQ1AsT0FBTztvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixRQUFRO29CQUNSLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxRQUFRO29CQUNSLE9BQU87b0JBQ1AsU0FBUztvQkFDVCxVQUFVO29CQUNWLE9BQU87b0JBQ1AsS0FBSztvQkFDTCxJQUFJO29CQUNKLEtBQUs7b0JBQ0wsTUFBTTtvQkFDTixVQUFVO29CQUNWLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO2lCQUNqQixpQkFDYyxDQUFDLHVCQUF1QixDQUFDOztrRkFFN0IsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIElvbkJ1dHRvbixcbiAgSW9uQnV0dG9ucyxcbiAgSW9uQ29udGVudCxcbiAgSW9uSGVhZGVyLFxuICBJb25JY29uLFxuICBJb25JdGVtLFxuICBJb25MaXN0LFxuICBJb25Qcm9ncmVzc0JhcixcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25SZWZyZXNoZXJDb250ZW50LFxuICBJb25TZWFyY2hiYXIsXG4gIElvblRleHQsXG4gIElvblRpdGxlLFxuICBJb25Ub2FzdCxcbiAgSW9uVG9vbGJhcixcbiAgdHlwZSBTZWFyY2hiYXJDdXN0b21FdmVudCxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5cbmltcG9ydCB7IFJ4Rm9yIH0gZnJvbSAnQHJ4LWFuZ3VsYXIvdGVtcGxhdGUvZm9yJztcbmltcG9ydCB7IFJ4SWYgfSBmcm9tICdAcngtYW5ndWxhci90ZW1wbGF0ZS9pZic7XG5pbXBvcnQgeyBSeExldCB9IGZyb20gJ0ByeC1hbmd1bGFyL3RlbXBsYXRlL2xldCc7XG5pbXBvcnQgeyBSeFB1c2ggfSBmcm9tICdAcngtYW5ndWxhci90ZW1wbGF0ZS9wdXNoJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuaW1wb3J0IHsgYXJyb3dEb3duT3V0bGluZSwgYXJyb3dVcE91dGxpbmUgfSBmcm9tICdpb25pY29ucy9pY29ucyc7XG5cbmltcG9ydCB7IFByb2R1Y3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnQHByb2R1Y3QvcHJvZHVjdC11aS9wcm9kdWN0LWNhcmQnO1xuaW1wb3J0IHR5cGUgeyBTb3J0IH0gZnJvbSAnQHByb2R1Y3Qvc2hhcmVkLWR0byc7XG5cbmltcG9ydCB7IFByb2R1Y3RIb21lU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWhvbWUtc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BjLXByb2R1Y3QtaG9tZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWhvbWUucGFnZS5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Byb2R1Y3QtaG9tZS5wYWdlLnNjc3MnLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBJb25IZWFkZXIsXG4gICAgSW9uSXRlbSxcbiAgICBJb25MaXN0LFxuICAgIElvblJlZnJlc2hlcixcbiAgICBJb25SZWZyZXNoZXJDb250ZW50LFxuICAgIElvblNlYXJjaGJhcixcbiAgICBJb25UaXRsZSxcbiAgICBJb25Ub29sYmFyLFxuICAgIElvblByb2dyZXNzQmFyLFxuICAgIElvblRvYXN0LFxuICAgIElvblRleHQsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkJ1dHRvbnMsXG4gICAgSW9uSWNvbixcbiAgICBSeEZvcixcbiAgICBSeElmLFxuICAgIFJ4TGV0LFxuICAgIFJ4UHVzaCxcbiAgICBSb3V0ZXJMaW5rLFxuICAgIFByb2R1Y3RDYXJkQ29tcG9uZW50LFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gIF0sXG4gIHZpZXdQcm92aWRlcnM6IFtQcm9kdWN0SG9tZVN0YXRlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RIb21lUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlYWRvbmx5IHN0YXRlU2VydmljZSA9IGluamVjdChQcm9kdWN0SG9tZVN0YXRlU2VydmljZSwgeyBzZWxmOiB0cnVlIH0pO1xuICByZWFkb25seSBwcm9kdWN0JCA9IHRoaXMuc3RhdGVTZXJ2aWNlLnByb2R1Y3QkO1xuICByZWFkb25seSBpc0xvYWRpbmckID0gdGhpcy5zdGF0ZVNlcnZpY2UuaXNMb2FkaW5nJDtcbiAgcmVhZG9ubHkgZXJyb3IkID0gdGhpcy5zdGF0ZVNlcnZpY2UuZXJyb3IkO1xuICByZWFkb25seSBhY3Rpb24kID0gdGhpcy5zdGF0ZVNlcnZpY2UuYWN0aW9uJDtcbiAgcmVhZG9ubHkgc29ydFByb2R1Y3QkID0gdGhpcy5zdGF0ZVNlcnZpY2Uuc29ydCQ7XG5cbiAgLyoqXG4gICAqIFNlYWNoIGlucHV0IGRlYm91bmNlIHRpbWVcbiAgICogVXNpbmcgdGhlIHZhbHVlIGFzIGRlYm91bmNlIHRpbWUgYnkgYXBwcm94aW1hdGluZyBhdmVyYWdlIGh1bWFuIHJlYWN0aW9uXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaHVtYW5iZW5jaG1hcmsuY29tL3Rlc3RzL3JlYWN0aW9udGltZS9zdGF0aXN0aWNzfEh1bWFuIFJlYWN0aW9uIFN0YXRpc3RpY3N9XG4gICAqL1xuICByZWFkb25seSBkZWJvdW5jZVRpbWUgPSAzMDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyBhcnJvd1VwT3V0bGluZSwgYXJyb3dEb3duT3V0bGluZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVTZXJ2aWNlLmxvYWRQcm9kdWN0cygpO1xuICB9XG5cbiAgc2VhcmNoUHJvZHVjdChldmVudDogU2VhcmNoYmFyQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChzZWFyY2hUZXh0KSB7XG4gICAgICB0aGlzLnN0YXRlU2VydmljZS5zZWFyY2hQcm9kdWN0KHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0U2VhcmNoKCkge1xuICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnNlYXJjaFByb2R1Y3QobnVsbCk7XG4gIH1cblxuICBzb3J0Qnkoc29ydEJ5OiBTb3J0WydieSddKSB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc29ydEJ5KHNvcnRCeSk7XG4gIH1cbn1cbiIsIjxpb24taGVhZGVyPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi10aXRsZT4gUHJvZHVjdHMgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLXNlYXJjaGJhclxuICAgICAgW2RlYm91bmNlXT1cImRlYm91bmNlVGltZVwiXG4gICAgICAoaW9uSW5wdXQpPVwic2VhcmNoUHJvZHVjdCgkZXZlbnQpXCJcbiAgICAgIChpb25DbGVhcik9XCJyZXNldFNlYXJjaCgpXCJcbiAgICA+PC9pb24tc2VhcmNoYmFyPlxuICAgIDxpb24tcHJvZ3Jlc3MtYmFyXG4gICAgICAqcnhJZj1cImlzTG9hZGluZyRcIlxuICAgICAgdHlwZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgID48L2lvbi1wcm9ncmVzcy1iYXI+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudCAqcnhMZXQ9XCJhY3Rpb24kOyBsZXQgYWN0aW9uXCI+XG4gIEBzd2l0Y2ggKGFjdGlvbikgeyBAY2FzZSgncGVuZGluZycpIHtcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRpbmdcIj4gPC9uZy1jb250YWluZXI+XG4gIH0gQGNhc2UoJ2Vycm9yJykge1xuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXJyb3JcIj4gPC9uZy1jb250YWluZXI+XG4gIH0gQGNhc2UoJ2RvbmUnKSB7XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwcm9kdWN0c1wiPiA8L25nLWNvbnRhaW5lcj5cbiAgfSB9XG48L2lvbi1jb250ZW50PlxuXG48IS0tIFRlbXBsYXRlIEZvciBEaXNwbGF5aW5nIFByb2R1Y3RzIC0tPlxuPG5nLXRlbXBsYXRlICNwcm9kdWN0cz5cbiAgPGlvbi10b29sYmFyIGNsYXNzPVwic29ydC10b29sYmFyXCI+XG4gICAgPGlvbi1idXR0b25zICpyeExldD1cInNvcnRQcm9kdWN0JDsgbGV0IHNvcnRQcm9kdWN0XCI+XG4gICAgICA8aW9uLWJ1dHRvblxuICAgICAgICBbZmlsbF09XCJzb3J0UHJvZHVjdD8uYnkgPT09ICduYW1lJyA/ICdzb2xpZCcgOiAnb3V0bGluZSdcIlxuICAgICAgICAoY2xpY2spPVwic29ydEJ5KCduYW1lJylcIlxuICAgICAgICA+e3sgc29ydFByb2R1Y3Q/LmJ5ID09PSAnbmFtZScgJiYgc29ydFByb2R1Y3Q/LnNvcnQgPT09ICdkZXNjZW5kaW5nJyA/XG4gICAgICAgICdaLUEnIDogJ0EtWid9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgW2ZpbGxdPVwic29ydFByb2R1Y3Q/LmJ5ID09PSAncHJpY2UnID8gJ3NvbGlkJyA6ICdvdXRsaW5lJ1wiXG4gICAgICAgIChjbGljayk9XCJzb3J0QnkoJ3ByaWNlJylcIlxuICAgICAgICA+PHNwYW4+UHJpY2U8L3NwYW4+XG4gICAgICAgIDxpb24taWNvblxuICAgICAgICAgICpyeElmPVwic29ydFByb2R1Y3Q/LmJ5ID09PSAncHJpY2UnICYmIHNvcnRQcm9kdWN0Py5zb3J0ID09PSAnYXNjZW5kaW5nJ1wiXG4gICAgICAgICAgbmFtZT1cImFycm93LXVwLW91dGxpbmVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBc2NlbmRpbmdcIlxuICAgICAgICA+PC9pb24taWNvblxuICAgICAgICA+PGlvbi1pY29uXG4gICAgICAgICAgKnJ4SWY9XCJzb3J0UHJvZHVjdD8uYnkgPT09ICdwcmljZScgJiYgc29ydFByb2R1Y3Q/LnNvcnQgPT09ICdkZXNjZW5kaW5nJ1wiXG4gICAgICAgICAgbmFtZT1cImFycm93LWRvd24tb3V0bGluZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkFzY2VuZGluZ1wiXG4gICAgICAgID48L2lvbi1pY29uXG4gICAgICA+PC9pb24tYnV0dG9uPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgW2ZpbGxdPVwic29ydFByb2R1Y3Q/LmJ5ID09PSAnZGlzY291bnRlZCcgPyAnc29saWQnIDogJ291dGxpbmUnXCJcbiAgICAgICAgKGNsaWNrKT1cInNvcnRCeSgnZGlzY291bnRlZCcpXCJcbiAgICAgICAgPjxzcGFuPkRpc2NvdW50ZWQ8L3NwYW4+XG4gICAgICAgIDxpb24taWNvblxuICAgICAgICAgICpyeElmPVwic29ydFByb2R1Y3Q/LmJ5ID09PSAnZGlzY291bnRlZCcgJiYgc29ydFByb2R1Y3Q/LnNvcnQgPT09ICdhc2NlbmRpbmcnXCJcbiAgICAgICAgICBuYW1lPVwiYXJyb3ctdXAtb3V0bGluZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkFzY2VuZGluZ1wiXG4gICAgICAgID48L2lvbi1pY29uXG4gICAgICAgID48aW9uLWljb25cbiAgICAgICAgICAqcnhJZj1cInNvcnRQcm9kdWN0Py5ieSA9PT0gJ2Rpc2NvdW50ZWQnICYmIHNvcnRQcm9kdWN0Py5zb3J0ID09PSAnZGVzY2VuZGluZydcIlxuICAgICAgICAgIG5hbWU9XCJhcnJvdy1kb3duLW91dGxpbmVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBc2NlbmRpbmdcIlxuICAgICAgICA+PC9pb24taWNvblxuICAgICAgPjwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuICA8aW9uLWxpc3QgY2xhc3M9XCJwcm9kdWN0LWxpc3RcIiAqcnhMZXQ9XCJwcm9kdWN0JDsgbGV0IHByb2R1Y3RzXCI+XG4gICAgQGZvcihwcm9kdWN0IG9mIHByb2R1Y3RzOyB0cmFjayBwcm9kdWN0LmlkOyBsZXQgaW5kZXggPSAkaW5kZXgpIHtcbiAgICA8aW9uLWl0ZW0gW3JvdXRlckxpbmtdPVwiWycvcHJvZHVjdHMnLCBwcm9kdWN0LmlkXVwiPlxuICAgICAgPHBjLXByb2R1Y3QtY2FyZFxuICAgICAgICBbcHJvZHVjdF09XCJwcm9kdWN0XCJcbiAgICAgICAgW2lzUHJpb3JpdHldPVwiaW5kZXggPCA1XCJcbiAgICAgID48L3BjLXByb2R1Y3QtY2FyZD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIH0gQGVtcHR5IHtcbiAgICA8aW9uLWl0ZW0gY2xhc3M9XCJlbXB0eS10ZXh0XCI+Tm8gUHJvZHVjdHMgRm91bmQ8L2lvbi1pdGVtPlxuICAgIH1cbiAgPC9pb24tbGlzdD5cbiAgPGRpdiBjbGFzcz1cImVuZC10ZXh0XCI+WW91IGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYWdlPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48IS0tIFRlbXBsYXRlIFdoZW4gTG9hZGluZyAtLT5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1saXN0PlxuICAgIEBmb3IoXyBvZiBbMSwyXTsgdHJhY2sgXzspIHtcbiAgICA8aW9uLWl0ZW0+XG4gICAgICA8cGMtcHJvZHVjdC1jYXJkIFtwcm9kdWN0XT1cIm51bGxcIj48L3BjLXByb2R1Y3QtY2FyZD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIH1cbiAgPC9pb24tbGlzdD5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVGVtcGxhdGUgRm9yIEVycm9yIC0tPlxuPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgPGlvbi10ZXh0ICpyeExldD1cImVycm9yJDsgbGV0IGVycm9yXCJcbiAgICA+PHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+e3tlcnJvcn19PC9wPjwvaW9uLXRleHRcbiAgPlxuICA8aW9uLXRvYXN0XG4gICAgKnJ4TGV0PVwiZXJyb3IkOyBsZXQgZXJyb3JcIlxuICAgIFtpc09wZW5dPVwiISFlcnJvclwiXG4gICAgW21lc3NhZ2VdPVwiZXJyb3JcIlxuICAgIFtkdXJhdGlvbl09XCI1MDAwXCJcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgY29sb3I9XCJkYW5nZXJcIlxuICA+PC9pb24tdG9hc3Q+XG48L25nLXRlbXBsYXRlPlxuIl19