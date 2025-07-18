import { expect, Locator, Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';

export default class ProductPage {


    constructor(public page: Page) {
    }

    async addToCart () {
        await this.page.locator(selectors.ProductPage.addToCart).click();
    }

    async backToProducts() {
        await this.page.locator(selectors.ProductPage.backToProducts).click();
    }

    async removeProductFromCart() {
        await this.page.locator(selectors.ProductPage.remove).click();
    }

    async isAddedToCart() {
        return await this.page.locator(selectors.ProductPage.cartBadge).isEnabled();
    }

    async cartIsEmpty()
    {
        return await this.page.locator(selectors.ProductPage.cartBadge).isDisabled();
    }
}