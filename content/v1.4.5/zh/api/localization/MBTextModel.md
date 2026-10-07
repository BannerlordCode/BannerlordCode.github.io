---
title: "MBTextModel"
description: "表达式树的根容器：一个 MBList<TextExpression>，没有任何删除或查询接口——只能顺序遍历、追加，没有 Remove、没有索引器。"
---

# MBTextModel

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public class MBTextModel`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/MBTextModel.cs`

## 概述

`MBTextModel` 是 17 行、4 个成员的表达式树容器，**唯一的成员数据是一个 `MBList<TextExpression> _rootExpressions`**。它由 `MBTextParser.ParseInternal` 在 `MBTextParser.cs:624` 创建，之后 `Statements()` 逐个把根节点 `AddRootExpression` 进去。**全树只有一个构造点。**

它的公开面小得出奇：`RootExpressions`（`internal`）、`AddRootExpression`（`internal`）、构造函数（`internal`）。**类本身是 `public`，但没有任何公开成员**——`MBTextManager.SetFunction`（`MBTextManager.cs:216`）是唯一把它交给外部世界的通道，而那条通道的形参类型也是 `MBTextModel` 却没有任何公开操作方法。**换句话说：你可以持有它，但你不改它。**

## 心智模型

把它当成**「只追加的根节点清单」**。三条推论：

第一，**它不是树，是树的根列表。** `TextGrammarProcessor.Process`（`TextGrammarProcessor.cs:12`）直接 `foreach (TextExpression rootExpression in dataRepresentation.RootExpressions)`——**根之间是并列关系，互不引用。** 「一条文本有几个根」取决于 `MBTextParser.GetRootExpressions`（`:150-163`）收集到几个：不收多个时把它们塞进一个 `MultiStatement`（`:162`）。

第二，**没有 Remove、没有索引器、没有 Count 的公开出口。** 想改内容只有 `AddRootExpression` 一条路。**函数体一旦注册进 `TextContext`，就没有 API 能撤回或改写它**——`TextContext.SetFunction`（`TextProcessingContext.cs:339`）是 `_functions[functionName] = functionBody;`，同名再注册一次就是覆盖，而唯一的「清空」是 `MBTextManager.ResetFunctions()`（`:222` → `TextProcessingContext.cs:344`）把整个字典清掉。

第三，**同一个实例会被反复求值。** `TextProcessingContext.CallFunction` 第 324 行遍历 `functionBody.RootExpressions` 逐个 `EvaluateString`。**模型是编译产物，不是一次性结果**——这与 [TextObject](../TextObject/) 每次 `ToString()` 都重新分词解析形成对照：函数的模型只解析一次，之后每次调用都只做求值。

边界：**类 `public` 但成员全 `internal`**，编译期能引用类型、不能调用任何成员。

## 如何使用

**怎么拿到它**：三个入口，全都不是你能直接控制的。① `MBTextParser.ParseInternal`（`MBTextParser.cs:620-628`）为每条 `TextObject` 建一个；② `MBTextManager.SetFunction`（`MBTextManager.cs:216-220`）为你注册的函数体建一个；③ `TextProcessingContext.cs:49` 与 `:89` 为嵌套求值建临时模型。

注册一个函数体，然后每次调用复用同一个模型：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// SetFunction 内部：MBTextParser.Parse(Tokenizer.Tokenize(functionBody)) -> new MBTextModel()
MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");

