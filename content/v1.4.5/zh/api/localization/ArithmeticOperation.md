---
title: "ArithmeticOperation"
description: "四则运算的四个枚举值：Add/Subtract/Multiply/Divide，决定 ArithmeticExpression.EvaluateNumber 走哪条 switch 分支。"
---

# ArithmeticOperation

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal enum ArithmeticOperation`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/ArithmeticOperation.cs`

## 概述

`ArithmeticOperation` 是 9 行的枚举，全文只有四个成员：`Add`、`Subtract`、`Multiply`、`Divide`（`ArithmeticOperation.cs:5-8`，声明顺序即枚举序号 0..3）。**全树唯一的消费点是 [ArithmeticExpression](../ArithmeticExpression/) 的 `EvaluateNumber`**，它在 `ArithmeticExpression.cs:36-41` 用一个 `switch` 把四个值分别映射到 `EvaluateAsNumber(_exp1) + EvaluateAsNumber(_exp2)` 等四行。

它还有**一处间接但重要的影响**：`ArithmeticExpression.TokenType`（`ArithmeticExpression.cs:14-21`）会读 `_op` 来决定自己报 `TokenType.ArithmeticSum`（Add/Subtract）还是 `TokenType.ArithmeticProduct`（Multiply/Divide）。**所以枚举值不只是运算本身，还决定这个节点在文法里被归到哪一族**——`MBTextParser.cs:491` 的 `IsArithmeticExpression` 同时认这两个 `TokenType`。

## 心智模型

把它当成**「四则运算的调度表键」**。三条推论：

第一，**它不携带优先级，优先级是调用方的。** `MBTextParser` 用两条独立规则处理优先级：`ConsumeInnerAritmeticExpression`（`MBTextParser.cs:498`）只认 `*` 与 `/`，`ConsumeOuterAritmeticExpression`（`:523`）只认 `+` 与 `-`，并且规则链顺序是「先内层后外层」（`:369`）。**枚举本身没有「谁先算」的信息——把 `Divide` 和 `Multiply` 换个顺序，运算结果不变，但换成 `Add` 和 `Multiply` 就全错。**

第二，**枚举到整数的隐式转换只在 `RawValue` 拼接时出现过。** `ArithmeticExpression.cs:23` 的 `base.RawValue = string.Concat(exp1.RawValue, op, exp2.RawValue)` 依赖 `string.Concat(object, object, object)` 会调枚举的 `ToString()`，于是得到 `1+2`、`2/0` 这样的原文。**这段 `RawValue` 只被 `EvaluateAsNumber` 的兜底与排错读取，不参与运算。**

第三，**「除」是唯一没有防护的运算。** `ArithmeticExpression.cs:40` 直接 `EvaluateAsNumber(_exp1, ...) / EvaluateAsNumber(_exp2, ...)`，分母为 0 时抛 `DivideByZeroException`，**没有 try/catch、没有提前判零**。而三个无风险运算在任何 int 上都不会抛。

边界：**`internal` 枚举，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：你不会直接写它。它由 `MBTextParser` 的三个构造点产生——`MBTextParser.cs:516`（`*` `/`）、`:539`（`+` `-`）、`:458`（负号，固定 `Subtract` 并把左操作数硬编码成 `new SimpleToken(TokenType.Number, "0")`）。四个值由 `ConsumeAritmeticOperation`（`MBTextParser.cs:548`）产出：**它先把 token 类型压成一个 `int`（`:550` 的嵌套三元，Plus→0 / Minus→1 / Multiply→2 / Divide→3），再在第 552 行 `(ArithmeticOperation)result` 强转。** 换句话说，**本枚举的运行时值不是「switch 出来的」，而是「整数强转出来的」——这正是四个成员必须按 0/1/2/3 顺序声明的原因。**

写出四种运算，并对照「除以零」的崩溃边界：

```csharp
using TaleWorlds.Localization;

// Add / Subtract / Multiply / Divide 四条全走同一批 EvaluateAsNumber 路径
TextObject add = new TextObject("{=my_add}{2 + 3}");
TextObject sub = new TextObject("{=my_sub}{7 - 2}");
TextObject mul = new TextObject("{=my_mul}{2 * 4}");
TextObject div = new TextObject("{=my_div}{9 / 2}");

Debug.Print(add.ToString() + " " + sub.ToString() + " " + mul.ToString() + " " + div.ToString(), 0);

// Divide 是唯一会抛的：MBTextParser.cs:458 的负号规则把左操作数硬编码为 0
try
{
    TextObject neg = new TextObject("{=my_neg}{-5}");
    Debug.Print("neg=" + neg.ToString(), 0);
}
catch (Exception ex)
{
    Debug.Print("threw: " + ex.GetType().Name, 0);
}
```

