---
title: "SimpleNumberExpression"
description: "字面量数字的叶子：原样返回 RawValue，但会走一层 SimpleExpression 壳——想参与四则运算必须让 IsArithmeticExpression 认出它。"
---

# SimpleNumberExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class SimpleNumberExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/SimpleNumberExpression.cs`

## 概述

`SimpleNumberExpression` 是 19 行、3 个成员的字面量数字叶子，`EvaluateString`（`SimpleNumberExpression.cs:16`）**直接 `return base.RawValue;`**——和 [SimpleText](../SimpleText/) 一模一样的行为。差别在两处：类名不同，以及 `TokenType` 固定为 `TokenType.Number` 而不是 `TokenType.Text`。

它由 `MBTextParser.cs:42` 的 `TokenType.Number => new SimpleNumberExpression(strValue)` 构造，全树唯一。**要特别注意：它并没有实现 `EvaluateNumber`。** 数字节点**不是** [NumeralExpression](../NumeralExpression/)——`EvaluateNumber` 的两个实现者是 [ArithmeticExpression](../ArithmeticExpression/) 与 [ComparisonExpression](../ComparisonExpression/)。所以「`2` 能算术」这件事并不是靠本类，而是靠 `EvaluateAsNumber` 的第二条规则。

## 心智模型

把它当成**「一个碰巧长得像数字的文本」**。三条推论：

第一，**它返回的是字符串，不是 int。** 求值链是 `EvaluateString` → `TextGrammarProcessor.cs:16` 的 `.ToString()` → 拼进结果。**整条链上没有任何一处把它解析成 int。** 数字与数字的运算发生在 [ArithmeticExpression](../ArithmeticExpression/) 内部，而它靠的是 `EvaluateAsNumber` 的 `int.TryParse` 分支（`TextExpression.cs:19-22`），不是靠本类。

第二，**裸写的数字不是根节点。** `MBTextParser.cs:126` 的 `IsRootExpression` 白名单里**没有 `TokenType.Number`**。所以 `new TextObject("you have 12 men")` 里的 `12` 必须先被花括号包起来变成 `SimpleExpression(SimpleNumberExpression)` 才合法。**写成裸的 `12` 会被当作普通文本处理，`Tokenizer.cs:44` 的 `Number` 规则先命中还是 `Text` 规则先命中决定了它落进哪一类——这也是为什么引擎里的数字运算一律写成 `{1 + 2}`。**

第三，**它继承的是 `TextExpression` 而非 `NumeralExpression`，这是有代价的。** `TextExpression.cs:15-18` 的第一条规则「参数是 `NumeralExpression` 就调 `EvaluateNumber`」对本类不适用，于是它每次参与运算都要多走一次 `int.TryParse`。**一个 12 位数的字面量在条件里求值两次就是两次字符串解析。**

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:44` 的 `TokenDefinition(TokenType.Number, "\\d+", 2)` 把连续数字切出来，`MBTextParser.GetSimpleToken` 在 `:42` 把它变成本类。**注意那条规则的分组值是 2**（`Tokenizer.cs` 里 `FunctionParam` 也是 2，其余多为 1），分组值决定匹配长度如何计入——本类拿到的 `strValue` 是完整的数字串。

写出引擎真实使用的形态：`{?HOUR > 1}` 里的 `1` 就是这么来的（出处 `FactionHelper.cs:811`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 引擎原句（bannerlord-1.4.5 .../Helpers/FactionHelper.cs:811）：
// "{=NAseSXPl}It would take {HOUR} {?HOUR > 1}hours{?}hour{\?} for {HERO.NAME} to arrive at your party."
TextObject line = new TextObject("{=my_mod_eta}It would take {HOUR} {?HOUR > 1}hours{?}hour{\\?} for {HERO.NAME} to arrive.");
line.SetTextVariable("HOUR", 1);
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**字面量数字必须写在花括号里。** `new TextObject("Cost: 500")` 里的 `500` 不带花括号时不会成为本节点——`Tokenizer.cs:44` 的 `\\d+` 与 `Tokenizer.cs:83` 的文本累积分支谁先命中取决于扫描顺序，且裸数字不在 `IsRootExpression` 白名单里。**要让它参与比较或算术，必须写成 `{500}` 或 `{1 + 2}`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal override TokenType TokenType => TokenType.Number` | 固定 `TokenType.Number`。**关键消费点是 `MBTextParser.cs:491` 的 `IsArithmeticExpression`——`TokenType.Number` 在它那串 15 个枚举值里，所以花括号包住的数字才会被 `SimpleExpression` 认可。** 顺带也是 `MBTextParser.cs:219` 与 `:475` 两处判断的依据。 |
| `SimpleNumberExpression(string)` | `public SimpleNumberExpression(string value)` | 唯一构造器，第 11 行 `base.RawValue = value`。**全树唯一调用点 `MBTextParser.cs:42`。** 形参来自 `Tokenizer.cs:44` 的 `\\d+` 匹配，**只含数字**（可选前导负号由 `Tokenizer.cs:29` 的 `Minus` 单独成 token，不在本类里）。传 null 不会立刻炸，但求值链的 `.ToString()` 会抛。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **`return base.RawValue;`，原样返回字符串。** 与 [SimpleText](../SimpleText/) 行为逐字相同。两个形参收下不用。**注意它没有 `EvaluateNumber` 重写**——本类不是 `NumeralExpression`，所以 `TextExpression.cs:15-18` 的快速通道对它不生效，参与运算时靠 `int.TryParse`。 |

