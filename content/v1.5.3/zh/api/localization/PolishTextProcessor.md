---
title: "PolishTextProcessor"
description: "波兰语的性/数/格变格处理器：在俄语同款词组机制之上增加软化辅音（palatalization）与呼格（vocative），是内置处理器中最完备的一个。"
---

# PolishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class PolishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs`

## 概述

波兰语处理器（约 2700 行）在 [RussianTextProcessor](../RussianTextProcessor) 的「性别标记 + 词组缓存」框架上加了两样波兰语特有的东西：**软化辅音重写**（`PalatalizeConsonant` 把词尾 `ć/ń/ś/ź/dz` 前的辅音按规则改成 `c/n/s/z/dź` 形态）和**呼格**（`.v` / `.vp` / `.jv` / `.jvp`）。它还维护五张按性别分桶的不规则词表。它是内置八个处理器里唯一一个把「复数属格」「工具格」「地点格」都实现完整且区分软化/硬化辅音的。

## 心智模型

**两段式协议与俄语完全一致**：性别标记声明性/数，紧贴名词；格标记消费并重置状态。

```
{.MA}  miecz  {.g}    ->  miecza     （属格单数）
{.MA}  miecz  {.gp}   ->  mieczy     （属格复数）
{.F}   konia  {.i}    ->  koni?      （工具格）
```

**性别标记只有五个**（俄语有六个，因为俄语区分阳性/阴性/中性 × 有生/无生，波兰语不区分生性）：`.MP`（阳性人格阳性/动物）、`.MA`（阳性动物）、`.MI`（阳性非动物）、`.F`（阴性）、`.N`（中性）。**阳性有三种**，因为波兰语的动词变位形式与人称代词形式对生性敏感。

**格标记有两组**：

- 名词：`.p`（主/宾复）、`.a`（宾单）、`.ap`（宾复）、`.v`（呼单）、`.vp`（呼复）、`.g`（属单）、`.gp`（属复）、`.d`（与单）、`.dp`（与复）、`.l`（处单）、`.lp`（处复）、`.i`（工具单）、`.ip`（工具复）。
- 形容词：`.j` `.jp` `.ja` `.jap` `.jv` `.jvp` `.jg` `.jgp` `.jd` `.jdp` `.jl` `.jlp` `.ji` `.jip`。
- 名词化：`.nnp` `.ajp` `.aj` `.nn`。

**软化辅音（`PalatalizeConsonant`）是波兰语的核心机制**。它按 `SoftConsonants`（词尾前一个字符属于 `ć ś ź ń dź`）与 `HardenedConsonants`（`ch rz dz`）判断要不要重写。写成 `koń{.i}cz` 这种形态时，处理器会先判断 `ń` 后面跟的是 `cz` 还是 `ż`，再决定输出 `kon` + `czy` 还是 `koń` + `czy`。**语言包作者需要知道这个机制存在，但不该手动做软化**——把词干原样写出来，让标记去做。

**词组机制与俄语同构但更精细**：`IsWordGroup` 从 `WordGroupsNoTags` **尾部往前扫**（俄语从头扫），并优先匹配更长的裸词，所以 `słowo` 会优先于 `sło` 命中。

**修饰语特例**：形容词变格时会检查 `EndsWith("Nasz")`（我们的）、`EndsWith("Wyszkoloni")`（受训的）、`EndsWith("Zgromadzoni")`（召集的）——**波兰语人称代词有性/数配对规则**，这三条硬编码是特例处理。**这是本类里最脆弱的部分**：换一套译法就不成立。

**常见误用与坑**

