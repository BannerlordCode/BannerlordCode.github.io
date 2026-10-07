# v1.4.7 — four-tier page audit

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
| zh | 48 | 41 | 0 | 0 | 7 |
| en | 47 | 38 | 0 | 0 | 9 |
| version-root (not zh/en) | 2 | 2 | 0 | 0 | 0 |

classifyPage status counts:

| language | deep_pass | stub | noise | family_entry_pass |
| --- | ---: | ---: | ---: | ---: |
| zh | 23 | 0 | 25 | 0 |
| en | 23 | 0 | 24 | 0 |

## Version-root pages

- `content/v1.4.7/GAPS.md` — tier=handwritten_deep, classifyPage=noise, bodyBytes=4623, h2h3=4
- `content/v1.4.7/_index.md` — tier=handwritten_deep, classifyPage=noise, bodyBytes=9044, h2h3=8

## Other (unclassified) pages

- [zh] `content/v1.4.7/zh/api/achievementsystem/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=1735, h2h3=4
- [zh] `content/v1.4.7/zh/api/activitysystem/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2409, h2h3=4
- [zh] `content/v1.4.7/zh/api/core/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2066, h2h3=4
- [zh] `content/v1.4.7/zh/api/mission/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2090, h2h3=4
- [zh] `content/v1.4.7/zh/api/modulemanager/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2263, h2h3=4
- [zh] `content/v1.4.7/zh/api/network/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2375, h2h3=4
- [zh] `content/v1.4.7/zh/api/system/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2272, h2h3=4
- [en] `content/v1.4.7/en/api/achievementsystem/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=1771, h2h3=4
- [en] `content/v1.4.7/en/api/activitysystem/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2499, h2h3=4
- [en] `content/v1.4.7/en/api/core/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2373, h2h3=4
- [en] `content/v1.4.7/en/api/custombattle/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2252, h2h3=4
- [en] `content/v1.4.7/en/api/mission/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2415, h2h3=4
- [en] `content/v1.4.7/en/api/modulemanager/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2425, h2h3=4
- [en] `content/v1.4.7/en/api/network/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2454, h2h3=4
- [en] `content/v1.4.7/en/api/sandbox/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2414, h2h3=4
- [en] `content/v1.4.7/en/api/system/_index.md` — classifyPage=noise (section-index-or-family-shell), bodyBytes=2332, h2h3=4

## Marker verification

- generation-marker hits across v1.4.7: 0 (exact-string scan of every page)
- skeleton-comment hits: 0
- empty-shell signature hits: 0
- description auto-marker hits: 0
