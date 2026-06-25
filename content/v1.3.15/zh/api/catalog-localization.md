---
title: 本地化 Localization 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 本地化 Localization 类目录

## 心智模型

先把 `本地化 Localization 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **21** 个类型，其中 **18** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Localization (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DateRange](./localization/DateRange) | 🔗 |
| C | [LocalizationException](./localization/LocalizationException) | 🔗 |
| C | LocalizedTextManager | — |
| C | [LocalizedVoiceManager](./localization/LocalizedVoiceManager) | 🔗 |
| C | MBTextManager | — |
| C | [SaveableLocalizationTypeDefiner](./localization/SaveableLocalizationTypeDefiner) | 🔗 |
| C | TextObject | — |
| C | [VoiceObject](./localization/VoiceObject) | 🔗 |

## TaleWorlds.Localization.TextProcessor (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultTextProcessor](./localization/DefaultTextProcessor) | 🔗 |
| C | [LanguageSpecificTextProcessor](./localization/LanguageSpecificTextProcessor) | 🔗 |
| C | [MBTextModel](./localization/MBTextModel) | 🔗 |
| C | [TextGrammarProcessor](./localization/TextGrammarProcessor) | 🔗 |
| C | [TextProcessingContext](./localization/TextProcessingContext) | 🔗 |

## TaleWorlds.Localization.TextProcessor.LanguageProcessors (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EnglishTextProcessor](./localization/EnglishTextProcessor) | 🔗 |
| C | [FrenchTextProcessor](./localization/FrenchTextProcessor) | 🔗 |
| C | [GermanTextProcessor](./localization/GermanTextProcessor) | 🔗 |
| C | [ItalianTextProcessor](./localization/ItalianTextProcessor) | 🔗 |
| C | [PolishTextProcessor](./localization/PolishTextProcessor) | 🔗 |
| C | [RussianTextProcessor](./localization/RussianTextProcessor) | 🔗 |
| C | [SpanishTextProcessor](./localization/SpanishTextProcessor) | 🔗 |
| C | [TurkishTextProcessor](./localization/TurkishTextProcessor) | 🔗 |
