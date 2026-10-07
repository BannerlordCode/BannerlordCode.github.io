---
title: "SelectionExpression"
description: "按下标选分支的节点：下标越界静默返回空串，下标本身经 EvaluateAsNumber 真值化——所以未设置变量会落到第 0 个分支而不是报错。"
---

# SelectionExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class SelectionExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/SelectionExpression.cs`

## 概述

`SelectionExpression` 是 30 行、4 个成员的按下标选分支节点，**唯一构造点是 `MBTextParser.cs:362`**，在 `CheckSelectionStatement` 里。它对应语法 `{#下标}分支0{#}分支1{#}分支2{\#}`，是本地化文本里「多语言 / 复数 / 等级分档」的标准写法。

求值 `EvaluateString`（`SelectionExpression.cs:20-28`）只有六行：`EvaluateAsNumber(_selection, …)` 得到下标，然后 `if (num >= 0 && num < _selectionExpressions.Count)` 取那一项，否则 `return "";`。**没有 else 分支的兜底——越界就是空串。**

## 心智模型

把它当成**「数组查表」**。三条推论：

第一，**下标与内容在两条不同的链路上。** 下标 `_selection` 是 [NumeralExpression](../NumeralExpression/) 家族（字面量、变量、算术）经 `EvaluateAsNumber` 折出来的 int；候选 `_selectionExpressions` 是一串任意节点。**下标算错不会报错，只会查错或查空。**

第二,**越界返回空串，这是它与 [ConditionExpression](../ConditionExpression/) 最大的行为差异。** 条件链全不匹配时取最后一个分支；本类下标越界时 `:27` 直接 `return ""`。**所以 `{#5}` 在只有 3 个分支时表现为「那段文字不见了」，而 `{?X}{?}{?}` 会退到最后一个分支。**

第三,**分支数可以多于语法需要。** `MBTextParser.cs:343-345` 在取不到内容时会补一个 `new SimpleToken(TokenType.Text, "")`——所以末位多写一个 `{#}` 会得到一个恒为空串的末分支，**下标刚好等于这个末位时输出为空**。

