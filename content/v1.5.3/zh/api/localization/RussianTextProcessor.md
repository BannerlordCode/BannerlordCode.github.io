---
title: "RussianTextProcessor"
description: "俄语的性/数/格变格处理器：性别标记设定名词的性，格标记把名词和形容词变成正确的俄语形式，并维护跨 token 的词组缓存。"
---

# RussianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class RussianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/RussianTextProcessor.cs`

## 概述

俄语处理器是 [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) 子类里最复杂的一个（约 3100 行），也是理解「为什么语言处理器必须有状态机」的最好样本。它要处理：六个性别标记（`.MA` `.MI` `.FI` `.FA` `.NA` `.NI`）、十二个名词格标记（`.p` `.a` `.ap` `.g` `.gp` `.d` `.dp` `.l` `.lp` `.i` `.ip`，加名词化的 `.nnp`）、十二个形容词格标记（`.j` `.jp` `.ja` `.jap` `.jg` `.jgp` `.jd` `.jdp` `.jl` `.jlp` `.ji` `.jip`）、名词化标记（`.aj` `.ajp` `.nn`），以及跨 token 的**词组缓存**（`WordGroups`）。它不处理冠词、不处理音变——那不在 1.5.3 的实现里。

## 心智模型

**两段式标记协议**。俄语的语言标记必须**成对使用**，这是最关键的心智模型：

```
{ .MI }меч      { .g}   ->  меча       （属格，单数）
{ .FA}кобыла    { .i}   ->  кобылой    （工具格，单数）
{ .MI}меч       { .dp}  ->  мечами     （与格，复数）
```

前一个标记声明名词的性/数（并把当前词登记进 `WordGroups`），后一个标记决定格。**性别标记必须在同一句里出现在名词前面**，且被声明的词后面不能有空格——源码里有这个判断：`cursorPos == token.Length + 2 && sourceText.IndexOf("{.", cursorPos) == -1 && sourceText.IndexOf(' ', cursorPos) == -1`。**即「一个性别标记只对它后面紧贴的第一个词生效」。**

**状态机的四个静态字段**：

- `_curGender`（`WordGenderEnum`）：当前性/数。上一次性别标记设定的值，格标记消费后立刻重置为 `NoDeclination`。
- `WordGroups`：`List<ValueTuple<string, int>>`，每项是 `(整条源文本, 标记位置)`。记录了「哪条文本里有哪些性标记」，供**跨 token 复用**：当后面出现 `.nnp`/`.ajp`/`.aj` 这类名词化标记时，会把整个词组重新 `base.Process()` 一遍，让它同时按单/复两种形态变化。
- `WordGroupsNoTags`：`List<string>`，对应词在 `outputString` 里**不含标记的裸文本**，用于定位与删除。
- `LinkList` / `_doesComeFromWordGroup`：超链接处理与递归深度标志。

**分派顺序（`ProcessToken` 从上到下）**：

1. 超链接配对（`IsLink`）——先回退 `cursorPos` 和 `outputString` 把 `</b></a>` 摘掉，处理完再补回。
2. `token.EndsWith("Creator")` → 输出 `{token去掉Creator}`。这是给「由……创建」这类后缀生成规则留的钩子。
3. 性别标记（`.MA` `.MI` `.FI` `.FA` `.NA` `.NI`）→ 设 `_curGender`，若位置合规则登记 WordGroup。
4. 名词化标记（`.nnp` `.ajp` `.aj` `.nn`）→ 先按单/复变格，再调 `WordGroupProcessor` 触发词组重放。
5. 名词格标记 + `_curGender != NoDeclination` → 先查不规则词表 `IsIrregularWord`，命中就替换；否则调对应的 `AddSuffixNoun*` / `AddSuffixAdjective*`。**消费后立刻把 `_curGender` 重置回 `NoDeclination`**。
6. 收尾：如果前面摘掉了链接结尾，补回 `</b></a>`。

**常见误用与坑**

