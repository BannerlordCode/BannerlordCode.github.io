---
title: "ConditionExpression"
description: "条件分支节点：它不只判「非零」——对 ParameterWithAttribute 与 StartsWith 两类节点改用「非空」判据，且所有分支都不匹配时静默返回空串。"
---

# ConditionExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class ConditionExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/ConditionExpression.cs`

## 概述

`ConditionExpression` 是 58 行、5 个成员的条件分支节点，**唯一构造点是 `MBTextParser.cs:313`**，在 `CheckConditionalStatement` 里。它对应本地化文本里最常见的语法：`{?条件}真分支{?}条件二}假分支{\?}`。

它的两个构造器（`:14-18` 三参 / `:20-24` 两参）最终都归到同一份数据形状：一个条件数组 + 一个结果数组。求值 `EvaluateString`（`:26-56`）是**线性扫描**：依次求值每个条件，第一个为真的取它对应下标的结果；全都不真则取最后一个结果。

## 心智模型

把它当成**「有偏好的 if-else 链」**。三条推论：

第一，**它对两类节点用不同的真值判据。** `:37` 那行是本类最关键的一行：

```csharp
flag = ((textExpression2.TokenType != TokenType.ParameterWithAttribute && textExpression2.TokenType != TokenType.StartsWith)
        ? (EvaluateAsNumber(textExpression2, context, parent) != 0)
        : (!string.IsNullOrEmpty(text)));
```

也就是说：`ParameterWithAttributeExpression`（形如 `$1.attr`）与 `StartsWithExpression` 走**「求值结果非空」**，其余走**「折成 int 不为 0」**。**这不是优化，是必需**——这两类节点的 `RawValue` 语义上不是数字，走折算路径没有意义。

第二，**每个条件先求值两次。** `:34` 先 `textExpression2.EvaluateString(...)` 拿 `text`，`:35` 用 `text.Length != 0` 当第一道门槛；只有非空才在 `:37` 再走折算。**所以一个条件求值两次——带副作用的条件（函数调用）会执行两次。**

第三,**全都不匹配时静默返回空串。** `:51-53` 兜底把 `_resultExpressions` 的最后一个元素当默认分支；再往后 `:55` 的 `textExpression?.EvaluateString(...) ?? ""` 保证任何缺口都变成 `""`。**没有异常、没有告警——条件写错的表现是「那段文字消失」。**

