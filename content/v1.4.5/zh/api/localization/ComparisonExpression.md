---
title: "ComparisonExpression"
description: "比较节点：六种比较全部先经 EvaluateAsNumber 真值化再比大小，所以比较文本等于比较它们的「非零折算值」；布尔经 EvaluateNumber 变成 1/0。"
---

# ComparisonExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class ComparisonExpression : NumeralExpression`
**Base:** `NumeralExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/ComparisonExpression.cs`

## 概述

`ComparisonExpression` 是 51 行、6 个成员的二元比较节点，是 [NumeralExpression](../NumeralExpression/) 的另一个实现者。唯一构造点是 `MBTextParser.cs:575`，在 `ConsumeComparisonExpression` 里；运算符由 `GetComparisonOp`（`:602`）从 token 类型映射。

它的求值分两层：`EvaluateBoolean`（`ComparisonExpression.cs:23-35`）是一个六分支 `switch`，把两个操作数经 `EvaluateAsNumber` 折成 int 后比较；`EvaluateNumber`（`:37-44`）再把 bool 变成 1 或 0。**这正是本地化文本里 `{?HERO.GENDER}her{?}his{\?}` 能工作的全部机制**——`GENDER` 被绑成 1 或 0（`StringHelpers.cs:58`），比较 `!= 0` 得到 true/false，再折回 1/0 供 `ConditionExpression` 判真假。

## 心智模型

把它当成**「整数相等判定器」**。三条推论：

第一，**它比的不是字符串，是折算值。** `:27-32` 六个分支全部是 `EvaluateAsNumber(...) == / != / > / >= / < / <= EvaluateAsNumber(...)`。所以 `{?LORD == empire}...` 里两侧若是文本，`LORD` 折成 1、`empire` 也折成 1，**判定为相等**。**比较文本的相等，永远在比「两边是不是非空」。**

第二,`EvaluateNumber` 是唯一的对外出口，而它返回的是 0/1。**所以本节点在文本里直接渲染出来的永远是 `"0"` 或 `"1"`**——它不是一个能显示的东西，只是一个能判断的东西。

第三，**它内部不需要 `EvaluateString` 与 `EvaluateNumber` 对齐，因为它是唯一把布尔包成整数的那个。** 对照 [ArithmeticExpression](../ArithmeticExpression/)（`:47` 用 `EvaluateNumber(...).ToString()` 保证同源）：本类的 `EvaluateString` 是 `:46-49` 的独立实现，`:48` 同样调 `EvaluateNumber(...).ToString()`，两条路径天然给出一致的 0/1。

边界：**`internal`，无 `InternalsVisibleTo`**；同样**不在 `MBTextParser.cs:126` 的根节点白名单里**，必须被花括号包住——引擎原句 `{?HOUR > 1}` 正是如此（`FactionHelper.cs:811`）。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:50-55` 的六条规则切出 `==` `!=` `>` `>=` `<` `<=`，`MBTextParser.cs:369` 规则链末位的 `ConsumeComparisonExpression`（`:555`）命中，`GetComparisonOp`（`:602-617`）把 token 映射成 [ComparisonOperation](../ComparisonOperation/)，第 575 行构造。

复现引擎里的性别分支（出处 `bannerlord-1.4.5/.../Helpers/FactionHelper.cs:634`）：

```csharp
using TaleWorlds.CampaignSystem;   // SetCharacterProperties 扩展方法所在命名空间
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 引擎原句：{?HERO.GENDER}her{?}his{\?}
TextObject line = new TextObject("{=my_cmp}{?HERO.GENDER}her{?}his{\\?} captors.");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**比较文本时两侧都折成 1，于是「相等」几乎永远为真。** 写 `{?LORD == empire}` 想表达「某个变量等于 empire」，实际判的是「LORD 非空」对「empire 字面量非空」——**结果恒为真，与 LORD 到底是什么无关。** 唯一可靠的比较对象是数字：`{?HOUR > 1}`、`{?HERO.AGE > 30}`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_op` | `private readonly ComparisonOperation _op` | 比较种类（`:7` 声明）。**唯一消费点是 `EvaluateBoolean` 的 switch**（`:25-34`）。`readonly`，构造后不变。 |
| `_exp1` / `_exp2` | `private readonly TextExpression _exp1` / `_exp2` | 左右两个被比较的节点。`:27-32` 六个分支**每一个都对两侧各调一次 `EvaluateAsNumber`**——一次比较最多触发四次折算。**不判空**；`:568` 的 `IsArithmeticExpression` 在构造前已过滤。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.ComparisonExpression` | 固定值。**关键消费点是 `MBTextParser.cs:491` 的 `IsArithmeticExpression`**——它在里面，所以 `{A > B}` 整体能被花括号包成 `SimpleExpression`，也能作为 `ArithmeticExpression` 的操作数。 |
| `ComparisonExpression(ComparisonOperation, TextExpression, TextExpression)` | `public ComparisonExpression(ComparisonOperation op, TextExpression exp1, TextExpression exp2)` | 唯一构造器，`:20` 用 `string.Concat(exp1.RawValue, op, exp2.RawValue)` 拼 `RawValue`。**这行拼接让「比较」在 `RawValue` 里留痕，排查 `{?X > 1}` 为什么没走对分支时能看到原文。** |
| `EvaluateBoolean` | `internal bool EvaluateBoolean(TextProcessingContext context, TextObject parent)` | **真正的比较逻辑。** 六分支 switch（`:27-32`）+ `:33` 的 `_ => false`。**是 `internal` 但不是抽象成员——唯一调用点是本类的 `EvaluateNumber`（`:39`）。** |
| `EvaluateNumber` | `internal override int EvaluateNumber(TextProcessingContext context, TextObject parent)` | `:39-43`：`:39` 调 `EvaluateBoolean`，假则 `:41` 返回 0，否则 `:43` 返回 1。**这是 `NumeralExpression` 契约的实现**，也是 `TextExpression.cs:15-18` 第一条规则的目标。**所以本节点参与外层算术时，「比较」就是一个 0/1 的整数。** |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **独立实现（`:46-49`）**，`:48` 是 `EvaluateNumber(...).ToString()`。**它没有出现在本页原来的成员表里——补上这条是因为它是基类契约的另一条路径**（[TextExpression](../TextExpression/) 的抽象成员），且与 `EvaluateNumber` 同源，**所以本节点渲染出来的永远是 `0` 或 `1`，不是一个能显示的东西。** |

