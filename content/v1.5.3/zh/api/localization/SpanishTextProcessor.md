---
title: "SpanishTextProcessor"
description: "西班牙语的定冠词与性数处理器：只有 240 行，处理 el/la/los/las 与性别标记，是内置处理器里最精简的一个。"
---

# SpanishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class SpanishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/SpanishTextProcessor.cs`

## 概述

西班牙语处理器只有 240 行，是八个内置处理器里最短的。它做两件事：把六个性别标记（`.MS` `.MP` `.FS` `.FP` `.NS` `.NP`，即阳性/阴性/中性 × 单数/复数）记进状态，然后把 `.l` / `.L` 展开成 `el` / `la` / `los` / `las`。它不处理变格、不处理介词缩合、不维护词组缓存——因为西班牙语的冠词只由「性 + 数」决定，与具体名词无关。

## 心智模型

**最小状态机**。整个 `ProcessToken` 只有两段：

```csharp
if (GenderTokens.TokenList.Contains(token))
    this.SetGender(token);
if (token == ".l" || token == ".L")
{
    this.HandleDefiniteArticles(sourceText, token, cursorPos, outputString);
    _curGender = WordGenderEnum.NoDeclination;
}
```

注意两个 `if` 是**独立**的，不是 `else if`——`.l` / `.L` 不在 `GenderTokens.TokenList` 里，所以实际不会同时命中，但结构上允许。**性别标记不产生输出也不重置状态**，只有 `.l` 处理完才重置。**这意味着如果一条文本里写了性别标记但没写 `.l`，状态会残留**（直到 `ClearTemporaryData`）。

**六个性别标记直接编码了性数组合**，不需要两段式协议：

| token | 输出冠词 |
|---|---|
| `.MS` | el |
| `.MP` | los |
| `.FS` | la |
| `.FP` | las |
| `.NS` | lo |
| `.NP` | los |

**`Contractions` 字典**是本类的一个静态只读表（`Dictionary<string, Dictionary<string, string>>`，按性别分桶），**在 1.5.3 里声明了但 `ProcessToken` 完全没用到**——`HandleDefiniteArticles` 走的是直接的性数映射。这张表是为未来的缩合形式（`de + el = del`、`a + el = al`）预留的，**mod 可以参考它但不能指望引擎用它**。

**小写与大写两种冠词标记**：`.l` 和 `.L` 走同一个 handler，区别只在输出时首字母大写与否——对应句首的冠词。

**常见误用与坑**

1. **性别标记残留**。`{.FS} casa` 后面没有 `{.l}`，`_curGender` 就一直是阴性。下一个 `[ThreadStatic] static` 状态不会串线程，但会串**同一线程的下一次渲染**，直到 `ClearTemporaryData`。**实际影响**：下一条文本里如果只写了 `{.l}` 而没有性别标记（指望继承上一个），会拿到错误结果。
2. **性别标记不是「两段式」，它就是完整信息**。写 `{.MS}` 而不是 `{.M}`——西班牙语没有 `{.M}`。从英语包或德语包复制标记过来一定失败。
3. **`Contractions` 表是死代码**。别以为 `de el` 会自动变 `del`。
4. **`CheckWhiteSpaceAndTextEnd` 存在但只在 `HandleDefiniteArticles` 内部用**，不在 `ProcessToken` 层。所以 `.l` 后面跟不跟空格的处理规则与法语不同。
5. **`SetGender` 用 `if` 链不是 `switch`**，最后一个分支是 `if (!(token == ".NP")) return; _curGender = ...NeuterPlural;`。加新 token 时要记得改最后这个反写形式。
6. **`CultureInfoForLanguage` 返回静态 `CultureInfo`**（西班牙语 locale），对 `{^}` / `{_}` 的大小写规则是正确的。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：上述两段逻辑，全部行为都在这里。
- `override CultureInfo CultureInfoForLanguage { get; }`：静态 `CultureInfo`（西班牙语 locale）。
- `override void ClearTemporaryData()`：**只有一行** `_curGender = WordGenderEnum.NoDeclination;`。没有词组表要清——这是它比俄语/波兰语/法语都简单的地方。

**辅助（private）**

