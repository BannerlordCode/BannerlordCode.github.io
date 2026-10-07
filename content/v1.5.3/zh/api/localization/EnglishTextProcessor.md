---
title: "EnglishTextProcessor"
description: "英语的复数、冠词与所有格处理器：把 {a}/{A} 变成 a/an，把 {s} 变成正确的不规则复数，把 {o} 变成撇号所有格。"
---

# EnglishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class EnglishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/EnglishTextProcessor.cs`

## 概述

英语处理器实现四个语言标记：`{a}` / `{A}`（不定冠词 a/an）、`{s}`（复数 -s 与不规则复数）、`{o}`（撇号所有格）。它的核心资产是一张 46 条的不规则名词复数表（man→men、child→children、criterion→criteria…）和一串嘶音判定（`s x ch sh es ss`）。它是 [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) 的最小可用样例——想看懂「语言处理器该怎么写」就读这个类，想看「复杂状态机长什么样」就跳过它去看 [RussianTextProcessor](../RussianTextProcessor)。

## 心智模型

**在管线里的位置**：语法展开（`{HERO}` 已替换成实际名字、`{?条件}` 已判定）之后 → 本类扫描 `{.a}` / `{.A}` / `{.s}` / `{.o}` 并展开 → 返回最终字符串。**输入里已经没有占位符了**，所以它只面对纯文本。这也是它比俄语/波兰语简单得多的原因：不需要性别状态机，不需要词组缓存。

**四个标记的处理逻辑**：

- `{a}` → 调 `CheckNextCharIsVowel(sourceText, cursorPos)`，从游标往后扫，跳过既不是元音也不是辅音的字符（引号、括号、空白），命中元音集合 `aeiouAEIOU` 就输出 `an`，否则 `a`。`{A}` 同理输出 `An` / `A`。
- `{s}` → **从后往前找当前词**（`outputString` 里最后一个空格之后的部分），然后按顺序尝试五条规则：`HandleIrregularNouns`（查 46 条不规则表）→ `Handle_ves_Suffix`（`leaf→leaves`、`knife→knives`、`elf→elves`）→ `Handle_ies_Suffix`（辅音 + `y` → `ies`）→ `Handle_es_Suffix`（嘶音、`-o` 结尾、`-is` 结尾）→ `Handle_s_Suffix`（兜底加 `s`）。全部失败时只把 `s` 追加出去。
- `{o}` → `HandleApostrophe`：往输出里加 `'` 后再判断上一个字母是不是 `s`（源码里硬编码为 ASCII 115），不是才追加 `s`。

**大小写传播**：不规则复数表命中时会检查原词的大小写形态——全大写则复数也全大写（`MAN→MEN`），首字母大写则复数首字母大写（`Man→Men`），否则全小写。

**典型调用顺序**：语言包里写 `{COUNT}{.s} soldier(s)` → 语法层把 `{COUNT}` 换成 `3` → 本类看到 `{.s}`，回看输出末尾的 `3` → 词尾是数字不是字母，`Handle_s_Suffix` 全部条件不满足 → 直接追加 `s`，得到 `3s`。**这正是英语复数的正确行为**——数字后面用裸 `s`。

**常见误用与坑**

1. **`{s}` 是「回看已输出的最后一个词」，不是「记住前面声明的名词」**。写法必须是 `You have {COUNT}{.s} {WORD}`，标记紧跟在名词后面。如果写成 `{WORD}, {COUNT}{.s}`，它会对 `WORD` 前面那个词做复数。
2. **数字后的复数走的是"失败兜底"分支**。如果某个数字词尾恰好被某条规则命中（比如词尾是 `s`），结果会出问题——不过纯数字不会被 `IrregularNouns` 命中，实际安全。
3. **`Handle_ves_Suffix` 只覆盖 `-f` 结尾的三种模式**（`leaf/loaf/thief` 型、`knife/wife` 型、`elf/calf/half` 型）。`-fe` 结尾的 `wife` 是第二类，能过。`safe` 这类 `-afe` 结尾的词第一类条件 `c2 != 'o' && isVowel(c2) && c == 'f'` 会命中吗？`safe` 末两字符是 `f`,`e`——`c='f'`, `c2='e'`（元音）→ 命中 → `saves`。正确。
4. **`Handle_es_Suffix` 的 `Sibilants.Contains(text3 + text2)` 会把 `es` 结尾的词再加一次 `es`**。英语里以 `es` 结尾的复数形式通常已经是复数（如 `buses`），所以**不要对已经是复数的词再加 `{s}`**。
5. **`HandleApostrophe` 硬编码了 ASCII 115 判断 `s`**，且会临时移除结尾的 `</b></a>` 标签、处理完再补回。链接文字里的撇号所有格能工作，但如果你自己往输出里塞了别的后缀，这段逻辑会误判。
6. **`CultureInfoForLanguage` 返回 `CultureInfo.InvariantCulture`**。对英语这是正确的。

