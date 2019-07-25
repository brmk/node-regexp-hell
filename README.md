# Node RegExp runtime transpilation with ES2018 features

## RegExp:

Breaks down email with unicode support

```
^([\p{P}\p{S}]+)?(?<localPart>\S{1,64})@(?<domainPart>[\p{L}\d]{1}[\S]{0,}\.)(?<topLevelDomainPart>\p{L}+)
```

https://regex101.com/r/EeDPAQ/4/

## Features:

- Named groups
- Unicode
