import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getSajuPillars } from '../src/saju.js';

const fixtures = JSON.parse(
  readFileSync(new URL('manse.golden.json', import.meta.url))
);

for (const { description, input, expect: expected } of fixtures) {
  test(description ?? JSON.stringify(input), () => {
    const result = getSajuPillars(input.year, input.month, input.day, input.hour, input.minute);
    assert.equal(result.yearPillarHanja, expected.year);
    assert.equal(result.monthPillarHanja, expected.month);
    assert.equal(result.dayPillarHanja, expected.day);
    assert.equal(result.hourPillarHanja, expected.hour);
  });
}
