---
title: "SimpleExpression"
description: "花括号组的包装节点：你在 TextObject 里写的每个 {HERO.NAME}、{?HOUR > 1}，运行时都被它裹一层——但花括号里不是算术表达式时它不会出现。"
---

# SimpleExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class SimpleExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/SimpleExpression.cs`

## 概述

`SimpleExpression` 是 22 行、3 个成员的透明包装节点，**全树只有一个构造点**：`MBTextParser.cs:221`，在 `CheckSimpleStatement()` 里。它包裹的正是你在 `TextObject.Value` 里写的那些花括号内容——`{HERO.NAME}`、`{HOUR}`、`{?HOUR > 1}` 的条件部分、`{#0}` 的下标部分，只要 `MBTextParser.cs:491` 的 `IsArithmeticExpression` 判定通过，就整体变成一个 `SimpleExpression`。

它的 `EvaluateString`（`SimpleExpression.cs:17-20`）直接 `return _innerExpression.EvaluateString(context, parent)`——**输出与内层节点完全一致，一个字符都不多不少。** 所以它的存在意义不在输出，而在结构与溯源：把花括号组标成「一个整体根节点」，以及在构造时把内层的 `RawValue` 快照一份到自己身上，让 `EvaluateAsNumber` 的真假兜底有原文可用。

## 心智模型

把它当成**「花括号留下的壳」**。三条推论：

第一，**壳只在花括号里是算术表达式时才出现。** `CheckSimpleStatement` 第 219-229 行是个 if/else：条件成立才 `new SimpleExpression(LookAheadFirst)` 并 `PushToken`；**条件不成立时第 228 行直接 `DiscardToken(TokenType.CloseBraces)`——花括号被丢弃，里面已解析出的节点留在符号栈上**，随后由 `GetRootExpressions()`（`MBTextParser.cs:150`）当作独立根表达式收走。**所以 `{不是表达式的东西}` 的花括号会消失，内容照常输出。**

第二，**`RawValue` 是构造那一刻的快照。** 第 14 行 `base.RawValue = innerExpression.RawValue;` 是值拷贝。之后内层节点再变也不会同步——实践中内层在构造后确实不再被改，所以这只是「别指望它是引用」。

第三，**它是根节点白名单的一员。** `MBTextParser.cs:126` 的 `IsRootExpression` 只认 8 类：`Text`、`SimpleExpression`、`ConditionalExpression`、`TextId`、`SelectionExpression`、`MultiStatement`、`FieldExpression`、`LanguageMarker`。**注意 `VariableExpression` 与 `QualifiedIdentifierExpression` 都不在名单里**——它们不能直接当根，必须先被花括号裹成 `SimpleExpression`。这解释了为什么 `{HERO}` 这种写法不是可有可无的。

边界：**`internal` 且无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：你不写它。`TextObject.Value` 里写 `{NAME}`，`MBTextParser.cs:211` 识别到 `OpenBraces` → `DiscardToken` → 第 215 行 `DoExpressionRules()` 把 `{` 与 `}` 之间能算的东西解析成节点 → 第 219 行判定 → 第 221 行包成 `SimpleExpression` → 第 224 行压栈。引擎里的真实写法见 `FactionHelper.cs:634`：`{=jGIw0Xku}{HERO.NAME} has just escaped from {?HERO.GENDER}her{?}his{\?} captors...`。