- `private void SetGender(string token)`：六个 `if` 分支把 token 映射到 `WordGenderEnum` 的六个值（`MasculineSingular` / `MasculinePlural` / `FeminineSingular` / `FemininePlural` / `NeuterSingular` / `NeuterPlural`）。
- `private bool CheckWhiteSpaceAndTextEnd(string sourceText, int cursorPos)`：`cursorPos < sourceText.Length && !char.IsWhiteSpace(sourceText[cursorPos])`。
- `private void HandleDefiniteArticles(sourceText, token, cursorPos, outputString)`：按 `_curGender` 输出 `el` / `la` / `los` / `las` / `lo`，并按 `.L` 决定首字母大写。
- `private static readonly Dictionary<string, Dictionary<string, string>> Contractions`：按性别分桶的缩合词表，**声明了但未被 `ProcessToken` 使用**。

**状态**

- `[ThreadStatic] private static SpanishTextProcessor.WordGenderEnum _curGender`：当前性数。

**枚举**：`WordGenderEnum`（`NoDeclination` + 六个性数组合）。

## 使用示例

```csharp
// 语言包里的写法（性别标记就是完整的性数信息，不需要第二段）：
//   <string id="myModCity"  text="{.FS}ciudad {.l} es grande" />    -> "la ciudad es grande"
//   <string id="myModCities" text="{.FP}ciudades {.l} son grandes" /> -> "las ciudades son grandes"
//   <string id="myModStart" text="{.L}ciudad {.l} ..." />            -> "La ciudad ..."

TextObject city = new TextObject("{=myModCity}{.FS}ciudad {.l} es grande", null);
Debug.Print(city.ToString());     // "la ciudad es grande"

TextObject cities = new TextObject("{=myModCities}{.FP}ciudades {.l} son grandes", null);
Debug.Print(cities.ToString());   // "las ciudades son grandes"

// 句首大写：.L 与 .l 走同一逻辑，只是首字母大写
TextObject start = new TextObject("{=myModStart}{.L}ciudad {.l} es grande", null);
Debug.Print(start.ToString());    // "La ciudad es grande"

// 中性：西班牙语里 lo + 抽象名词
TextObject thing = new TextObject("{=myModThing}{.NS}dinero {.l} falta", null);
Debug.Print(thing.ToString());    // "lo dinero falta"

// 状态残留的实测：{.FS} 后面没有 {.l} 时 _curGender 保持阴性，
// 下一句只写 {.l} 会拿到阴性结果
TextObject leaked = new TextObject("{=myModCity}{.FS}ciudad", null);   // 无 {.l}
Debug.Print(leaked.ToString());
TextObject next = new TextObject("{=myModNext}{.l}打招呼", null);      // 继承了阴性 -> "la 打招呼"
Debug.Print(next.ToString());
```

## 风险与边界

- **状态泄漏是唯一的实操风险**。`_curGender` 是 `[ThreadStatic] static`，只在 `ClearTemporaryData` 和 `.l` 处理后清。**每条文本写完性别标记就该跟一个 `.l`**（或其它消费点），否则会漏到下一次渲染。mod 自己写语言包时这是最容易犯的错。
- **无线程安全问题**（`_curGender` 是 `[ThreadStatic]`），但仍建议主线程渲染。
- **无存档风险**，实例与状态不参与序列化。
- **`Contractions` 表是未接线的预留**。想实现 `de el → del`，得自己写 [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) 子类。
- **不处理变格**。西班牙语没有名词变格，语言包里出现 `{.g}` `{.d}` 这类格标记会被静默丢弃（`ProcessToken` 只认 `GenderTokens.TokenList` 与 `.l` / `.L`）。
- **不处理缩合与前置词**。`a + el = al`、`de + el = del` 需要在语言包里直接写全。
- **语言包不能跨语言照抄标记**。`.FS` 是西班牙语独有；英语的 `.a`（冠词）在西班牙语下没有对应实现。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [FrenchTextProcessor](../FrenchTextProcessor) — 同类思路（限定词系统），但多了介词缩合
- [EnglishTextProcessor](../EnglishTextProcessor) — 最小无状态实现，用作对照
- [TextObject](../TextObject) — 渲染入口
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游阶段，先于本类运行
