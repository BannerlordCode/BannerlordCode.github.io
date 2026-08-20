---
title: "TextGrammarProcessor"
description: "执行 MBTextParser 生成的本地化表达式树：遍历 MBTextModel 的每个根表达式并调用其 EvaluateString，按 TextProcessingContext 中的变量与函数展开，拼接出最终语言字符串。"
---

# TextGrammarProcessor

**命名空间：** TaleWorlds.Localization.TextProcessor
**模块：** TaleWorlds.Localization
**类型：** `public static class TextGrammarProcessor`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization.TextProcessor/TextGrammarProcessor.cs`

## 概述

`TextGrammarProcessor` 是本地化语法管线的"执行器"。它本身不解析文本、也不切词——它拿到的是 `MBTextParser.Parse` 已经构造好的 `MBTextModel`（一棵由 `TextExpression` 子类组成的 AST），然后遍历 `RootExpressions`，对每一个非空根表达式调用 `EvaluateString(context, parent)`，把返回字符串追加到一块复用的 `MBStringBuilder` 中，最终 `ToStringAndRelease` 得到完整结果。如果某个根表达式为 `null`，它会通过 `MBTextManager.ThrowLocalizationError("Exp should not be null!")` 报错而不是崩溃。变量替换、函数调用、`{#...}` 选择、`{?...}` 条件分支实际上都发生在各 `TextExpression` 节点的 `EvaluateString` 内部，本类只负责"逐节点求值并拼接"。

## 心智模型

把它想成"语法树求值器"：输入一棵表达式树和一个运行时上下文，输出一段已经展开变量的字符串。生命周期上，树的节点由 `MBTextParser` 在解析阶段构建，而 `TextGrammarProcessor.Process` 由 `MBTextManager.Process` 在渲染阶段调用（顺序为 `Tokenizer.Tokenize` → `MBTextParser.Parse` → `TextGrammarProcessor.Process` → 当前语言的 `LanguageSpecificTextProcessor.Process`）。它属于本地化"解析与语法"层的最末端执行环节。

**何时使用**：几乎从不直接调用。mod 渲染文本的正确入口是 `TextObject.ToString()` / `MBTextManager` 的公开流程；只有在写引擎级工具或需要离线复现解析结果时才碰 `Process`。**何时不要使用**：不要为了"替换一个变量"而手动 new 一个 `MBTextModel` 再调 `Process`——那会绕过 `TextObject` 的缓存与 `{=id}` 取译文逻辑，得到错误结果；用 `TextObject.SetTextVariable` + `ToString()` 代替。

**主要风险**：`Process` 内部对每个根表达式调用 `EvaluateString`，求值链会递归地读取 `TextProcessingContext` 里的变量和函数；若上下文没设置某变量，相关节点会产出 `ERROR: ... variable has not been set before.` 之类的文本而不是抛异常，因此本地化"看起来没替换"的 bug 很容易静默通过。另外 `MBTextParser` 实例是 `[ThreadStatic]` 的，但 `Process` 本身无静态可变状态，可在多线程各自持不同 `MBTextModel` 时安全并发；然而一旦某个 `MBTextModel` 的表达式树被缓存并跨多个 `TextObject` 共享，事后修改树中节点的 `RawValue` 会影响所有持有者，应避免修改已共享的 AST。

## 依赖图

- [MBTextParser](../MBTextParser) — 上游：把 token 流解析成 `MBTextModel` 表达式树
- [Tokenizer](../Tokenizer) — 上游：先把原始文本切成 `MBTextToken`
- [MBTextModel](../MBTextModel) — `Process` 的输入，持有 `RootExpressions`
- [TextProcessingContext](../TextProcessingContext) — 求值时的变量/函数来源
- [MBTextManager](../MBTextManager) — 真正调用 `Process` 的引擎入口
- [↑ 父级目录](../)

## 关键成员

### Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)
`public static string Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)`

- **用途**：遍历 `dataRepresentation.RootExpressions`，对每棵非空根表达式求值并拼接为最终字符串；`parent` 允许 AST 节点回看所属 `TextObject` 上挂的变量与字段。
- **副作用**：本身只构造/释放一块 `MBStringBuilder`，不修改入参；但递归的 `EvaluateString` 会通过 `context` 解析变量与函数，可能触发 `MBTextManager.ThrowLocalizationError`（例如遇到 `null` 根表达式）。
- **调用时机**：由 `MBTextManager.Process` 在 `TextObject` 渲染链路中调用，位于 `MBTextParser.Parse` 之后、`LanguageSpecificTextProcessor.Process` 之前；不要从 mod 热路径直接调用。

## 最小真实示例

```csharp
// 引擎内部管线：先切词 -> 解析成表达式树 -> 由 TextGrammarProcessor 执行
// （mod 实际应走 TextObject.ToString()；此处展示底层真实调用序列）
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{=greet}Hello, {NAME}");
MBTextModel model = MBTextParser.Parse(tokens);
TextProcessingContext context = new TextProcessingContext();
context.SetTextVariable("NAME", new TextObject("Calradia"));
string result = TextGrammarProcessor.Process(model, context);
```

## 导航

- ↑ Parent: [localization 目录](../)
- ↔ Sibling: [MBTextParser](../MBTextParser)
- ↔ Sibling: [Tokenizer](../Tokenizer)
- ↔ Sibling: [MBTextModel](../MBTextModel)
