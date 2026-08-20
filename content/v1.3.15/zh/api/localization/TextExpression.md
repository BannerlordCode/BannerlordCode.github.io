---
title: "TextExpression"
description: "所有本地化表达式 AST 节点的抽象基类。声明了节点类型 TokenType 与求值方法 EvaluateString(TextProcessingContext, TextObject)，并提供一个把任意子节点求值为数字的辅助方法 EvaluateAsNumber，是 MBTextParser 生成的整棵语法树的公共父类型。"
---

# TextExpression

**命名空间：** TaleWorlds.Localization.Expressions
**模块：** TaleWorlds.Localization
**类型：** `internal abstract class TextExpression`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization.Expressions/TextExpression.cs`

## 概述

`TextExpression` 是本地化语法树（AST）的抽象基类——`MBTextParser` 每识别出一个语法结构（字面量、变量、函数调用、条件、选择、算术、比较……）都会构造一个 `TextExpression` 的子类实例。基类只约定了两件事：每个节点必须暴露 `TokenType`（节点种类的判别符），以及必须实现 `EvaluateString(TextProcessingContext context, TextObject parent)`——给定运行时上下文与所属 `TextObject`，返回该节点应输出的字符串。基类还持有 `RawValue`（该节点的原文文本，多数子类在构造时赋值），并提供了一个 `EvaluateAsNumber` 工具方法，供算术/比较类节点把任意子节点统一换算成整数。

## 心智模型

把它想成"语法树节点协议"：所有能出现在 `MBTextModel.RootExpressions` 里的东西都 `is TextExpression`。生命周期上，节点实例由 `MBTextParser.GetSimpleToken`（按 `TokenType` 把 token 映射成 `SimpleText`/`VariableExpression`/`TextIdExpression` 等）和各类 grammar 规则（条件、选择、字段、函数、算术）在解析阶段 `new` 出来，之后被塞进 `MBTextModel` 并缓存；执行阶段由 `TextGrammarProcessor.Process` 遍历并调用每个节点的 `EvaluateString`。它属于本地化"解析与语法"层的节点层。

**何时使用（扩展）**：只有在给引擎新增一种语法节点时才需要继承 `TextExpression` 并实现 `EvaluateString`/`TokenType`——对 mod 而言几乎不发生。**何时不要使用**：不要用 `TextExpression` 去"拼接最终文本"或"替换变量"；那是 `TextGrammarProcessor` + `TextProcessingContext` 的职责，普通文本应直接用 `TextObject` 与内置节点类型（`SimpleText`、`FunctionCall`、`SelectionExpression` 等）。

**主要风险**：`EvaluateString` 在执行 `TextObject.ToString()` 链路时被递归调用，且可传入 `null` 的 `parent`（合法，但此时只能解析上下文变量、读不到 `TextObject` 上的字段）。节点内若要读变量，必须走 `TextProcessingContext`（大小写不敏感），直接读 `RawValue` 不会做替换。`EvaluateAsNumber` 对非数字、非 `NumeralExpression` 的节点会回退到"看 `RawValue` 是否为空"返回 0 或 1，行为微妙，用它做算术前要确保子节点是数字语义。已缓存/被多个 `TextObject` 共享的 AST 节点应视为不可变——事后改 `RawValue` 会波及所有持有者。

## 依赖图

- [SimpleText](../SimpleText) — 最基础的字面量叶子节点
- [MBTextModel](../MBTextModel) — 持有 `RootExpressions`（一组 `TextExpression`）
- [MBTextParser](../MBTextParser) — 负责构造各类 `TextExpression` 子类
- [Tokenizer](../Tokenizer) — 上游切词，token 类型驱动节点创建
- [TextGrammarProcessor](../TextGrammarProcessor) — 遍历并调用各节点的 `EvaluateString`
- [↑ 父级目录](../)

## 关键成员

### TokenType（抽象属性）
`internal abstract TokenType TokenType { get; }`
每个子类必须返回自己的节点种类（如 `SimpleText` 返回 `TokenType.Text`、`FunctionCall` 返回 `TokenType.FunctionCall`）。它是 parser 识别节点、调度求值的核心判别符。

### RawValue（属性）
`internal string RawValue { get; set; }`
该节点的原始文本。`SimpleText` 在构造时把字面量写进 `base.RawValue`；多数节点都保留原文以便报错与 `EvaluateAsNumber` 回退判断。视为节点的不可变内容（尤其在被共享后）。

### EvaluateString(TextProcessingContext, TextObject)（抽象方法）
`internal abstract string EvaluateString(TextProcessingContext context, TextObject parent)`
**所有子类必须实现**的核心求值入口：根据 `context` 中的变量/函数与 `parent` 上的字段，算出本节点应输出的字符串。`TextGrammarProcessor.Process` 对每个根表达式调用的就是它；`SimpleText` 的实现直接返回 `RawValue`，而 `FunctionCall` 会转而调用 `context.CallFunction`。

### EvaluateAsNumber(TextExpression, TextProcessingContext, TextObject)（工具方法）
`internal int EvaluateAsNumber(TextExpression exp, TextProcessingContext context, TextObject parent)`
把任意子节点统一换算成整数：若 `exp` 是 `NumeralExpression` 则调用其 `EvaluateNumber`；否则 `int.TryParse(exp.EvaluateString(...))`；都失败且 `RawValue == null` 返回 0，空串返回 0，非空返回 1。算术、比较类节点用它把操作数规整为数值。

## 最小真实示例

```csharp
// 直接构造并求值 AST 节点（引擎内部用法；mod 通常走 TextObject.ToString()）
TextExpression literal = new SimpleText("Calradia");
TextProcessingContext context = new TextProcessingContext();
context.SetTextVariable("HERO", new TextObject("Calradia"));
int asNumber = literal.EvaluateAsNumber(literal, context, null);
string value = literal.EvaluateString(context, null);
```

## 导航

- ↑ Parent: [localization 目录](../)
- ↔ Sibling: [SimpleText](../SimpleText)
- ↔ Sibling: [MBTextModel](../MBTextModel)
- ↔ Sibling: [FunctionCall](../FunctionCall)
