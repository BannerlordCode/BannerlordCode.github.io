---
title: "SimpleText"
description: "表达式树的字面量叶子：普通文字不做任何加工直接返回自己，是每一条 TextObject 里出现次数最多的节点。"
---

# SimpleText

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class SimpleText : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/SimpleText.cs`

## 概述

`SimpleText` 是 19 行、3 个成员的字面量叶子，**它不做任何加工**——`EvaluateString`（`SimpleText.cs:16`）第一行就 `return base.RawValue;`。它是每一条 `TextObject` 里出现次数最多的节点：`Tokenizer.cs` 把所有无法匹配任何特殊规则的字符攒成 `TokenType.Text` token（`:83`、`:90`、`:104` 三处），`MBTextParser.GetSimpleToken` 在 `:41` 把它们逐个变成 `SimpleText`。

理解它有两个关键推论。第一，**一条普通的英文句子在运行时不是「一个节点」，而是「一串 `SimpleText` 被 `MultiStatement` 串起来」**——`MBTextParser.GetRootExpressions`（`:150-163`）在收集到的根节点多于一个时，第 162 行返回 `new MultiStatement(list)`。第二，**它会漏掉没匹配上的东西**：`Tokenizer.cs:83` 那条分支产出的 `SimpleText` 拿到的 `value` 只是**匹配段之间剩余的普通字符**，所有 `{...}` 语法标记在这一层就被摘走了。

## 心智模型

把它当成**「已经过了语法解析、只剩下墨水」的节点**。三条推论：

第一，**它是唯一一个 `EvaluateString` 不看 `context` 也不看 `parent` 的常用叶子。** 参数照收不用。**所以把 `SimpleText` 换掉不会影响任何变量解析行为**——它对上下文完全免疫。

第二，**它的 `RawValue` 就是构造器传进来的字符串，一次性存好。** `SimpleText.cs:11` `base.RawValue = value;`。没有 setter 之外的写入口（`RawValue` 是基类的 `{ get; set; }`，但引擎里没人改它）。**所以 `SimpleText` 天然可重复求值、线程安全**——和 `VariableExpression`（每次现查 `context`）形成对照。

第三，**它是 `TokenType.Text` 的唯一实现者，也是 `MBTextParser` 的「兜底出口」。** `MBTextParser.cs:305` 与 `:344` 在条件/选择分支取不到内容时，会造一个 `new SimpleToken(TokenType.Text, "")` 而不是 `SimpleText`——**注意这两个兜底节点用的是 `SimpleToken` 而不是本类**，本类只在 `GetSimpleToken` 的 `:41` 一处被创建。

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`MBTextParser.cs:41` 的 switch 分支 `TokenType.Text => new SimpleText(strValue)`，是全树**唯一**构造点。上游是 `Tokenizer.Tokenize`（`Tokenizer.cs:62`）——它按 `Tokenizer.cs:15-55` 的 40 多条 `TokenDefinition` 正则逐位置扫描，凡是不属于任何特殊规则的普通字符都在 `:83` / `:90` / `:104` 被包成 `TokenType.Text` token。

写一段带普通文字与变量的文本，让字面量与变量节点并存：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// "Recruits: " 是 SimpleText，"{RECRUITS}" 外面那层是 SimpleExpression 包 VariableExpression
TextObject line = new TextObject("{=my_roster}Recruits: {RECRUITS}, Leader: {LEADER}");
line.SetTextVariable("RECRUITS", 120);
line.SetTextVariable("LEADER", Hero.MainHero.Name);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：`Tokenizer.cs:83` 造出来的 `TokenType.Text` token 只包含**普通字符**。你在 `TextObject.Value` 里写的 `{=key}`、`{NAME}`、`{?cond}` 这些标记在这一层就被消费掉了，`SimpleText` 永远拿不到它们。**所以 `SimpleText.RawValue` 里出现 `{` 就意味着 tokenizer 的规则表漏了这条语法**——而规则表（`Tokenizer.cs:15-55`）是写死的，mod 无法扩充。想自定义语法，只能走 [MBTextManager](../MBTextManager/) 的 `SetFunction` 在既有语法里拼。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal override TokenType TokenType => TokenType.Text` | 固定 `TokenType.Text`。**消费点**：`MBTextParser.cs:126` 的 `IsRootExpression` 把它列为合法根节点（8 类之一），`:41` 靠它决定构造本类。对照 [SimpleToken](../SimpleToken/)——那个通用叶子把 `TokenType` 存成字段并在 `EvaluateString` 的 switch 里处理 `ParameterWithMultipleMarkerOccurances` / `ParameterWithMarkerOccurance` / `FunctionParam`，**本类不做任何这类分派**。**改掉这个 `TokenType.Text` 会让普通文字不再是合法根节点，整棵树的分段规则全变。** |
| `SimpleText(string)` | `public SimpleText(string value)` | 唯一构造器，第 9 行把 `value` 存进 `base.RawValue`。**全树唯一调用点 `MBTextParser.cs:41`。** 传 null 不报错，`EvaluateString` 会返回 null，随后 `TextGrammarProcessor.cs:16` 的 `.ToString()` 抛 `NullReferenceException`——解析器不会传 null，只有手写 `new` 才会。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **`return base.RawValue;`——直接返回，一个字符都不加工。** 两个形参照收不用，因此本节点对变量表、语言、上下文完全免疫。**同一节点被求值多少次结果都一样**，可以安全地在循环里反复调用。 |

## 真实示例

对照「全是字面量」与「字面量混变量」两条路径，看节点数量如何影响求值方式：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// A) 纯字面量：MBTextParser.GetRootExpressions 收不到多个根，只有一个 SimpleText
TextObject plain = new TextObject("{=my_plain}No variables here at all.");

// B) 混排：句首一句 SimpleText、句尾又一句 SimpleText -> MultiStatement 串起三段
TextObject mixed = new TextObject("{=my_mixed}Leader {LEADER} commands {COUNT} men.");
mixed.SetTextVariable("LEADER", Hero.MainHero.Name);
mixed.SetTextVariable("COUNT", 240);

Debug.Print(plain.ToString(), 0);
Debug.Print(mixed.ToString(), 0);
```

验证「字面量不看上下文」——同一个 `TextObject` 在切换变量后重算，纯字面量部分不变：

```csharp
TextObject t = new TextObject("{=my_stable}Static part: ");
t.SetTextVariable("N", 1);
string first = t.ToString();
t.SetTextVariable("N", 999);
string second = t.ToString();
Debug.Print(first + " || after=" + second, 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **返回 null 会炸在上一层。** `EvaluateString` 直接返回 `RawValue`；`TextGrammarProcessor.cs:16` 紧接着 `.ToString()`。传 null 进构造器 = 上层 `NullReferenceException`。
- **不参与任何语言处理。** 本节点在 `MBTextManager.cs:110` 的 `Process` 之后才被拼进结果，而 `_languageProcessor.Process`（`:111`）只扫 `{.[...]}` 形式的 token（`LanguageSpecificTextProcessor.cs:180` 的 `IsPostProcessToken` 要求 `token[0] == '.'`）。**想要 a/an、单复数变形，必须用 `{.[a]}` 这类 token，纯写字面量永远不会被改写。**
- **语法写错会静默截断整条字符串。** `Tokenizer.cs:86-91`：某个 `{...}` 表达式匹配不上任何 `TokenDefinition` 时，`FindTokenMatches` 返回 false，第 88 行 `mbTokenMatches.Clear()` 把已收集的 token 全部丢掉，第 90 行只补回**出错位置之前**累积的普通文字，然后 `return`。**出错点之后的所有内容都不再出现，句尾凭空消失，也没有异常。** 排查句子缺尾巴时先查模板里的花括号。
- **`Tokenizer.cs:104` 那一支产出的是「切剩的尾巴」。** 与 `:83`、`:90` 的分支不同，它的 `text2` 来自循环结束后的 flush；三种来源的 `SimpleText` 在运行时没有任何区别，但排错时要知道它们来自不同分支。
- **不要试图把语法标记塞进字面量。** 规则表写死在 `Tokenizer.cs:15-55`，扩充不了。

## 参见

- 基类契约：[TextExpression](../TextExpression/)
- 唯一构造点与分词：[MBTextParser](../MBTextParser/)（`GetSimpleToken` 第 37-51 行的 switch）、[Tokenizer](../Tokenizer/)（40 多条 `TokenDefinition` 与三个产出 `TokenType.Text` 的分支）
- 兄弟叶子：[SimpleNumberExpression](../SimpleNumberExpression/)、[TextIdExpression](../TextIdExpression/)、[LangaugeMarkerExpression](../LangaugeMarkerExpression/)、[SimpleToken](../SimpleToken/)
- 串联者：[MultiStatement](../MultiStatement/)（`MBTextParser.cs:162` 把多个根节点收成一个）
- 下游：[TextGrammarProcessor](../TextGrammarProcessor/)、[TextProcessingContext](../TextProcessingContext/)
- 桶首页：[localization API 分区](../)