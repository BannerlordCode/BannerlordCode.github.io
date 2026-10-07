---
title: "ArithmeticExpression"
description: "四则运算节点，全树唯一的 NumeralExpression 实现之一：TokenType 随运算符在 ArithmeticSum/ArithmeticProduct 之间切换，除法无判零保护。"
---

# ArithmeticExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class ArithmeticExpression : NumeralExpression`
**Base:** `NumeralExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/ArithmeticExpression.cs`

## 概述

`ArithmeticExpression` 是 50 行、6 个成员的二元运算节点，也是 [NumeralExpression](../NumeralExpression/) 的**两个实现者之一**（另一个是 [ComparisonExpression](../ComparisonExpression/)）。它有三个构造点，全在 `MBTextParser`：`:516`（`*` 与 `/`）、`:539`（`+` 与 `-`）、`:458`（负号）。

它的两个出口必须对齐：`EvaluateNumber`（`ArithmeticExpression.cs:33-43`）返回一个 `switch`，把 [ArithmeticOperation](../ArithmeticOperation/) 的四个值映射到四行算术；`EvaluateString`（`:45-48`）则是 `return EvaluateNumber(...).ToString();`。**两条路径永远给出同一个数的两种形态，不存在「判定为 3 但显示成 4」的可能。**

## 心智模型

把它当成**「两个子树归约成一个整数」**。三条推论：

第一，**它是二叉的，永不折叠三个以上操作数。** `{1 + 2 + 3}` 解析出来是嵌套的两个 `ArithmeticExpression`（外层 `Add` 的左操作数是内层 `Add(1,2)`），不是一棵三叉树。**所以 `{1 + 2 + 3}` 与 `{1 + (2 + 3)}` 的求值结果相同（都是 6），但 `RawValue` 不同**——`:30` 的 `string.Concat(exp1.RawValue, op, exp2.RawValue)` 会分别得到 `1+2+3` 与 `1+2+3`（内层带括号则不同），这也是 `MBTextParser` 必须分成内外两条规则的原因。

第二，**两个操作数都过 `EvaluateAsNumber` 的真值化兜底，所以它对文本操作数毫无抵抗力。** `EvaluateAsNumber`（`TextExpression.cs:13-33`）对非数字文本一律折成 1。**于是 `{5 - SOME_NAME}` 会得到 4 而不是报错。** 这是本节点最容易被误判的行为：文本变量参与算术不报错，只是悄悄当成 1。

第三，**除法是唯一会抛的分支。** `:40` 直接 `EvaluateAsNumber(_exp1) / EvaluateAsNumber(_exp2)`，没有判零、没有 try/catch。**而「分母是空文本」与「分母是非空文本」后果完全不同**：前者折成 0 → `DivideByZeroException`；后者折成 1 → 安静返回分子。

边界：**`internal`，无 `InternalsVisibleTo`**；它也不在 `MBTextParser.cs:126` 的根节点白名单里，**必须被花括号包成 [SimpleExpression](../SimpleExpression/) 才能合法**。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:31-32` 切出 `+` 与 `-`，`:30-32` 切出 `*` 与 `/`（`Multiply` / `Divide` / `Plus` / `Minus` 四条规则），`MBTextParser.cs:369` 的规则链里 `ConsumeInnerAritmeticExpression`（`:498`，只认 `*` `/`）与 `ConsumeOuterAritmeticExpression`（`:523`，只认 `+` `-`）分别命中，运算符由 `ConsumeAritmeticOperation`（`:548`）压成 int 再强转。

复现引擎里的真实算术形态，并验证优先级确实生效：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 内层规则先跑 -> 2 * (3 + 4) 先归约 3 + 4 得 7，再 2 * 7
TextObject grouped = new TextObject("{=my_grouped}answer = {2 * (3 + 4)}");
// 2 * 3 + 4 -> 先 2 * 3 得 6，再 6 + 4
TextObject flat = new TextObject("{=my_flat}answer = {2 * 3 + 4}");
Debug.Print("grouped=" + grouped.ToString() + " flat=" + flat.ToString(), 0);
```

