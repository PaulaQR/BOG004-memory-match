import { generateBoard } from './App.js';

describe('generateBoard',()=>{
  it('should be Html',()=>{
    const items = generateBoard()
    expect(items instanceof HTMLElement).toBe(true)
  });


test('multiply our data', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});


test('increase match', () => {
  expect(2 + 2).toBe(4);
});
})