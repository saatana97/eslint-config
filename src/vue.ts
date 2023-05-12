export default {
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "prettier/prettier": "warn",
        "eqeqeq": [2, "always"],
        "no-alert": "warn",
        "no-debugger": "warn",
        "no-undef": "error",
        "no-else-return": "error",
        "no-console": "off",
        "vue/no-v-html": "off",
        "vue/html-self-closing": [
            "warn",
            {
                "html": {
                    "void": "any",
                    "normal": "any",
                    "component": "always"
                },
                "svg": "always",
                "math": "always"
            }
        ],
        "vue/multi-word-component-names": "off",
        "vue/order-in-components": [
            "warn",
            {
                "order": [
                    "el",
                    "name",
                    "key",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    ["provide", "inject"],
                    "ROUTER_GUARDS",
                    "layout",
                    "middleware",
                    "validate",
                    "scrollToTop",
                    "transition",
                    "loading",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "emits",
                    "setup",
                    "fetch",
                    "asyncData",
                    "data",
                    "head",
                    "computed",
                    "watch",
                    "watchQuery",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError"
                ]
            }
        ],
        "vue/attributes-order": [
            "warn",
            {
                "order": [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    "UNIQUE",
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT"
                ],
                "alphabetical": true
            }
        ]
    },
    "globals": {
        "arguments": "readonly"
    }
}
