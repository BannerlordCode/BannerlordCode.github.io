---
title: "Localization API — v1.5.3"
description: "Localization 桶：多语言文本处理器与语言本地化数据访问。下面的清单是本目录的机械索引，内容由目录里有哪些文件唯一决定。"
---

# Localization API

本桶收录**语言与文本本地化**相关类型：各语言的具体文本处理器（`DefaultTextProcessor`、`EnglishTextProcessor` …）、
把 key 翻成当前语言的访问器（`LocalizedTextManager`），以及语言标识与本地化数据类型定义。

## 怎么用

- 取当前语言显示文本时，先看 `LocalizedTextManager` 这一类访问器，再按语言选具体处理器。
- 语音/旁白相关的类型也在本桶（见清单里的 `LocalizedVoiceManager`）。
- 这些类型只影响**显示层**，不改变游戏规则。本版本的桶页只建了少数几个，
  同级可用的只有 [`../storymode/`](../storymode/)；要回本层入口看 [`../`](../)。

<!-- BEGIN SECTION INDEX -->
> 共 19 个子页

### V

- [VoiceObject](./VoiceObject)

### T

- [TextGrammarProcessor](./TextGrammarProcessor)
- [TextObject](./TextObject)
- [TextProcessingContext](./TextProcessingContext)
- [TurkishTextProcessor](./TurkishTextProcessor)

### S

- [SaveableLocalizationTypeDefiner](./SaveableLocalizationTypeDefiner)
- [SpanishTextProcessor](./SpanishTextProcessor)

### R

- [RussianTextProcessor](./RussianTextProcessor)

### P

- [PolishTextProcessor](./PolishTextProcessor)

### M

- [MBTextManager](./MBTextManager)
- [MBTextModel](./MBTextModel)

### L

- [LanguageSpecificTextProcessor](./LanguageSpecificTextProcessor)
- [LocalizedTextManager](./LocalizedTextManager)
- [LocalizedVoiceManager](./LocalizedVoiceManager)

### I

- [ItalianTextProcessor](./ItalianTextProcessor)

### G

- [GermanTextProcessor](./GermanTextProcessor)

### F

- [FrenchTextProcessor](./FrenchTextProcessor)

### E

- [EnglishTextProcessor](./EnglishTextProcessor)

### D

- [DefaultTextProcessor](./DefaultTextProcessor)

<!-- END SECTION INDEX -->
