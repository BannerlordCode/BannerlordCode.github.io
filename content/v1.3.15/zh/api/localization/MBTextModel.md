---
title: "MBTextModel"
description: "MBTextModel 是 MBTextParser 解析本地化文本后得到的表达式树容器：以 RootExpressions 列表保存顶层 TextExpression，供 TextGrammarProcessor 求值。"
---

# MBTextModel

**命名空间：** TaleWorlds.Localization.TextProcessor
**模块：** TaleWorlds.Localization
**类型：** `public class MBTextModel`
**基类：** System.Object
**源文件路径：** `TaleWorlds.Localization/TextProcessor/MBTextModel.cs`

## 概述

`MBTextModel` 是本地化语法解析的产物——一棵表达式树的数据容器。它本身不含求值逻辑，只是把 `MBTextParser` 识别出的顶层表达式（`SimpleText`、`ConditionExpression`、`SelectionExpression`、`FieldExpression` 等 `TextExpression` 子类）收进 `RootExpressions` 列表。`TextGrammarProcessor.Process` 拿着这个模型和 `TextProcessingContext` 里的变量/函数，递归算出最终字符串。理解它有助于你读懂一条复杂本地化文本（条件、选择、函数嵌套）在内存中的结构。

## 心智模型

把它理解成**解析后的文本中间表示（AST）的容器**。

- **职责**：承载 `MBTextParser` 输出的表达式树，供语法处理器消费；不负责求值，也不负责查译文。
- **生命周期**：由 `MBTextParser.ParseInternal` 在每次解析时新建（`_queryModel = new MBTextModel()`），通过 `AddRootExpression` 逐条加入顶层表达式；解析完成即冻结，无持久状态。mod 一般不直接构造它。
- **所在层**：Localization 引擎的解析 / 语法层（中间表示）。
- **何时使用**：写调试 / 分析工具遍历表达式树，或完全自定义文本管线时。日常文本走 `TextObject` 即可。
- **何时不要用**：不要把它当模板缓存复用——每次文本解析都生成新实例；不要把变量直接塞进它（变量存放在 `TextProcessingContext`，与模型分离）。
- **主要崩溃风险**：`RootExpressions` 只读暴露内部 `MBList`，若外部持有引用并跨线程/跨解析修改，会破坏后续求值；表达式递归过深可能导致栈溢出。

## 依赖图

- 生产者：[MBTextParser](../MBTextParser)（调用 `AddRootExpression` 构建它）。
- 消费者：[TextGrammarProcessor](../TextGrammarProcessor)（`Process(model, context, parent)` 对它求值）。
- 调用方：[TextObject](../TextObject) 经 `MBTextManager` 间接产生并消费它。
- 词素来源：[MBTextToken](../MBTextToken)。

## 关键成员

### RootExpressions
`internal MBReadOnlyList<TextExpression> RootExpressions { get; }`
只读列出顶层表达式。只有一条根表达式时直接返回该表达式；多条时由 `MultiStatement` 包裹成一个序列。

### AddRootExpression
`internal void AddRootExpression(TextExpression newExp)`
向 `_rootExpressions` 追加一个顶层表达式；由 parser 在 `Statements`/`GetRootExpressions` 识别根表达式时调用。mod 不直接调用。

### _rootExpressions
`internal MBList<TextExpression> _rootExpressions`
实际的存储字段（内部可变列表），`RootExpressions` 是它的只读视图。

## 最小真实示例

```csharp
// 引擎内部：解析一段带选择的文本，得到 MBTextModel 表达式树（MBTextParser 为 internal）
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{=q}You {?PLURAL}{COUNT?have|has} gold.");
MBTextModel model = MBTextParser.Parse(tokens);
TextGrammarProcessor.Process(model, MBTextManager.TextContext, null);
```

> 该示例展示内部管线：`MBTextParser` 与 `MBTextManager.Tokenizer`/`TextContext` 均非 public，mod 实际只需 `new TextObject(...).ToString()`。

## 导航

↑ [父级：localization API](../)
↔ [MBTextParser](../MBTextParser) · [TextGrammarProcessor](../TextGrammarProcessor) · [MBTextToken](../MBTextToken)
