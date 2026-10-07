---
title: "NumeralExpression"
description: "唯一能给表达式树提供整数值的抽象分支：只有算术与比较两类节点实现它，其余节点靠基类的 int.TryParse 兜底。"
---

# NumeralExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal abstract class NumeralExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/NumeralExpression.cs`

## 概述

`NumeralExpression` 是 9 行、1 个抽象成员的中间层——它继承 `TextExpression`，只多出一个 `internal abstract int EvaluateNumber(TextProcessingContext context, TextObject parent)`。**全树只有两个实现者**：`ArithmeticExpression.cs:5` 与 `ComparisonExpression.cs:5`。

它的存在只有一个用途：**成为 `TextExpression.EvaluateAsNumber` 的快速通道。** `TextExpression.cs:15-18` 是那个方法的第一条规则：

```csharp
if (exp is NumeralExpression numeralExpression)
{
    return numeralExpression.EvaluateNumber(context, parent);
}
```

命中就直接拿整数，跳过后面两步。没有实现它，节点就只能靠 `int.TryParse(exp.EvaluateString(...))`（`:20-23`）把字符串现解成 int。

## 心智模型

把它当成**「一个类型判断标记」**。三条推论：

第一，**实现它等于承诺「我能自己算出 int」。** 两个实现者都真的算：`ArithmeticExpression.cs:33-42` 是一个 `switch` 四则运算，`ComparisonExpression.cs` 逐个运算目把布尔转成 1/0。**任何写了 `EvaluateNumber` 的类，`EvaluateString` 都应该是它的字符串化**——`ArithmeticExpression.cs:45-48` 正是 `return EvaluateNumber(...).ToString();`，两者严格一致。

第二，**它是唯一能拿到「精确 int」的通道。** 走 `int.TryParse` 那条路时，`EvaluateString` 的返回值可能被 `TextObject` 的格式化、语言处理、变量替换动过；走 `EvaluateNumber` 则直接拿原始整数。**大数与负数在这两条路上的可靠性不同。**

第三，**不加这个基类，语义差别不大；加了它，会改变 `EvaluateAsNumber` 走哪条分支。** 具体说：一个节点如果自己实现了 `EvaluateNumber` 但**没有继承本类**（`: NumeralExpression` 写错成 `: TextExpression`），`EvaluateAsNumber` 永远不会调到它——**那串 `switch` 会变成死代码，而行为悄悄退化成 `int.TryParse`。**

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用；且它**没有任何构造点**——抽象类，只能被继承。

## 如何使用

**怎么拿到它**：你不会直接 new 它——它是抽象类，没有构造器。它是**运行时类型判断的落点**：`EvaluateAsNumber` 在 `TextExpression.cs:15` 用 `exp is NumeralExpression` 判断，被判断的对象来自参数 `exp`，不是 `this`。`{1 + 2}` 求值时，[ArithmeticExpression](../ArithmeticExpression/) 作为操作数被传进 `ArithmeticExpression.cs:37-40` 的 `EvaluateAsNumber(_exp1, ...)`，命中本分支。

用一段真实形态的算术文本，验证这条快速通道确实被走到：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// {1 + 2} 的内层是 ArithmeticExpression : NumeralExpression，
// EvaluateAsNumber 走 TextExpression.cs:15-18 的快速通道而不是 int.TryParse
TextObject sum = new TextObject("{=my_sum}total = {1 + 2}");

