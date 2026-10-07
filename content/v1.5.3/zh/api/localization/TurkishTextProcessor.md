---
title: "TurkishTextProcessor"
description: "土耳其语的元音和谐与音变后缀处理器：按词干的元音类别选择 i/ı/e 与 u/ü/o 后缀，处理六个人称与领格后缀族。"
---

# TurkishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class TurkishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs`

## 概述

土耳其语处理器（约 750 行）是**唯一按「音变」而非「性数格」组织的处理器**。土耳其语的后缀选择取决于词干的元音：土耳其语有八元音（`a ı o u e i ö ü`），前元音与后元音对立，词干是后元音则用 `ı` / `u`，是前元音则用 `i` / `ü`。语言包作者只需写**词干**加一个中性后缀标记（如 `{.im}`），处理器根据词干末元音自动选 `im` / `um` / `üm`。它还实现了元音消失（`gitmek → giderim`）与辅音软化（`p → c`，`t → d`）等音变规则。

## 心智模型

**没有性别、没有格**。这与俄语/波兰语/德语的「性别标记 + 格标记」两段式协议完全不同。土耳其语只需要一个标记直接表达「给这个词加第几人称/格的后缀」，处理器负责根据词干算出正确的后缀形态。

**两族后缀**：

- **人称后缀**（表示「谁」）：`.im`（ben）、`.sin`（sen）、`.dir` / `.dır`（o）、`.iz` / `.ız`（biz）、`.siniz` / `.sınız`（siz）、`.dirler` / `.dırlar`（onlar）。
- **格后缀**（表示「在哪/向哪/从哪」）：`.de`（dative）、`.den`（ablative）、`.nin`（genitive）、`.ler`（plural）。
- `.i` / `.e`（accusative）、`.m` / `.n`（第一人称/第二人称单数的缩减形式，在词尾有辅音时脱落原元音）。

**元音和谐的两层判定**：`Vowels = { 'a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü' }` 判定「是不是元音」；`BackVowels = { 'a', 'ı', 'o', 'u' }` 判定「是不是后元音」。`IsVowel` 调 `char.ToLower(c, this.CultureInfoForLanguage)` ——**所以土耳其语的 i/ı 大小写与 locale 规则在这里生效**，这是土耳其语处理的正确入口，也是 `CultureInfoForLanguage` 必须返回正确 locale 的实证。

**音变规则**：`GetNextVowel(StringBuilder)` 取词干末元音，`GetLastWord(StringBuilder)` 取最后一个词。音变（`gitmek → giderim` 里的 `t → d`）和元音脱落（`gitmek` 的 `me → yor`）在源码里以条件分支形式内联在各 `AddSuffix_*` 里。**语言包写词干原形（如 `git`）即可，音变由处理器完成。**

**超链接处理**：`ProcessToken` 开头有一段特殊逻辑——如果 `sourceText[cursorPos - (token.Length + 3)] == '\''`，它按「撇号在标签外」处理（`Remove(len - 9, 9)` 保留撇号），否则按普通链接处理（`Remove(len - 8, 8)`）。**这是八个处理器里唯一专门处理撇号与链接交互的**，因为土耳其语的省音撇号和 HTML 标签会相邻。

**`_curCultureInfo` 是普通 static 字段**（不是 `[ThreadStatic]`），且被 `CultureInfoForLanguage` 使用。**这意味着土耳其语处理器的 locale 是进程级的**，不是线程级的。

**常见误用与坑**

1. **语言包里写词干，不是写已变形词**。写成 `git{im}` 之外的任何完整形式都会被再加工一遍。正确写法是 `git` + `{.im}`。
2. **`_curCultureInfo` 是普通 `static`**，任何线程都共享。**并发渲染会踩**。这是土耳其语处理器唯一的进程级可变状态。
3. **`LinkList` 只在 `ClearTemporaryData` 里清**。漏调会让超链接配对错乱（`IsLink` 从 `LinkList` 里找匹配并 `RemoveAt`，脏数据会导致错误的链接被摘掉）。
4. **`AddSuffix_*` 方法名里的下划线是反编译器产物**。源码里叫 `AddSuffix_im`、`AddSuffix_sin` 等（从 token 字符串拼出来），不是 C# 合法标识符风格——**不要试图照抄这些名字到自己的代码里**。
5. **`Vowels` 含 `ı` 和 `ö` / `ü`**，而 `BackVowels` 只含 `a ı o u`。土耳其语特有的 `ğ` 不在 `Vowels` 里，`IsVowel('ğ')` 返回 false——**这会影响「词干末字符是 ğ」时的后缀选择**。如果语言包里的词干以 `ğ` 结尾，处理器可能判成辅音从而选错后缀元音。
6. **不支持复合后缀的元音和谐链式匹配**。土耳其语有 `lardan`（ ablative + plural）这种多后缀叠加，需要在语言包里显式标记，处理器不会自动拆解。

