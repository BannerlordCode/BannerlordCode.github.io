---
title: "LangaugeMarkerExpression"
description: "{.[a]}、{.link} 这类语言标记在表达式树里的形态：原样透传给字符串，真正的展开发生在语言处理器那一层。"
---

# LangaugeMarkerExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class LangaugeMarkerExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/LangaugeMarkerExpression.cs`

## 概述

`LangaugeMarkerExpression` 是 19 行、3 个成员的**透传节点**（类名里 `Langauge` 是引擎自己的拼写错误，少一个 `a`，全树一致）。它是 `{.[a]}`、`{.link}`、`{._}`、`{.^}`、`{.%}` 这类「语言标记」在表达式树里的形态：`Tokenizer.cs:25` 用 `TokenDefinition(TokenType.LanguageMarker, "{\\.[a-zA-Z_^%][a-zA-Z\\d_]*}", 1)` 切出它，`MBTextParser.cs:44` 转成 `new LangaugeMarkerExpression(strValue)`。

它的 `EvaluateString`（`LangaugeMarkerExpression.cs:16`）**直接 `return base.RawValue;`**——把 `{.a}` / `{.link}` 这段标记文本**连花括号一起**原样吐进结果字符串。**真正把它变成 `an`、变成 `<a style="Link.…">` 的，是表达式树之后的语言处理器**：`MBTextManager.cs:111` 的 `_languageProcessor.Process(text)`。

## 心智模型

把它当成**「留给下游的一道欠条」**。三条推论：

第一，**本节点不解释标记，只搬运标记，而且搬的是连花括号一起的整段。** `Tokenizer.cs:147` 用 `match.Value` 填 `MBTextToken.Value`，`match` 是整条正则的匹配（`Tokenizer.cs:25` 的模式本身就含 `\{` 与 `\}`），所以 `RawValue` 形如 `{.link}`、共 5 个字符。**正因如此，基类 `LanguageSpecificTextProcessor.Process` 的逐字符扫描（`:44`）才能在下一层重新看到 `{` 并把它交给 `ReadFirstToken`。** **想知道标记最终会变成什么，必须去 `LanguageSpecificTextProcessor` 的具体子类里查**（`EnglishTextProcessor.cs:76` 的 switch 处理 `a`/`A`/`s`/`o`，`GermanTextProcessor.cs:635` 单独处理 `token == LinkTag`）。

第二，**它是根节点白名单里唯一的「非文本」叶子。** `MBTextParser.cs:126` 的 `IsRootExpression` 列了 8 类，`LanguageMarker` 是第 8 个，也是唯一一个「原样输出语法字符」的成员。**不需要花括号壳就能独立成根**——这与 [VariableExpression](../VariableExpression/) 必须被 [SimpleExpression](../SimpleExpression/) 裹住正好相反。

第三，**标记能不能被展开，完全取决于当前语言的处理器。** `LanguageSpecificTextProcessor.cs:113` 的分派里，`^`/`_`/`%` 三种由基类自己处理（`:81`、`:94`、`:107`），其余一律交给抽象成员 `ProcessToken`。**`DefaultTextProcessor.ProcessToken` 是空实现（`DefaultTextProcessor.cs:10-13`），所以那些标记被读出来之后什么也不写——`.link` 会凭空消失，`.a` 也不会变成 `an`。**

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:25` 匹配 `{.[a-zA-Z_^%][a-zA-Z\d_]*}` → `MBTextParser.cs:44` 的 switch 分支 → `new LangaugeMarkerExpression(strValue)`。**全树唯一构造点。** 引擎里的真实用法可查 `TextObject.cs:38`：`Value.StartsWith("{=!}{.link}")`——`IsLink` 就是靠「一个 `TextIdExpression`（key 为 `!`）+ 一个 `LanguageMarkerExpression`（`.link`）」这个组合判断的。

写一段带 `a/an` 标记的文本，验证它是被原样搬过去、再由英语处理器展开的：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// {.[a]} 是 LanguageMarker；英语处理器会把它按后一个音素决定写成 a 还是 an
TextObject line = new TextObject("{=my_mod_article}I saw {.[a]} {HERO.NAME} on the road.");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**语言标记的展开结果取决于 `MBTextManager.ActiveTextLanguage`，同一段文本在不同语言下输出不同长度。** 切到没有专属处理器的语言时（`LocalizedTextManager.cs:62` 与 `:66` 两条路径都返回 `new DefaultTextProcessor()`），`ProcessToken` 空转，**`.link` 与 `.{a}` 直接从输出里消失，句子中间会少一截。** 所以任何依赖标记长度的逻辑（截断、对齐、按长度选文案）在多语言下都会错。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal override TokenType TokenType => TokenType.LanguageMarker` | 固定 `TokenType.LanguageMarker`。**唯一结构性消费点是 `MBTextParser.cs:126` 的 `IsRootExpression`**——它被列为 8 类合法根节点之一，因此不需要花括号壳即可独立成根。另外 `Tokenizer.cs:25` 用同一个枚举值决定切词规则。 |
| `LangaugeMarkerExpression(string)` | `public LangaugeMarkerExpression(string innerText)` | 唯一构造器，第 11 行 `base.RawValue = innerText`。**形参里含 `{` 与 `}`**——`Tokenizer.cs:147` 传的是 `match.Value`（如 `{.link}`），`MBTextParser.cs:57` 原样透传，中间没有人剥括号。**全树唯一调用点 `MBTextParser.cs:44`。** 传 null 不会立刻炸，但 `EvaluateString` 返回 null 后 `TextGrammarProcessor.cs:16` 的 `.ToString()` 会抛。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **`return base.RawValue;`，原样透传（含花括号）。** 两个形参收下不用。**它把 `{.link}` 这样的整段标记原封不动拼进最终字符串，等着 `MBTextManager.cs:111` 的 `_languageProcessor.Process(text)` 接手。** 这是本节点与 [SimpleText](../SimpleText/) 的唯一区别：后者是正文，本类是「留给语言处理器的欠条」。 |