1. **`ClearTemporaryData()` 漏调 = 性/词组污染**，同俄语。`_curGender` / `WordGroups` / `WordGroupsNoTags` / `LinkList` 全是普通 `static`。
2. **`RemoveSuffixFromAdjective` 的返回值语义特殊**：它返回 `'i'` 或 `'y'`，**`'i'` 表示「软化未发生、原样保留」**。看代码时容易误以为它是「被删掉的字符」。
3. **`Nasz` / `Wyszkoloni` / `Zgromadzoni` 是英语式硬编码**。如果你的波兰语译文里这些词拼写不同（大小写、变音符号位置），变格结果会错。**规避方式：形容词按 `.j` 基础形式写，别自己造代词形式。**
4. **`.l`（处格）对阳性直接委托给 `AddSuffixNounVocative`**——波兰语处格与呼格在阳性上同形，这是语言事实不是 bug。
5. **`GetEnding(outputString, 3).Equals("iec")` 里的 `Equals(string)` 调用有大量实例写法**，混合了 `string.Equals` 与扩展，行为一致但读起来容易漏看。
6. **`IsWordGroup` 里 `wordGroupIndex` 初值 -1 且用 `num > 0` 判成功**，当最短登记词长度为 0 的边界情况下会返回 false。这只在 `WordGroupsNoTags` 里有空串时才可能发生。
7. **五张不规则词表按 `char.ToUpperInvariant(text[0])` 分桶**。首字母大小写或变音符号不同的词会走规则化兜底。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：超链接处理 → `token.EndsWith("Creator")` 钩子 → 性别标记（`.MP` `.MI` `.MA` `.F` `.N`，并登记 WordGroup）→ 名词化标记 → 词组命中则 `AddSuffixWordGroup` → 否则按 `_curGender` 落到 24 个 `AddSuffix*` 之一 → 消费后重置 `_curGender` → 补回链接结尾。
- `override CultureInfo CultureInfoForLanguage { get; }`：静态 `CultureInfo`（波兰语 locale）。
- `override void ClearTemporaryData()`：清 `LinkList` / `WordGroups` / `WordGroupsNoTags`，重置 `_curGender = NoDeclination` 与 `_doesComeFromWordGroup = false`。

**性判断（private 属性）**：`MasculinePersonal` / `MasculineAnimate` / `MasculineInanimate` / `Feminine` / `Neuter`。

**格变后缀（private）**

名词：`AddSuffixNounNominativePlural`、`AddSuffixNounAccusative`、`AddSuffixNounAccusativePlural`、`AddSuffixNounVocative`（`.v`）、`AddSuffixNounVocativePlural`（`.vp`，直接转发给 `NominativePlural`）、`AddSuffixNounGenitive`、`AddSuffixNounGenitivePlural`、`AddSuffixNounDative`、`AddSuffixNounDativePlural`、`AddSuffixNounLocative`、`AddSuffixNounLocativePlural`、`AddSuffixNounInstrumental`、`AddSuffixNounInstrumentalPlural`。

形容词：`AddSuffixAdjectiveNominative`、`AddSuffixAdjectiveNominativePlural`、`AddSuffixAdjectiveAccusative`、`AddSuffixAdjectiveAccusativePlural`、`AddSuffixAdjectiveVocative`（转发 `Nominative`）、`AddSuffixAdjectiveVocativePlural`（转发 `NominativePlural`）、`AddSuffixAdjectiveGenitive`、`AddSuffixAdjectiveGenitivePlural`、`AddSuffixAdjectiveDative`、`AddSuffixAdjectiveDativePlural`、`AddSuffixAdjectiveLocative`、`AddSuffixAdjectiveLocativePlural`、`AddSuffixAdjectiveInstrumental`、`AddSuffixAdjectiveInstrumentalPlural`。

**软化与音类判定（private static）**

- `static void PalatalizeConsonant(StringBuilder outputString, string text)`：把词尾前的硬辅音按波兰语规则软化。
- `static bool IsVowel(char c)` / `IsSoftConsonant(string s)` / `IsHardenedConsonant(string s)` / `IsHardConsonant(string s)`：查 `Vowels` / `SoftConsonants` / `HardenedConsonants` / `HardConsonants` 四个静态数组。

**词组与链接（private）**

