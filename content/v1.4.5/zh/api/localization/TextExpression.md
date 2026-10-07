---
title: "TextExpression"
description: "本地化表达式树的根契约：每个节点都能把自己求值成字符串，并被共享的 EvaluateAsNumber 折成整数——非数字文本一律算 1。"
---

# TextExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal abstract class TextExpression`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/TextExpression.cs`

## 概述

`TextExpression` 是 Bannerlord 本地化表达式树的总契约，35 行、4 个成员，**自己一行解析逻辑都没有**。真正干活的是 19 个 `internal` 子类（`SimpleText`、`VariableExpression`、`ConditionExpression`、`FunctionCall`、`ArithmeticExpression`…），它们由 `MBTextParser` 在 `Tokenize` 之后按文法逐层组装，最后由 `TextGrammarProcessor.Process` 在 `TextGrammarProcessor.cs:16` 对每个根节点调 `EvaluateString` 并把结果首尾相接。

四个成员各管一头：`TokenType` 是节点的分类标签，**文法分支全靠它判断**（`MBTextParser.cs:491` 的 `IsArithmeticExpression` 拿它和 15 个枚举值逐一比对）；`RawValue` 是源码原文；`EvaluateString` 是唯一求值入口；`EvaluateAsNumber` 是所有节点共用的「折成整数」实现——**注意它的第一个参数 `exp` 才是被折的那个，`this` 并没有参与运算**。

## 心智模型

把它当成**「节点契约 + 一条把一切都真值化的旁路」**。三条推论：

第一，**`RawValue` 是模板源码，不是渲染结果。** 子类构造器普遍写它（`SimpleText.cs:11` 写原始文本、`ParanthesisExpression.cs:14` 写 `"(" + inner + ")"`、`ArithmeticExpression.cs:23` 写 `exp1.RawValue + op + exp2.RawValue`）。全树只有两处读它：`EvaluateAsNumber` 的第 25-31 行判真假，以及排错时定位。**拿 `RawValue` 直接显示，得到的是 `{=key}War with {FACTION}` 这种未渲染模板。**

第二，**`EvaluateAsNumber` 是三段式真值化，不是 `int.Parse`。** 第 15-33 行顺序是：① 参数是 `NumeralExpression` 就走它自己的 `EvaluateNumber`（**全树只有 `ArithmeticExpression` 与 `ComparisonExpression` 两个 `: NumeralExpression` 的类走这一支**）；② `int.TryParse(EvaluateString(...))` 解得出整数就用它；③ 解不出就看 `RawValue`——`null` 给 0，**非空字符串一律给 1**，空串给 0。**所以 `{FACTION}` 被替换成任何非空文本都会算作 1，而不是 0。**

第三，**这条旁路把类型错误静默吞掉了。** `ConditionExpression.cs:37` 用 `EvaluateAsNumber(...) != 0` 当条件真值，`SelectionExpression.cs:22` 用它当下标，`ArrayReference.cs:20` 用它取数组下标。**下标表达式写成变量名、却解析出非数字文本时，你拿到的是下标 1 或「条件为真」，不是异常。**

边界：**整个类型是 `internal`**，且 `bin/TaleWorlds.Localization/Properties/AssemblyInfo.cs` 里没有任何 `InternalsVisibleTo`。**mod 在编译期引用不到它**，只能通过 [TextObject](../TextObject/) 与 `MBTextManager.SetFunction` 这两个公开入口间接触发。

## 如何使用

**怎么拿到它**：你永远不会手写 `new TextExpression`。链路是
`TextObject.ToString()` → `MBTextManager.Process`（`MBTextManager.cs:151`）→ `Tokenizer.Tokenize`（`:160`）→ `MBTextParser.Parse`（`:162`）→ `new MBTextModel()`（`MBTextParser.cs:624`）→ `TextGrammarProcessor.Process`（`TextGrammarProcessor.cs:7`）→ 每个根节点 `EvaluateString`（`:16`）。
另一条公开入口是 `MBTextManager.SetFunction`（`MBTextManager.cs:216`），它第 218 行直接 `MBTextParser.Parse(Tokenizer.Tokenize(functionBody))`，把一段函数体字符串编译成一棵表达式树存进 `TextContext`。

写一段真会被求值的文本，验证节点确实跑起来了：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 1) 文本模板：{=id} 是本地化 key，{NAME} 是变量占位
TextObject template = new TextObject("{=my_probe}Recruits: {RECRUITS}, Leader: {LEADER}");
template.SetTextVariable("RECRUITS", Hero.MainHero.Name);
template.SetTextVariable("LEADER", Hero.MainHero.Name);

