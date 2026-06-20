import { test } from 'node:test';
import assert from 'node:assert';

// 배관용 smoke test — test 러너·CI 게이트가 실제로 도는지 확인
test('smoke: 산술 기본', () => {
  assert.strictEqual(1 + 1, 2);
});
