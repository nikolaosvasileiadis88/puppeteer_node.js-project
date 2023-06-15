import fs from "fs";
import puppeteer from "puppeteer";


const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};




(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp",
    });

    const page = await browser.newPage();

    // Go to the first page
    await page.goto(`https://www.skroutz.gr/c/55/kartes-grafikwn.html?page=1`);

    // Get the maximum page number
    const maxPageLink = await page.$('#categories_show > div:nth-child(7) > main > section > div.list-controls.controls-wrapper.hide-small-viewport > ol > li:nth-child(5) > a');
    const maxPageNumber = await page.evaluate((el) => parseInt(el.textContent), maxPageLink);

    let pageNumber = 1;

    while (pageNumber <= maxPageNumber) {
        await page.goto(`https://www.skroutz.gr/c/55/kartes-grafikwn.html?page=${pageNumber}`);


        const productsHandles = await page.$$('#sku-list > li');





        for (const producthandle of productsHandles) {
            let title = "Null";
            let price = "Null";


            try {
                title = await page.evaluate(
                    (el) => el.querySelector("div > h2 > a").textContent,
                    producthandle
                );

                // Filter out the "Κάρτα Γραφικών" prefix from the price value
                title = title.replace("Κάρτα Γραφικών", "").trim();
            } catch (error) { }

            try {
                price = await page.evaluate(
                    (el) => el.querySelector("div > div.price.react-component.reviewable > div > a").textContent,
                    producthandle
                );

                // Filter out the "από" prefix from the price value
                price = price.replace("από", "").trim();
            } catch (error) { }



            fs.appendFile(
                "results.csv",
                `${title} - ${price}\n`,
                function (err) {
                    if (err) throw err;
                }
            );

        }

        pageNumber++;
    }

    await browser.close();
})();
