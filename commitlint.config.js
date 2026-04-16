module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "ci",
      ],
    ],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-max-length": [2, "always", 100],
  },
};
