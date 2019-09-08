module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'airbnb',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'guard-for-in': ['off'],
        'import/extensions': ['always'],
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true,
            'optionalDependencies': false,
            'peerDependencies': false
        }],
        'import/prefer-default-export': ['off'],
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'no-console': ['warn'],
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'no-param-reassign': ['off'],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-return-assign': ['off'],
        'object-curly-newline': ['off'],
        'prefer-destructuring': ['error', { 'array': false, 'object': true }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    }
};