## 怎么用

### 怎么拿到它

引擎只在切语言时造：`MBTextManager.ChangeLanguage("Turkish")`（`MBTextManager.cs:37`）→ `LocalizedTextManager.CreateTextProcessorForLanguage` 用 `Type.GetType` 反射构造（`LocalizedTextManager.cs:61`、`:67`），类型名来自 `LanguageData` 配置，解析不到退回 `DefaultTextProcessor`（`:64-65`）。确认语言包挂对了没有，就调工厂打印 `GetType().Name`。

手工用就 `new TurkishTextProcessor()` 加基类 `Process(text)`（`LanguageSpecificTextProcessor.cs:41`）。`CultureInfoForLanguage`（`TurkishTextProcessor.cs:686-692`）返回 `TurkishTextProcessor._cultureInfo`。`ClearTemporaryData`（`:695-698`）只清一件事——`LinkList`（唯一的 `[ThreadStatic]` 字段，`:746-747`）。

它的音系表是土耳其语专用的，数量也比其它语言多得多：`Vowels` 八个含点无点区分（`:704`）、`BackVowels`（`:707`）、`BackNumbers`（`:710`）、`FrontVowels`（`:713`）、`OpenVowels`（`:716`）、`ClosedVowels`（`:719`）、`Consonants`（`:722`）、`UnvoicedConsonants`（`:730`）、`HardUnvoicedConsonants`（`:733`）、`NonMutatingWord`（`:736`）。

### 典型用法

```csharp
// 1) 确认语言包挂载成功
Debug.Print(LocalizedTextManager.CreateTextProcessorForLanguage("Turkish").GetType().Name);

// 2) 手工渲染：土耳其语的元音和谐靠上面那批表
var tr = new TurkishTextProcessor();
Debug.Print(tr.Process("bir {.link}kitap"));    // .link 会被 LinkList 收集起来

// 3) 真正的通路
MBTextManager.ChangeLanguage("Turkish");
Debug.Print(new TextObject("{=some_tr_id}").ToString());
```

### 最容易踩的坑

类里有两个看起来都是「当前语言 CultureInfo」的字段，只有一个是真的。`private static CultureInfo _cultureInfo = new CultureInfo("tr-TR")`（`:750`）是 `CultureInfoForLanguage` 真正返回的那个；另一个 `private static CultureInfo _curCultureInfo = CultureInfo.InvariantCulture`（`:701`）看着像「运行期当前语言」，但**全文件只有这一行声明、没有任何读取点**（`ClearTemporaryData`（`:695-698`）也没碰它），它是死字段。后果是你若按名字推断去用它做数字或日期格式化，会永远拿到 `InvariantCulture`——土耳其语的逗号小数点不会生效。顺带一提 `_cultureInfo` 在八个语言处理器里是**唯一没加 `readonly`** 的（其余如 `FrenchTextProcessor.cs:631`、`GermanTextProcessor.cs:2049` 都是 `static readonly`）。要拿当前语言文化，唯一正确入口是 `CultureInfoForLanguage`。

## 主要成员

**覆写的抽象成员**

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：超链接配对（带撇号特殊分支）→ 十八路 `token == ".xxx"` 链式 `if/else if` 调用 `AddSuffix_*` → 补回链接结尾。**全部行为在这里。**
- `override CultureInfo CultureInfoForLanguage { get; }`：返回 `_curCultureInfo`（普通 `static`，默认 `CultureInfo.InvariantCulture`）。`IsVowel` 依赖它做 `char.ToLower`。
- `override void ClearTemporaryData()`：**只有一行** `LinkList.Clear();`。土耳其语没有性别/词组状态要清——这是它比俄语/波兰语简单得多的原因。

**后缀实现（private，`AddSuffix_*` 共 18 个）**

`.im` / `.sin` / `.dir` / `.iz` / `.siniz` / `.dirler`（人称）、`.i` / `.e`（宾格）、`.de` / `.den`（与格 / 离格）、`.nin`（属格）、`.ler` / `.leri`（复数）、`.m` / `.n`（缩减人称）。每个内部按 `GetNextVowel` 的结果在软变（`i e`）与硬变（`ı u`）之间二选一。

