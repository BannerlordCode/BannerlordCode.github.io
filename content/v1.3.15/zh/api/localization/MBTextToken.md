---
title: "MBTextToken"
description: "MBTextToken 是本地化文本分词后的最小单元：携带 TokenType 与 Value，是 Tokenizer 的输出、MBTextParser 的输入。"
---

# MBTextToken

**命名空间：** TaleWorlds.Localization.TextProcessor
**模块：** TaleWorlds.Localization
**类型：** `internal class MBTextToken`
**基类：** System.Object
**源文件路径：** `TaleWorlds.Localization/TextProcessor/MBTextToken.cs`

## 概述

`MBTextToken` 是本地化文本流水线的"词素"——`Tokenizer` 把原始文本切成一串 `MBTextToken`，每个 token 带一个 `TokenType`（Text / Number / Identifier / LanguageMarker / TextId 等）和对应的 `Value`；`MBTextParser` 再消费这串 token 构建表达式树。它语义上应视为不可变的值对象，`[Serializable]` 标记便于缓存与调试。简单却处于整条解析链的最前端。

## 心智模型

把它理解成**分词后的一个词素（lexeme）**。

- **职责**：表示一个词素——"这是什么类型的片段"（`TokenType`）加上"片段内容是什么"（`Value`）。
- **生命周期**：由 `Tokenizer.Tokenize` 在每次解析时创建；`TextObject.CacheTokens` 预热并缓存的就是这串 token，避免重复切词。`[Serializable]` 使其可随对象图序列化。mod 不直接 `new`。
- **所在层**：Localization 引擎的解析 / 语法层（词法单元）。
- **何时使用**：写自定义 tokenizer / parser，或调试分词结果（如打印 `TokenType` 与 `Value`）时。
- **何时不要用**：不要用 token 直接拼最终 UI 文本——应交由 parser + 语法处理器；不要修改已缓存 token 的 `Value`（可能影响复用与一致性）。
- **主要崩溃风险**：对 `TokenType` 误判（比如把 `Identifier` 当 `Text`）会让 `MBTextParser` 解析失败并调用 `MBTextManager.ThrowLocalizationError`。

## 依赖图

- 生产者：[Tokenizer](../Tokenizer)（`Tokenize` 创建它）。
- 消费者：[MBTextParser](../MBTextParser)（`GetSimpleToken` 按 `TokenType` 映射成表达式）。
- 下游：[MBTextModel](../MBTextModel) 保存解析出的表达式树。
- 缓存来源：[TextObject](../TextObject) 的 `CacheTokens`。

## 关键成员

### Value
`public string Value { get; set; }`
token 的文本内容：变量名（如 `"NAME"`）、数字（如 `"42"`）、原文片段或语言标记值。派生类型（如 `VariableExpression`）会进一步使用它。

### TokenType
`internal TokenType TokenType { get; set; }`
词素类型，决定 parser 如何解释 `Value`（文本、数字、标识符、语言标记、文本 id 等）。由 `Tokenizer` 在切词时赋值。

### Clone
`public MBTextToken Clone()`
复制 `TokenType` 与 `Value`，返回全新实例。用于需要保留原始 token 又想改动副本的场景（如 parser 内部构造新 token 时）。

## 最小真实示例

```csharp
// 引擎内部：把文本切成 token，再交给 parser 与语法处理器（MBTextToken 为 internal）
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{=my_text}Hello, {NAME}");
MBTextModel model = MBTextParser.Parse(tokens);
TextGrammarProcessor.Process(model, new TextProcessingContext(), null);
```

> 该示例展示内部管线；`MBTextToken`、`MBTextParser` 与 `MBTextManager.Tokenizer` 均非 public，mod 实际只需 `new TextObject(...).ToString()`。

## 导航

↑ [父级：localization API](../)
↔ [Tokenizer](../Tokenizer) · [MBTextParser](../MBTextParser) · [MBTextModel](../MBTextModel)