边界：**`internal`，无 `InternalsVisibleTo`**；它**在** `MBTextParser.cs:126` 的根节点白名单里（`ConditionalExpression` 是 8 类之一），所以**不需要花括号壳**。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:15-17` 的三条规则切出条件起止符——`ConditionStarter` `{?`、`ConditionSeperator` `{?}`、`ConditionFollowUp` `{:?}`、`ConditionFinalizer` `{\?}`；`MBTextParser.cs:169` 的规则链里 `CheckConditionalStatement`（`:264`）在 `:313` 构造。**注意 `ConditionStarter`（`:16`）与 `ConditionSeperator`（`:15`）的模式分别是 `{?` 与 `{?}`，后者多一个右花括号。**

复现引擎里的单复数切换（出处 `FactionHelper.cs:811`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 引擎原句：It would take {HOUR} {?HOUR > 1}hours{?}hour{\?} for {HERO.NAME} ...
TextObject line = new TextObject("{=my_cond}It would take {HOUR} {?HOUR > 1}hours{?}hour{\\?}.");
line.SetTextVariable("HOUR", 3);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**`{?cond}` 里的 cond 必须是 `IsArithmeticExpression`（`MBTextParser.cs:491`）认可的 15 类之一，否则整条条件语法被放弃。** `:283-287` 在判定失败时走 `Debug.FailedAssert` 后 `return false`——**发布版断言不弹窗**，于是 `{?一段普通文字}真{?}假{\?}` 的结果是「真」与「假」两段文字被原样输出、两个分支都显示，条件等于不存在。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_conditionExpressions` | `private TextExpression[] _conditionExpressions` | 条件数组（`:8` 声明）。`:16` 的三参构造包成长度 1 的数组，`:22` 的两参构造直接 `ToArray()`。**允许条件数多于结果数**——`:41` 的 `num < _resultExpressions.Length` 判据意味着**多出来的条件即使为真也会被跳过**，因为取不到对应结果。 |
| `_resultExpressions` | `private TextExpression[] _resultExpressions` | 结果数组（`:10` 声明）。`:17` 包成长度 2，`:23` 由解析器给。**`:51-53` 的兜底会在全不匹配时取它最后一个元素**——所以最后一个分支是「else」。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.ConditionalExpression` | 固定值。**`MBTextParser.cs:126` 的 `IsRootExpression` 认它**，所以条件表达式可以独立成根、不需要花括号壳。 |
| `ConditionExpression(TextExpression, TextExpression, TextExpression)` | `public ConditionExpression(TextExpression condition, TextExpression part1, TextExpression part2)` | 三参构造（`:14-18`）：1 个条件 + 2 个结果。**解析器不用它**——`MBTextParser.cs:313` 走的是两参那个。这个重载只服务于手写构造。 |
| `ConditionExpression(List<TextExpression>, List<TextExpression>)` | `public ConditionExpression(List<TextExpression> conditionExpressions, List<TextExpression> results)` | 两参构造（`:20-24`），**全树唯一调用点 `MBTextParser.cs:313`**。两个参数都 `ToArray()`，**不做长度校验**——条件多于结果是允许的（见上）。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **线性扫描的求值主体（`:26-56`）。** 四个要点：① 每个条件求值两次（`:34` 取串、`:37` 折算）；② 判据按 `TokenType` 分流（`:37`）；③ 命中就取同下标结果（`:39-44`）；④ 全不中取最后一个（`:51-53`），再兜底空串（`:55`）。 |

## 真实示例

多个条件的优先级链，观察「取最后一个」这条兜底：

```csharp
using TaleWorlds.Localization;

// 三个条件两段结果：命中第一个就用第一段，否则用第二段（兜底）
TextObject chain = new TextObject("{=my_chain}{?N > 100}big{?N > 10}medium{?}small{\\?}");
foreach (int n in new int[3] { 500, 50, 1 })
{
    chain.SetTextVariable("N", n);
    Debug.Print(n + " -> " + chain.ToString(), 0);
}
```

对照「条件类型非法」的后果——两段文字都会出现：

```csharp
using TaleWorlds.Localization;

// {?这段文字不是变量也不是数字} -> MBTextParser.cs:285 FailedAssert 后 return false
TextObject broken = new TextObject("{=my_broken}{?not a condition}ALWAYS{?}NEVER{\\?}");
Debug.Print("broken = '" + broken.ToString() + "'", 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **条件类型非法时整条条件语法静默失效。** `MBTextParser.cs:285` 的 `Debug.FailedAssert` 在发布版不弹窗，`return false` 后两个分支文字都会输出。**排查「两个分支同时显示」先查条件写法。**
- **每个条件求值两次。** `:34` 与 `:37`。**带副作用的条件（`FunctionCall`）会执行两次**——`{?f(x) > 0}` 里的 `f` 被调两次。
- **条件数可以多于结果数，且多出来的条件被静默跳过。** `:41` 只在 `num < _resultExpressions.Length` 时取结果，否则 `textExpression` 保持 null（`:46-49` 的 else 只做 `num++`），循环继续。**结果会退到最后一个分支。**
- **全不匹配取最后一个结果，不是空串。** `:51-53`。**所以「少写一个分支」的表现是最后一段文字重复出现。**
- **`{?}` 与 `{\?}` 是两个不同的 token。** `Tokenizer.cs:15` 是 `ConditionSeperator`（模式 `{?}`），`:17` 是 `ConditionFinalizer`（模式 `{\?}`）。**混用会导致 `CheckConditionalStatement` 在 `:294` 的 `tokenType != ConditionSeperator && tokenType != Seperator` 上失败并走 `ThrowLocalizationError`。**
- **`StartsWith` / `ParameterWithAttribute` 走非空判据。** 这两类节点只在函数体（`$1.attr`）里出现，**普通文本里用不到这个分支。**

## 参见

- 契约：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 真值化）、[NumeralExpression](../NumeralExpression/)
- 被它判读的条件节点：[ComparisonExpression](../ComparisonExpression/)（`{?A > B}`）、[VariableExpression](../VariableExpression/)、[QualifiedIdentifierExpression](../QualifiedIdentifierExpression/)、[ParameterWithAttributeExpression](../ParameterWithAttributeExpression/) 与 [StartsWithExpression](../StartsWithExpression/)（走「非空」判据的两类）
- 兄弟：[SelectionExpression](../SelectionExpression/)（按下标选，与本类并列的另一种分支）、[SimpleExpression](../SimpleExpression/)
- 构造点：[MBTextParser](../MBTextParser/)（`:264` `CheckConditionalStatement`、`:313` 构造、`:294` 分隔符校验）、[Tokenizer](../Tokenizer/)（`:15-17` 四条条件规则）
- 求值环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)、[TextObject](../TextObject/)
- 真实用例出处：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs:634`、`:811`
- 桶首页：[localization API 分区](../)