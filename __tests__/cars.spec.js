import {test, expect } from '@jest/globals'
import {assert} from "chai";
import axios  from "axios";

test("should return car brands", async () => {
    const response = await axios.get('https://qauto.forstudy.space/api/cars/brands')
    expect(response.data.status).toBe('ok')
    assert.lengthOf(response.data.data, 5, "All car brands should be returned")
})