**用它最容易踩的一条**：**`/` 两边的操作数都会过 `EvaluateAsNumber` 的真值化兜底，所以「除以一个文本变量」不会崩，而是返回原值。** `TextExpression.cs:25-31` 的兜底把非空文本一律折成 1，于是 `{10 / {NOTHING}}`（未设置的变量求值成空串 → 折成 0）才抛，而 `{10 / SOME_TEXT_VAR}`（非空文本 → 折成 1）安静返回 10。**分母写错变量名不会有任何提示，只会看到一个「没除」的数。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Add` | `Add`（枚举成员，序号 0） | 加法。`ArithmeticExpression.cs:37` 的 `EvaluateAsNumber(_exp1) + EvaluateAsNumber(_exp2)`。**同时把节点的 `TokenType` 判成 `TokenType.ArithmeticSum`**（`ArithmeticExpression.cs:21`）。值由 `MBTextParser.cs:550` 的三元表达式产出并于 `:552` 强转。 |
| `Subtract` | `Subtract`（枚举成员，序号 1） | 减法。`ArithmeticExpression.cs:38`。**是 `MBTextParser.cs:458` 构造负数表达式时唯一使用的值**——`-X` 被改写成 `0 - X`，左操作数是一个硬编码的 `SimpleToken(TokenType.Number, "0")`。**所以 `{0 - 5}` 与 `{-5}` 的 `RawValue` 不同。** |
| `Multiply` | `Multiply`（枚举成员，序号 2） | 乘法。`ArithmeticExpression.cs:39`。**`TokenType` 判成 `TokenType.ArithmeticProduct`**（`ArithmeticExpression.cs:19`）。由 `MBTextParser.cs:516` 的 `ConsumeInnerAritmeticExpression` 产出，与除法同优先级。 |
| `Divide` | `Divide`（枚举成员，序号 3） | 除法。`ArithmeticExpression.cs:40`，**是四个里唯一会抛异常的**：`EvaluateAsNumber(_exp1) / EvaluateAsNumber(_exp2)` 无判零保护。`TokenType` 同样是 `TokenType.ArithmeticProduct`（`:19`，与乘法不区分优先级）。 |

## 真实示例

四种运算在一条文本里混用，观察整除与非整除的差异：

```csharp
using TaleWorlds.Localization;

TextObject line = new TextObject("{=my_ops}{2 + 3} {7 - 2} {2 * 4} {9 / 2} {10 / 5}");
Debug.Print(line.ToString(), 0);
```

用 `CopyTextObject` 生成不同数值的版本，验证同一模板每次求值都重算（`RawValue` 只用于排错）：

```csharp
TextObject template = new TextObject("{=my_ops2}damage {2 * 3}");
Debug.Print("a = " + template.ToString(), 0);
Debug.Print("b = " + template.ToString(), 0);
```

## 风险与边界

- **`internal` 枚举，编译期不可引用。** 要用它只能通过反射读 `ArithmeticExpression` 的私有 `_op` 字段。
- **`Divide` 无判零保护。** 分母折成 0 时抛 `DivideByZeroException`。
- **`Add` 与 `Subtract` 的 `TokenType` 相同（`ArithmeticSum`），`Multiply` 与 `Divide` 也相同（`ArithmeticProduct`）。** **枚举值本身无法从 `TokenType` 反推**——想知道到底是加还是减，只能读 `RawValue`（`ArithmeticExpression.cs:23` 拼出来的 `exp1+exp2` 原文）。
- **枚举序号是隐式契约，且被强转依赖。** `MBTextParser.cs:550` 把 token 压成 0/1/2/3，第 552 行 `(ArithmeticOperation)result` 强转。**所以 `ArithmeticOperation.cs:5-8` 的声明顺序不是风格问题——重排会让 `+` 变成 `*`。追加成员只能加在末尾。**
- **`string.Concat(exp1.RawValue, op, exp2.RawValue)` 依赖 `ToString()`。** 任何操作数的 `RawValue` 为 null（[QualifiedIdentifierExpression](../QualifiedIdentifierExpression/) 就不写它）时，拼接结果里会出现一个空段。

## 参见

- 唯一消费者：[ArithmeticExpression](../ArithmeticExpression/)（`EvaluateNumber` 第 33-42 行、`TokenType` 第 14-21 行）
- 上游产生：[MBTextParser](../MBTextParser/)（`:458` 负号、`:498` 内层 `*` `/`、`:523` 外层 `+` `-`、规则链 `:369`）
- 契约：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 真值化兜底）、[NumeralExpression](../NumeralExpression/)
- 兄弟枚举：[ComparisonOperation](../ComparisonOperation/)（六种比较）、[BooleanOperation](../BooleanOperation/)（三个逻辑词，全树零消费点）
- 分词：[TokenType](../TokenType/)（`ArithmeticSum` / `ArithmeticProduct`）、[Tokenizer](../Tokenizer/)
- 桶首页：[localization API 分区](../)