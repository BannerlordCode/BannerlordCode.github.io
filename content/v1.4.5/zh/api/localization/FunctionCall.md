---
title: "FunctionCall"
description: "函数调用节点：函数体没注册时静默退化成「返回第一个实参」——名字拼错与参数不足都不会报错，只会把实参原文渲染出去。"
---

# FunctionCall

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class FunctionCall : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/FunctionCall.cs`

## 概述

`FunctionCall` 是 27 行、5 个成员的函数调用节点，**唯一构造点是 `MBTextParser.cs:406`**，在 `ConsumeFunction` 里。文本形态是 `函数名(实参, 实参)`——`Tokenizer.cs:47` 的 `FunctionIdentifier` 规则 `[a-zA-Z_][a-zA-Z\d_]*\(` 连左括号一起匹配，实参是 `Tokenizer.cs:43` 的 `FunctionParam`（`\$\d+`，即 `$1`/`$2`）。

它的求值把控制权完全交给 `TextProcessingContext.CallFunction`（`TextProcessingContext.cs:310-337`）：该方法把每个实参求值成 `TextObject` 压进 `_curParams` 栈，查函数体，存在就遍历函数体的根表达式求值并拼接，**不存在就退回返回第一个实参**。

## 心智模型

把它当成**「指向一张可能不存在的表的指针」**。三条推论：

第一，**函数名拼错 ≡ 函数没注册，两者是同一件事。** `:24` 调 `context.CallFunction(_functionName, …)`，`TextProcessingContext.cs:320` 的 `GetFunctionBody` 用 `_functions.TryGetValue` 查表。**查不到不是异常分支**——`:322` 的 `if (functionBody != null)` 落空后，`:329` 的 `else if (array.Length != 0)` 把 `array[0]` 追加进去。**所以 `{myTier(2)}` 在没调过 `SetFunction` 时渲染成字面量 `2`。**

第二，**函数名本身不存，只存在于 `RawValue`。** `:19` 的 `base.RawValue = _functionName;`。排错时能看到函数名，但要确认它注册没注册，只能查 `TextContext._functions`（`TextProcessingContext.cs:341`）。

第三,**实参被提前求值并拍平成 `TextObject`。** `TextProcessingContext.cs:314` 对每个实参调 `EvaluateString` 再 `new TextObject(...)`，同时 `:315` 另存一份 `RawValue` 未求值版本进 `_curParamsWithoutEvaluate`。**前者是给函数体里的 `$n` 用的，后者是给 `$n.attr` 这类属性访问用的**（见 [ParameterWithAttributeExpression](../ParameterWithAttributeExpression/)）。两套实参的生命周期都由 `:317-318` 的双栈 push 与 `:334-335` 的双栈 pop 严格配对。

边界：**`internal`，无 `InternalsVisibleTo`**；它**不在** `MBTextParser.cs:126` 的根节点白名单里（名单只有 8 类，无 `FunctionCall`），**但它也不需要花括号**——因为 `ConsumeFunction` 在 `DoExpressionRules`（`:369`）内部完成，`FunctionCall` 自己就是被 `PushToken` 的完整节点，直接进入根表达式收集。

## 如何使用

**怎么拿到它**：`MBTextManager.SetFunction(name, body)`（`MBTextManager.cs:216`）在 `:218` 调 `MBTextParser.Parse(Tokenizer.Tokenize(functionBody))` 把函数体编译成 [MBTextModel](../MBTextModel/) 并存进 `TextContext`。文本里写 `{name(…)}` 触发 `ConsumeFunction`（`MBTextParser.cs:376`），其中 `:382` 用 `RawValue.Substring(0, Length - 1)` 去掉尾随的 `(` 得到函数名。

注册并调用一个按档位取词的函数：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 1) 注册函数体：{#$1} 拿形参当选择下标，{\#} 是结束符
MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");

// 2) 在文本里调用
TextObject line = new TextObject("{=my_fn}A {myTier(1)} banner from {HERO}");
line.SetTextVariable("HERO", Hero.MainHero.Name);
Debug.Print("registered  -> " + line.ToString(), 0);
```

**用它最容易踩的一条**：**没注册就渲染出实参本身，不报错。** 下面这段在 `SetFunction` 之前/之后调用，输出完全不同：

```csharp
using TaleWorlds.Localization;

TextObject probe = new TextObject("{=my_probe}value={myMissing(42)}");

// 未注册 -> TextProcessingContext.cs:329-332 返回第一个实参 -> 输出 "value=42"
Debug.Print("before: " + probe.ToString(), 0);

MBTextManager.SetFunction("myMissing", "{#$1}was found{\\#}");
Debug.Print("after : " + probe.ToString(), 0);
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_functionName` | `private string _functionName` | 函数名，不含 `(`（`:9` 声明，`:17` 赋值）。**唯一消费点是 `:24` 的 `context.CallFunction`。** 不 `readonly`——引擎里没人改它，但也没有保护。 |
| `_functionParams` | `private List<TextExpression> _functionParams` | 实参表达式列表（`:11` 声明）。**`:18` 构造时 `ToList()` 拷贝一份**，之后本类不再改它——**真正被求值的是 `CallFunction` 内部临时压栈的那两套 `TextObject`**。传 null 会在 `:17` 抛。 |
| `TokenType` | `internal override TokenType TokenType => TokenType.FunctionCall` | 固定值，声明在 `:13`。**`MBTextParser.cs:491` 的 `IsArithmeticExpression` 认它**，所以 `{f(1) + 2}` 里函数结果可以直接参与算术。 |
| `FunctionCall(string, IEnumerable<TextExpression>) | `public FunctionCall(string functionName, IEnumerable<TextExpression> functionParams)` | 唯一构造器（`:15-20`）。`:17` 存名字、`:18` 拷贝实参列表、`:19` 把名字写进 `RawValue`。**全树唯一调用点 `MBTextParser.cs:406`。** |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | `:24` 一行：`return context.CallFunction(_functionName, _functionParams, parent).ToStringWithoutClear();`。**注意 `.ToStringWithoutClear()`——函数返回值在这里就被拍平成字符串了**，后续拼接不再有 `TextObject`。 |

## 真实示例

同一个调用在「注册前后」的两种输出——这是本类最重要的可观测行为：

```csharp
using TaleWorlds.Localization;

TextObject probe = new TextObject("{=my_probe2}banner={myTier(2)}");
Debug.Print("unregistered -> " + probe.ToString(), 0);   // 渲染出实参 "2"

MBTextManager.SetFunction("myTier", "{#$1}small{#}large{#}ancient{\\#}");
Debug.Print("registered   -> " + probe.ToString(), 0);   // 渲染出 "large"
```

函数名拼错与没注册是同一种表现——两者都无法从输出区分：

```csharp
using TaleWorlds.Localization;

MBTextManager.SetFunction("myTier", "{#$1}small{#}large{\\#}");
TextObject probe = new TextObject("{=my_typo}banner={myTier(2)}");
Debug.Print("typo -> " + probe.ToString(), 0);   // 同样渲染出实参 "2"，无任何提示
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **未注册 / 名字拼错 = 静默返回第一个实参。** `TextProcessingContext.cs:329-332`。**这是本类最危险的地方：文案里混进一个数字或单词，没有任何异常。**
- **函数体存在但为空时返回空串。** `TextProcessingContext.cs:322` 判 `functionBody != null` 后遍历 `RootExpressions`——空模型拼出空串。**「空函数体」与「无参数时的首参兜底」是两条不同分支**（`:329` 只在 `array.Length != 0` 时生效）。
- **实参个数不够时 `$n` 返回一句可见的英文错误文本。** `TextProcessingContext.cs:363` 的 `new TextObject("Can't find parameter:" + rawValue)`。**不是空串，会被渲染进 UI。**
- **实参在函数体求值前就被求值一次。** `TextProcessingContext.cs:314`。**函数体里再引用 `$1` 拿到的是已求值结果，不是原文**；要看原文要走 `_curParamsWithoutEvaluate`（`:315`）。
- **双栈 push/pop 必须配对。** `:317-318` push、`:334-335` pop。**函数体里再调用另一个函数会形成嵌套双栈**——配对逻辑是对的，但深层嵌套的异常路径没有 `finally` 保护（源码里看不到 try/finally）。
- **函数名必须匹配 `[a-zA-Z_][a-zA-Z\d_]*\(`。** 名字含连字符或以数字开头，tokenizer 切不出来。
- **`SetFunction` 同名覆盖是静默的。** `TextProcessingContext.cs:341` 一次字典赋值。

## 参见

- 函数体注册与执行：[MBTextManager](../MBTextManager/)（`SetFunction` 第 216 行）、[TextProcessingContext](../TextProcessingContext/)（`CallFunction` 第 310-337 行、`SetFunction` 第 339 行、`GetFunctionBody` 第 349 行、`GetFunctionParam` 第 355 行）
- 编译产物：[MBTextModel](../MBTextModel/)、[Tokenizer](../Tokenizer/)、[MBTextToken](../MBTextToken/)、[TextGrammarProcessor](../TextGrammarProcessor/)
- 构造点：[MBTextParser](../MBTextParser/)（`:376` `ConsumeFunction`、`:382` 剥掉 `(`、`:406` 构造、`:369` 规则链、`:491`）
- 契约与兄弟：[TextExpression](../TextExpression/)、[SimpleToken](../SimpleToken/)（`$n` 落在它身上）、[SelectionExpression](../SelectionExpression/)（函数体里最常用的分支写法）、[ParameterWithAttributeExpression](../ParameterWithAttributeExpression/)
- 桶首页：[localization API 分区](../)