# v1.5.3 — four-tier page audit

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
| zh | 146 | 144 | 0 | 0 | 2 |
| en | 6 | 5 | 0 | 0 | 1 |
| version-root (not zh/en) | 1 | 1 | 0 | 0 | 0 |

classifyPage status counts:

| language | deep_pass | stub | noise | family_entry_pass |
| --- | ---: | ---: | ---: | ---: |
| zh | 138 | 0 | 8 | 0 |
| en | 0 | 0 | 5 | 1 |

## Version-root pages

- `content/v1.5.3/_index.md` — tier=handwritten_deep, classifyPage=noise, bodyBytes=5129, h2h3=7

## Other (unclassified) pages

- [zh] `content/v1.5.3/zh/api/localization/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=1773, h2h3=13
- [zh] `content/v1.5.3/zh/architecture/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=1861, h2h3=5
- [en] `content/v1.5.3/en/architecture/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=1572, h2h3=3

## Marker verification

- generation-marker hits across v1.5.3: 0 (exact-string scan of every page)
- skeleton-comment hits: 0
- empty-shell signature hits: 0
- description auto-marker hits: 0
