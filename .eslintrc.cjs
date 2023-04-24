module.exports = {
  env: { 
    browser: true, 
    es2020: true 
  },
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  settings: { 
    react: { version: '18.2' } 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'eslint-plugin-react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
