---
title: "TextIdExpression"
description: "{=key} 前缀的运行时形态：唯一作用是让本地化 key 不出现在输出里——它的 EvaluateString 永远返回空字符串。"
---

# TextIdExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class TextIdExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/TextIdExpression.cs`

## 概述

`TextIdExpression` 是 19 行、3 个成员的**空输出节点**。它是 `TextObject.Value` 开头那个 `{=key}` 的运行时形态：`Tokenizer.cs:26` 的 `TokenDefinition(TokenType.TextId, "{=[a-zA-Z\\d_\\!\\*][a-zA-Z\\d_\\.]*}", 1)` 把它切成 `TokenType.TextId` token，`MBTextParser.cs:45` 再转成 `new TextIdExpression(strValue)`。

它的全部行为就是 `EvaluateString` 返回 `""`（`TextIdExpression.cs:16`）。**注意：`RawValue` 里存的是整段 `{=key}` 原文（含花括号），但求值时它被彻底丢弃。** 翻译早在这一步之前就完成了——`TextObject.GetCachedTokens`（`TextObject.cs:124`）在分词之前先调 `MBTextManager.GetLocalizedText(Value)`，把 `{=jGIw0Xku}has just escaped…` 换成当前语言里那条字符串，`TextIdExpression` 拿到的是替换后剩下的内容；而如果语料里没有这个 key，`GetLocalizedText` 会把原值原样送回来，此时本节点**仍然什么都不输出**。

## 心智模型

把它当成**「语法标记的墓碑」**。三条推论：

第一，**它存在的唯一理由是「不让 `{=key}` 出现在结果里」。** 没有它，`{=jGIw0Xku}` 这七个字符会原样拼进玩家看到的文本。这个节点是被专门造出来吃掉自己的。

第二，**它求值时不查任何东西。** `EvaluateString(context, parent)` 两个形参都收下、不用。没有 `context.GetLocalizedText`、没有 `parent` 参与。**所以它可以出现在任何位置而不产生副作用**——这也意味着它不可能成为「翻译缺失」的报警点。

第三，**key 不在输出里，所以调试时看不到它。** 想确认某条文本用的是哪个 key，得读 `TextObject.Value` 的前 14 个字符，或调 `TextObject.GetID()`；**从 `ToString()` 的结果反推 key 是做不到的**。

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:26` 匹配 `{=...}` → `MBTextParser.GetSimpleToken` 的 `:45` 分支 → `new TextIdExpression(strValue)`。**全树唯一构造点。** 上游还有一道翻译替换：`TextObject.cs:124` 在 `GetCachedTokens` 里先 `MBTextManager.GetLocalizedText(Value)`，`MBTextManager.cs:106` 同理。

写一条带 key 前缀的文本，并对照 `GetID()` 与渲染结果：

```csharp
using TaleWorlds.CampaignSystem;   // SetCharacterProperties 是这个命名空间的扩展方法
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject line = new TextObject("{=my_mod_escape}{HERO.NAME} has just escaped from her captors.");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);

