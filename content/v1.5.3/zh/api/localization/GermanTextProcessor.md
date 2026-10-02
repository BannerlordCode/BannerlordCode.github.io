---
title: "GermanTextProcessor"
description: "德语的性/数/格变格处理器：区分强变化、弱变化、混合变化三套词尾规则，是八个内置处理器里最长、token 最多的一个。"
---

# GermanTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class GermanTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/GermanTextProcessor.cs`

## 概述

德语处理器（约 2700 行）是内置处理器里最长的，token 数量也最多（40+ 个）。它的核心概念是德语形容词的三套变化模式：**强变化（stark）** 无词尾、**弱变化（schwach）** 带 `-e` 词尾、**混合变化（gemischt）** 视格而定。名词侧的格标记（`.g` `.gp` `.d` `.dp` `.a` `.ap`）走强变化套用，形容词侧则按 `.j` / `.js` / `.jm` / `.jw` 这类 token 分派到不同的 `AddSuffix*` 方法。

## 心智模型

**与俄语/波兰语同构的两段式协议**：`.M` / `.F` / `.N` / `.P` 四个性别标记声明性数，后面的格标记消费并重置。**但多了一套「混合名词」**——德语里有一类名词（der Bauer 这类阳性弱变化），需要单独的 `ForNDeclension` 处理路径。

**token 全表**（从源码 `token === "..."` 分支提取）：

- 性别：`.M` `.F` `.N` `.P`
- 名词格：`.a`（宾单）`.ap`（宾复）`.g`（属单）`.gp`（属复）`.d`（与单）`.dp`（与复）
- 名词化：`.nn`（阳性中性格）`.nnp`（阳性名词复数形态）`.n`
- 形容词：`.j`（主单）`.jp`（主复）`.ja`（宾单）`.jap`（宾复）`.jg`（属单）`.jgp`（属复）`.jd`（与单）`.jdp`（与复）
- 形容词变化模式：`.jm`（混合主单）`.jmp`/`.ajmp`（混合主复）`.jwp`/`.ajwp`（弱主复）`.jsp`/`.ajsp`（强主复）`.jm`（混合）`.jw`（弱）`.js`（强）
- 弱变化名词：`.ma` `.mn` `.md` `.mp` `.mg` `.wg` `.wa` `.wd` `.wp` `.pg` `.pgp` `.pa` `.pap` `.pdp` `.pd` `.sg`/`.snp`/`.sd`/`.sgp`/`.sdp`/`.sap`（混合变化）
- 复合：`.wn` `.wnp` `.wdp` `.mnp` `.mgp` `.np`
- 特殊：`.link`

**`token.EndsWith("Creator")` 钩子**：`ProcessToken` 在性别分支之前有一句 `if (token.EndsWith("Creator")) outputString.Append("{" + token.Replace("Creator", "") + "}");`——把 `{.xCreator}` 转回 `{.x}`。这是给「由某属性派生另一个属性」的场景留的，**在 1.5.3 的语言包里没有被使用**（源码内除本句外无其它命中），是留给 mod 的。

**词组机制与俄语/波兰语完全一致**：`WordGroups` / `WordGroupsNoTags` 双列表 + `{.nn}` 收尾 + `AddSuffixWordGroup` 重放。性别标记的登记条件也是 `cursorPos == token.Length + 2 && 无后续 "{." && 无空格`。

**常见误用与坑**

1. **德语的性（der/die/das）是强制记忆的，标记写错就错**。`.M` 用在 die-Tisch（阴性）上不会报错，只会输出错的形式。**校对时必须逐个核对性**。
2. **`ClearTemporaryData` 漏调污染性与词组**，同俄语/波兰语。`_curGender` + 三个 `static` 列表。
3. **强/弱/混合三类形容词 token 极易混用**。`{.jp}` 是强变化主格复数，`{.jsp}` 也是主格复数但走另一条规则——两者在特定词干上结果不同。语言包作者拿不准时优先只用 `.j` 系列（强变化），因为它不依赖冠词。
4. **`token.EndsWith("Creator")` 优先于所有分支**。任何以 `Creator` 结尾的 token 都会被替换掉，不能用作自定义标记。
5. **`ProcessToken` 里的 `num2` 声明在 if 分支外**（`int num2;` 在 `WordGroups` 分支里赋值），C# 的 definite-assignment 让它只在 `IsWordGroup` 返回 true 时使用。这种写法在维护时容易看漏控制流。
6. **规则表是硬编码的**，专有名词、缩写、外来词容易出错。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：超链接 → `Creator` 后缀钩子 → 性别标记（`.M` `.F` `.N` `.P` + 词组登记）→ 名词化标记（`.nnp` `.ajp` `.aj` `.nn`）→ 词组命中 → 按 `_curGender` 与 token 分派到 26 个 `AddSuffix*` 方法。
- `override CultureInfo CultureInfoForLanguage { get; }`：静态 `CultureInfo`（德语 locale）。
- `override void ClearTemporaryData()`：清 `LinkList` / `WordGroups` / `WordGroupsNoTags`，重置 `_curGender` 与 `_doesComeFromWordGroup`。