// 2) 预热 token 缓存（第二次 ToString 起省掉一次 Tokenize）
template.CacheTokens();
Debug.Print(template.ToString(), 0);
```

**用它最容易踩的一条**：**函数没注册不会报错，会静默退化成「返回第一个实参」。** `TextProcessingContext.CallFunction` 第 322 行取函数体，为 null 时第 329-332 行走 `else if (array.Length != 0) mBStringBuilder.Append(array[0]);`——**`{myTier(2)}` 在没调过 `SetFunction` 时会渲染成字面量 `2`**，不抛异常、不留痕迹。反过来说，函数体存在但 `RootExpressions` 为空时返回空串，而函数名拼错与函数没注册是同一种表现。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal abstract TokenType TokenType { get; }` | 节点分类标签，各子类各自实现（`SimpleText` 给 `TokenType.Text`、`TextIdExpression` 给 `TokenType.TextId`、`NumeralExpression` 的子类再细分 `ArithmeticSum` / `ArithmeticProduct`）。**`MBTextParser` 的所有文法分支都拿它做 switch/比较**，`MBTextParser.cs:491` 一行里比对了 15 个枚举值。**它决定这个节点会被哪条文法规则吞掉，不是给人看的分类。** |
| `RawValue` | `internal string RawValue { get; set; }` | 源码原文。子类构造器里赋值（`SimpleText.cs:11`、`SimpleNumberExpression.cs:11`、`ParanthesisExpression.cs:14`）。**全树两处消费**：`EvaluateAsNumber` 第 25-31 行拿它判真假，以及调试输出定位。**注意 `QualifiedIdentifierExpression.cs:13` 的构造器没有写它，所以这类节点的 `RawValue` 是 null——`EvaluateAsNumber` 兜底时会直接给 0。** |
| `EvaluateString` | `internal abstract string EvaluateString(TextProcessingContext context, TextObject parent)` | **唯一的求值入口。** `context` 是变量表（`TextProcessingContext`），`parent` 是触发本次求值的 `TextObject`（可空，`TextGrammarProcessor.Process` 的 `parent = null` 默认值就是它）。叶子返回字面量（`SimpleText.cs:16` 直接 `return base.RawValue`），分支递归求值子节点。**返回类型是 string，不是 `TextObject`——这就是上一层信息丢失的根源。** |
| `EvaluateAsNumber` | `internal int EvaluateAsNumber(TextExpression exp, TextProcessingContext context, TextObject parent)` | **把任意节点折成整数，`this` 不参与，`exp` 才是被折的那个。** 三段：参数是 `NumeralExpression` → `EvaluateNumber`；`int.TryParse` 成功 → 解析值；否则 `RawValue == null` 给 0、`RawValue.Length != 0` 给 1、空串给 0。**全树 14 个调用点**，包括 `ArithmeticExpression.cs:37-40`（四则运算）、`ComparisonExpression.cs:27-32`（六种比较）、`ConditionExpression.cs:37`、`SelectionExpression.cs:22`、`ArrayReference.cs:20`。**算术运算的每一个操作数都过这里，所以文本型变量参与 `+ - * /` 时会被当 1 用。** |

## 真实示例

注册一个函数体，让 `FunctionCall` 节点真的被解析并求值（`$1` 是形参，`Tokenizer.cs:43` 的 `FunctionParam` 模式）：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.Core;

MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");

TextObject note = new TextObject("{=my_note}A {myTier(2)} banner from {HERO}");
note.SetTextVariable("HERO", Hero.MainHero.Name);
Debug.Print(note.ToString(), 0);
```

用纯变量替换确认树里只有 `SimpleText` / `VariableExpression` 两类叶子：

```csharp
using TaleWorlds.Localization;

TextObject report = new TextObject("{=my_report}{LORD} holds {CASTLES} castles");
report.SetTextVariable("LORD", Kingdom.All[0].Name);
report.SetTextVariable("CASTLES", 3);
Debug.Print("len = " + report.Length + " rendered = " + report.ToString(), 0);
```

## 风险与边界

- **类型是 `internal`，没有 `InternalsVisibleTo`。** 编译期引用不到，只能走公开入口或反射。**反射调用 `EvaluateString` 会拿到的是当前语言快照，切语言后不刷新。**
- **`RawValue` 可能为 null。** `QualifiedIdentifierExpression` 的构造器没写它。凡是拿 `RawValue` 做长度判断的代码都要先判空。
- **`EvaluateAsNumber` 不抛异常。** 非数字文本一律当 1。**`{#1}` 这种选择写错变量名时，表现为「命中第二个分支」，而不是报错。**
- **除法没有零保护。** `ArithmeticExpression.cs:40` 直接 `EvaluateAsNumber(_exp1) / EvaluateAsNumber(_exp2)`，分母被折成 0 时是 `DivideByZeroException`。而分母是文本变量时**很可能被折成 1 而不是 0**——这反而掩盖了错误。
- **节点是一次性编译产物。** `MBTextParser` 是 `[ThreadStatic]` 单例（`MBTextParser.cs:10-11`），`Parse` 入口先 `Clear()`（`:638`）。**模型节点不跨线程共享，但 `TextObject.CacheTokens()` 的 token 缓存也不是线程安全的**（`TextObject.cs:133` 无锁）。
- **求值结果只保留字符串。** 见「如何使用」末尾那条。

## 参见

- 同桶：[TextObject](../TextObject/)（公开入口，`ToString` 触发整条链）、[MBTextManager](../MBTextManager/)（`Process` 与 `SetFunction` 两个公开入口）、[MBTextParser](../MBTextParser/)（把 token 组装成本树的文法）、[Tokenizer](../Tokenizer/)（正则切词）
- 同桶：[TextGrammarProcessor](../TextGrammarProcessor/)（唯一的 `EvaluateString` 消费者）、[TextProcessingContext](../TextProcessingContext/)（`context` 参数的实体，提供变量表与函数表）、[TokenType](../TokenType/)（`TokenType` 的 66 个枚举值）
- 同桶：[MBTextModel](../MBTextModel/)（根节点容器）、[MBTextToken](../MBTextToken/)（词法阶段的产物）
- 同桶叶子示例：[SimpleText](../SimpleText/)、[VariableExpression](../VariableExpression/)、[ConditionExpression](../ConditionExpression/)、[FunctionCall](../FunctionCall/)、[SelectionExpression](../SelectionExpression/)
- 桶首页：[localization API 分区](../)