**用它最容易踩的一条**：**文本变量参与算术不会报错，会被当 1。** `{HERO.NAME}` 是限定名节点（`QualifiedIdentifierExpression` 的 `RawValue` 为 null → 折成 0），而 `{LORD}` 是普通变量（`RawValue` 非空 → 折成 1）。**同一个「非数字」的位置，写成限定名得到 0、写成普通变量得到 1。** 要让数字参与运算，必须保证那个位置是 `NumeralExpression`（算术/比较）或能过 `int.TryParse`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_op` | `private readonly ArithmeticOperation _op` | 运算种类。**两个消费点**：`EvaluateNumber` 的 switch（`:35-42`）与 `TokenType` 的 getter（`:17`）。`readonly`，构造后不变。 |
| `_exp1` / `_exp2` | `private readonly TextExpression _exp1` / `_exp2` | 左右两个子树。**都经 `EvaluateAsNumber` 真值化**（`:37-40`）。**不判空**：传 null 会在求值时抛 `NullReferenceException`——引擎自身不会，因为 `:475`/`:535`/`:456` 三处构造点都先用 `IsArithmeticExpression` 过滤过。 |
| `TokenType` | `internal override TokenType TokenType { get { … } }` | **不是一个常量。** `:17` 判「不是 Add 也不是 Subtract」时返回 `TokenType.ArithmeticProduct`，否则返回 `TokenType.ArithmeticSum`。**所以加法与减法在文法里不可区分，乘法与除法也不可区分**——`MBTextParser.cs:491` 的 `IsArithmeticExpression` 同时认这四个值。 |
| `ArithmeticExpression(ArithmeticOperation, TextExpression, TextExpression)` | `public ArithmeticExpression(ArithmeticOperation op, TextExpression exp1, TextExpression exp2)` | 唯一构造器（`:25-31`），`:30` 用 `string.Concat(exp1.RawValue, op, exp2.RawValue)` 把原文拼进 `RawValue`。**这段拼接只用于排错与 `EvaluateAsNumber` 的兜底判真假，不参与运算。** 传 `exp1 = null` 会在 `:30` 立刻抛。 |
| `EvaluateNumber` | `internal override int EvaluateNumber(TextProcessingContext context, TextObject parent)` | **四则运算本体（`:33-43`）。** `:35` 的 switch 表达式，`Add`/`Subtract`/`Multiply`/`Divide` 四个分支在 `:37-40`，`:41` 还有 `_ => 0` 兜底。**这是 `NumeralExpression` 契约的实现，也是 `EvaluateAsNumber` 第一条规则（`TextExpression.cs:15-18`）的目标。** |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | `return EvaluateNumber(context, parent).ToString();`（`:47`）。**与 `EvaluateNumber` 严格同源**，所以文本输出与整数判定不可能分叉。这是本节点设计上最值得学的一点。 |

## 真实示例

四种运算一次跑完，并对照「除法无保护」的崩溃边界：

```csharp
using TaleWorlds.Localization;

TextObject ops = new TextObject("{=my_ops}{2 + 3} {7 - 2} {2 * 4} {9 / 2}");
Debug.Print(ops.ToString(), 0);

// 分母折成 0（未设置的变量求值成空串）-> DivideByZeroException
try
{
    TextObject boom = new TextObject("{=my_boom}q = {1 / {Q}}");
    Debug.Print(boom.ToString(), 0);
}
catch (DivideByZeroException)
{
    Debug.Print("DivideByZeroException: ArithmeticExpression.cs:40 has no guard", 0);
}
```

验证文本变量被折成 1 而不是报错：

```csharp
using TaleWorlds.Localization;

TextObject textOperand = new TextObject("{=my_t}{10 - {LORD}}");
textOperand.SetTextVariable("LORD", "Sturgia");   // 非空文本 -> EvaluateAsNumber 折成 1
Debug.Print("10 - 'Sturgia' = " + textOperand.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **除法无判零保护。** `ArithmeticExpression.cs:40`。分母折成 0 时抛 `DivideByZeroException`，且这个异常会一路冒到 `TextObject.ToString()` 的 catch（`TextObject.cs:199-208`）——**玩家看到的是一行 `Error at id: …`，不是崩溃。**
- **文本操作数被折成 1，不报错。** 见上。这让 `{HOURS - NAME}` 这种写错表现为「差 1」而不是失败。
- **不是根节点。** `MBTextParser.cs:126` 的 8 类白名单里没有 `ArithmeticSum`/`ArithmeticProduct`，**必须花括号**。
- **优先级由 parser 的两条规则决定，不由本类决定。** `ConsumeInnerAritmeticExpression`（`:498`）只认 `*` `/`，`ConsumeOuterAritmeticExpression`（`:523`）只认 `+` `-`，且规则链（`:369`）把内层排在前面。**没有括号时 `*`/`/` 优先，靠的是这个调用顺序。**
- **负数是改写出来的。** `MBTextParser.cs:458` 把 `-X` 写成 `ArithmeticOperation.Subtract` + 一个硬编码的 `SimpleToken(TokenType.Number, "0")`，所以 **`{-5}` 与 `{0 - 5}` 的树形不同**，`RawValue` 也不同（前者含 `0-`）。
- **`EvaluateString` 每层都会重新 `ToString()`。** 嵌套三层算术就是三次 int→string→int；深层嵌套有性能与溢出上的双重成本（int 溢出静默回绕）。

## 参见

- 契约：[NumeralExpression](../NumeralExpression/)、[TextExpression](../TextExpression/)（`EvaluateAsNumber` 三段式）
- 运算符枚举：[ArithmeticOperation](../ArithmeticOperation/)
- 兄弟表达式：[ComparisonExpression](../ComparisonExpression/)、[SimpleExpression](../SimpleExpression/)（花括号壳）、[ParanthesisExpression](../ParanthesisExpression/)（括号壳）、[SimpleNumberExpression](../SimpleNumberExpression/)
- 构造点：[MBTextParser](../MBTextParser/)（`:369` 规则链、`:498`/`:523` 内外层规则、`:548` 运算符强转、`:491` `IsArithmeticExpression`）
- 分词：[Tokenizer](../Tokenizer/)、[TokenType](../TokenType/)
- 求值环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)
- 桶首页：[localization API 分区](../)