1. **`ClearTemporaryData()` 漏调 = 跨文本的性别污染**。`_curGender` 和三个 `static` 列表都跨调用存活。如果某句文本因为 `LocalizationDebugMode` 或管线中途异常跳过了 `shouldClear`，下一次渲染会**带着上一个界面的性别**。界面 A 的阴性名词在界面 B 里用阳性的格——这是俄语包最难查的 bug。
2. **性别标记必须紧贴名词**。`{ .MA}герой` 有效，`{ .MA} герой`（有空格）无效——源码的 `IndexOf(' ', cursorPos) == -1` 会拒绝登记。
3. **`AddSuffixNounGenitivePlural` 的 `-к` 分支会连删两次尾字母**。源码里 `outputString.Remove(...)` 之后又 `c = GetLastCharacter(...)`，然后可能再次 remove。这段逻辑对 `-к` 结尾的复数属格有已知的边界情况，翻译长列表时值得抽查。
4. **`GetEnding(outputString, 3)[0]` 这类硬编码下标在输出太短时会抛 `IndexOutOfRangeException`**。异常会被 `TextObject.ToString()` 吞掉转成 `"Error at id: ..."`，界面上看到的是错误文本。**如果俄语包某句话突然变成 `Error at id: xxx`，去查那里是不是 `.gp`/`.lp` 之类标记前面缺了名词**。
5. **不规则词表按首字母分桶**（`IsIrregularWord` 用 `char.ToUpperInvariant(text[0])` 查字典）。**首字母变了就命中不了**。以小写写的中文转写词、或大写缩写的专有名词会走规则化后缀，可能出错。
6. **`base.Process(text)` 的递归调用**（`AddSuffixWordGroup` / `WordGroupProcessor` 里）会走一遍完整的标记扫描。此时 `_doesComeFromWordGroup = true` 用来阻止无限递归——**标志位漏设会导致栈溢出**。这是实现内部的，不该由你触发，但如果你自己继承并重写就会遇到。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：上面六段分派。**这是 90% 的行为都在这里的方法**。
- `override CultureInfo CultureInfoForLanguage { get; }`：返回静态 `CultureInfo`（俄语 locale）。
- `override void ClearTemporaryData()`：清 `LinkList` / `WordGroups` / `WordGroupsNoTags`，并把 `_curGender` 重置为 `NoDeclination`、`_doesComeFromWordGroup` 置 false。**这是本类唯一可靠的「回到初始状态」入口。**

**性判断辅助（private 属性，全部读 `_curGender`）**

`MasculineAnimate` / `MasculineInanimate` / `Masculine` / `FeminineAnimate` / `FeminineInanimate` / `Feminine` / `Neuter` / `NeuterAnimate` / `NeuterInanimate` / `Animate`——把 6 个枚举值组合成 10 个布尔视图，让 `AddSuffixNoun*` 里能写成 `if (this.MasculineAnimate && ...)` 这种可读形式。

**格变后缀（private）**

名词：`AddSuffixNounNominativePlural`（`.p`）、`AddSuffixNounAccusative`（`.a`）、`AddSuffixNounAccusativePlural`（`.ap`，活体走属格复数、死物走属格单数）、`AddSuffixNounGenitive`（`.g`）、`AddSuffixNounGenitivePlural`（`.gp`）、`AddSuffixNounDative`（`.d`）、`AddSuffixNounDativePlural`（`.dp`）、`AddSuffixNounLocative`（`.l`）、`AddSuffixNounLocativePlural`（`.lp`）、`AddSuffixNounInstrumental`（`.i`）、`AddSuffixNounInstrumentalPlural`（`.ip`）。

形容词：`AddSuffixAdjectiveNominative`（`.j`）、`AddSuffixAdjectiveNominativePlural`（`.jp`）、`AddSuffixAdjectiveAccusative`（`.ja`）、`AddSuffixAdjectiveAccusativePlural`（`.jap`）、`AddSuffixAdjectiveGenitive`（`.jg`）、`AddSuffixAdjectiveGenitivePlural`（`.jgp`）、`AddSuffixAdjectiveDative`（`.jd`）、`AddSuffixAdjectiveDativePlural`（`.jdp`）、`AddSuffixAdjectiveLocative`（`.jl`）、`AddSuffixAdjectiveLocativePlural`（`.jlp`）、`AddSuffixAdjectiveInstrumental`（`.ji`）、`AddSuffixAdjectiveInstrumentalPlural`（`.jip`）。

**词组机制（private）**

- `void WordGroupProcessor(string sourceText, int cursorPos)`：首次遇到时登记词组，并把 `.nnp→.p` `.ajp→.jp` `.nn→.n` `.aj→.j` 替换后 `base.Process` 一遍，得到「单数形态」缓存。
- `void AddSuffixWordGroup(string token, int wordGroupIndex, StringBuilder outputString)`：后面遇到格标记时，从输出里删掉 `WordGroupsNoTags[idx]` 那段裸词，然后把词组里所有标记按目标格重写，**再 `base.Process` 整段**。
- `bool IsWordGroup(int tokenLength, string sourceText, int curPos, out int wordGroupIndex)`：检查当前输出末尾是否正好等于某个已登记词组。
- `bool IsRecordedWithPreviousTag(string sourceText, int cursorPos)`：防止同一处重复登记。
- `bool IsLink(string sourceText, int tokenLength, int cursorPos)` / `bool IsIrregularWord(string sourceText, int cursorPos, string token, out string irregularWord, out int lengthOfWordToReplace)` / `bool IsConsonant` / `bool IsVelarOrSibilant` / `bool IsSoftStemAdjective`：判定辅助。