- `WordGroupProcessor(string sourceText, int cursorPos)`：首次登记并把标记归一为单数形态后 `base.Process`。
- `AddSuffixWordGroup(string token, int wordGroupIndex, StringBuilder outputString)`：删裸词 → 重写词组内所有标记 → `base.Process` → 恢复大小写。
- `IsWordGroup(int tokenLength, string sourceText, int curPos, out int wordGroupIndex)` / `IsRecordedWithPreviousTag(string sourceText, int cursorPos)` / `IsLink(...)` / `IsIrregularWord(...)` / `RemoveSuffixFromAdjective(StringBuilder outputString)`。
- `SetFeminine` / `SetNeuter` / `SetMasculineAnimate` / `SetMasculineInanimate` / `SetMasculinePersonal`：五个性别 setter。

**静态工具**：`GetLastCharacter` / `GetEnding(StringBuilder, int)`。

## 使用示例

```csharp
// 语言包里的写法（xml text 属性，性别标记后不能有空格）：
//   <string id="myModSword" text="{.MA}miecz {.g}" />
//   <string id="myModHorses" text="{.MP}konie {.p}" />
TextObject sword = new TextObject("{=myModSword}{.MA}miecz {.g}", null);
Debug.Print(sword.ToString());     // "miecza"

TextObject horses = new TextObject("{=myModHorses}{.MP}konie {.p}", null);
Debug.Print(horses.ToString());    // "konie"

// 工具格会触发软化：词干原样写，让处理器决定要不要变音
TextObject with = new TextObject("{=myModWith}{.MI}konie {.i}", null);
Debug.Print(with.ToString());      // 阴性 → "koniemi" 形态一类，具体由软化规则决定

// 呼格（波兰语特有，英语包无对应）
TextObject voc = new TextObject("{=myModVoc}{.MA}mieczu {.v}", null);
Debug.Print(voc.ToString());

// 排查错误：GetEnding 下标越界等异常会被 TextObject.ToString() 吞成
// "Error at id: myModSword. Lang: Polish"，堆栈在日志里
TextObject risky = new TextObject("{=myModSword}{.gp}", null);   // 前面没有名词，标记悬空
Debug.Print(risky.ToString());
```

## 风险与边界

- **状态泄漏是头号风险**，同俄语：四个 `static` 可变容器只由 `ClearTemporaryData` 清。主线程渲染是唯一安全假设，无线程安全保证。
- **无存档风险**，实例与静态状态都不进存档。
- **`Nasz` / `Wyszkoloni` / `Zgromadzoni` 硬编码**是本类最不可移植的部分。自制波兰语译文时优先用 `.j` 基础形式。
- **不规则词表按首字母分桶且分五性别**（`IrregularMasculinePersonalDictionary` / `IrregularMasculineAnimateDictionary` / `IrregularMasculineInanimateDictionary` / `IrregularFeminineDictionary` / `IrregularNeuterDictionary`）。词写错或性别标错都会掉到规则化兜底。
- **标记名跨语言不通用**。波兰语的 `.a` 是宾格、英语的 `.a` 是冠词。语言包不能跨语言照抄标记。
- **`PalatalizeConsonant` 会改写已输出的内容**（`outputString.Remove` + `Insert`）。如果你在 `ProcessToken` 之外往输出里塞了内容再触发标记，变音会作用在错误的位置上。**规则：标记必须紧跟在它修饰的词后面。**
- **性能**：`IsWordGroup` 每次调用都从尾往前线性扫 `WordGroupsNoTags`。长句 + 多标记时是 O(标记数 × 词组数)。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`
- [RussianTextProcessor](../RussianTextProcessor) — 同构参考：共享「性别标记 + WordGroups + ClearTemporaryData」架构
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [EnglishTextProcessor](../EnglishTextProcessor) — 无状态最小实现，用于对照「复杂度从哪来」
- [DefaultTextProcessor](../DefaultTextProcessor) — 完全无状态的降级目标
- [TextObject](../TextObject) — 渲染入口与异常吞掉的位置