对应的一行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// {HERO.NAME} 就是花括号里的一个 SimpleExpression，HERO.NAME 是限定名取值。
// SetCharacterProperties 来自 TaleWorlds.CampaignSystem.TextObjectExtensions（:9），
// 默认 includeDetails: false，只绑 NAME / GENDER / LINK
TextObject line = new TextObject("{=my_mod_line}{HERO.NAME} has just escaped from {?HERO.GENDER}her{?}his{\\?} captors.");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：`{?条件}真{?}假{\?}` 这种写法里，**花括号里的条件若不是 `IsArithmeticExpression` 名单上的类型，`{?}` 之后的分支仍然会被保留，但花括号本身消失**——写成 `{?不是变量也不是数字}` 时你得到的是把「真」与「假」两段文字都输出（`CheckConditionalStatement` 第 285 行直接 `Debug.FailedAssert` 并 `return false`，整条文法放弃）。**条件写错类型的表现是断言失败 + 整段条件语法被跳过，不是「条件为假」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_innerExpression` | `private TextExpression _innerExpression` | 被包住的那个节点。字段在第 7 行声明，**类型是抽象基类**，所以它可以是 `VariableExpression`（`{NAME}`）、`QualifiedIdentifierExpression`（`{A.B}`）、`ArithmeticExpression`（`{1 + 2}`）、`ComparisonExpression`（`{?HOUR > 1}` 的条件体）等任意一种。`EvaluateString` 唯一读它。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.SimpleExpression` | 固定返回 `TokenType.SimpleExpression`，不随内层变。**两个消费者：`MBTextParser.cs:126` 的 `IsRootExpression` 认它可以当根；`ConditionExpression.cs:37` 拿它和 `ParameterWithAttribute`、`StartsWith` 比较来决定条件走「非零」还是「非空」判法。** |
| 构造器 `SimpleExpression(TextExpression)` | `public SimpleExpression(TextExpression innerExpression)` | 唯一构造器。存内层、**快照 `RawValue`**（第 14 行）。**全树唯一调用点是 `MBTextParser.cs:221`**，且只有 `IsArithmeticExpression` 通过时才会走到。传 null 会在第 14 行解引用抛 `NullReferenceException`——解析器不会这么传，手写 `new` 才会。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **纯转发，一个字符都不加工。** 两个参数原样传给内层。**因此它对最终输出的贡献是零**——想知道字符串长什么样，得去看内层节点（`VariableExpression` / `QualifiedIdentifierExpression` / …）那几页。 |

## 真实示例

同一个壳包住三种完全不同的内层，输出差异全在内层：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 1) 内层是限定名：{HERO.NAME} -> QualifiedIdentifierExpression
TextObject byName = new TextObject("{=my_byName}{HERO.NAME}");
byName.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);

// 2) 内层是变量：{COUNT} -> VariableExpression
TextObject byVar = new TextObject("{=my_byVar}Count: {COUNT}");
byVar.SetTextVariable("COUNT", 42);

// 3) 内层是算术：{1 + 2} -> SimpleExpression(SimpleExpression(ArithmeticExpression))
TextObject byMath = new TextObject("{=my_byMath}sum={1 + 2}");

Debug.Print(byName.ToString(), 0);
Debug.Print(byVar.ToString(), 0);
Debug.Print(byMath.ToString(), 0);
```

验证「壳不加工」这一点——把同一个变量分别走直给与包壳两条路，输出应完全相同：

```csharp
TextObject direct = new TextObject("{=my_direct}{COUNT}");
direct.SetTextVariable("COUNT", 7);

TextObject wrapped = new TextObject("{=my_wrapped}count is {COUNT}.");
wrapped.SetTextVariable("COUNT", 7);

Debug.Print(direct.ToString() + " | " + wrapped.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。** `bin/TaleWorlds.Localization/Properties/AssemblyInfo.cs` 里没有 `InternalsVisibleTo`。
- **`RawValue` 快照可能为 null。** 内层若没写 `RawValue`（如 `QualifiedIdentifierExpression.cs:13` 的构造器就不写），本节点第 14 行会把 null 复制过来；`EvaluateAsNumber` 兜底时直接给 0。
- **花括号不总是产生本节点。** `MBTextParser.cs:226-229` 的 else 分支会丢掉花括号。**看到「花括号不见了」不是 bug，是走了这条路。**
- **它属于根节点白名单。** 把它的 `TokenType` 改掉会导致 `MBTextParser.cs:126` 不再认它为根，整棵树的分段会变。
- **条件语法里的壳失败是静默的。** `MBTextParser.cs:285` 走 `Debug.FailedAssert` 后 `return false`，**发布版里断言不弹窗**。条件写错类型的表现是条件整段被跳过。

## 参见

- 基类契约：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 的真假兜底规则在这里）
- 唯一构造点：[MBTextParser](../MBTextParser/) 的 `CheckSimpleStatement`（`:205`）与 `IsArithmeticExpression`（`:489`）
- 常被它包住的内层：[VariableExpression](../VariableExpression/)、[QualifiedIdentifierExpression](../QualifiedIdentifierExpression/)、[ComparisonExpression](../ComparisonExpression/)、[ArithmeticExpression](../ArithmeticExpression/)、[ConditionExpression](../ConditionExpression/)
- 同桶：[MBTextParser](../MBTextParser/) 的 `IsRootExpression`（`:124`）、[TextGrammarProcessor](../TextGrammarProcessor/)、[TextProcessingContext](../TextProcessingContext/)
- 真实用例出处：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs:634` 与 `:811`
- 桶首页：[localization API 分区](../)