## 真实示例

对照「有标记」与「无标记」——前者的长度依赖当前语言：

```csharp
using TaleWorlds.Localization;

TextObject marked = new TextObject("{=my_marked}I saw {.[a]} castle.");
TextObject plain = new TextObject("{=my_plain}I saw a castle.");

string a = marked.ToString();
string b = plain.ToString();
Debug.Print("active lang = " + MBTextManager.ActiveTextLanguage, 0);
Debug.Print("marked='" + a + "' (" + a.Length + ")  plain='" + b + "' (" + b.Length + ")", 0);
```

验证链接标记在表达式树阶段确实被原样搬运——`IsLink` 正是靠这两个标记判定的：

```csharp
TextObject link = new TextObject("{=!}{.link}Click here to open the clan screen");
Debug.Print("IsLink = " + link.IsLink, 0);
Debug.Print("Value  = " + link.Value, 0);
Debug.Print("GetID  = '" + link.GetID() + "'", 0);
```

## 风险与边界

- **类名拼写是引擎原样**：`Langauge` 少一个 `a`。**反射取类型、写 `nameof`、按名字查文档都只能写错拼。**
- **`internal`，编译期不可引用。**
- **标记展开是语言处理器的事，不是本节点的事。** 换语言就换展开规则，甚至可能完全不展开（`DefaultTextProcessor.ProcessToken` 空实现）。
- **标记语法写错会截断整句。** `Tokenizer.cs:26-27` 附近的那几条规则若不匹配，`FindTokenMatches` 返回 false → `Tokenizer.cs:88` 清空 token 列表 → 只剩出错点之前的文字。`{.[数字]}` 这类非法标记（首字符集不含数字）就会触发。
- **`{.link}` 的展开只有部分语言实现了。** `GermanTextProcessor.cs:635`、`RussianTextProcessor.cs:725`、`PolishTextProcessor.cs:924`、`FrenchTextProcessor.cs:186`、`ItalianTextProcessor.cs:968` 有 `token == LinkTag` 分支；`EnglishTextProcessor.cs:76` 的 switch 只处理 `a`/`A`/`s`/`o`，**没有 `.link` 分支**。**英语下 `{.link}` 不展开。**
- **`^`/`_`/`%` 三种由基类统一处理**（`LanguageSpecificTextProcessor.cs:81`、`:94`、`:107`，判据都是 `token.Length == 2`），不经过 `ProcessToken`，所以它们在**所有**语言下行为一致——包括 `DefaultTextProcessor`。

## 参见

- 展开方：[LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)（分派逻辑在 `:76`-`:113`）、[DefaultTextProcessor](../DefaultTextProcessor/)（空实现的兜底）
- 切词：[Tokenizer](../Tokenizer/)（`:25` 定义标记规则）、[TokenType](../TokenType/)（`LanguageMarker` 是枚举成员之一，声明在 `TokenType.cs:39`）、[MBTextToken](../MBTextToken/)
- 唯一构造点：[MBTextParser](../MBTextParser/)（`GetSimpleToken` 的 `:44` 分支）
- 契约与兄弟：[TextExpression](../TextExpression/)、[SimpleText](../SimpleText/)、[TextIdExpression](../TextIdExpression/)、[SimpleExpression](../SimpleExpression/)
- 调用它的那一层：[MBTextManager](../MBTextManager/)（`:111` 的 `_languageProcessor.Process`）
- 桶首页：[localization API 分区](../)