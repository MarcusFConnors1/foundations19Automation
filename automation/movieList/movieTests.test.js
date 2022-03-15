const {Builder, Capabilities, By} = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

test('Add a Movie', async () => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Back to the Future\n');
});

test('cross off a movie', async () => {
    await driver.findElement(By.xpath('//span')).click();
    await driver.sleep(2000);
});

test('uncross a movie', async () => {
    await driver.findElement(By.xpath('//span')).click();
    await driver.sleep(2000);
});

test('delete a movie', async () => {
    await driver.findElement(By.xpath('//button[@id="BacktotheFuture"]')).click();
    await driver.sleep(2000);
});