**静态工具（private static）**

- `static char GetLastCharacter(StringBuilder outputString)`：末字符，空则返回 `'*'`。
- `static string GetEnding(StringBuilder outputString, int numChars)`：取末尾 n 个字符（`MathF.Min` 保护）。
- `static List<ValueTuple<string, int>> WordGroups` / `List<string> WordGroupsNoTags` / `List<string> LinkList`：惰性初始化的静态列表。

## 使用示例

```csharp
// 语言包里的写法（xml text 属性，标记之间不能有多余空格）：
//   <string id="myModSword" text="{.MI}меч {.g} стоит 100 золотых" />
// 语法层不碰这些标记，本类把它们变成 клинок -> меча

TextObject price = new TextObject("{=myModSword}{.MI}меч {.g} стоит {MYMOD_PRICE}{.p} золотых", null);
MBTextManager.SetTextVariable("MYMOD_PRICE", 100);
Debug.Print(price.ToString());

// 性标记也可以是「块」形式：整个词组按同一性变化
//   <string id="myModUnit" text="{.FA}кобыла {.i}" />
TextObject tool = new TextObject("{=myModUnit}{.FA}кобыла {.i}", null);
Debug.Print(tool.ToString());   // "кобылой"

// 名词化：把形容词/动词短语变成名词（需要 .nn 收尾）
//   <string id="myModNoun" text="{.nn}ска {.nnp}" />
TextObject noun = new TextObject("{=myModNoun}{.nnp}охотник {.nn}", null);
Debug.Print(noun.ToString());

// 排查用：任何一步出错都会在界面上显示 "Error at id: myModSword. Lang: Russian"
// 这行文本来自 TextObject.ToString() 的 catch，堆栈在日志里，Error at id 后面的 id 就是排查起点
TextObject check = new TextObject("{=myModSword}{.MI}меч {.gp}", null);   // 缺少名词上下文时可能越界
Debug.Print(check.ToString());
```

## 风险与边界

- **状态泄漏是头号风险**。`_curGender`、`WordGroups`、`WordGroupsNoTags`、`LinkList` 全是普通 `static`，**只在 `ClearTemporaryData` 里清**。任何绕过 [MBTextManager](../MBTextManager) 的 `shouldClear: true` 路径都会污染下一次渲染。反过来说，**手动调 `Process` 后必须紧跟一句 `ClearTemporaryData()`**。
- **无线程安全**。静态可变集合 + 非线程安全的 `[ThreadStatic]` 之外的普通 static。主线程渲染是唯一安全假设。
- **无存档风险**，处理器实例与静态状态都不参与序列化。
- **`{^}` / `{_}` / `{%}` 仍然可用**，由基类实现。俄语包里混用大小写标记是安全的，但要注意 `FindNextLetter` 会跳过 `<` 后两字符的启发式，在 HTML 标签附近行为不直观。
- **标记名与英语不通用**。俄语的 `.a` 是「宾格」，英语的 `.a` 是「不定冠词」。翻译语言包时**必须按目标语言改标记，不能照抄英语的**。
- **规则是硬编码的，且有已知瑕疵**（上面第 3、4 点）。长文本、专有名词、生僻词建议在语言包里直接写全形式绕过 `{.}...`，把标记只用在高频通用词上。
- **性能**：`ProcessToken` 每次都要在 `WordGroupsNoTags` 上做 `IsWordGroup` 线性扫描（俄语版是从头扫，波兰语版从尾扫）。同一句话里标记越多越慢。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，负责标记扫描与 `{^}` `{_}` `{%}`
- [MBTextManager](../MBTextManager) — 持有实例，调 `Process` 与 `ClearTemporaryData`；语言包 `text_processor` 指向本类
- [LocalizedTextManager](../LocalizedTextManager) — `CreateTextProcessorForLanguage` 通过 `Type.GetType` 造实例
- [PolishTextProcessor](../PolishTextProcessor) — 结构几乎同构（同样有 WordGroups 机制），但多了软化辅音与呼格
- [EnglishTextProcessor](../EnglishTextProcessor) — 最简形态对照
- [DefaultTextProcessor](../DefaultTextProcessor) — 无状态兜底，用来对比「有状态」的代价
- [TextObject](../TextObject) — 渲染入口与错误输出终端