## 真实示例

对照「包在花括号里」与「裸写」——后者不会被当成数字节点：

```csharp
using TaleWorlds.Localization;

// A) 数字在花括号内：{2} -> SimpleExpression(SimpleNumberExpression)
TextObject braced = new TextObject("{=my_braced}you have {2} apples");

// B) 数字裸写：Tokenizer 的数字规则与文本累积分支竞争，最终按文本处理
TextObject bare = new TextObject("{=my_bare}you have 2 apples");

Debug.Print("braced='" + braced.ToString() + "'", 0);
Debug.Print("bare  ='" + bare.ToString() + "'", 0);
```

用数字参与条件分支，复现 `FactionHelper.cs:811` 的单复数切换：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject eta = new TextObject("{=my_eta2}It would take {HOUR} {?HOUR > 1}hours{?}hour{\\?}.");
foreach (int hours in new int[2] { 1, 4 })
{
    eta.SetTextVariable("HOUR", hours);
    Debug.Print(hours + " -> " + eta.ToString(), 0);
}
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **求值结果是 string，不是 int。** 任何想拿 int 的地方都得自己 `int.Parse`，而 [ArithmeticExpression](../ArithmeticExpression/) 的除法（`ArithmeticExpression.cs:40`）会直接用它折出来的值做除，**分母为 0 时是 `DivideByZeroException`，没有任何保护。**
- **裸数字不是合法根节点。** `MBTextParser.cs:126` 的 8 类白名单里没有 `Number`。**写 `{2}` 而不是 `2`。**
- **它不是 `NumeralExpression`。** 需要 `EvaluateNumber` 的地方（`TextExpression.cs:15-18`）拿不到本类，只能退回 `int.TryParse`。
- **负数不是本类。** `-` 由 `Tokenizer.cs:29` 的 `Minus` 单独成 token，负数路径见 `MBTextParser` 的 `ConsumeNegativeAritmeticExpression`（`:369` 的规则链之一）。
- **同一段文本每次 `ToString()` 都会重新分词解析**，除非先调 `TextObject.CacheTokens()`（`TextObject.cs:133`）把 token 缓存住。

## 参见

- 兄弟叶子：[SimpleText](../SimpleText/)（行为逐字相同的文本叶子）、[SimpleToken](../SimpleToken/)（通用叶子，按 `TokenType` 分派到 `context` 的各个取值方法）
- 契约：[TextExpression](../TextExpression/)（`EvaluateAsNumber` 的三段式规则在这里）、[NumeralExpression](../NumeralExpression/)（**本类不是它的子类**）、[ArithmeticExpression](../ArithmeticExpression/)
- 分词与构造：[Tokenizer](../Tokenizer/)（`:44` 的 `Number` 规则）、[MBTextParser](../MBTextParser/)（`:42` 构造、`:491` 认可）、[TokenType](../TokenType/)
- 公开入口：[TextObject](../TextObject/)（`CacheTokens` / `SetTextVariable`）、[MBTextManager](../MBTextManager/)、[TextGrammarProcessor](../TextGrammarProcessor/)、[TextProcessingContext](../TextProcessingContext/)
- 真实用例出处：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs:811`
- 桶首页：[localization API 分区](../)