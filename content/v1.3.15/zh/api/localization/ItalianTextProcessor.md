---
title: ItalianTextProcessor
description: ItalianTextProcessor - 意大利语本地化文本处理器，自动生成正确的冠词和介词变?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItalianTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItalianTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**模块:** TaleWorlds.Localization
**类型:** class（继?

`LanguageSpecificTextProcessor

`?
## 概述

`ItalianTextProcessor

` 是意大利语的**本地化文本处理器**。意大利语中，定冠词、不定冠词和介词会根据后续名词的**性别**（阳?阴性）?*?*（单?复数）和**首字母类?*（元?特殊辅音/普通辅音）发生形态变化。例??（di）在阳性单数辅音名词前?del"，在元音名词前为"dell'"，在阴性复数前?delle"。本处理器在文本渲染时自动根据上下文生成正确的变格形式，使本地化文本无需为每种性别组合编写独立字符串?
处理器通过**令牌系统**工作。本地化文本中嵌入令牌（?

`.MS

`、`.di

`、`.l

`），处理器在 

`ProcessToken

` 中解析这些令牌：性别令牌（`.MS

`/

`.MP

`/

`.FS

`/

`.FP

`/

`.MN

`/

`.FN

`）设置当前性别上下文；功能令牌（`.l

`/

`.un

`/

`.di

`/

`.a

`/

`.da

`/

`.su

`/

`.in

`）根据当前性别和下一个词的首字母类型从预置字典中查找正确的冠词或介词形式并输出?
**变格字典**：处理器维护三个大型静态字典：

`_prepositionDictionary

`? 种介?× 6 种性别 × 4 种词类型 = 120 个条目）、`_genderWordTypeDefiniteArticleDictionary

`（定冠词变格表）、`_genderWordTypeIndefiniteArticleDictionary

`（不定冠词变格表）。这些字典实现了意大利语完整?介词+冠词"融合（preposizioni articolate）规则?
**词组注册**：`ProcessWordGroup

` 将文本中的变量替换结果（如玩家名 

`{PLAYER.NAME}

`）注册到 

`WordGroups

` 字典，记录其性别令牌和位置。后续功能令牌可通过 

`IsWordGroup

` 检查下一个词是否为已注册的词组，从而自动推断性别——例如链接文本中的名字性别。`ProcessLink

` 处理超链接时提取链接内文本的性别信息?
## 心智模型

?

`ItalianTextProcessor

` 想成**意大利语语法自动补全?*。本地化作者在文本中写令牌代替具体的冠?介词，处理器在渲染时根据上下文自动填入正确的形式。例如写 

`{=.MS}{=.di}castello

` 会渲染为 

`del castello

`（阳性单?辅音?del"），?

`{=.FS}{=.di}torre

` 会渲染为 

`della torre

`（阴性单?辅音?della"）?
**关键概念：性别上下?*。处理器维护线程静态字?

`_curGender

`，记录当前文本片段的性别。性别令牌（`.MS

` 等）设置此上下文，功能令牌（

`.di

` 等）读取此上下文选择变格形式。`MaleNoun

`/

`FemaleNoun

` 是特殊性别——表?纯名词不变格"，此时介词使用简单形式（?

`di 

` 而非 

`del 

`）。`NoDeclination

` 表示无变格上下文，功能令牌不输出?
**关键概念：词类型判定**。`GetNextWordType

` 检查下一个词的前两个字符判定词类型：首字符是 a/e/i/o/u ?

`Vowel

`；前两字符匹?x/y/gn/z/ps/pn ?s+辅音 ?

`SpecialConsonant

`；其他字??

`Consonant

`；非字母 ?

`Other

`（不输出）。这决定了冠词形式——例?il castello"（辅音）vs"l'amico"（元音）vs"lo zio"（特殊辅音）?
**关键概念：大小写继承**。功能令牌检测自身第二个字符是否大写（如 

`.Di

` vs 

`.di

`），若大写则输出的冠?介词首字母也大写。这确保句首的正确大写?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CultureInfoForLanguage

` \| 

`override CultureInfo

`（get?\| 返回 

`it-IT

` 文化信息?\|
\| 

`WordGroups

` \| 

`static Dictionary&lt;string, ValueTuple&lt;string, int&gt;&gt;

`（get?\| 已注册的词组表。key 为词组文本，value 为（性别令牌, 位置）。用于从链接文本推断性别?\|
\| 

`_curGender

` \| 

`[ThreadStatic] static WordGenderEnum

` \| 当前性别上下文。性别令牌设置，功能令牌读取。线程静态确保多线程安全?\|
\| 

`_wordGroups

` \| 

`[ThreadStatic] static Dictionary

` \| 线程静态的词组注册表实例?\|

### 内部枚举

\| 枚举 \| ?\| 说明 \|
\|------\|----\|------\|
\| 

`WordType

