const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const parser = require("@angular-eslint/template-parser");
const _import = require("eslint-plugin-import");
const angularEslintEslintPlugin = require("@angular-eslint/eslint-plugin");
const angularEslintEslintPluginTemplate = require("@angular-eslint/eslint-plugin-template");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: parser,
        sourceType: "module",

        parserOptions: {
            project: "tsconfig.json",
        },
    },

    extends: compat.extends("prettier"),

    plugins: {
        import: fixupPluginRules(_import),
        "@angular-eslint": angularEslintEslintPlugin,
        "@angular-eslint/template": angularEslintEslintPluginTemplate,
    },

    rules: {
        "@angular-eslint/component-selector": ["error", {
            type: "element",
            prefix: "vg",
            style: "kebab-case",
        }],

        "@angular-eslint/directive-selector": ["error", {
            type: "attribute",
            prefix: "vg",
            style: "camelCase",
        }],

        "nx-enforce-module-boundaries": ["error", {
            enforceBuildableLibDependency: true,
            allow: [],

            depConstraints: [{
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
            }],
        }],

        "@angular-eslint/no-conflicting-lifecycle": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/no-output-on-prefix": "off",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",

        "@typescript-eslint/explicit-member-accessibility": ["off", {
            accessibility: "explicit",
        }],

        "@typescript-eslint/member-ordering": "error",

        "@typescript-eslint/naming-convention": ["error", {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
        }],

        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",

        "@typescript-eslint/no-inferrable-types": ["error", {
            ignoreParameters: true,
        }],

        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",

        "@typescript-eslint/no-shadow": ["error", {
            hoist: "all",
        }],

        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "constructor-super": "error",
        "dot-notation": "off",
        eqeqeq: ["error", "smart"],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-match": "off",
        "import/no-deprecated": "warn",
        "no-bitwise": "off",
        "no-caller": "error",

        "no-console": ["error", {
            allow: [
                "log",
                "warn",
                "error",
                "dir",
                "timeLog",
                "assert",
                "clear",
                "count",
                "countReset",
                "group",
                "groupEnd",
                "table",
                "dirxml",
                "groupCollapsed",
                "Console",
                "profile",
                "profileEnd",
                "timeStamp",
                "context",
                "createTask",
            ],
        }],

        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-restricted-imports": ["error", "rxjs/Rx"],
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "no-var": "error",
        "prefer-const": "error",
        radix: "error",

        "@typescript-eslint/tslint/config": ["error", {
            rules: {
                "nx-enforce-module-boundaries": [true, {
                    enforceBuildableLibDependency: true,
                    allow: [],

                    depConstraints: [{
                        sourceTag: "*",
                        onlyDependOnLibsWithTags: ["*"],
                    }],
                }],
            },
        }],
    },
}]);
