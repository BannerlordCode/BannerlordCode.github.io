---
title: "localization 目录"
description: 本地化系统类参考目录
---

## 模块心智模型

`localization` 桶是 Bannerlord 里**所有玩家可见文字的流动管道**：代码里几乎不存裸字符串，而是存 `TextObject` 模板，真正的翻译和变量替换延迟到 `ToString()` 被调用、且针对当前激活语言时，才由 `MBTextManager` 一次性完成。

`TaleWorlds.Localization` 不负责做游戏逻辑，它只负责一件事——把"一段带 `{=id}` 本地化标记和 `{TAG}` 占位符的文本"变成玩家屏幕上那种正确语言、正确单复数、正确人称呼格的句子。英雄名、道具名、任务描述、系统消息、UI 文案，底层都是 `TextObject`；语言数据来自官方/模组的 XML，由 `LocalizedTextManager` 装入内存。理解这个桶的关键，是看清"写文本"和"渲染文本"是两条分离的时间线：你在编译期或 XML 里定义模板，运行时 `MBTextManager` 才把它翻译成当前语言并填入变量。

这条管道可以分成四层：**容器**（`TextObject` 持有模板与变量表）、**引擎**（`MBTextManager` 统筹解析顺序）、**数据源**（`LocalizedTextManager` / `LanguageData` 提供译文与语言元信息）、**解析与语法**（`Tokenizer` 切词、`MBTextParser` 生成表达式 AST、`TextGrammarProcessor` 执行语法选择、`LanguageSpecificTextProcessor` 做按语言的性数格处理）。配音走平行的一支：`VoiceObject` 配 `LocalizedVoiceManager`。

## 核心入口类型

- [TextObject](./TextObject) — 一切用户可见文本的载体：以 `{=id}` 标记本地化条目、用 `Attributes` 存 `{TAG}` 变量，`ToString()` 时才解析翻译与变量。几乎所有 mod 显示文字的必经入口（deep_pass 重点）。
- [MBTextManager](./MBTextManager) — `TextObject.ToString()` 背后的真正引擎。`ProcessTextToString` 依次做 `GetLocalizedText`（按 id 取译文，缺失回退内联英文）、`Tokenizer`/`MBTextParser`/`TextGrammarProcessor` 解析变量、再交当前语言的 `LanguageSpecificTextProcessor` 处理性数格。还掌管 `ActiveTextLanguage` 与 `ChangeLanguage`。
- [LocalizedTextManager](./LocalizedTextManager) — 文本数据的来源。`LoadLocalizationXmls` / `AddLocalizationXml` 从模块 XML 装载语言包，`GetTranslatedText` / `GetLanguageIds` / `CreateTextProcessorForLanguage` 提供译文查询与语言元数据。
- [MBTextParser](./MBTextParser) — 把 `Tokenizer` 产出的 token 列表解析成 `MBTextModel` 表达式树（函数、选择、数字、变量等），送给语法处理器执行。
- [TextGrammarProcessor](./TextGrammarProcessor) — 执行解析后的表达式树，按 `TextContext` 里的变量和函数展开 `{TAG}`、做条件选择与数字/语法处理。
- [Tokenizer](./Tokenizer) — 句子级的底层切词器，将原始文本切成 `MBTextToken` 流供 parser 消费；`TextObject.CacheTokens` 预热的就是它。
- [LanguageData](./LanguageData) — 单种语言的元数据载体（id、标题、处理器配置等），是语言包在内存中的结构化表示。
- [LanguageSpecificTextProcessor](./LanguageSpecificTextProcessor) — 按语言定制的语法处理器基类（如英文/德文/俄文各有一份），负责该语言的性、数、格与复数规则。
- [VoiceObject](./VoiceObject) — 与文本平行的本地化配音条目，配合 `LocalizedVoiceManager` 按语言取对应的语音资源。

## 与其他模块的关系

`localization` 是展示层的"词源"。任何要把文字抛给玩家的地方都会用到它：例如 [core-extra](../core-extra/) 里的 [InformationManager](../core-extra/InformationManager/) 显示系统消息时，传入的就是 `TextObject` 经 `ToString()` 渲染后的字符串；英雄、道具等名称本身即 `TextObject`，由 `campaign`、`core` 等桶产出后再交本地化管线显示。它也是崩溃边界上的一环——详见 [崩溃边界](../../architecture/crash-boundaries/)：在 `GameTextManager` 尚未初始化的阶段调用 `GameTexts.FindText` 会拿到错误文本乃至抛 `NullReferenceException`，因此在游戏启动前解析本地化文本是常见踩坑点。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### A

- [ArithmeticExpression](./ArithmeticExpression)
- [ArithmeticOperation](./ArithmeticOperation)
- [ArrayReference](./ArrayReference)

### B

- [BooleanOperation](./BooleanOperation)

### C

- [CaseInsensitiveComparer](./CaseInsensitiveComparer)
- [ComparisonExpression](./ComparisonExpression)
- [ComparisonOperation](./ComparisonOperation)
- [ConditionExpression](./ConditionExpression)

### D

- [DateRange](./DateRange)
- [DefaultTextProcessor](./DefaultTextProcessor)

### E

- [EnglishTextProcessor](./EnglishTextProcessor)

### F

- [FieldExpression](./FieldExpression)
- [FrenchTextProcessor](./FrenchTextProcessor)
- [FunctionCall](./FunctionCall)

### G

- [GermanTextProcessor](./GermanTextProcessor)

### I

- [ItalianTextProcessor](./ItalianTextProcessor)

### L

- [LangaugeMarkerExpression](./LangaugeMarkerExpression)
- [LanguageData](./LanguageData)
- [LanguageSpecificTextProcessor](./LanguageSpecificTextProcessor)
- [LocalizationException](./LocalizationException)
- [LocalizedTextManager](./LocalizedTextManager)
- [LocalizedVoiceManager](./LocalizedVoiceManager)

### M

- [MarkerOccuranceTextExpression](./MarkerOccuranceTextExpression)
- [MBTextManager](./MBTextManager)
- [MBTextModel](./MBTextModel)
- [MBTextParser](./MBTextParser)
- [MBTextToken](./MBTextToken)
- [MultiStatement](./MultiStatement)

### N

- [NumeralExpression](./NumeralExpression)

### P

- [ParameterWithAttributeExpression](./ParameterWithAttributeExpression)
- [ParanthesisExpression](./ParanthesisExpression)
- [PolishTextProcessor](./PolishTextProcessor)

### Q

- [QualifiedIdentifierExpression](./QualifiedIdentifierExpression)

### R

- [RussianTextProcessor](./RussianTextProcessor)

### S

- [SaveableLocalizationTypeDefiner](./SaveableLocalizationTypeDefiner)
- [SelectionExpression](./SelectionExpression)
- [SimpleExpression](./SimpleExpression)
- [SimpleNumberExpression](./SimpleNumberExpression)
- [SimpleText](./SimpleText)
- [SimpleToken](./SimpleToken)
- [SpanishTextProcessor](./SpanishTextProcessor)
- [StartsWithExpression](./StartsWithExpression)

### T

- [TextExpression](./TextExpression)
- [TextGrammarProcessor](./TextGrammarProcessor)
- [TextIdExpression](./TextIdExpression)
- [TextObject](./TextObject)
- [TextProcessingContext](./TextProcessingContext)
- [TokenDefinition](./TokenDefinition)
- [Tokenizer](./Tokenizer)
- [TurkishTextProcessor](./TurkishTextProcessor)

### V

- [VariableExpression](./VariableExpression)
- [VoiceObject](./VoiceObject)


<!-- END SECTION INDEX -->
