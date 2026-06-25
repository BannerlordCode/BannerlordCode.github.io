---
title: "RussianTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RussianTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RussianTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors  
**模块:** TaleWorlds.Localization  
**类型:** public class（继承自 

`LanguageSpecificTextProcessor

`?
## 概述

`RussianTextProcessor

` ?Bannerlord 本地化系统为俄语实现的文本处理器。俄语与波兰语类似，是高度屈折的语言：名?形容?代词?6 个格（主格、属格、与格、宾格、工具格、前置格）? 个性（阳?阴?中性）、单复数，动词随人称变位。直接在翻译 XML 里写死每种变体不可行，因?Bannerlord 在文本中嵌入 token（如 

`.MA

`、`.D

`、`.PL

`），由本处理器在运行时根据上下文动态生成正确词形?
它继承自 

`LanguageSpecificTextProcessor

`，核心入口是 

`ProcessToken

`。每当本地化文本遇到 token（如 

`{HERO.NAME.MA}

` 中的 

`.MA

`），系统?token 传给本处理器。`RussianTextProcessor

` 维护一组性别/格状态，?token 推进，输出正确的变格形式。俄语的性别 token ?

`.MI

`/

`.MA

`（阳性无?有生）、`.FI

`/

`.FA

`（阴性无?有生）、`.NI

`/

`.NA

`（中性无?有生）区分——这与波兰语类似但有差异?
模组开发者通常**不需要直接调?* 

`RussianTextProcessor

`，它由本地化系统按当前语言自动选择。但理解其机制对制作俄语翻译很重要——token 语法必须严格匹配处理器的预期。若要为新语言添加变格支持，应继承 

`LanguageSpecificTextProcessor

` 并实?

`ProcessToken

`，参考本类与 

`PolishTextProcessor

` 的实现模式?
## 心智模型

?

`RussianTextProcessor

` 想象?俄语语法的迷你解释器"。它?token 读取本地化文本，遇到 token 时：(1) 判断 token 类型——性别标记、格标记、复数标记、链接标记等?2) 查阅内部状态（当前性别、当前格、词组缓存、链接缓存）?3) 应用俄语变格规则输出正确形式?

`StringBuilder

`?
俄语?6 个格，变格规则比波兰语更复杂（尤其名词第二变格法有大量不规则变化）。processor 内部维护 

`TokenList

` 数组识别性别 token（`.MI

`/

`.MA

`/

`.FI

`/

`.FA

`/

`.NI

`/

`.NA

`），按词尾和性别查变格表。`PrepareNounCheckString

` / 

`PrepareAdjectiveCheckString

` 把原词规范化为可查表?词干"形式（去词尾、转小写等），便于在变格规则表中匹配。`GetProcessedNouns(str, gender, tokens)

` 是静态便捷方法，模组可在代码里动态生成俄语文本时调用?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CultureInfoForLanguage

` \| 

`CultureInfo

`（重写只读） \| 返回俄语?

`CultureInfo

`，本地化系统用它匹配当前语言 \|
\| 

`TokenList

` \| 

`string[]

`（静态只读） \| 性别 token 列表：`.MI

`/

`.MA

`/

`.FI

`/

`.FA

`/

`.NI

`/

`.NA

`，用于识别和设置当前性别 \|

## 主要方法

### ProcessToken

`

`

`csharp
public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
`

`

`

核心入口。`sourceText

` 是完整本地化文本，`cursorPos

` 是当前位置（ref 允许回退/前进），

`token

` 是当?token，`outputString

` 是输出缓冲。逻辑?1) 识别 token 类型（性别/?复数/链接）；(2) 按当前性别和格查变格规则；(3) 输出正确形式。链接处理类似波兰语处理器——遇到链接开?结束标记时缓存或输出?
### ClearTemporaryData

`

`

`csharp
public override void ClearTemporaryData()
`

`

`

