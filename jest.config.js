module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$": "vue-jest",
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  }
};