// 引擎真实写法（FactionHelper.cs:811 同款）：条件里用字面量数字
TextObject plural = new TextObject("{=my_plural}{?HOUR > 1}hours{?}hour{\\?}");
plural.SetTextVariable("HOUR", 3);
Debug.Print(sum.ToString(), 0);
Debug.Print(plural.ToString(), 0);
```

**用它最容易踩的一条**：**除法没有零保护，而分母很可能被悄悄折成 1。** `ArithmeticExpression.cs:40` 直接 `EvaluateAsNumber(_exp1, ...) / EvaluateAsNumber(_exp2, ...)`。如果分母是一个**文本变量**而非 `NumeralExpression`，`EvaluateAsNumber` 走第 25-31 行——非空文本一律给 1，于是「除以一个名字」不会崩，而是**安静地返回原值**。只有当分母真的折成 0（变量为空串或未设置）时才会抛 `DivideByZeroException`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EvaluateNumber` | `internal abstract int EvaluateNumber(TextProcessingContext context, TextObject parent)` | **本类型存在的全部理由。** 由 `TextExpression.EvaluateAsNumber` 的第一条规则调用（`TextExpression.cs:15-18`），**只在那一条路径上被用到**——两个实现者内部再用它递归组合操作数（`ArithmeticExpression.cs:37-40`）。两个形参与基类的 `EvaluateString` 同名同参，便于对照。**实现它但忘记让 `EvaluateString` 返回它的字符串化，两条路径的输出就会不一致。** |

## 真实示例

对照两条路径的结果——它们本该一致，不一致就说明 `EvaluateString` 与 `EvaluateNumber` 脱节：

```csharp
using TaleWorlds.Localization;

// A) 走 NumeralExpression 快速通道：{1 + 2}、{10 / 3}
TextObject arithmetic = new TextObject("{=my_arith}{1 + 2} and {10 / 3}");

// B) 走 int.TryParse 兜底：变量被替换成字符串后由基类解析
TextObject viaVariable = new TextObject("{=my_via}{N}");
viaVariable.SetTextVariable("N", 3);

Debug.Print("arithmetic = " + arithmetic.ToString(), 0);
Debug.Print("viaVariable= " + viaVariable.ToString(), 0);
```

用一个 0 分母验证上面说的那条边界——文本变量做分母不会崩：

```csharp
using TaleWorlds.Localization;

// 分母是 (1 - 1)：两个 SimpleNumberExpression 先归约成 ArithmeticExpression=0，再做除法
try
{
    TextObject zero = new TextObject("{=my_zero}q = {1 / (1 - 1)}");
    Debug.Print("result = " + zero.ToString(), 0);
}
catch (DivideByZeroException)
{
    Debug.Print("DivideByZeroException as expected", 0);
}
```

## 风险与边界

- **`internal`，编译期不可引用。** 且是抽象类，无构造点。
- **只有两个实现者。** `ArithmeticExpression`（四则运算，`ArithmeticExpression.cs:33-42`）与 `ComparisonExpression`（六种比较，把 bool 转 1/0）。**其余 17 个 `TextExpression` 子类全部走不了这条快速通道。**
- **`EvaluateString` 与 `EvaluateNumber` 必须一致。** `ArithmeticExpression.cs:45-48` 用 `EvaluateNumber(...).ToString()` 保证一致；**自己实现时若让两者返回不同内容，条件判断走 `EvaluateNumber`、文本输出走 `EvaluateString`，会出现「判定为真但显示为假」的文本。**
- **没有统一的类型约束。** 抽象成员不要求 `EvaluateString` 返回什么格式的字符串，`int.TryParse` 那条兜底路径对空串/带空格/带千分位都只能失败。
- **快速通道只在 `EvaluateAsNumber` 第一条规则里出现。** 直接调 `EvaluateNumber` 的全树调用点只有两个实现者自己——外部无法触达。

## 参见

- 基类与规则来源：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 三段式：`NumeralExpression` → `int.TryParse` → `RawValue` 非空给 1）
- 两个实现者：[ArithmeticExpression](../ArithmeticExpression/)、[ComparisonExpression](../ComparisonExpression/)
- 兄弟：[SimpleNumberExpression](../SimpleNumberExpression/)（**不是**本类子类）、[SimpleToken](../SimpleToken/)、`[TokenType](../TokenType/)`
- 分词与构造入口：[MBTextParser](../MBTextParser/)（`:369` 的规则链含 `ConsumeInnerAritmeticExpression` / `ConsumeOuterAritmeticExpression`）、[Tokenizer](../Tokenizer/)
- 运行时环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)
- 桶首页：[localization API 分区](../)