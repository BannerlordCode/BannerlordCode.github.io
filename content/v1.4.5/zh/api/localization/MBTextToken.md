---
title: "MBTextToken"
description: "词法阶段的产物：一次 Tokenize 切出的带类型字符串，带 Serializable 特性与 Clone，但没有任何可变状态之外的行为。"
---

# MBTextToken

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class MBTextToken`（带 `[Serializable]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/MBTextToken.cs`

## 概述

`MBTextToken` 是 29 行的**词法单元**：`{ get; set; }` 的 `TokenType` 标它是什么、公开的 `string Value` 标它是什么文本。它是 `Tokenizer.Tokenize`（`Tokenizer.cs:62`）的输出类型，也是 `MBTextParser.Parse`（`MBTextParser.cs:630`）的唯一入参。

它由四个地方 `new`：`Tokenizer.cs:66` 造终止符、`:83` 与 `:90` 造 `TokenType.Text`、`:104` 造 `TokenType.Text` 的尾巴、`:147` 造按 `TokenDefinition` 匹配出来的各种类型，另有 `MBTextToken.cs:26` 的 `Clone` 自造一份。**注意最后这个 `Clone` 在全树没有调用点**（见下）。

## 心智模型

把它当成**「切词阶段的收据」**。三条推论：

第一，**它是词法与语法之间的唯一边界。** `Tokenizer` 只认正则（`Tokenizer.cs:15-55` 那 40 多条 `TokenDefinition`），完全不懂 `{?cond}` 是一个条件；`MBTextParser` 只认 `TokenType`，完全不懂字符。**token 切错了，后面的文法再聪明也救不回来。**

第二，**两个构造器的差别只在 `Value`。** 单参形态把 `Value` 设成 `string.Empty` 而不是 null（`MBTextToken.cs:15`）。**「空」在这里有两种表示**——单参构造的 `string.Empty`，与 `Tokenizer.cs:66` 的终止符实例（`SequenceTerminator` 那个单参形态）就是同一个东西。

第三，**`[Serializable]` 是历史包袱，没有存档路径。** 类上有 `[Serializable]`（`MBTextToken.cs:5`），但**它不是 `SaveableTypeDefiner` 注册的类型**，`TextObject` 的存档只保存 `Value` 与 `Attributes`（`TextObject.cs:14` 的 `SaveableField(1)` 与 `:28` 的 `SaveableProperty(2)`）。**token 缓存每次进游戏都会重新切。**

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`MBTextManager.cs:160` 的 `Tokenizer.Tokenize(query)`（当 `parent` 没缓存时）或 `parent.GetCachedTokens()`（`TextObject.cs:118`），再 `MBTextParser.Parse(list)`（`MBTextManager.cs:162`）。**你只能通过 `TextObject.CacheTokens()`（`TextObject.cs:133`）这个公开入口间接促成 token 的生成。**

预热 token 缓存，让第二次 `ToString()` 跳过 `Tokenize`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject line = new TextObject("{=my_cache}Recruits: {RECRUITS} under {LEADER}");
line.SetTextVariable("RECRUITS", 90);
line.SetTextVariable("LEADER", Hero.MainHero.Name);

// 第一次 ToString 会 Tokenize + Parse；CacheTokens 之后再调就只做求值
line.CacheTokens();
Debug.Print(line.ToString(), 0);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**缓存跟着语言走，切换语言后自动失效。** `TextObject.GetCachedTokens`（`TextObject.cs:122`）判断 `cachedTextLanguageId != MBTextManager.GetActiveTextLanguageIndex()` 才重新切，`cachedTextLanguageId` 在 `:126` 与 `CacheTokens` 的 `:139` 各写一次。**所以 `CacheTokens()` 是「提前做一次」，不是「锁定一次」——切语言后它会静默重切。** 反过来，不调 `CacheTokens` 时每次 `ToString()` 都走 `GetCachedTokens`，那条路径同样会命中缓存（第 158-161 行 `list = parent.GetCachedTokens()`），**所以「不预热也只切一次」——除非语言变了。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TokenType` | `internal TokenType TokenType { get; set; }` | 这个 token 是什么类。**两个构造器都写它，`Clone` 通过无参之外的二参构造复制它。** `set` 是可写的——`MBTextParser` 不改它，但反射或自定义分词器可以。**消费点是 `MBTextParser` 里全部 `switch (tokenType)` 与 `LookAheadFirst.TokenType` 比较。** |
| `Value` | `public string Value { get; set; }` | 匹配的原文。**是本类唯一的 `public` 成员**（`TokenType` 是 `internal`）。单参构造把它设成 `string.Empty`（`MBTextToken.cs:15`）而非 null，所以「有 token 但没文本」是 `""` 而不是 null——`MBTextParser.cs:305`/`:344` 造空 `SimpleToken(TokenType.Text, "")` 正是沿用这个约定。 |
| `MBTextToken(TokenType)` | `internal MBTextToken(TokenType tokenType)` | 单参构造，第 12-16 行写 `TokenType`、`Value = string.Empty`（`:15`）。**唯一调用点是 `Tokenizer.cs:66` 的终止符**——`new MBTextToken(TokenType.SequenceTerminator)`，它的 `Value` 也是空串，`MBTextParser.cs:626` 用 `DiscardToken(TokenType.SequenceTerminator)` 消费它。 |
| `MBTextToken(TokenType, string)` | `internal MBTextToken(TokenType tokenType, string value)` | 双参构造，第 18-22 行写两个字段。**调用点：`Tokenizer.cs:83`、`:90`、`:104`、`:147`，以及 `Clone`。** |
| `Clone` | `public MBTextToken Clone()` | **返回 `new MBTextToken(TokenType, Value)`（`MBTextToken.cs:26`）——完整深拷贝，但全树没有调用点。** grep `MBTextToken` 的所有命中里，`Clone` 只出现在声明与自身实现。**它是为调用方预留的防御性拷贝接口，引擎当前不用。** |

