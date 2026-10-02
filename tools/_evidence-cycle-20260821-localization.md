# Evidence — Cycle 2026-08-21 (localization subsystem wave)

## Scope of this cycle
Continue the hand-written conversion into the **localization** namespace (stable namespace; avoids the campaign double-directory). The module `_index.md` was already a hand-written mental map (H1 satisfied), so this wave upgraded 10 spine leaf pages from signature-dump stubs to `deep_pass`.

## Pages rewritten (10, in place, slug preserved)
Batch A (general-purpose-1): MBTextManager, MBTextParser, MBTextModel, MBTextToken, LocalizedTextManager
Batch B (general-purpose-2): TextGrammarProcessor, Tokenizer, LanguageData, TextExpression, SimpleText

Source read (real, not guessed):
- `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/` + `.TextProcessor/` + `.Expressions/`
- Cross-checked against `bannerlord-1.3.15/TaleWorlds.Localization/` (signatures consistent)
- Call sites verified via Grep (e.g. `Module.cs` → `LocalizedTextManager.AddLocalizationXml` / `LoadLocalizationXmls`)

## QA — independent re-verification (NOT agent self-report)
1. **Classify (all 10)**:
   ```
   MBTextManager        deep_pass  mental>80,dep-or-see-links=7,real-csharp-example,overview-ok
   MBTextParser         deep_pass  mental>80,dep-or-see-links=6,real-csharp-example,overview-ok
   MBTextModel          deep_pass  mental>80,dep-or-see-links=4,real-csharp-example,overview-ok
   MBTextToken          deep_pass  mental>80,dep-or-see-links=4,real-csharp-example,overview-ok
   LocalizedTextManager deep_pass  mental>80,dep-or-see-links=5,real-csharp-example,overview-ok
   TextGrammarProcessor deep_pass  mental>80,dep-or-see-links=6,real-csharp-example,overview-ok
   Tokenizer            deep_pass  mental>80,dep-or-see-links=5,real-csharp-example,overview-ok
   LanguageData         deep_pass  mental>80,dep-or-see-links=4,real-csharp-example,overview-ok
   TextExpression       deep_pass  mental>80,dep-or-see-links=6,real-csharp-example,overview-ok
   SimpleText           deep_pass  mental>80,dep-or-see-links=5,real-csharp-example,overview-ok
   SUMMARY deep=10 stub=0 /10
   ```
2. **Link audit (full `v1.3.15/zh/api` tree)**: `RESOLVE_NEITHER=0`, `FILES_WITH_BROKEN=0`. Total links grew (new links all resolve); the `./X` sibling depth trap did NOT recur.
3. **Forbidden-sentence grep (10 pages)**: 0 hits (阅读时先通过属性了解状态 / 是 TaleWorlds.X 的公开类型 / null; // 替换 / SomeValue / service = ... / 从实际子系统 API / 先从命名空间 / 入口或数据节点 / Get...Implementation).
4. **Cross-namespace link**: `../../../architecture/crash-boundaries/` resolves (page exists).
5. **Collateral check (git)**: only the 10 target `.md` files were modified this cycle (mtime 08-21_03:36–03:37). `data/*.json`, `package.json`, `tools/*` changes carry mtimes 08-14→08-17 — pre-existing uncommitted working-tree state from prior cycles (per project memory), NOT touched by this cycle's agents. Zero collateral.
6. **Spot-read**: `MBTextManager.md` inspected — accurate mental model (engine behind `TextObject.ToString()`, does not hold translations; pipeline Tokenizer→MBTextParser→TextGrammarProcessor→LanguageSpecificTextProcessor), real method semantics (ChangeLanguage rebuilds `_languageProcessor`; SetTextVariable must precede ToString), real 3-call example, 7 resolving deps, real crash/timing risk. Genuinely hand-written.

## Coverage delta
- `localization` namespace: BEFORE `TOTAL=52 deep=1 stub=51` → AFTER `deep=11 stub=41` (+10 deep, -10 stub).
- Remaining 41 stubs: expression AST leaves (FunctionCall, SelectionExpression, SimpleExpression, …), per-language processors (EnglishTextProcessor, GermanTextProcessor, …), and minor types (DateRange, TokenDefinition, TextProcessingContext, MBTextParser-related, etc.).

## Scenario / 大局观 relevance
- Scenario #3 (custom save field): localization is orthogonal; save-system already 100% (prior cycle). No regression.
- 大局观: the localization pipeline (TextObject → MBTextManager → Tokenizer → MBTextParser → TextGrammarProcessor → LanguageSpecificTextProcessor, data from LocalizedTextManager/LanguageData) is now documented as a coherent subsystem with hand-written hub pages — a reader can follow the data flow without reading source.

## Known limitations / deferred
- `zola build` (driver §8 gate F) not run this cycle (36k-page build deferred to milestone boundary, consistent with prior cycles). Markdown is structurally valid and link-audit passes, so breakage risk is low; final acceptance will run the full build.
- English (`en`) counterparts of these 10 pages not yet written (R1 default: zh primary, en transcribe same understanding later). Documented as backlog, not counted as done.
- 4 strategic decisions (campaign dedup etc.) still pending user裁决 — this wave deliberately stayed in the stable `localization` namespace.
