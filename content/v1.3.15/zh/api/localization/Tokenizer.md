---
title: "Tokenizer"
description: "本地化句子的底层词法分析器：用 44 条正则 TokenDefinition 把原始文本（含 {=id}、{TAG}、{?...}、{#...} 等标记）切成 MBTextToken 列表，供 MBTextParser 进一步解析。"
---

# Tokenizer

**命名空间：** TaleWorlds.Localization.TextProcessor
**模块：** TaleWorlds.Localization
**类型：** `internal class Tokenizer`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization.TextProcessor/Tokenizer.cs`

## 概述

`Tokenizer` 是本地化管线的第一道关卡——词法分析器（lexer）。它的构造函数一次性装配好 44 条 `TokenDefinition`（每条绑定一个 `TokenType` 与正则模式，例如 `{=...}` → `TextId`、`{?` → `ConditionStarter`、`{#` → `SelectionStarter`、`{@` → `FieldStarter`、运算符与标识符等）。公开方法 `Tokenize(string)` 逐个字符扫描文本：遇到 `{` 就定位到匹配的 `}`（`FindExpressionEnd` 按嵌套深度找结束位置），再用 `FindTokenMatches` 让所有 `TokenDefinition` 尝试从当前位置匹配，命中就产出一个带 `TokenType` 和原文 `Value` 的 `MBTextToken`；普通文本则作为 `TokenType.Text` 的 token 输出。末尾会追加一个 `TokenType.SequenceTerminator` 作为结束哨兵。若某段 `{...}` 无法匹配任何定义，它会调用 `MBTextManager.ThrowLocalizationError` 并通过 `mbTokenMatches.Clear()` 把整段退化为一个 `Text` token——即"解析不了就当普通文本"，不会抛异常。

## 心智模型

把它想成"扫描仪"：把一段人类可读的本地化模板拆成离散的 token，让后面的 `MBTextParser` 能像吃糖葫芦一样逐个消费。`Tokenizer` 实例由 `MBTextManager` 以 `internal static readonly Tokenizer Tokenizer` 持有并全局复用，本身不在每次调用时分配状态——44 条定义只在构造时建一次，`Tokenize` 只读写传入的 `List<MBTextToken>`。

**何时使用**：mod 几乎从不直接调用；它在 `TextObject.CacheTokens`、`MBTextManager.Process`、`MBTextManager.ProcessTextForVocalization` 以及 `TextProcessingContext` 解析变量时被自动使用。**何时不要使用**：不要在运行时手写 `new Tokenizer()` 然后逐 token 处理文本来"自己实现本地化"——那会漏掉 `MBTextParser` 的语法规则与 `TextGrammarProcessor` 的求值；正确做法是把模板交给 `TextObject` 或 `MBTextManager`。

**主要风险**：`Tokenizer` 是无状态可重入的（不保留跨调用状态），但它是被静态共享的单一实例，因此不要依赖任何"每次调用的可变字段"。更大的坑是它对无法识别的 `{...}` 段是**静默降级**为 `Text` 而非报错——括号不匹配或写了不存在的标记时，本地化不会崩溃，但那段文本会原样输出，bug 极难察觉。务必保证 XML/代码里的 `{...}` 标记闭合且拼写正确。

## 依赖图

- [MBTextToken](../MBTextToken) — `Tokenize` 产出的元素类型
- [TokenDefinition](../TokenDefinition) — 每条切词规则（正则 + TokenType + 优先级）
- [MBTextParser](../MBTextParser) — 下游：消费 token 列表构建表达式树
- [MBTextManager](../MBTextManager) — 持有并复用唯一的 `Tokenizer` 实例
- [↑ 父级目录](../)

## 关键成员

### Tokenize(string text)
`public List<MBTextToken> Tokenize(string text)`

- **用途**：把原始本地化字符串切成 `MBTextToken` 列表。先由 `FindTokenMatchesAndText` 处理 `{...}` 内外的文本，再追加一个 `SequenceTerminator`。
- **副作用**：对无法匹配的表达式段调用 `MBTextManager.ThrowLocalizationError`，并 `Clear` 当前 token 列表、把该段整体作为 `Text` token 返回（静默降级）。
- **调用时机**：`MBTextManager` 在渲染 `TextObject`、解析函数体、解析变量值时调用；`TextObject.CacheTokens` 预热缓存的也是它。

### 内部切词辅助（FindExpressionEnd / FindTokenMatches）
- **FindExpressionEnd**：从 `{` 后开始按 `{`/`}` 嵌套计数找到匹配的结束 `}`，保证表达式边界正确。
- **FindTokenMatches**：在一段 `{...}` 内让 44 条 `TokenDefinition` 按 `CheckMatch` 逐个尝试匹配，返回是否全部识别；只要有未识别符号就报错。

### 44 条 TokenDefinition 与 TokenType
构造函数里写死 44 条规则，覆盖 `TextId`、`ConditionStarter/Finalizer`、`SelectionStarter/Finalizer`、`FieldStarter`、`LanguageMarker`、`FunctionIdentifier`、`FunctionParam`、`Identifier`、`Number`、运算符（`Plus/Minus/Multiply/Divide`）、比较符（`Equals/NotEquals/...`）、`OpenBraces/CloseBraces` 等，是整条语法的基础词表。

## 最小真实示例

```csharp
// 词法分析：把模板切成 token 流（引擎内部用法；mod 一般用 TextObject.ToString()）
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{=greet}Hello, {NAME}");
MBTextModel model = MBTextParser.Parse(tokens);
string text = TextGrammarProcessor.Process(model, new TextProcessingContext());
```

## 导航

- ↑ Parent: [localization 目录](../)
- ↔ Sibling: [MBTextToken](../MBTextToken)
- ↔ Sibling: [MBTextParser](../MBTextParser)
- ↔ Sibling: [TokenDefinition](../TokenDefinition)