// Value 里有 key；ToString() 的结果里没有
Debug.Print("id   = " + line.GetID(), 0);
Debug.Print("value= " + line.Value, 0);
Debug.Print("final= " + line.ToString(), 0);
```

**用它最容易踩的一条**：key 前缀后面**必须紧跟正文**，且 key 不能为空。`Tokenizer.cs:26` 的正则要求至少一个字符：`{=[a-zA-Z\d_!*][a-zA-Z\d_.]*}`——首字符允许字母、数字、下划线、`!`、`*`，后续允许字母数字、下划线、点。**写成 `{=}`、`{=my key}`、`{=a-b}` 都会匹配失败，触发 `Tokenizer.cs:88` 的 `mbTokenMatches.Clear()`——整条字符串被截断，`ToString()` 只返回 `{` 之前的那段文字。** 另外注意 `TextObject.GetID()`（`TextObject.cs:408`）是**另一套更宽松的读法**（只看前两个字符是不是 `{=` 然后扫到 `}`），所以 `GetID()` 有值并不代表 tokenizer 认得它。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal override TokenType TokenType => TokenType.TextId` | 固定 `TokenType.TextId`（`TokenType.cs:65` 声明的最后一个枚举成员）。**消费点：`MBTextParser.cs:126` 的 `IsRootExpression` 把它列为 8 类合法根之一**，所以它可以独立成为一个根节点而不需要花括号壳——这与 [SimpleExpression](../SimpleExpression/) 不同。 |
| `TextIdExpression(string)` | `public TextIdExpression(string innerText)` | 唯一构造器，第 11 行 `base.RawValue = innerText`，存的是**key 原文**（如 `my_mod_escape`）。**全树唯一调用点 `MBTextParser.cs:45`。** 传 null 不报错，但 `RawValue` 变 null。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **永远返回 `""`。** 两个形参收下不用。**这是本类型存在的全部意义**——它不查 `context`、不碰 `parent`、不输出 key。`TextGrammarProcessor.cs:16` 拿到空串后 `.ToString()` 再拼进 `MBStringBuilder`，等于什么都没加。 |

## 真实示例

对照「有 key」与「无 key」两条文本——差别只发生在 `RawValue` 与调试可见性上，渲染结果长度不受影响：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject withKey = new TextObject("{=my_mod_hunt}{HERO.NAME} is being hunted.");
TextObject noKey = new TextObject("{HERO.NAME} is being hunted.");

Hero target = Hero.MainHero;
withKey.SetCharacterProperties("HERO", target.CharacterObject);
noKey.SetCharacterProperties("HERO", target.CharacterObject);

Debug.Print("withKey.GetID() = '" + withKey.GetID() + "'", 0);
Debug.Print("noKey.GetID()   = '" + noKey.GetID() + "'", 0);
Debug.Print("rendered equal? " + (withKey.ToString() == noKey.ToString()), 0);
```

确认 key 确实没进最终文本：

```csharp
TextObject probe = new TextObject("{=my_mod_probe}plain body");
string rendered = probe.ToString();
Debug.Print("contains '{=' ? " + rendered.Contains("{="), 0);
Debug.Print("body = '" + rendered + "'", 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **key 匹配失败不会报错，而是截断整句。** `Tokenizer.cs:86-91`：`FindTokenMatches` 返回 false 时第 88 行把已收集的 token 全部 `Clear()`，第 90 行只补回出错位置**之前**累积的普通文字，然后直接 `return`。**出错点之后的所有内容都不再出现。** 允许的 key 字符集是 `[a-zA-Z\d_!*]` 打头、`[a-zA-Z\d_.]` 续接；空 key、空格、连字符都会失败。
- **`RawValue` 是整段 `{=key}`，不是裸 key。** `Tokenizer.cs:147` 传的是 `match.Value`，花括号在正则匹配范围内。要裸 id 调 `TextObject.GetID()`（`TextObject.cs:408`），要正文看 `TextObject.Value` 去掉前缀后的部分。
- **本节点不做翻译。** 翻译发生在 `TextObject.cs:124` / `MBTextManager.cs:106` 的 `GetLocalizedText`，在分词之前。**语料里缺 key 时 `GetLocalizedText` 原样返回 `Value`，正文仍会显示，只是没有翻译——而本节点照样吞掉前缀，所以「显示成英文原文」这个现象不会暴露在本节点上。**
- **删掉它输出会变。** 它返回空串这件事是硬编码在第 16 行的，替换成本地化实现时若绕过 `MBTextParser`，`{=key}` 会直接漏进 UI。

## 参见

- 上游分词：[Tokenizer](../Tokenizer/)（`TokenDefinition` 第 26 行定义 `{=[a-zA-Z\d_!*][a-zA-Z\d_.]*}`）、[MBTextToken](../MBTextToken/)
- 唯一构造点：[MBTextParser](../MBTextParser/)（`GetSimpleToken` 第 37-51 行 switch，`:45` 是本类分支）
- 契约与兄弟：[TextExpression](../TextExpression/)、[SimpleText](../SimpleText/)、[SimpleToken](../SimpleToken/)、[MultiStatement](../MultiStatement/)
- 翻译替换发生在：[TextObject](../TextObject/) 的 `GetCachedTokens` 与 `MBTextManager.GetLocalizedText`
- 下游拼接：[TextGrammarProcessor](../TextGrammarProcessor/)、[TextProcessingContext](../TextProcessingContext/)
- 桶首页：[localization API 分区](../)