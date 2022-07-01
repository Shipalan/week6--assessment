
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button shows choices div', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    await driver.sleep(1000)
    const dispChoices = await choices.isDisplayed()
    expect(dispChoices).toBe(true)
})

test('See all bots shows bots', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(1000)
    const allBots = await driver.findElement(By.id('all-bots'))
    await driver.sleep(1000)
    const dispChoices = await allBots.isDisplayed()
})