## 怎么用

### 怎么拿到它

不用自己造。它就是 `MBTextManager` 的**默认语言处理器**：字段初始化就是 `private static LanguageSpecificTextProcessor _languageProcessor = new EnglishTextProcessor()`（`MBTextManager.cs:503`）。`MBTextManager.ChangeLanguage("English")` 会重建一个新的同类型实例（`MBTextManager.cs:41`），所以你在任何时刻拿到的都是当次语言加载后的那一个，静态持有旧实例没有意义。

想确认当前生效的是不是它：`MBTextManager.GetActiveTextLanguageIndex() == 0` 是间接办法，更直接的是看 `ActiveTextLanguage`（`MBTextManager.cs:509` 的 `_activeTextLanguageId` 默认 `"English"`）。

它自己也做实活：`ProcessToken`（`EnglishTextProcessor.cs:13`）不是空实现，处理两类标记——`{.a}`/`{.A}` 按下一个字符是不是元音决定输出 `an` 还是 `a`（`:16-25`），以及 `{.s}`（`:30`）：把 `outputString` 里最后一个词取出来（`:34-43`），依次试 `HandleIrregularNouns`（`:48`）、`Handle_ves_Suffix`（`:53`）、`Handle_ies_Suffix`（`:58`）、`Handle_es_Suffix`（`:63`）、`Handle_s_Suffix`（`:68`），都不匹配就把那个 `s` 直接追加回去（`:73`）。不规则名词表是实例字段 `IrregularNouns`（`:336`，`man`→`men`、`footman`→`footmen` 这种）。注意 `token[1]` 这个下标意味着 token 至少两个字符，也就是标记必须写成 `{.s}` 而不是 `{s}`——单字符 token 会在 `:15` 直接越界。

### 典型用法

```csharp
// 1) 英语下的冠词与复数，全部由这个处理器在渲染时处理（标记形如 {.s}）
Debug.Print(new TextObject("a{.s}footman attacked the {.a} castle").ToString());
// 输出里 the 前面的冠词由 CheckNextCharIsVowel 决定 a / an，footman 被 IrregularNouns 改成 footmen

// 2) 自己 new 一个，用来对比「语言后处理做了什么」
var en = new EnglishTextProcessor();
string a = en.Process("a{.s}box");                  // s 标记被吃掉并替换成复数形式
string b = new DefaultTextProcessor().Process("a{.s}box");   // 对照：什么都不做
Debug.Print(a + " | " + b);

// 3) 开发期定位问题
MBTextManager.LocalizationDebugMode = true;
```

### 最容易踩的坑

`{.s}` 的替换是**回写**到 `outputString` 里的：它通过 `outputString.Replace(text, text2, num, length)` 改写已经输出的最后一个词（`EnglishTextProcessor.cs:50`、`:55`、`:60`、`:65`、`:70`）。这意味着它只能处理「紧跟在已输出内容后面」的那个词；如果你在句首、在标点之后，或者中间插了别的标记（`{.link}`、`{.l}`），它抓到的是错误的词并替换之。后果是界面出现莫名其妙的复数错位（比如 `men` 出现在不该复数的位置），而你完全看不出是哪一个 token 干的。规避办法：把 `{.s}` 紧贴名词写，别写成 `{.s} box`，也不要在 `{.s}` 和名词之间夹任何标记。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：四个标记的总分派。`token[1]` 取字符判断：`'a'` 冠词、`'A'` 大写冠词、`'s'` 复数、`'o'` 撇号所有格；其余一律 return（由基类兜底）。
- `override CultureInfo CultureInfoForLanguage { get; }`：返回 `CultureInfo.InvariantCulture`。
- `override void ClearTemporaryData()`：**空实现**。本类不持有任何跨调用状态。

**复数规则（private）**

- `bool HandleIrregularNouns(string text, out string resultPlural)`：查 46 条不规则复数表并按原词大小写形态生成结果。
- `bool Handle_ves_Suffix(...)` / `Handle_ies_Suffix(...)` / `Handle_es_Suffix(...)` / `Handle_s_Suffix(...)`：四条规则化后缀处理，依次尝试。
- `private static readonly Dictionary<string, string> IrregularNouns`：不规则名词表。含 `man/men`、`footman/footmen`、`crossbowman/crossbowmen`、`pikeman/pikemen`、`shieldman/shieldmen`、`shieldsman/shieldsmen`、`woman/women`、`child/children`、`mouse/mice`、`tooth/teeth`、`goose/geese`、`foot/feet`、`ox/oxen`、`sheep/fish/species/aircraft/news/advice/information/luggage/athletics/linguistics`（不变）、`curriculum/curricula`、`analysis/analyses`、`crisis/crises`、`criterion/criteria`、`die/dice`、`graffito/graffiti`、`cactus/cacti`、`focus/foci`、`fungus/fungi`、`index/indices`、`vertex/vertices`、`matrix/matrices`、`radius/radii`、`dwarf/dwarves`、`wharf/wharves`、`formula/formulae`、`phenomenon/phenomena`、`moose`、`bison`、`headquarters`、`trousers`、`cattle`、`scissors`、`photo/photos`、`piano/pianos`。
- `private static readonly string[] Sibilants = { "s", "x", "ch", "sh", "es", "ss" }`：需要加 `-es` 的嘶音。
- `private const string Vowels = "aeiouAEIOU"` / `Consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"`。

