---
title: "FrenchTextProcessor"
description: "法语的性数标记与冠词/介词联动处理器：处理 le/la/les、un/une/des，以及 de/à + 冠词的缩合形式。"
---

# FrenchTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class FrenchTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/FrenchTextProcessor.cs`

## 概述

法语处理器（约 710 行）不处理变格——法语名词不变格——它处理的是**限定词系统**：根据前一个名词的性/数决定 `le` / `la` / `les`，以及 `un` / `une` / `des`，还要处理法语特有的冠词缩合（`de + le = du`，`à + le = au`，`de + les = des`）。它用「性别标记 + 冠词标记」两段式协议，但两段的位置关系与俄语相反：性别标记在前，冠词标记紧跟在被修饰的名词**之后**。

## 心智模型

**token 分两组**。源码里先查 `GenderTokens.TokenList`（`.M` `.F` `.N` `.P` `.S`），命中就 `SetGenderInfo(token)` + `ProcessWordGroup` + `ResetGender` 并 return——**性别标记本身不产生输出，只改状态并登记词组**。否则查 `FunctionTokens.TokenList`（`.cl` `.dl` `.l` `.a` `.d` `.c`），且必须 `CheckWhiteSpaceAndTextEnd` 成立（游标处不是空白也不在串尾），才调对应的 handler：

| token | 含义 | handler |
|---|---|---|
| `.l` | 定冠词 le / la / les | `HandleDefiniteArticles` |
| `.dl` | de + 定冠词（du / de la / des） | `HandleDefiniteArticles` |
| `.cl` | 缩合冠词（« du » de + le） | `HandleDePrepositionFollowedByArticle` |
| `.a` | 不定冠词 un / une / des | `HandleIndefiniteArticles` |
| `.d` | de（介词，可缩合） | `HandleDePreposition` |
| `.c` | à（介词，可缩合） | `HandleAPreposition` |

**`_isPlural` 与 `_curGender` 双状态**。与俄语不同，法语的性别标记处理完**不立即重置**，而是保留到冠词标记消费完才在函数末尾一起清（`_isPlural = false; _curGender = NoDeclination;`）。

**词组机制不同**。`_wordGroups` 是 `[ThreadStatic] Dictionary<string, ValueTuple<string, int, bool>>`，值里那个 `bool` 是**复数标志**——法语需要在「单词组」层面记录这个组是单数还是复数（俄语靠 `_curGender` 的枚举，波兰语靠长度匹配）。`IsWordGroup` 从字典里找最长匹配，命中后用 `SetGenderInfo(tags.Item1)` 恢复性别、`SetPlural()` / `SetSingular()` 恢复数。

**元音表含 `h`**：`Vowels = { 'a', 'e', 'i', 'o', 'u', 'h' }`。法语里 `h` 是哑音（muet），`{.l}` 遇到 `homme` 输出 `l'`（省音形式）而不是 `le`。这是六个内置处理器里唯一把 `h` 当元音的。

**常见误用与坑**

1. **两段式顺序和俄语相反**：先 `{.M}` 声明性，再在名词后写 `{.l}`。写成「名词在前、标记在后」时 `SetGenderInfo` 拿不到状态，会用默认输出。
2. **`CheckWhiteSpaceAndTextEnd` 是硬门槛**。冠词标记后面紧跟空格或文本结尾时 `ProcessToken` 直接跳过——**这是设计（冠词只在名词紧邻时生效），不是 bug**。
3. **`h` 触发省音**。语言包里名词以 `h` 开头时 `{.l}` 会输出 `l'`，如果你期望 `le`，检查是不是大写 `H`（`Vowels` 数组里只有小写 `h`，`CheckWhiteSpaceAndTextEnd` 前的字符检查是区分大小写的）。
4. **`ClearTemporaryData` 漏调会留下错误的单复数状态**。`_isPlural` 和 `_curGender` 都是 `static`，只在 `ClearTemporaryData` 里清。
5. **`ProcessWordGroup` 在性别标记分支里被无条件调用**，即使当前位置不满足「紧贴名词」的条件。所以词组登记可能包含不符合直觉的条目——但 `IsWordGroup` 是最长匹配，实际影响有限。
6. **`ResetGender` 在性别分支里被调用**，但函数末尾还有一次 `_isPlural = false; _curGender = NoDeclination;`。两层清理并存，不要以为只清一次。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：链接处理 → 性别标记分支（设性别 + 登记词组 + 重置）→ 冠词/介词标记分支（六路 if-else 链 + 最长词组匹配恢复状态）→ 末尾统一清 `_isPlural` 与 `_curGender`。
- `override CultureInfo CultureInfoForLanguage { get; }`：静态 `CultureInfo`（法语 locale）。
- `override void ClearTemporaryData()`：清 `WordGroups`、`_isPlural = false`、`_curGender = NoDeclination`。