` \| Vowel, SpecialConsonant, Consonant, Other \| 下一词的首字母类型分类?\|
\| 

`WordGenderEnum

` \| MasculineSingular, MasculinePlural, FeminineSingular, FemininePlural, MaleNoun, FemaleNoun, NoDeclination \| 性别+?名词模式。`MaleNoun

`/

`FemaleNoun

` 表示纯名词（介词不融合冠词）?\|
\| 

`Prepositions

` \| To, Of, From, In, On \| 五种可变格介词?\|

### 令牌常量

\| 令牌类别 \| 令牌 \| 说明 \|
\|----------\|------\|------\|
\| 性别令牌 \| 

`.MS

` 

`.MP

` 

`.FS

` 

`.FP

` 

`.MN

` 

`.FN

` \| 设置当前性别上下文（阳性单?阳性复?阴性单?阴性复?阳性名?阴性名词）?\|
\| 功能令牌 \| 

`.l

` 

`.un

` 

`.di

` 

`.a

` 

`.da

` 

`.su

` 

`.in

` \| 定冠?不定冠词/????..??..里。根据性别+词类型自动变格?\|

## 主要方法

### ProcessToken
`

`

`csharp
public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
`

`

`
令牌处理入口。由文本处理引擎逐令牌调用。流程：
1. 若检测到链接起始（`&lt;a style="Link.

`）或 

`.link

` 令牌 ?

`ProcessLink

` 处理超链接?2. 若令牌是性别令牌（在 

`GenderTokens.TokenList

` 中）?

`SetGenderInfo

` 设置性别上下?+ 

`ProcessWordGroup

` 注册词组?3. 若令牌是功能令牌（在 

`FunctionTokens.TokenList

` 中）且当前位置非空白 ?检?

`IsWordGroup

` 推断性别，然后根据令牌类型分发到对应?

`Handle*

` 方法。处理完成后重置 

`_curGender

` ?

`NoDeclination

`?
### SetGenderInfo
`

`

`csharp
private void SetGenderInfo(string token)
`

`

`
根据性别令牌设置 

`_curGender

`：`.MS

`→MasculineSingular、`.MP

`→MasculinePlural、`.FS

`→FeminineSingular、`.FP

`→FemininePlural、`.MN

`→MaleNoun、`.FN

`→FemaleNoun?
### GetNextWordType
`

`

`csharp
private ItalianTextProcessor.WordType GetNextWordType(string sourceText, int cursorPos)
`

`

`
判定下一个词的词类型。检?

`cursorPos

` ?

`cursorPos+1

` 处的字符：元?a/e/i/o/u)→Vowel；匹配特殊辅?x/y/gn/z/ps/pn)?s+辅音→SpecialConsonant；其他字母→Consonant；非字母→Other?
### HandlePrepositionsInternal
`

`

`csharp
private void HandlePrepositionsInternal(string text, string token, int cursorPos,
    Dictionary&lt;WordGenderEnum, Dictionary&lt;WordType, string&gt;&gt; dictionary, StringBuilder stringBuilder)
`

`

`
介词变格核心逻辑。通过 

`GetNextWordType

` 获取词类型，从字?

`_prepositionDictionary[当前介词][当前性别][词类型]

` 查找正确的介词形式。若令牌第二个字符大写则首字母大写化。追加到输出。`HandleOfPrepositions

`/

`HandleInPrepositions

`/

`HandleToPrepositions

`/

`HandleFromPrepositions

`/

`HandleOnPrepositions

` 分别转发到此方法?
### HandleDefiniteArticles
`

`

`csharp
private void HandleDefiniteArticles(string text, string token, int cursorPos, StringBuilder stringBuilder)
`

`

`
定冠词变格。从 

`_genderWordTypeDefiniteArticleDictionary[_curGender][词类型]

` 查找（如阳性单数辅音→"il "、元音→"l'"）。跳?

`MaleNoun

`/

`FemaleNoun

`/

`NoDeclination

` 性别（纯名词不变冠词）?
### HandleIndefiniteArticles
`

`

`csharp
private void HandleIndefiniteArticles(string text, string token, int cursorPos, StringBuilder stringBuilder)
`

`

`
不定冠词变格。从 

`_genderWordTypeIndefiniteArticleDictionary

` 查找（如阳性单数辅音→"un "、特殊辅音→"uno "、阴性单数元音→"un'"）。同样跳过纯名词?NoDeclination?
### IsWordGroup
`

`

`csharp
private bool IsWordGroup(string sourceText, string token, int cursorPos, out string tag)
`

`

`
检查当前位置开始的文本是否匹配已注册的词组。遍?

`WordGroups

` 找最长匹配，若找到则输出对应的性别令牌（`tag

`）并返回 true。用于从已注册的变量替换结果推断性别?
### ProcessWordGroup
`

`

`csharp
private void ProcessWordGroup(string text, string token, int cursorPos)
`

`

`
将当前文本片段（

`}

` 之后的部分）注册?

`WordGroups

