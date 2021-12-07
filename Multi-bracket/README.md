# Multi-bracket Validation

- Write a function called validate brackets
- Arguments: string
- Return: boolean
  - representing whether or not the brackets in the string are balanced

There are 3 types of brackets:

- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

## Example

| Input                     | Output  |
| ------------------------- | ------- |
| `{}`                      | `TRUE`  |
| `{}(){}`                  | `TRUE`  |
| `()[[Extra Characters]]`  | `TRUE`  |
| `(){}[[]]`                | `TRUE`  |
| `{}{Code}[Fellows](<()>)` | `TRUE`  |
| `[({}]`                   | `FALSE` |
| `(](`                     | `FALSE` |
| `{(})`                    | `FALSE` |

Consider these small examples and why they fail.

| Input | Output  | Why                                                      |
| ----- | ------- | -------------------------------------------------------- |
| `{`   | `FALSE` | error unmatched opening `{` remaining.                   |
| `)`   | `FALSE` | error closing `)` arrived without corresponding opening. |
| `[}`  | `FALSE` | error closing `}`. Doesn’t match opening `(`.            |