边界：**`internal`，无 `InternalsVisibleTo`**；它**在** `MBTextParser.cs:126` 的根节点白名单里（`SelectionExpression` 是 8 类之一），**不需要花括号壳**。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:20-22` 三条规则——`SelectionSeperator` `{#}`、`SelectionFinalizer` `{\#}`、`SelectionStarter` `{#`（**注意顺序：分隔符在前，起始符在后，所以 `{#}` 不会被误切成 `{#` + `}`**）。`MBTextParser.cs:169` 的规则链里 `CheckSelectionStatement`（`:318`）在 `:362` 构造。

注册一个函数体并在文本里按参数选档——这是 `SetFunction` 的标准用法：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 函数体 {#$1} 用形参当下标，{#} 是分隔符，{\#} 是结束符
MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");

TextObject line = new TextObject("{=my_sel}A {myTier(1)} banner, a {myTier(3)} banner.");
line.SetTextVariable("HERO", Hero.MainHero.Name);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**实参个数不够时，`$n` 不是变成空串，而是变成一句可见的错误文本。** `TextProcessingContext.GetFunctionParam`（`TextProcessingContext.cs:355`）在 `:359` 判 `_curParams.Peek().Length > result` 失败时，`:363` 返回 `new TextObject("Can't find parameter:" + rawValue)`——**这是一句非空文本**。它经 `EvaluateAsNumber` 折成 1，于是 `{#$1}` 静默选中第 1 个分支，同时这句 `Can't find parameter:$3` 本身也可能被渲染进最终文案。**调用方少传一个参数，文案就悄悄降一档并可能多出一句英文报错——没有任何异常。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_selection` | `private TextExpression _selection` | 下标表达式（`:8` 声明）。**唯一消费点 `:22`**。**不判空**——`MBTextParser.cs:334` 取 `LookAheadFirst` 时已用 `IsArithmeticExpression`（`:329`）过滤过，解析失败会走 `:331` 的 `FailedAssert` 并 `return false`。 |
| `_selectionExpressions` | `private List<TextExpression> _selectionExpressions` | 候选分支列表（`:10` 声明），**存的是 `List` 而不是数组**（对照 [ConditionExpression](../ConditionExpression/) 存数组）。**不做去重、不判空**——`:343-345` 的解析器兜底塞的是空 `SimpleToken`，不是 null。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.SelectionExpression` | 固定值，声明在 `:12`。**`MBTextParser.cs:126` 的 `IsRootExpression` 认它**，所以选择表达式可独立成根。 |
| `SelectionExpression(TextExpression, List<TextExpression>)` | `public SelectionExpression(TextExpression selection, List<TextExpression> selectionExpressions)` | 唯一构造器（`:14-18`），**直接持有传入的 `List` 引用**（`:16`/`:17` 两个赋值都不拷贝、不 `ToArray`）。**全树唯一调用点 `MBTextParser.cs:362`。** 构造后外部改动那个 list 会直接影响本节点的行为。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | 六行主体（`:20-28`）：`:22` 折下标 → `:23` 双重越界检查（`>= 0 && < Count`）→ `:25` 取那一项并转发求值 → `:27` 越界返回 `""`。**没有兜底分支、没有异常、没有告警。** 注意「越界」指 `EvaluateAsNumber` 的结果越界——实参不够时 `$n` 返回的是一句**非空**错误文本（`TextProcessingContext.cs:363`），所以折出来是 1，**不越界**。 |

## 真实示例

三个分支，观察下标 0 / 1 / 2 与越界 3 的四种结局：

```csharp
using TaleWorlds.Localization;

TextObject sel = new TextObject("{=my_sel2}{#N}zero{#}one{#}two{\\#}");
for (int i = 0; i < 4; i++)
{
    sel.SetTextVariable("N", i);
    Debug.Print(i + " -> '" + sel.ToString() + "'", 0);
}
```

函数体与调用处的配合——注意实参个数：

```csharp
using TaleWorlds.Localization;

MBTextManager.SetFunction("myRank", "{#$1}novice{#}veteran{#}legend{\\#}");
// 传 0/1/2 都正常；传 3 时 $3 取不到 -> TextProcessingContext.cs:363 返回
// "Can't find parameter:$3"（非空文本）-> 折成 1 -> 选中 veteran，而不是空串
TextObject badge = new TextObject("{=my_rank}[{myRank(0)}][{myRank(1)}][{myRank(3)}]");
Debug.Print(badge.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **越界返回空串。** `:27`。**与 [ConditionExpression](../ConditionExpression/) 的「退到最后一个分支」是两种不同的失败形态**——排错时先确认是哪一种。
- **实参个数不够时 `$n` 返回一句非空错误文本。** `TextProcessingContext.cs:363` 的 `new TextObject("Can't find parameter:" + rawValue)`。**非空 → 折成 1 → 选中第 1 个分支**，同时这句文本本身可能被渲染出来。
- **下标经 `EvaluateAsNumber` 真值化。** 文本下标非空 → 1；空串或未设置 → 0。**`{#$1}` 里 `$1` 取到文本时，选中的是第 1 个分支。**
- **下标不能为负。** `:23` 的 `num >= 0` 与 `EvaluateAsNumber` 兜底都不会产生负数（兜底只给 0 或 1），但 `ArithmeticExpression` 的减法可以算出负数——**`{#0 - 5}` 会走空串分支。**
- **构造器不拷贝 list。** 传进去的 list 后续被改动会影响行为。解析器传的是新建的局部 list（`MBTextParser.cs:338`），所以引擎自身安全；手写 `new` 要注意。
- **`{#}` 与 `{\#}` 必须分清。** `Tokenizer.cs:20` 的 `SelectionSeperator` 是 `{#}`，`:21` 的 `SelectionFinalizer` 是 `{\#}`。**写反了会在 `MBTextParser.cs:356-358` 的 default 分支 `FailedAssert` 后 `return false`。**
- **分支内容可以是任意节点。** `GetRootExpressions()`（`MBTextParser.cs:341`）会递归解析，所以分支里可以有变量、算术、甚至嵌套条件。

## 参见

- 契约：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 真值化）
- 兄弟分支节点：[ConditionExpression](../ConditionExpression/)（条件链，失败退到最后一个）、[ParanthesisExpression](../ParanthesisExpression/)、[SimpleExpression](../SimpleExpression/)
- 下标可能用到的：[VariableExpression](../VariableExpression/)、[SimpleNumberExpression](../SimpleNumberExpression/)、[SimpleToken](../SimpleToken/)（`$1` 形参落在它身上）、[FunctionCall](../FunctionCall/)（典型调用方）
- 构造点：[MBTextParser](../MBTextParser/)（`:318` `CheckSelectionStatement`、`:362` 构造、`:329` 下标合法性、`:347-358` 分隔符校验）
- 分词：[Tokenizer](../Tokenizer/)（`:20-22` 三条选择规则，顺序是分隔符在前）
- 函数体注册：[MBTextManager](../MBTextManager/)（`SetFunction` 第 216 行）、[TextProcessingContext](../TextProcessingContext/)（`GetFunctionParam` 第 355 行）
- 桶首页：[localization API 分区](../)