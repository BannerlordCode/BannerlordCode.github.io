---
title: "MBTextParser"
description: "MBTextParser 是本地化文本的表达式解析器：把 Tokenizer 产出的 MBTextToken 流编译成 MBTextModel 表达式树（函数、条件、选择、算术、变量等），供 TextGrammarProcessor 求值。"
---

# MBTextParser

**命名空间：** TaleWorlds.Localization.TextProcessor
**模块：** TaleWorlds.Localization
**类型：** `internal class MBTextParser`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization/TextProcessor/MBTextParser.cs`

## 概述

`MBTextParser` 是本地化语法的"编译器前端"。它接收 `Tokenizer` 切好的 `List<MBTextToken>`，用基于栈的递归下降算法识别文本片段、变量、函数调用、条件 `{?...}`、选择 `{?...|...}`、字段 `{...}`、算术与比较表达式，最终输出一棵 `MBTextModel`（`RootExpressions` 列表）。这段 AST 之后由 `TextGrammarProcessor` 对照 `TextProcessingContext` 里的变量与函数求值。它是 `internal` 类型，mod 一般不直接调用，但理解它能帮你写对本地化 XML 里的表达式语法。

## 心智模型

把它理解成**把线性 token 序列变成可求值表达式树的翻译器**。

- **职责**：消费 `MBTextToken` 流，产出 `MBTextModel` 表达式树；自身不求值，只负责解析结构。
- **生命周期**：通过 `[ThreadStatic]` 单例 `_instance` 复用——`Parse` 首次调用时 `new MBTextParser()`，之后复用并 `Clear()` 旧状态，每个线程各持一份。它由 `MBTextManager.Process`（渲染文本）和 `MBTextManager.SetFunction`（注册函数）在需要解析时调用，mod 不需要也不应持有它。
- **所在层**：Localization 引擎的解析 / 语法层（词法之后、求值之前）。
- **何时使用**：仅在你要完全自定义文本管线、或写工具遍历/校验表达式树时才碰它；绝大多数 mod 应直接改本地化 XML，而不是替换 parser。
- **何时不要用**：不要用它直接拼 UI 文本——那应该走 `TextObject` + `MBTextManager`；不要假设它的 token 语法与 C# 一致（例如条件/选择用 `{}` 包裹，而非 `()`）。
- **主要崩溃风险**：表达式语法错误会调用 `MBTextManager.ThrowLocalizationError` 或 `Debug.FailedAssert`（典型信息 "Can not parse the text"）；前瞻 token 类型不匹配时 `DiscardToken(TokenType)` 也会抛错，进而让整条文本解析失败。

## 依赖图

- 上游：[Tokenizer](../Tokenizer) 产出 `MBTextToken`，[MBTextToken](../MBTextToken) 是它消费的词素。
- 下游：[MBTextModel](../MBTextModel) 是它的解析产物，[TextGrammarProcessor](../TextGrammarProcessor) 负责求值。
- 调用方：[MBTextManager](../MBTextManager) 的 `Process` 与 `SetFunction` 内部调用它。
- 表达式类型见 [TextObject](../TextObject) 相关语法说明。

## 关键成员

### Parse（唯一公开入口）
`internal static MBTextModel Parse(List<MBTextToken> tokens)`
把 token 列表解析为 `MBTextModel`。内部流程：新建/复用单例 → `LoadSequenceStack` 把 token 逆序压栈 → `UpdateLookAheads` 建立 1/2/3 个前瞻 → `Statements` 逐条识别根表达式并 `AddRootExpression` → `DiscardToken(SequenceTerminator)` 校验结束。**副作用**：清空并复用线程静态实例的旧状态；多根表达式会被包进 `MultiStatement`。**调用时机**：每次文本需要求值前由引擎调用，mod 不直接调用。

### LookAheadFirst / LookAheadSecond / LookAheadThird
`internal TextExpression LookAheadFirst { get; }` 等同族
语法分析的 1/2/3 个 token 前瞻，供各规则判断接下来该套用哪条文法（如算术、比较、函数调用）。

### GetSimpleToken
`private TextExpression GetSimpleToken(TokenType tokenType, string strValue)`
把单个 token 映射成对应的 `TextExpression` 子类：`Text`→`SimpleText`、`Number`→`SimpleNumberExpression`、`Identifier`→`VariableExpression`、`LanguageMarker`→`LangaugeMarkerExpression`、`TextId`→`TextIdExpression`、`QualifiedIdentifier`→`QualifiedIdentifierExpression` 等。

### 文法规则（private）
`CheckSimpleStatement` / `CheckConditionalStatement` / `CheckSelectionStatement` / `CheckFieldStatement` 与各 `Consume*`（如 `ConsumeFunction`、`ConsumeComparisonExpression`、`ConsumeOuterAritmeticExpression`）实现函数、括号、数组访问、算术、比较、条件与选择语法的识别，错误时通过 `MBTextManager.ThrowLocalizationError` 上报。

## 最小真实示例

```csharp
// 引擎内部：把分词结果交给 MBTextParser 编译成表达式树（MBTextParser 为 internal）
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{=my_text}You have {COUNT} gold.");
MBTextModel model = MBTextParser.Parse(tokens);
TextGrammarProcessor.Process(model, MBTextManager.TextContext, null);
```

> 上述为引擎内部调用路径的示意。`MBTextParser` 与 `MBTextManager.Tokenizer`/`TextContext` 均非 public，mod 实际只需构造 `TextObject` 并调用 `ToString()`，解析会自动发生。

## 导航

↑ [父级：localization API](../)
↔ [Tokenizer](../Tokenizer) · [MBTextModel](../MBTextModel) · [TextGrammarProcessor](../TextGrammarProcessor)
