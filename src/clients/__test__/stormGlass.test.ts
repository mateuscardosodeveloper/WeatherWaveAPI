import { StormGlass } from "@src/clients/stormGlass"
import axios from "axios"
import stromGlassWeather3HoursFixture from "@test/fixtures/stormglass_weather_3_hours.json"
import stormGlassNormalized3HoursFixture from "@test/fixtures/stormglass_normalized_response_3_hours.json"

jest.mock("axios")

describe("StormGlass client", () => {
  it("Should return the normalized forecast from the StormGlass service.", async () => {
    const latitude = -33.33333
    const longitude = -33.33333

    axios.get = jest.fn().mockResolvedValue({data: stromGlassWeather3HoursFixture})

    const stormGlass = new StormGlass(axios)
    const response = await stormGlass.fetchPoints(latitude, longitude)

    expect(response).toEqual(stormGlassNormalized3HoursFixture)
  })
})
