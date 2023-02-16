module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'object-curly-spacing': [2, 'always'],
        // '@typescript-eslint/object-curly-spacing': 'warn',
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': ['warn', { markupOnly: true }]
    },
    'globals': {
        '__IS__DEV__': true
    }
};
