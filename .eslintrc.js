//eslint-disable-next-line
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
        {
            files: ['**/src/**/*{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'object-curly-spacing': [2, 'always'],
        // '@typescript-eslint/object-curly-spacing': 'warn',
        // 'linebreak-style': [
        //     'error',
        //     'windows'
        // ],
        'linebreak-style': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': [
            'warn', {
                markupOnly: true,
                ignoreAttribute: ['data-testid']
            }
        ],
        'max-len': ['error', { 'ignoreComments': true, 'code': 120 }],
        'react/display-name': 'off'
    },
    'globals': {
        '__IS__DEV__': true
    },
    // 'overrides': [
    //     {
    //         files: ['**/src/**/*test.{ts,tsx}'],
    //         rules: {
    //             'i18next/no-literal-string': 'off'
    //         }
    //     }
    // ]
};