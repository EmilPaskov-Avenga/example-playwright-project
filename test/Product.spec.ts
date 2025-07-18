import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";
import { Select } from "../utils/enums/select.enum";
import * as utility from "../utils/utility-methods";
import ProductPage from "../page/Product.page";


test.describe("Sorting Feature. @sorting", async () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();
        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    })

    test("Positive: User adds item to cart from single product page", async ({ page }) => {
        productPage = new ProductPage(page);
        await productsPage.openBackpackPage();
        await productPage.addToCart();

        expect(await productPage.isAddedToCart()).toBe(true);
    });

    test("Positive: User adds item to cart from single product page and removes it from there", async ({ page }) => {
        productPage = new ProductPage(page);
        await productsPage.openBackpackPage();
        await productPage.addToCart();

        expect(await productPage.isAddedToCart()).toBe(true);

        await productPage.removeProductFromCart();

        expect (await productPage.cartIsEmpty()).toBe(true);
    })
})