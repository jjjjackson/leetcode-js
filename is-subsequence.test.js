var isSubsequence = require('./is-subsequence');

describe('isSubsequence', () => {
  it('test', () => {
    // const isSubsequence = utilsRewire.__get__('isSubsequence'); // 👈 the secret sauce
    var s = "abc";
    var t = "ahbgdc";
    expect(isSubsequence()).toBe(true);
  });
});
