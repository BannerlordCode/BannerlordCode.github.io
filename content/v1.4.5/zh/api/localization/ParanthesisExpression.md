---
title: "ParanthesisExpression"
description: "圆括号组的包装节点，类名沿用引擎的拼写错误 Paranthesis：只有括号里整体算得通时才出现，否则花括号被丢掉、内容散成独立节点。"
---

# ParanthesisExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class ParanthesisExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/ParanthesisExpression.cs`

## 概述

`ParanthesisExpression` 是 22 行、3 个成员的圆括号包装节点，**类名拼写错误是引擎原样**（`Paranthesis` 少一个 `e`，与 `LangaugeMarkerExpression` 是同一类历史遗留）。它的唯一构造点是 `MBTextParser.cs:477`，在 `ConsumeParenthesisExpression()` 里：**吃掉 `(`，让 `DoExpressionRules()` 把中间能算的东西解析完，如果整体是一个算术表达式，就包成本节点，然后吃掉 `)`。**

`EvaluateString`（`ParanthesisExpression.cs:19`）直接 `return _innerExp.EvaluateString(context, parent);`——**它与 [SimpleExpression](../SimpleExpression/) 的转发逻辑逐字相同，唯一区别是构造器第 14 行会把括号写进 `RawValue`。**

## 心智模型

把它当成**「运算优先级的语法记号」**。三条推论：

第一，**括号本身不参与运算，它只影响树的形状。** `{1 * (2 + 3)}` 里，括号让 `2 + 3` 先被归约成一个 `ArithmeticExpression` 节点，再作为 `Multiply` 的右操作数。**求值阶段没有任何括号残留**——`ArithmeticExpression.EvaluateNumber`（`ArithmeticExpression.cs:33-42`）只看 `_op` 与两个子树。

第二，**括号不总是被包。** `MBTextParser.cs:474-484`：只有 `IsArithmeticExpression(tokenType)` 成立才 `new ParanthesisExpression(...)`；**不成立时第 483 行 `DiscardToken(TokenType.CloseParenthesis)` 后 `return true`——括号消失，里面的节点留在栈上**成为独立根表达式。所以 `(some plain text)` 会输出 `some plain text`，括号没了。

第三，**括号里可以再套括号，但深度没有上限也没有保护。** `DoExpressionRules()`（`MBTextParser.cs:367`）在 `ConsumeFunction` 与 `ConsumeParenthesisExpression` 里都会递归调用自身（`:392`、`:471`）。**引擎里没有任何深度计数。**

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:35` 的 `TokenDefinition(TokenType.OpenParenthesis, "\\(", 1)` 与 `:34` 的 `CloseParenthesis` 切出括号 → `MBTextParser.cs:369` 的规则链里 `ConsumeParenthesisExpression` 命中 → `:477` 构造。**全树唯一构造点。**

用括号改变运算优先级，写一段能验证结果不同的文本：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 括号改变归约顺序：1 * (2 + 3) = 5，而 1 * 2 + 3 = 5 也恰好相同，
// 所以换一组真正分叉的数：2 * (3 + 4) = 14，2 * 3 + 4 = 10
TextObject grouped = new TextObject("{=my_grouped}answer = {2 * (3 + 4)}");
TextObject ungrouped = new TextObject("{=my_ungrouped}answer = {2 * 3 + 4}");

Debug.Print("grouped  = " + grouped.ToString(), 0);
Debug.Print("ungrouped = " + ungrouped.ToString(), 0);
```