**性判断（private 属性）**：`Masculine` / `Feminine` / `Neuter` / `Plural` 及组合视图。

**格变后缀（private，共 26 个 `AddSuffix*`）**

强变化：`StrongNominative` / `StrongNominativePlural` / `StrongAccusative` / `StrongAccusativePlural` / `StrongGenitive` / `StrongDative` / `StrongDativePlural` / `StrongAccusativePlural`。

弱变化：`WeakNominative` / `WeakNominativePlural` / `WeakAccusative` / `WeakDative` / `WeakDativePlural` / `WeakGenitive`。

混合变化：`MixedNominative` / `MixedNominativePlural` / `MixedAccusative` / `MixedDative` / `MixedDativePlural` / `MixedGenitive`。

其它：`NounNominativePlural` / `NounAccusative` / `NounAccusativePlural` / `NounGenitive` / `NounGenitivePlural` / `NounDative` / `NounDativePlural` / `WordGroup` / `ForNDeclension`。

**词组与辅助（private）**：`WordGroupProcessor` / `AddSuffixWordGroup` / `IsWordGroup` / `IsRecordedWithPreviousTag` / `IsLink` / `IsIrregularWord` / `RemoveSuffixFromAdjective` / `SetMasculine` / `SetFeminine` / `SetNeuter` / `SetPlural` / 静态 `GetLastCharacter` / `GetEnding` / `IsVowel` / `IsConsonant` 等音类判定。

## 使用示例

```csharp
// 语言包里的写法（德语的性必须核对：der Tisch 阳性 / die Stadt 阴性 / das Haus 中性）
//   <string id="myModTable" text="{.M}Tisch {.g}" />       -> Tisches
//   <string id="myModCity"  text="{.F}Stadt {.p}" />      -> Städte
TextObject table = new TextObject("{=myModTable}{.M}Tisch {.g}", null);
Debug.Print(table.ToString());     // "Tisches"

TextObject city = new TextObject("{=myModCity}{.F}Stadt {.p}", null);
Debug.Print(city.ToString());      // "Städte"

// 形容词按格变化，紧跟在名词后面
TextObject red = new TextObject("{=myModRed}{.F}Stadt {.g}rotem{.jg}", null);
Debug.Print(red.ToString());       // "Stadt rotem"

// Creator 后缀钩子：{.gCreator} 会被转换回 {.g}
TextObject derived = new TextObject("{=myModDerived}Wert {.gCreator}", null);
Debug.Print(derived.ToString());

// 排查：德语里性写错不会报错，只会输出错的词尾。
// 用 LocalizationDebugMode 确认查表正确后，剩下的形态问题基本都是性别标记写错。
MBTextManager.LocalizationDebugMode = true;
Debug.Print(city.ToString());
MBTextManager.LocalizationDebugMode = false;
```

## 风险与边界

- **状态泄漏是头号风险**。`_curGender` / `WordGroups` / `WordGroupsNoTags` / `LinkList` 均为普通 `static`，只在 `ClearTemporaryData` 里清。`TextObject.ToStringWithoutClear()` 与 `MBTextManager.ProcessWithoutLanguageProcessor` 走的都是 `shouldClear: false` 路径，**在自定义渲染流程里调它们后必须手动补一次 `ClearTemporaryData`**。
- **无线程安全**，无存档风险。
- **德语的性错误不产生任何诊断**。这是德语包校对的主要工作量，脚本查不出来，只能人肉核对词表。
- **强/弱/混合三套规则并存**意味着同一个句子里名词和形容词可能用不同规则（因为德语名词用强变化、形容词随冠词变化）。语言包里标记的选取要成对考虑。
- **`Creator` 后缀是保留字**，不能拿来做自定义标记名。
- **性能**：`IsWordGroup` 线性扫描 `WordGroupsNoTags`，标记越多越慢。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`
- [RussianTextProcessor](../RussianTextProcessor) — 同构参考：共享性别标记 + WordGroups 架构
- [PolishTextProcessor](../PolishTextProcessor) — 同构参考，额外有软化辅音
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [TextObject](../TextObject) — 渲染入口与异常吞掉的位置
