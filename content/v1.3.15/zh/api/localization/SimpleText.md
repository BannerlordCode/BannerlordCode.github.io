---
title: "SimpleText"
description: "本地化语法树中的字面量叶子节点：保存一段固定文本，EvaluateString 直接原样返回该字面量，不做任何变量或函数替换。由 MBTextParser 在遇到纯文本 token 时创建，代表 {...} 标记之外的人眼可见文字。"
---

# SimpleText

**命名空间：** TaleWorlds.Localization.Expressions
**模块：** TaleWorlds.Localization
**类型：** `internal class SimpleText : TextExpression`
**基类：** `TextExpression`
**源文件路径：** `TaleWorlds.Localization.Expressions/SimpleText.cs`

## 概述

`SimpleText` 是 `TextExpression` 最简单的一个子类——字面量节点。它只持有构造时传入的一串文本，并把 `TokenType` 固定为 `TokenType.Text`。它重写的 `EvaluateString` 一句话就返回 `base.RawValue`，也就是那个字面量本身：**不做任何 `{TAG}` 变量替换、不调用函数**。在 `MBTextParser.GetSimpleToken` 里，当 token 类型是 `TokenType.Text` 时就 `new SimpleText(strValue)`——换句话说，模板里 `{...}` 标记之间那些"普通文字"最终都会变成 `SimpleText` 节点。`{NAME}`、`{?...}`、`{#...}` 之类会被解析成别的 `TextExpression` 子类，而不是 `SimpleText`。

## 心智模型

把它想成语法树里的"纯文本积木"：求值即原样吐出，零开销、零副作用。生命周期上，它由 `MBTextParser` 在解析普通文本片段时自动创建，挂进 `MBTextModel.RootExpressions` 或被其它节点（如 `MultiStatement`、`ConditionExpression`）包含；执行时由 `TextGrammarProcessor.Process` 遍历到它并直接取其 `RawValue`。它位于本地化"解析与语法"层的叶子端。

**何时使用**：代表一段固定可见文字，你不需要也不应该手动 `new SimpleText`——它是解析器内部产出物。如果你要在文本里嵌入"永远不变的词"，直接写进 `TextObject` 模板即可，解析器会替你生成 `SimpleText`。**何时不要使用**：不要把需要被替换的内容放进"看起来像字面量"的节点——`SimpleText` 里面的 `{TAG}` **不会被展开**，这是设计使然；需要变量请用 `VariableExpression`，需要函数用 `FunctionCall`，需要条件/选择用 `ConditionExpression`/`SelectionExpression`。

**主要风险**：`SimpleText` 一旦被构造并缓存进 `MBTextModel`，其 `RawValue` 应视为不可变；已共享的 AST 节点若被外部改写 `RawValue`，会影响所有持有该模型的 `TextObject`。另外因为 `EvaluateString` 直接返回字面量，若你在模板的纯文本段里误写了 `{HERO}` 却期望被替换，结果是原样输出 `{HERO}` 而非英雄名——变量替换只会发生在 `VariableExpression` 上。

## 依赖图

- [TextExpression](../TextExpression) — 基类，定义 `EvaluateString` 与 `RawValue`
- [MBTextParser](../MBTextParser) — 在 `GetSimpleToken` 中把 `Text` token 变成 `SimpleText`
- [MBTextModel](../MBTextModel) — 持有包含 `SimpleText` 的 `RootExpressions`
- [TextGrammarProcessor](../TextGrammarProcessor) — 遍历并调用其 `EvaluateString`
- [↑ 父级目录](../)

## 关键成员

### TokenType（重写）
`internal override TokenType TokenType => TokenType.Text`
固定返回 `TokenType.Text`，让 parser/processor 能识别这是一个字面量节点。

### 构造函数 SimpleText(string value)
`public SimpleText(string value)`
唯一构造入口：把传入的字面量写入 `base.RawValue`。`value` 就是该节点将一成不变输出的文本。

### EvaluateString(TextProcessingContext, TextObject)（重写）
`internal override string EvaluateString(TextProcessingContext context, TextObject parent)`
行为的全部：直接 `return base.RawValue`。它忽略 `context` 与 `parent`，不做任何变量、字段或函数解析——这正是"字面量"的语义。

## 最小真实示例

```csharp
// 纯文本叶子节点：EvaluateString 直接返回字面量，不替换占位符
SimpleText node = new SimpleText("Calradia");
TextProcessingContext context = new TextProcessingContext();
context.SetTextVariable("HERO", new TextObject("Calradia"));
string literal = node.EvaluateString(context, null);
MBTextModel model = MBTextParser.Parse(MBTextManager.Tokenizer.Tokenize("plain words"));
```

## 导航

- ↑ Parent: [localization 目录](../)
- ↔ Sibling: [TextExpression](../TextExpression)
- ↔ Sibling: [MBTextParser](../MBTextParser)
- ↔ Sibling: [MBTextModel](../MBTextModel)