**冠词与介词处理（private）**

- `HandleDefiniteArticles(sourceText, token, cursorPos, outputString)`：`.l` / `.dl`。
- `HandleIndefiniteArticles(sourceText, token, cursorPos, outputString)`：`.a`。
- `HandleDePreposition(sourceText, token, ref cursorPos, outputString)`：`.d`，处理 `de` 与 `des` / `de la` / `du` 的判定。
- `HandleAPreposition(sourceText, token, ref cursorPos, outputString)`：`.c`，处理 `à` 的缩合。
- `HandleDePrepositionFollowedByArticle(...)` / `HandleAPrepositionFollowedByDefiniteArticle(...)`：`.cl` / `.dl` 的缩合入口。

**状态与词组（private）**

- `SetGenderInfo(string token)` / `SetPlural()` / `SetSingular()` / `ResetGender()`。
- `ProcessWordGroup(string sourceText, string token, int cursorPos)`：登记 `[ThreadStatic] Dictionary<string, ValueTuple<string, int, bool>> _wordGroups`。
- `IsWordGroup(string sourceText, string token, int cursorPos, out ValueTuple<string, bool> tags)`：最长匹配查找。
- `ProcessLink(...)` / `CheckWhiteSpaceAndTextEnd(string sourceText, int cursorPos)`。
- `static char[] Vowels = { 'a', 'e', 'i', 'o', 'u', 'h' }`。

**枚举**：`WordGenderEnum`（`NoDeclination` / 阳性 / 阴性 / 中性 / 复数相关值），与 `GenderTokens.TokenList` 的 `.M` `.F` `.N` `.P` `.S` 对应。

## 使用示例

```csharp
// 语言包里的写法（性别标记在前、冠词标记在被修饰名词后）：
//   <string id="myModCity"  text="{.F}ville {.l} est grande" />     -> "la ville est grande"
//   <string id="myModHomme" text="{.M}homme {.l} parle" />          -> "l'homme parle"（h 省音）
//   <string id="myModArme"  text="{.F}arme {.dl} Combat" />         -> "de l'arme Combat"
//   <string id="myModVilles" text="{.P}villes {.l} sont grandes" />  -> "les villes sont grandes"

TextObject city = new TextObject("{=myModCity}{.F}ville {.l} est grande", null);
Debug.Print(city.ToString());

TextObject man = new TextObject("{=myModHomme}{.M}homme {.l} parle", null);
Debug.Print(man.ToString());        // "l'homme parle" —— Vowels 里含 'h'

// 词组：性别在组级别记录，后续 marker 复用最长匹配
TextObject group = new TextObject("{=myModArme}{.F}arme {.dl} Combat", null);
Debug.Print(group.ToString());      // "de l'arme Combat"

// CheckWhiteSpaceAndTextEnd 门槛：冠词标记后必须紧贴名词，否则整段被跳过
TextObject spaced = new TextObject("{=myModBad}{.F}ville { .l} grande", null);
Debug.Print(spaced.ToString());     // "{.F}ville" 之外的标记处理结果与预期不同

// 排查：先确认查表（LocalizationDebugMode），再确认 .M/.F 写对了性，最后确认 .l 在名词之后
MBTextManager.LocalizationDebugMode = true;
Debug.Print(city.ToString());
MBTextManager.LocalizationDebugMode = false;
```

## 风险与边界

- **状态泄漏**。`_isPlural` 与 `_curGender` 是普通 `static`，`_wordGroups` 是 `[ThreadStatic] static Dictionary`。**漏调 `ClearTemporaryData` 会让「单数组被当成复数组」**，表现是冠词全变 `les`。主线程渲染是唯一安全假设。
- **无存档风险**，实例与静态状态不参与序列化。
- **冠词标记不产生任何错误提示**。写错性或写错顺序只会输出错的词，没有 assert 没有日志（除非整个渲染抛异常）。
- **`Vowels` 里的小写 `h` 是唯一的大小写敏感点**。`Homme`（大写 H）不会触发省音。
- **法语没有变格**，`{.g}` `.{.d}` 这类格标记在法语下不存在——**语言包里出现它们会被静默丢弃**。
- **语言包不能跨语言照抄标记**。`.d` 在法语是介词 de、在英语是不存在、在波兰语是与格。
- **`_wordGroups` 是 `[ThreadStatic]`** 而 `_isPlural` / `_curGender` 不是，混合设计。跨线程渲染时前者是干净的、后者不是——整体仍应视为非线程安全。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [ItalianTextProcessor](../ItalianTextProcessor) — 同类思路：介词 + 冠词 + 性数，没有变格
- [SpanishTextProcessor](../SpanishTextProcessor) — 同类思路：定冠词 + 性数，代码量最小
- [TextObject](../TextObject) — 渲染入口
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游阶段，先于本类运行