## 真实示例

数字比较：唯一可靠的用法（形态照 `FactionHelper.cs:811`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject eta = new TextObject("{=my_eta}It would take {HOUR} {?HOUR > 1}hours{?}hour{\\?}.");
eta.SetTextVariable("HOUR", 1);
Debug.Print("1h -> " + eta.ToString(), 0);
eta.SetTextVariable("HOUR", 5);
Debug.Print("5h -> " + eta.ToString(), 0);
```

文本比较：演示上面那条「恒为真」的陷阱：

```csharp
using TaleWorlds.Localization;

// 两边都是非空文本 -> 都折成 1 -> 1 == 1 恒真，与 LORD 的实际内容无关
TextObject trap = new TextObject("{=my_trap}{?LORD == empire}yes{?}no{\\?}");
trap.SetTextVariable("LORD", "Sturgia");
Debug.Print("Sturgia == empire -> " + trap.ToString(), 0);

// 左侧不设置 -> 求值成空串 -> 折成 0 -> 0 == 1 为假
trap.SetTextVariable("LORD", string.Empty);
Debug.Print("empty == empire  -> " + trap.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **比较文本恒等于「比较非空」。** 见「如何使用」。**这是本类最容易造成错误文案的地方。**
- **不在根节点白名单。** `MBTextParser.cs:126` 的 `IsRootExpression` 只列了 8 个 `TokenType`：`Text`、`SimpleExpression`、`ConditionalExpression`、`TextId`、`SelectionExpression`、`MultiStatement`、`FieldExpression`、`LanguageMarker`——**`ComparisonExpression` 不在其中**。**所以比较必须花括号包住。**
- **两侧各折算一次，共四次。** `_ => false`（`:33`）意味着未列出的运算一律判假，**不会抛异常**。
- **`:33` 的 `_ => false` 是静默兜底。** 如果 `ComparisonOperation` 被追加了成员而忘了加 switch 分支，结果恒为假且无任何提示。
- **运算符只有六个，没有字符串比较。** `Tokenizer.cs:50-55` 也没有 `is` / `contains` 之类的规则。
- **`GetComparisonOp` 有冗余分支。** `MBTextParser.cs:606-616` 的嵌套 switch 里 `TokenType.GreaterThan` 出现两次（`:607` 与 `:614`），且 `:613` 之后还有一层 `_ => ComparisonOperation.Equals`。**结果正确（六个运算都能映射到），但这段代码冗余**——排错时不要以为 `:614` 覆盖了 `:607`。

## 参见

- 契约：[NumeralExpression](../NumeralExpression/)、[TextExpression](../TextExpression/)（`EvaluateAsNumber` 真值化规则）
- 运算符枚举：[ComparisonOperation](../ComparisonOperation/)
- 兄弟：[ArithmeticExpression](../ArithmeticExpression/)、[ConditionExpression](../ConditionExpression/)（消费本节点的 0/1）、[SimpleExpression](../SimpleExpression/)（花括号壳）
- 构造点：[MBTextParser](../MBTextParser/)（`:555` `ConsumeComparisonExpression`、`:582` `IsComparisonOperator`、`:602` `GetComparisonOp`、`:369` 规则链、`:491`）
- 字段来源：`StringHelpers.cs:58` 把 `GENDER` 绑成 `IsFemale ? 1 : 0`；[TextObject](../TextObject/)
- 求值环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)
- 真实用例出处：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs:634`、`:811`
- 桶首页：[localization API 分区](../)