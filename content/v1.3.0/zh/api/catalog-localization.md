---
title: 本地化 Localization 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 本地化 Localization 类目录

## 心智模型

先把 `本地化 Localization 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.0 源码中该领域全部公开类型，按命名空间分组。共 **21** 个类型，其中 **18** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Localization (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DateRange](/v1.3.15/zh/api/localization/DateRange) | 🔗 |
| C | [LocalizationException](/v1.3.15/zh/api/localization/LocalizationException) | 🔗 |
| C | LocalizedTextManager | — |
| C | [LocalizedVoiceManager](/v1.3.15/zh/api/localization/LocalizedVoiceManager) | 🔗 |
| C | MBTextManager | — |
| C | [SaveableLocalizationTypeDefiner](/v1.3.15/zh/api/localization/SaveableLocalizationTypeDefiner) | 🔗 |
| C | TextObject | — |
| C | [VoiceObject](/v1.3.15/zh/api/localization/VoiceObject) | 🔗 |

## TaleWorlds.Localization.TextProcessor (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultTextProcessor](/v1.3.15/zh/api/localization/DefaultTextProcessor) | 🔗 |
| C | [LanguageSpecificTextProcessor](/v1.3.15/zh/api/localization/LanguageSpecificTextProcessor) | 🔗 |
| C | [MBTextModel](/v1.3.15/zh/api/localization/MBTextModel) | 🔗 |
| C | [TextGrammarProcessor](/v1.3.15/zh/api/localization/TextGrammarProcessor) | 🔗 |
| C | [TextProcessingContext](/v1.3.15/zh/api/localization/TextProcessingContext) | 🔗 |

## TaleWorlds.Localization.TextProcessor.LanguageProcessors (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EnglishTextProcessor](/v1.3.15/zh/api/localization/EnglishTextProcessor) | 🔗 |
| C | [FrenchTextProcessor](/v1.3.15/zh/api/localization/FrenchTextProcessor) | 🔗 |
| C | [GermanTextProcessor](/v1.3.15/zh/api/localization/GermanTextProcessor) | 🔗 |
| C | [ItalianTextProcessor](/v1.3.15/zh/api/localization/ItalianTextProcessor) | 🔗 |
| C | [PolishTextProcessor](/v1.3.15/zh/api/localization/PolishTextProcessor) | 🔗 |
| C | [RussianTextProcessor](/v1.3.15/zh/api/localization/RussianTextProcessor) | 🔗 |
| C | [SpanishTextProcessor](/v1.3.15/zh/api/localization/SpanishTextProcessor) | 🔗 |
| C | [TurkishTextProcessor](/v1.3.15/zh/api/localization/TurkishTextProcessor) | 🔗 |