## 真实示例

观察「切一次、多次求值」的缓存行为——`GetCachedTokens` 是这条路径的入口：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject cached = new TextObject("{=my_cached}{LEADER} commands {N} men");
cached.SetTextVariable("LEADER", Hero.MainHero.Name);
cached.SetTextVariable("N", 12);

string first = cached.ToString();
string second = cached.ToString();
Debug.Print("equal across calls = " + (first == second), 0);
Debug.Print("value = " + first, 0);
```

对照不共享模板的写法——`CopyTextObject` 会带走一个新的 `Value`，token 要重切：

```csharp
using TaleWorlds.Localization;

TextObject template = new TextObject("{=my_tpl}War with {FACTION}");
TextObject a = template.CopyTextObject();
TextObject b = template.CopyTextObject();
a.SetTextVariable("FACTION", "Sturgia");
b.SetTextVariable("FACTION", "Empire");
Debug.Print(a.ToString() + " | " + b.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。** 且只有 `Value` 是 `public`。
- **单参构造把 `Value` 设成空串而非 null。** 任何读 `Value` 的代码不会看到 null，但也不会看到「缺失」与「空」的区分。
- **`TokenType` 与 `Value` 都可写。** 没有只读保证，改了不会有人通知你。
- **`Clone` 是死代码。** `MBTextToken.cs:26`（声明在 `:24`）的实现存在，全树零调用点。**别把它当成引擎在用的 API 去依赖——将来可能被删。**
- **`[Serializable]` 不代表它进存档。** `SaveableLocalizationTypeDefiner` 只注册 `TextObject` 与 `Dictionary<string, TextObject>`；token 缓存每次启动重切。
- **缓存是按 `TextObject` 实例存的。** `TextObject.cs:17` 的 `cachedTokens` 与 `:20` 的 `cachedTextLanguageId` 都是实例字段，**没有锁**——多线程共用同一个 `TextObject` 求值不是线程安全的。
- **切词失败会清空整张列表。** `Tokenizer.cs:88` 的 `mbTokenMatches.Clear()` 不是本类的行为，但它决定了你会拿到「一个 token 都没有」还是「一堆 token」。

## 参见

- 生产者：[Tokenizer](../Tokenizer/)（`Tokenize` 第 62 行、`TokenDefinition` 表第 15-55 行）、[TokenType](../TokenType/)
- 消费者：[MBTextParser](../MBTextParser/)（`Parse` 第 630 行、`LoadSequenceStack` 第 53 行）
- 编译产物：[TextExpression](../TextExpression/)、[MBTextModel](../MBTextModel/)、[MultiStatement](../MultiStatement/)
- 缓存宿主与公开入口：[TextObject](../TextObject/)（`CacheTokens` 第 133 行、`GetCachedTokens` 第 118 行）、[MBTextManager](../MBTextManager/)（`:160` 的 `Tokenize` 调用）
- 求值环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)
- 桶首页：[localization API 分区](../)