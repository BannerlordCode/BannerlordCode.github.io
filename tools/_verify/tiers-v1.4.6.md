# v1.4.6 — four-tier page audit

Generated: 2026-10-07T04:58:18.431Z

## Criteria

- **generated**: body contains an exact generation marker (`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`) or a `<!-- v*-skeleton -->` comment.
- **empty_shell**: description contains `的自动生成类参考。` / `Auto-generated`, or body carries an empty-shell signature (`它有什么状态` / `它允许你做什么` / `它保存的状态`), AND body has no substance.
- **handwritten_deep**: no generation markers AND (classifyPage `deep_pass` OR body >2500B with h2/h3 sections).
- **other**: none of the above (listed explicitly).
- body = text after closing frontmatter; bodyBytes = UTF-8 byte length; h2h3 = lines matching `/^#{2,3}\s+/m`.

## Summary

| language | total | handwritten_deep | generated | empty_shell | other |
| --- | ---: | ---: | ---: | ---: | ---: |
| zh | 105 | 104 | 0 | 0 | 1 |
| en | 6 | 6 | 0 | 0 | 0 |
| version-root (not zh/en) | 1 | 1 | 0 | 0 | 0 |

classifyPage status counts:

| language | deep_pass | stub | noise | family_entry_pass |
| --- | ---: | ---: | ---: | ---: |
| zh | 80 | 0 | 25 | 0 |
| en | 0 | 0 | 6 | 0 |

## Version-root pages

- `content/v1.4.6/_index.md` — tier=handwritten_deep, classifyPage=noise, bodyBytes=3532, h2h3=5

## Other (unclassified) pages

- [zh] `content/v1.4.6/zh/architecture/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2491, h2h3=5

## Marker verification

- generation-marker hits across v1.4.6: 0 (exact-string scan of every page)
- skeleton-comment hits: 0
- empty-shell signature hits: 0
- description auto-marker hits: 0