**音类判定与词干提取（private）**

- `private bool IsVowel(char c)`：`Vowels.Contains(char.ToLower(c, CultureInfoForLanguage))`。
- `private char GetNextVowel(StringBuilder stringBuilder)`：取最后一个词的末元音。
- `private string GetLastWord(StringBuilder stringBuilder)`：取 `outputString` 里最后一个词。
- `private bool IsLink(string sourceText, int tokenLength, int cursorPos)`：从 `LinkList` 里找并移除匹配的链接片段。

**静态字段**

- `private static CultureInfo _curCultureInfo = CultureInfo.InvariantCulture`：**普通 static，进程级共享**。
- `private static char[] Vowels = { 'a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü' }`。
- `private static char[] BackVowels = { 'a', 'ı', 'o', 'u' }`。
- `private static List<string> LinkList`（惰性初始化的属性包装）。

## 使用示例

```csharp
// 语言包里的写法：只写词干 + 后缀标记，元音和谐由处理器决定
//   <string id="myModGo"    text="benim {.im}" />       // git  -> giderim（t 软化为 d）
//   <string id="myModCome"  text="benim {.dir}" />
//   <string id="myModHouse" text="{.de} ev" />          // evden（后元音 -> -de）
//   <string id="myModNote"  text="{.nin} not" />        // notun
//   <string id="myModCars"  text="benim {.ler} araba" />

TextObject go = new TextObject("{=myModGo}benim {.im}", null);
Debug.Print(go.ToString());

// 后元音词干 -> ı/u，后元音例外：ev（e 是前元音）-> evden（e 不变，因为 evde 已是 e）
// 前元音词干 -> i/ü
TextObject house = new TextObject("{=myModHouse}benim {.de} ev", null);
Debug.Print(house.ToString());

// 复数后缀也有和谐：.ler / .leri 两种形态
TextObject cars = new TextObject("{=myModCars}benim araba {.ler}", null);
Debug.Print(cars.ToString());

// 超链接 + 省音撇号共存：处理器会按 sourceText[cursorPos - (token.Length + 3)] == '\'' 分支
TextObject link = new TextObject("{=myModLink}{.link}git{.} düğmesine tıkla", null);
Debug.Print(link.ToString());

// 排查：.culture 是普通 static，若你在自定义线程里渲染会踩到 _curCultureInfo
// 另外 IsVowel('ğ') 返回 false——词干以 ğ 结尾时后缀元音可能选错
MBTextManager.LocalizationDebugMode = true;
Debug.Print(house.ToString());
MBTextManager.LocalizationDebugMode = false;
```

## 风险与边界

- **`_curCultureInfo` 是普通 `static` 而非 `[ThreadStatic]`**，是本类唯一的进程级可变状态。**并发渲染不安全**，主线程渲染是唯一安全假设。
- **`LinkList` 泄漏**：只在 `ClearTemporaryData` 里清。漏调会让 `IsLink` 匹配到过期的链接片段，摘掉错误的 `</b></a>`。
- **无存档风险**，实例与静态状态不进存档。
- **`ğ` 不在 `Vowels` 里**，会影响后缀元音选择。词干以 `ğ` 结尾时建议在语言包里写完整形式绕过标记。
- **`AddSuffix_*` 方法名不可用于继承覆盖**（下划线形式），也不要照抄到自己代码里。
- **不支持多后缀叠加的自动链式处理**。`lardan` 这类复合形态要在语言包里显式写或拆成多个标记。
- **不处理动词变位的全部形态**。十八个后缀只覆盖「人称 + 格 + 复数」这一层，更复杂的动词形态需要语言包直接写全。
- **超链接处理在八个处理器里最复杂**（带撇号分支）。语言包里链接文本与省音撇号相邻时最容易出问题。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，处理标记扫描与 `{^}` `{_}` `{%}`；`CultureInfoForLanguage` 是土耳其语 locale 规则的实际来源
- [MBTextManager](../MBTextManager) — 持有实例并调 `Process` / `ClearTemporaryData`
- [LocalizedTextManager](../LocalizedTextManager) — `Type.GetType` + `Activator.CreateInstance` 造实例
- [RussianTextProcessor](../RussianTextProcessor) — 相反的范式：性/格状态机
- [EnglishTextProcessor](../EnglishTextProcessor) — 无状态最小实现，用作对照
- [DefaultTextProcessor](../DefaultTextProcessor) — 什么都不做的降级目标
- [TextObject](../TextObject) — 渲染入口