TextObject note = new TextObject("{=my_note}A {myTier(1)} banner and a {myTier(3)} banner.");
note.SetTextVariable("HERO", Hero.MainHero.Name);
Debug.Print(note.ToString(), 0);
```

**用它最容易踩的一条**：**同名 `SetFunction` 是覆盖，不是追加；而 `ResetFunctions` 清的是全部。** `TextProcessingContext.SetFunction`（`TextProcessingContext.cs:339-342`）就是一次字典赋值。**两个 mod 各注册一个同名函数时，后加载的那个静默覆盖先加载的——没有任何冲突检测或告警。** 想避免就给自己的函数名加前缀。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_rootExpressions` | `internal MBList<TextExpression> _rootExpressions = new MBList<TextExpression>()` | **本类型唯一的状态。** 字段初始化时就建好空列表，**没有任何路径能把它换成 null**。两个消费点：`AddRootExpression` 追加，以及 `TextGrammarProcessor.cs:12` 的 `foreach`。 |
| `RootExpressions` | `internal MBReadOnlyList<TextExpression> RootExpressions => _rootExpressions` | 只读视图。**消费点：`TextGrammarProcessor.cs:12` 遍历它拼结果；`TextProcessingContext.cs:324` 遍历它求值函数体。** 返回 `MBReadOnlyList` 而不是 `IReadOnlyList`——引擎自有泛型，避免每次取值都装箱。 |
| `MBTextModel()` | 隐式无参构造（`internal` 效果） | 类没有显式构造器，编译器生成默认无参。**可访问性跟随类本身（`public`），但 `MBTextParser` 是 `internal`，所以实际只有 `internal` 代码能 `new`。** 全树唯一调用点 `MBTextParser.cs:624`，紧跟在 `LoadSequenceStack` 与 `UpdateLookAheads` 之后、`Statements()` 之前。 |
| `AddRootExpression` | `internal void AddRootExpression(TextExpression newExp)` | 唯一的写入口，追加一个根节点，**不做去重、不判空、不设上限**。**唯一调用点是 `MBTextParser.cs:121`**（在 `Statements()` 的循环里）。**传 null 不会被拦下**，随后 `TextGrammarProcessor.cs:21` 的 null 分支会走 `MBTextManager.ThrowLocalizationError("Exp should not be null!")`。 |

## 真实示例

同一个函数体模型被多次调用——证明它是编译产物而不是一次性结果：

```csharp
using TaleWorlds.Localization;

MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");

TextObject row = new TextObject("{=my_row}[{myTier(1)}][{myTier(2)}][{myTier(3)}]");
Debug.Print("before: " + row.ToString(), 0);

// 再求值一次：模型没重建，只是再遍历一次 RootExpressions
Debug.Print("after : " + row.ToString(), 0);
```

用 `ResetFunctions` 演示「模型只能整体清空、不能单独撤回」：

```csharp
using TaleWorlds.Localization;

MBTextManager.SetFunction("myGone", "{#$1}kept{?}gone{\\?}");
TextObject probe = new TextObject("{=my_probe}before={myGone(1)}");
Debug.Print(probe.ToString(), 0);

MBTextManager.ResetFunctions();   // TextProcessingContext.cs:344 -> _functions.Clear()

// 函数没了：CallFunction 第 322-332 行走 array[0] 分支，返回第一个实参
Debug.Print(probe.ToString(), 0);
```

## 风险与边界

- **类 `public`、成员全 `internal`。** **编译期能写 `MBTextModel` 这个类型名，写不出任何一个成员调用。** 唯一公开入口是 `MBTextManager.SetFunction`（`MBTextManager.cs:216`），而它的形参类型同样不可操作。
- **只能追加。** 没有 `Remove`、没有索引器、没有公开 `Count`。**要改内容只有「同名覆盖」或「整体清空」两条路。**
- **同名覆盖是静默的。** `TextProcessingContext.cs:341` 一次字典赋值，没有冲突检测。
- **`AddRootExpression(null)` 不会立刻失败。** 追加成功，随后在 `TextGrammarProcessor.cs:19` 走 `ThrowLocalizationError("Exp should not be null!")`——**错误点在求值期，不在构建期。**
- **求值期遍历期间不能改。** `TextGrammarProcessor.cs:12` 与 `TextProcessingContext.cs:324` 都是 `foreach`，**在遍历中调用 `AddRootExpression` 会抛集合修改异常**——引擎自身不会这么做，但反射或自定义处理器可能。
- **模型与语言无关。** `MBTextModel` 里存的是已分词已归约的结构，**不缓存语言**；语言相关的展开在 `MBTextManager.cs:111` 的 `_languageProcessor.Process` 那一步。切语言不需要重建模型。

## 参见

- 唯一的公开出口：[MBTextManager](../MBTextManager/) 的 `SetFunction`（`:216`）与 `ResetFunctions`（`:222`）
- 构造与填充：[MBTextParser](../MBTextParser/)（`:624` 建模型、`:121` 追加、`GetRootExpressions` `:150`）
- 消费者：[TextGrammarProcessor](../TextGrammarProcessor/)（`:12` 遍历拼结果）、[TextProcessingContext](../TextProcessingContext/)（`:324` 求值函数体、`:339` 注册）
- 存的东西：[TextExpression](../TextExpression/)（根节点的契约）、[MultiStatement](../MultiStatement/)（多根被折叠成的那个节点）
- 上游分词：[Tokenizer](../Tokenizer/)、[MBTextToken](../MBTextToken/)、[TokenType](../TokenType/)
- 桶首页：[localization API 分区](../)