清空所有临时状态（当前性别、格、词组缓存、链接缓存）。每段文本处理前调用，确保状态隔离。模组直接调?processor 处理自定义文本前务必先调用此方法?
### PrepareNounCheckString

`

`

`csharp
public string PrepareNounCheckString(string noun)
`

`

`

把名词原形规范化?词干"形式——去词尾、转小写、处理特殊拼写——便于在变格规则表中匹配。例?

`"герой"

` ?

`"геро"

`，再按格加词?

`й

`/

`я

`/

`ю

`/

`ем

`/

`е

` 等?
### PrepareAdjectiveCheckString

`

`

`csharp
public string PrepareAdjectiveCheckString(string adj)
`

`

`

把形容词原形规范化为词干形式。俄语形容词词尾变化更复杂（短尾 

`-ый

`/

`-ий

`/

`-ой

`、软?

`-ий

`、混?

`-ой

`），此方法统一处理?
### GetProcessedNouns（静态）

`

`

`csharp
public static string GetProcessedNouns(string str, string gender, string tokens = null)
`

`

`

便捷方法：给定名词原形、性别和可选格 token，返回变格后的形式。模组在代码里动态拼接俄语文本时调用。`gender

` ?

`MA

`/

`MI

`/

`FA

`/

`FI

`/

`NA

`/

`NI

` 等；

`tokens

` 指定格（?

`D

` 与格、`G

` 属格）?
## 使用示例

### 示例 1: 翻译 XML 中使用俄?token

**场景**: 为俄语版本提供含英雄名的文本，名字需按句法角色变格?
`

`

`xml
<!-- 英文: {HERO.NAME} gave {ITEM.NAME} to {TOWN.NAME} -->
<!-- 俄语: "?动词后接与格?给某?中物品用宾格?给某?某地"用与?-->
&lt;Row Tag="gave_item_to_town" English="{HERO.NAME} gave {ITEM.NAME} to {TOWN.NAME}"&gt;
    &lt;Translation Language="Russian"&gt;
        {.MA}{HERO.NAME.MA} дал {.D}{ITEM.NAME.D} {.D}{TOWN.NAME.D}
    &lt;/Translation&gt;
&lt;/Row&gt;
`

`

`

**要点**: 

`.MA

` 设阳性主格（主语）；

`.D

` 设与格（间接宾语）；processor 在运行时替换为变格形式?
### 示例 2: 代码中动态生成俄语文?
**场景**: 模组代码拼接一个英雄名的属格形式?
`

`

`csharp
string heroName = hero.Name.ToString();
string genitiveForm = RussianTextProcessor.GetProcessedNouns(heroName, "MA", "G");
// genitiveForm 是正确属格变格后的名?TextObject msg = new TextObject($"Деньги {genitiveForm}");
`

`

`

**要点**: 

`GetProcessedNouns

` 是静态方法无需实例；`gender

` 必须匹配原词性别?
### 示例 3: 为新语言添加处理?
**场景**: 模组为乌克兰语添加变格支持?
`

`

`csharp
public class UkrainianTextProcessor : LanguageSpecificTextProcessor
{
    public override CultureInfo CultureInfoForLanguage =&gt; new CultureInfo("uk");

    public override void ClearTemporaryData()
    {
        _currentGender = Gender.NoDeclension;
        _wordCache.Clear();
    }

    public override void ProcessToken(string sourceText, ref int cursorPos,
        string token, StringBuilder output)
    {
        // 识别 token（性别/?复数），按乌克兰语规则变?        if (token == ".MA") _currentGender = Gender.MasculineAnimate;
        else if (token == ".D") output.Append(ApplyDative(_currentWord, _currentGender));
    }
}
// 注册: TextReader.RegisterLanguageProcessor("Ukrainian", new UkrainianTextProcessor());
`

`

`

**要点**: 参?

`RussianTextProcessor

` ?

`PolishTextProcessor

` 的实现；token 语法保持 

`.XX

` 格式以复用工具链?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)