**辅助（private）**

- `private bool CheckNextCharIsVowel(string sourceText, int cursorPos)`：从游标往后扫，遇到元音返回 true，辅音返回 false，其它字符跳过继续。
- `private char GetLastCharacter(StringBuilder outputText, int cursorPos)`：从游标往前找最近的字母，找不到返回 `'x'`。
- `private void HandleApostrophe(StringBuilder outputString, int cursorPos)`：撇号所有格。

## 使用示例

```csharp
// 语言包里的实际写法（xml 的 text 属性）：
//   <string id="myModSoldier" text="{MYMOD_COUNT}{.s} soldier remaining" />
//   <string id="myModPick"    text="{MYMOD_HERO} {.a} {.MP} title" />
// 语法层先替换 {MYMOD_COUNT} / {MYMOD_HERO}，然后本类处理 {.} 标记。

TextObject remaining = new TextObject("{=myModSoldier}{MYMOD_COUNT}{.s} soldier remaining.", null);
MBTextManager.SetTextVariable("MYMOD_COUNT", 1);
Debug.Print(remaining.ToString());    // "1s soldier remaining"

// 不规则复数：查表，输出末尾最后一个词才是被复数化的对象
TextObject mice = new TextObject("{=myModCritter}The {MYMOD_KIND}{.s} is hungry.", null);
MBTextManager.SetTextVariable("MYMOD_KIND", "mouse");
Debug.Print(mice.ToString());         // "The mice is hungry."

// 冠词：a / an 由后面那个词的第一个"字母"决定
TextObject choice = new TextObject("{=myModPick}{MYMOD_HERO} {.a} {.MP} option.", null);
choice.SetTextVariable("MYMOD_HERO", hero.Name);   // "Aldric" -> "an"
Debug.Print(choice.ToString());       // "Aldric an option."（.MP 在英语下无对应规则，被丢弃）

// 所有格
TextObject own = new TextObject("{=myModOwn}{MYMOD_HERO}{.o} banner", null);
own.SetTextVariable("MYMOD_HERO", hero.Name);
Debug.Print(own.ToString());           // "Aldric's banner"（词尾非 s 才加 s）
```

## 风险与边界

- **无存档风险**。处理器实例不序列化，切语言时由 `MBTextManager.ChangeLanguage` 重建。
- **无线程风险**（实例无状态，`IrregularNouns` / `Sibilants` 是只读静态）。这是它比俄语/波兰语处理器简单的一个副作用——那两者有可写的静态临时状态，不能并发。
- **`ClearTemporaryData` 空实现是安全的**，前提是 `ProcessToken` 真的不写状态。它确实不写。
- **英语标记集很小，不要指望它处理更多**。`{.p}` `{.g}` `{.a}`（复数形式）这些是俄语/波兰语的标记名，英语下会被静默丢弃。语言包里 `{.a}` 是冠词、别的语言里 `{.a}` 可能是别的意思——**标记名在不同语言之间不通用**，翻译时应保留原语义对应的标记。
- **不规则表是硬编码的且不完整**。没收录的词走规则化后缀兜底，遇到 `people`、`police` 这类「单复同形但不是常规规则」的词会出错。绕法是在语言包里直接写全两种形式并用 `{?}` 条件切换，而不是依赖 `{s}`。
- **超链接与撇号的交互**：`HandleApostrophe` 会移除结尾的 `</b></a>` 再补回。如果你在同一句里既有超链接又有 `{o}`，且链接不在句尾，这段逻辑不会触发；放在句尾则能正确处理。别手工构造 `</b></a>` 结尾的字符串去骗它。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理 `{^}` `{_}` `{%}` 与标记扫描
- [LocalizedTextManager](../LocalizedTextManager) — `CreateTextProcessorForLanguage` 按 `text_processor` 属性造实例
- [MBTextManager](../MBTextManager) — 持有实例并调用；`_languageProcessor` 的初始值就是本类
- [DefaultTextProcessor](../DefaultTextProcessor) — 兜底对照：本类是「正常」，它是「什么都不做」
- [TextObject](../TextObject) — 渲染链路的入口，标记全部作用在它展开后的字符串上
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游阶段，先于本类运行
