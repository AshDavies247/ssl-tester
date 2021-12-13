/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleFileExtensions: ["js", "json", "vue"],
    testRegex: "resources/js/tests/.*.spec.js$",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue3-jest",
    },
};
