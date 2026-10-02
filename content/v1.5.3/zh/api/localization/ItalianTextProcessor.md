---
title: "ItalianTextProcessor"
description: "意大利语的介词与冠词处理器：处理 di/in/un/a/su/l/da 七类介词的元音省略与连写，以及六个性数标记。"
---

# ItalianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class ItalianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/ItalianTextProcessor.cs`

## 概述

意大利语处理器（约 1360 行）处理**介词的元音省略**与**限定词**：意大利语的介词 `di` / `in` / `un` / `a` / `su` / `l` / `da` 遇到以元音开头的名词时会省略尾元音（`di + amico = d'amico`），在辅音前则连写或保留。名词本身不变格，但冠词（`il` / `lo` / `la` / `i` / `le` / `gli`）要按性数与首音选择。它用六个性别标记（`.MS` `.MP` `.FS` `.FP` `.MN` `.FN`）记录性数，**注意与西班牙语的六个标记完全同名但语义不同**（`.MN` 是意大利语的「阳性中性与单数」，西班牙语是 `.NS`）。

## 心智模型

**结构与法语同型**：链接处理 → 性别标记分支（`SetGenderInfo` + `ProcessWordGroup` + return）→ 介词/冠词标记分支（`FunctionTokens.TokenList.Contains(text2.ToLower())` + `CheckWhiteSpaceAndTextEnd`）。

**七个功能标记**（`token.ToLower()` 后比对）：

| token | 意大利语 | 作用 |
|---|---|---|
| `.di` | di | `d'amico` / `di amico` |
| `.in` | in | `nell'albergo` / `in albergo` |
| `.un` | un | `un'amica` / `un amico` |
| `.a` | a | `all'amico` / `a amico` |
| `.su` | su | `sull'albero` / `su albergo` |
| `.l` | il / lo / la / i / le / gli | 定冠词，按性数与首音选 |
| `.da` | da | `dall'amico` / `da amico` |

**六个性别标记**：`.MS`（阳性单数）、`.MP`（阳性复数）、`.FS`（阴性单数）、`.FP`（阴性复数）、`.MN`（阳性中性与单数）、`.FN`（阳性中性与复数）。意大利语的中性单复数共用阳性冠词（`il` / `lo` → `i` / `gli`），所以标记是「阳性中性」合并的。

**三张音类静态表**：

- `Vowels = { 'a', 'e', 'i', 'o', 'u' }`：判定元音省略。
- `SpecialConsonantBeginnings = { 's' }` + `SpecialConsonants = { "x", "y", "gn", "z", "ps", "pn" }`：意大利语特有的「需保留元音」的辅音/辅音簇。`di + gn` 不写成 `dign`，`in + x` 也不写成 `inx`。**这是意大利语与法语/西班牙语最大的规则差异**。

**分派用字符串哈希 switch**。`ProcessToken` 里有一段 `<PrivateImplementationDetails>.ComputeStringHash(text2)` + 巨大 `if (num <= ...)` 链——这是编译器把 C# `switch` on string 优化成的哈希跳转。**读源码时看到 `num == 1326194706U` 这种数字不要以为是加密**，那只是 `".di"` 的哈希值。

**常见误用与坑**

1. **元音省略是自动的，不要在语言包里手动写 `d'`**。写成 `d'amico` 会被再处理一次变 `d''amico`。语言包里写 `{.di}amico`，处理器决定是否输出撇号。
2. **`SpecialConsonants` 列表之外的辅音簇不受保护**。`di + gn` 在表里（`"gn"`），但 `di + sc` 不在——`in + sc` 可能被错误省略成 `insc`。遇到时用语言包里的原文形式绕过标记。
3. **性别标记名与西班牙语重合但不同义**。从西班牙语包复制 `.MN` 到意大利语包会得到「阳性中性与单数」，而 `.MS` 在两个语言里都存在但枚举值不同。
4. **`ClearTemporaryData` 只有两行**（清 `WordGroups`、`_curGender = NoDeclination`），比法语少一项（无 `_isPlural`，因为意大利语的数由性数标记自带）。**漏调的状态泄漏范围比俄语小，但性别仍会漏。**
5. **`ProcessWordGroup` 只在性别标记分支里调用，且不检查空白边界**——与法语同款，不像俄语/波兰语有 `IndexOf(' ', cursorPos) == -1` 的门槛。所以「性别标记后有空格」的写法在意大利语下**仍会登记词组**。
6. **`.l` 之外没有 `.il` / `.lo` / `.la` 的独立标记**——全靠性别标记决定。语言包里漏写性别标记时 `SetGenderInfo(text3)` 会用词组里恢复的默认值。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：链接处理（`ProcessLink`）→ 性别标记分支 → 七个功能标记的哈希分派链。**全部行为在这里。**
- `override CultureInfo CultureInfoForLanguage { get; }`：静态 `CultureInfo`（意大利语 locale）。
- `override void ClearTemporaryData()`：`WordGroups.Clear()` + `_curGender = NoDeclination`。

