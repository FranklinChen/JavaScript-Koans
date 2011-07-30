
module("About Equality (topics/about_equality.js)");

test("numeric equality", function() {
    equals(3 + 4,  7, 'hmmmm?');
});

test("string equality", function() {
  // CHEN Even string + stolen from Java
    equals("3" + "7", "37", "concatenate the strings");
});

test("equality without type coercion", function() {
  // CHEN === is different from ==
    ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
  // CHEN == is very confusing
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
  // CHEN Different from Java, but like Perl etc.
    equals("frankenstein", 'frankenstein', "quote types are interchangable, but must match.");
});
