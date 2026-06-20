import { test } from 'node:test';
import assert from 'node:assert';

// 의도적 실패 — branch protection 게이트가 merge를 막는지 검증용 (검증 후 폐기)
test('gate 검증: 일부러 실패', () => {
  assert.strictEqual(1 + 1, 3);
});