**性别与状态（private）**

- `SetGenderInfo(string token)`：把六个性别标记映射到 `WordGenderEnum`。
- `[ThreadStatic] private static WordGenderEnum _curGender`：当前性数。
- `ProcessWordGroup(...)` / `IsWordGroup(string sourceText, string token, int cursorPos, out string tags)`：词组登记与最长匹配。

**介词与冠词处理（private）**

- `HandleOfPrepositions(sourceText, token, cursorPos, outputString)`：`.di`。
- `HandleInPrepositions(sourceText, token, cursorPos, outputString)`：`.in`。
- `HandleUnPreposition(...)` / `HandleAPreposition(...)` / `HandleSuPreposition(...)` / `HandleDaPreposition(...)`：对应 `.un` `.a` `.su` `.da`。
- `HandleDefiniteArticles(...)` 或等价：`.l`。
- `ProcessLink(sourceText, cursorPos, token, outputString)`：超链接配对。
- `CheckWhiteSpaceAndTextEnd(string sourceText, int cursorPos)`：功能标记的空白门槛。

**静态音类表**

- `private static char[] Vowels = { 'a', 'e', 'i', 'o', 'u' }`。
- `private static char[] SpecialConsonantBeginnings = { 's' }`：单字符特殊辅音。
- `private static string[] SpecialConsonants = { "x", "y", "gn", "z", "ps", "pn" }`：多字符特殊辅音簇。

**枚举**：`WordGenderEnum`（`NoDeclination` / 六个性数组合）。

## 使用示例

```csharp
// 语言包里的写法（元音省略由处理器决定，语言包里不要手写撇号）：
//   <string id="myModFriend" text="sono {.di} amico" />          -> "sono d'amico"
//   <string id="myModAt"      text="vado {.a} albergo" />         -> "vado all'albergo"
//   <string id="myModFrom"    text="vengo {.da} amico" />         -> "vengo dall'amico"
//   <string id="myModThe"     text="{.FS}casa {.l} grande" />     -> "la casa grande"
TextObject friend = new TextObject("{=myModFriend}sono {.di} amico", null);
Debug.Print(friend.ToString());     // "sono d'amico"

TextObject at = new TextObject("{=myModAt}vado {.a} albergo", null);
Debug.Print(at.ToString());         // "vado all'albergo"

// 特殊辅音簇不省略：gn / x / y / z / ps / pn 都在表里
TextObject gn = new TextObject("{=myModFrom}vengo {.di} gnomo", null);
Debug.Print(gn.ToString());         // "vengo da gnomo"（di + gnomo 不该变 d'）

// 定冠词：性别标记在前，.l 在被修饰名词后
TextObject the = new TextObject("{=myModThe}{.FS}casa {.l} grande", null);
Debug.Print(the.ToString());        // "la casa grande"

// 排查：先确认 .di / .a 等介词标记在语言包里没被手写成 d'，
// 再确认 .FS 之类的性别标记写对了，最后确认 CreateTextProcessorForLanguage 没降级到 DefaultTextProcessor
LanguageSpecificTextProcessor chosen = LocalizedTextManager.CreateTextProcessorForLanguage("Italian");
Debug.Print("processor = " + chosen.GetType().Name);
```

## 风险与边界

- **状态泄漏**：`_curGender` 是 `[ThreadStatic] static`，只在 `ClearTemporaryData` 清。每条写了性别标记的文本都应跟一个消费标记（`.l` 或其它），否则漏到下一次渲染。
- **无线程安全问题**（`_curGender` 是 `[ThreadStatic]`），建议仍主线程渲染。
- **无存档风险**，实例与静态状态不进存档。
- **元音省略规则不覆盖全部辅音簇**。`SpecialConsonants` 只有六个条目，遇到 `sc` `st` `gn`+其它 等组合要人工验证。**补救方式是在语言包里写全形式（`{.di}gnomo` 而不是靠省略）**。
- **`ProcessWordGroup` 不检查空白边界**（与俄语/波兰语不同），所以「性别标记后跟空格」也会登记词组。可能产生意料之外的匹配。
- **`ComputeStringHash` 分派链是编译产物**，不要试图在源码里按数字找 token——要判断某个 token 走哪条分支，去看 `FunctionTokens.TokenList` 与 `GenderTokens.TokenList` 这两个静态列表。
- **不处理动词变位**。意大利语的动词变位（`-are` / `-ere` / `-ire`）在 1.5.3 里没有实现。语言包里出现相关内容应直接写全。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`
- [FrenchTextProcessor](../FrenchTextProcessor) — 同类思路：介词 + 冠词 + 词组缓存
- [SpanishTextProcessor](../SpanishTextProcessor) — 同类思路：性别标记名重合但语义不同，注意区分
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [TextObject](../TextObject) — 渲染入口
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游阶段，先于本类运行
