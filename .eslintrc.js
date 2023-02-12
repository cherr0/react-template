module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: ['plugin:import/recommended', 'plugin:import/typescript'],
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    rules: {
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function'
            }
        ],
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'simple-import-sort/exports': 'warn',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before'
                    }
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                'newlines-between': 'always'
            }
        ]
    },
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        '.next',
        'coverage',
        'dist'
    ]
}