` 字典，记录其性别令牌和位置。后续功能令牌可通过 

`IsWordGroup

` 查询?
### ProcessLink
`

`

`csharp
private int ProcessLink(string text, int cursorPos, string token, StringBuilder outputString)
`

`

`
处理超链接。提取链接的 HTML 标签部分和显示文本部分。若显示文本匹配已注册词组，通过 

`SetGenderInfo

` 设置性别上下文（用于后续令牌）。输出标签部分，返回新的 cursorPos?
### ClearTemporaryData
`

`

`csharp
public override void ClearTemporaryData()
`

`

`
清空 

`WordGroups

` 字典并重?

`_curGender

` ?

`NoDeclination

`。在每条文本处理完成后调用，避免性别上下文泄漏到下一条文本?
## 使用示例

### 示例 1: 理解意大利语变格令牌的工作方?
以下展示本地化文本中令牌的使用和渲染结果，帮助理解性别令牌与功能令牌的协作?
`

`

`csharp
// 本地化文本字符串中使用令?// 令牌序列: {=.MS} 设置阳性单数上下文, {=.di} 根据性别和下一词变?
// 案例 1: 阳性单?+ 辅音开头词
// 文本: "{=.MS}{=.di}castello"
// 处理: .MS ?_curGender = MasculineSingular
//       .di ?GetNextWordType("castello") = Consonant
//             查表: _prepositionDictionary[Of][MasculineSingular][Consonant] = "del "
// 输出: "del castello"  (意为 "of the castle")

// 案例 2: 阴性单?+ 元音开头词
// 文本: "{=.FS}{=.di}amica"
// 处理: .FS ?_curGender = FeminineSingular
//       .di ?GetNextWordType("amica") = Vowel
//             查表: _prepositionDictionary[Of][FeminineSingular][Vowel] = "dell'"
// 输出: "dell'amica"  (意为 "of the friend(f)")

// 案例 3: 阳性复?+ 特殊辅音开头词
// 文本: "{=.MP}{=.di}gnomi"
// 处理: .MP ?_curGender = MasculinePlural
//       .di ?GetNextWordType("gnomi") = SpecialConsonant (gn 开?
//             查表: _prepositionDictionary[Of][MasculinePlural][SpecialConsonant] = "degli "
// 输出: "degli gnomi"  (意为 "of the gnomes")

// 案例 4: 定冠?// 文本: "{=.MS}{=.l}castello" ?"il castello" (the castle)
// 文本: "{=.MS}{=.l}amico"   ?"l'amico"     (the friend(m))
// 文本: "{=.MS}{=.l}zio"     ?"lo zio"      (the uncle, z+特殊辅音)

// 案例 5: 大写继承（句首）
// 文本: "{=.MS}{=.Di}castello" ?"Del castello"  (句首大写)
`

`

`

### 示例 2: 模组开发者在本地化文本中使用意大利语令牌

模组若添加意大利语翻译，需要在 XML 字符串文件中使用令牌确保语法正确?
`

`

`xml
<!-- modules/MyMod/ModuleData/languages/it/str_mymod_strings.xml -->
&lt;string id="str_mymod_greeting" text="{=.MS}{=.di}{PLAYER.NAME} ti saluta" /&gt;
<!-- 渲染: ?PLAYER.NAME ?"Marco" (辅音开? ?"del Marco ti saluta" -->
<!-- 渲染: ?PLAYER.NAME ?"Aldo"  (元音开? ?"dell'Aldo ti saluta" -->

&lt;string id="str_mymod_quest_desc" text="Vai a {=.FS}{=.l}torre e parla con {=.MS}{=.un}cavaliere" /&gt;
<!-- 渲染: "Vai a la torre e parla con un cavaliere" -->
<!-- 注意: "a" + "la" 在实际意大利语中应融合为 "alla"，但令牌系统分别处理 -->

<!-- 使用纯名词模式避免冠词融?-->
&lt;string id="str_mymod_item" text="{=.MN}{=.di}spada" /&gt;
<!-- 渲染: "di spada" (纯名词模式，介词不融合冠? -->
`

`

`

`

`

`csharp
// 模组若需自定义语言处理器，可继?LanguageSpecificTextProcessor
public class MyItalianTextProcessor : LanguageSpecificTextProcessor
{
    public override CultureInfo CultureInfoForLanguage =&gt; new CultureInfo("it-IT");

    public override void ProcessToken(string sourceText, ref int cursorPos,
        string token, StringBuilder outputString)
    {
        // 自定义令牌处理逻辑
        // 例如: 添加方言变体、自定义缩写?    }

    public override void ClearTemporaryData()
    {
        // 清理线程静态状?    }
}
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
- [

`LanguageSpecificTextProcessor

`](./LanguageSpecificTextProcessor) ?语言处理器基?- [

`LanguageSpecificTextProcessor

`](./LanguageSpecificTextProcessor) ?语言处理器基?