**用它最容易踩的一条**：**括号里不是算术表达式时括号会被静默丢掉，而内容保留。** 典型踩法是把说明文字写进括号：`{=k}reward ({NOTE})` 里的 `NOTE` 若未设置，`{NOTE}` 求值成空串，于是玩家看到的是 `reward ()`——**括号还在，因为它们在原文里；反过来 `(a b c)` 这种裸括号内容若整体不算表达式，括号也会消失，句子里凭空少两个字符。** 排查句子「少了括号」时，先确认括号里有没有一个能通过 `IsArithmeticExpression`（`MBTextParser.cs:491`）的节点。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_innerExp` | `private readonly TextExpression _innerExp` | 被括号包住的节点，**`readonly`**（第 7 行声明）。类型是抽象基类，实际可以是 `ArithmeticExpression`（`{2 * (3 + 4)}` 里的 `3 + 4`）、`ComparisonExpression`、嵌套的 `ParanthesisExpression`、或任何 `IsArithmeticExpression` 认可的叶子。`EvaluateString` 唯一读它。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.ParenthesisExpression` | 固定 `TokenType.ParenthesisExpression`。**两处消费**：`MBTextParser.cs:491` 的 `IsArithmeticExpression` 把它列为「自身算术表达式」之一（所以 `(1 + 2) * 3` 的左括号组能被认），以及同一行的递归判定。 |
| `ParanthesisExpression(TextExpression)` | `public ParanthesisExpression(TextExpression innerExpression)` | 唯一构造器，**第 14 行 `base.RawValue = "(" + innerExpression.RawValue + ")";`——与 [SimpleExpression](../SimpleExpression/) 第 14 行的纯拷贝不同，这里把括号写进了 `RawValue`。** 这让 `EvaluateAsNumber` 的兜底分支能看到括号形状。**全树唯一调用点 `MBTextParser.cs:477`。** 传 null 会在第 14 行拼字符串时抛 `NullReferenceException`。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **纯转发，不去括号、不改内容。** 两个形参原样传给内层。**求值结果里永远不会出现圆括号**——括号只在 `RawValue` 里存在过。 |

## 真实示例

对照「括号内是算术」与「括号内不是算术」两种结局：

```csharp
using TaleWorlds.Localization;

// A) 括号内是算术 -> ParanthesisExpression 产生，括号不出现在结果里
TextObject arithmetic = new TextObject("{=my_arith}total {2 * (3 + 4)}");

// B) 括号内不是算术 -> MBTextParser.cs:483 丢掉括号，内容保留
TextObject notArithmetic = new TextObject("{=my_notArith}see (the docs) for details");

Debug.Print("A = " + arithmetic.ToString(), 0);
Debug.Print("B = " + notArithmetic.ToString(), 0);
```

验证 `RawValue` 里确实带着括号——用会暴露原文的场景（除零捕获）间接观察：

```csharp
TextObject probe = new TextObject("{=my_probe2}{1 / (1 - 1)}");
try
{
    Debug.Print(probe.ToString(), 0);
}
catch (DivideByZeroException)
{
    // 说明 (1 - 1) 确实被归约成 ArithmeticExpression 并进入了除法
    Debug.Print("divided by zero: parenthesis group was built", 0);
}
```

## 风险与边界

- **类名拼写错误是引擎原样**：`Paranthesis`，少一个 `e`。**反射、`nameof`、按名检索都只能写错拼。**
- **`internal`，编译期不可引用。**
- **括号不保证存在。** `MBTextParser.cs:474-484` 的 else 分支会把括号丢掉。**「我写了括号但输出里没有」是正常结果，不是 bug。**
- **嵌套深度无上限、无保护。** `DoExpressionRules()` 递归自身，**深括号在解析阶段是栈增长，不是异常保护。** 生成的文本不要用程序拼括号。
- **构造器在拼 `RawValue` 时解引用形参。** 传 null 立刻抛（第 14 行）；引擎自身不会这么传（`MBTextParser.cs:474` 已确认括号内是合法节点）。
- **除法无零保护。** `(1 - 1)` 会算出 0，`ArithmeticExpression.cs:40` 直接除——**这是括号分组最容易踩出的崩溃点**。

## 参见

- 兄弟包装节点：[SimpleExpression](../SimpleExpression/)（花括号版，`RawValue` 不含花括号）、[SimpleToken](../SimpleToken/)
- 契约：[TextExpression](../TextExpression/)、[NumeralExpression](../NumeralExpression/)、[ArithmeticExpression](../ArithmeticExpression/)、[ComparisonExpression](../ComparisonExpression/)
- 唯一构造点：[MBTextParser](../MBTextParser/)（`ConsumeParenthesisExpression` 第 466-487 行、`IsArithmeticExpression` 第 489-496 行、规则链第 369 行）
- 分词：[Tokenizer](../Tokenizer/)（`:34`/`:35` 的圆括号规则）、[TokenType](../TokenType/)（`ParenthesisExpression` 声明在 `TokenType.cs:51`）
- 运行时环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)、[TextObject](../TextObject/)
- 桶首页：[localization API 分区](../)