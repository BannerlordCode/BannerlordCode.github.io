<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PolishTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PolishTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors  
**模块:** TaleWorlds.Localization  
**类型:** public class（继承自 

`LanguageSpecificTextProcessor

`?
## 概述

`PolishTextProcessor

` ?Bannerlord 本地化系统为波兰语专门实现的文本处理器。波兰语是高度屈折的语言，名?形容?代词?7 个格? 个性（阳?阴?中性）? ??细分（阳性人称、阳性有生、阳性无生、中性），动词还要随人称变位。直接在 XML 里写死每种变体不可行，因?Bannerlord 在文本中嵌入"token"（如 

`.?MA

`、`.?D

`、`.?PL

`），?

`PolishTextProcessor

` 在运行时根据上下文（性别、格、单复数）动态生成正确的词形?
它继承自 

`LanguageSpecificTextProcessor

`，核心入口是 

`ProcessToken

`——每当本地化文本遇到一?token（如 

`{.MAJOR_HERO.NAME.MA}

` 中的 

`.MA

`），系统会把 token 传给当前语言?processor 处理。`PolishTextProcessor

` 维护一组静态状态：

`_curGender

`（当前词的性别）、`WordGroups

`（词组缓存）、`LinkList

`（超链接列表）等，在处理一段文本时逐步推进?
模组开发者通常**不需要直接调?* 

`PolishTextProcessor

`。它由本地化系统自动选择（根据当前语言）。但理解其机制很重要——如果你为波兰语版本提供翻译，需要在文本里使用正确的 token 语法；如果你想为新语言添加变格支持，应继承 

`LanguageSpecificTextProcessor

` 并实?

`ProcessToken

`，参考本类的实现模式?
## 心智模型

?

`PolishTextProcessor

` 想象?波兰语语法的迷你解释?。它?token 读取本地化文本，遇到 token 时：(1) 判断 token 类型（性别标记、格标记、链接标记、复数标记等）；(2) 查阅内部状态（当前性别、当前词组、链接缓存）?3) 输出正确的变格形式到 

`StringBuilder

`?
性别系统是核心：

`WordGenderEnum

` ?5 个值——`MasculinePersonal

`（阳性人称，?"panowie"）、`MasculineAnimate

`（阳性有生，?"pies"）、`MasculineInanimate

`（阳性无生，?"stół"）、`Feminine

`（阴性）、`Neuter

`（中性）。不同性别在同一格下变格规则不同，所?processor 必须先确定性别再查变格表。性别?

`GenderTokens.TokenList

` 中的标记设置（如 

`.MA

` 设为阳性人称、`.F

` 设为阴性）?
链接处理（`.link

` token）用于在文本中嵌入可点击的超链接（如英雄名链接到人物面板）。processor 遇到 

`LinkStarter

`（`&lt;a style="Link.

`）时进入链接模式，把后续文本缓存?

`LinkList

`，遇?

`LinkEnding

`（`&lt;/b&gt;&lt;/a&gt;

`）时结束并输出完整链接。`IsLink

` 方法判断当前位置是否在链接内?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CultureInfoForLanguage

` \| 

`CultureInfo

`（重写只读） \| 返回波兰语的 

`CultureInfo

`，用于本地化系统匹配当前语言 \|
\| 

`WordGroups

` \| 

`List&lt;ValueTuple&lt;string, int&gt;&gt;

`（静态私有） \| 词组缓存，存储当前文本中的词组及其标记位?\|
\| 

`LinkList

` \| 

`List&lt;string&gt;

`（静态私有） \| 超链接文本缓存，处理 

`.link

` token 时使?\|
\| 

`WordGroupsNoTags

` \| 

`List&lt;string&gt;

`（静态私有） \| 去除标记的词组列表，用于变格时查找原?\|
\| 

`LinkTag

` \| 

`string

`（私有只读） \| 固定?

`".link"

`，标识链?token \|
\| 

`LinkStarter

` \| 

`string

`（私有只读） \| 固定?

`"&lt;a style=\"Link."

`，标识链接开?\|
\| 

`LinkEnding

` \| 

`string

`（私有只读） \| 固定?

`"&lt;/b&gt;&lt;/a&gt;"

`，标识链接结?\|

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

` 是当前处理位置（ref 允许 processor 回退或前进），`token

` 是当前要处理?token 字符串，

`outputString

` 是输出缓冲区。方法逻辑?1) ?token ?

`LinkTag

`，把当前位置的词加入 

`LinkList

`?2) ?

`sourceText

` 包含 

`LinkStarter

`，调?

`IsLink

` 判断是否在链接内并调?cursor/output?3) ?token ?

`Creator

` 结尾，输?

`{token去掉Creator}

` 格式?4) ?

`GenderTokens.TokenList

` 设置当前性别?5) 处理?复数 token，输出正确变格形式?
### ClearTemporaryData

`

`

`csharp
public override void ClearTemporaryData()
`

`

`

清空所有临时状态：

`LinkList

`、`WordGroups

`、`WordGroupsNoTags

` 清空，`_curGender

` 重置?

`NoDeclination

`，`_doesComeFromWordGroup

` 重置?false。在每段文本处理开始前调用，确保状态隔离。若你的模组直接调用 processor 处理自定义文本，务必先调用此方法?
### GetProcessedNouns / GetProcessedAdjectives（静态）

`

`

`csharp
public static string GetProcessedNouns(string str, string gender, string tokens = null)
public static string GetProcessedAdjectives(string str, string gender, string tokens = null)
`

`

`

便捷方法：给定名?形容词原形、性别和可?token，返回变格后的形式。模组若需要在代码里动态生成波兰语文本（如拼接名字），可调用这两个方法而不是手动查变格表。`tokens

` 可指定格（如 

`"MA"

` 主格、`"D"

` 与格）?
## 使用示例

### 示例 1: 在翻?XML 中使用波兰语 token

**场景**: 为波兰语版本提供一段包含英雄名的文本，名字需根据句法角色变格?
`

`

`xml
<!-- 英文原文: {HERO.NAME} went to {TOWN.NAME} -->
<!-- 波兰语翻? 名词?去某?时需用方位格 -->
&lt;Row Tag="went_to_town" English="{HERO.NAME} went to {TOWN.NAME}"&gt;
    &lt;Translation Language="Polish"&gt;
        {.MA}{HERO.NAME.MA} poszedł do {.D}{TOWN.NAME.D}
    &lt;/Translation&gt;
&lt;/Row&gt;
`

`

`

**要点**: 

`.MA

` 设置后续名词为阳性人称主格；

`.D

` 设置后续名词为与?方位格；

`PolishTextProcessor

` 会在运行时把 

`HERO.NAME

` 替换为变格后的形式?
### 示例 2: 在代码中动态生成波兰语文本

**场景**: 模组代码需要拼接一个波兰语的英雄名到指定格?
`

`

`csharp
// 获取英雄名的与格形式（用?给予英雄某物"?string heroName = hero.Name.ToString();
string dativeForm = PolishTextProcessor.GetProcessedNouns(heroName, "MA", "D");
// dativeForm 现在是正确变格后的名?TextObject msg = new TextObject($"Daj to {dativeForm}");
`

`

`

**要点**: 

`GetProcessedNouns

` 是静态便捷方法，不需?processor 实例；`gender

` 参数需匹配原词性别（`MA

`=阳性人称、`F

`=阴性等）?
### 示例 3: 为新语言添加文本处理?
**场景**: 模组添加一种新的变格语言（如捷克语），需要类?processor?
`

`

`csharp
public class CzechTextProcessor : LanguageSpecificTextProcessor
{
    public override CultureInfo CultureInfoForLanguage =&gt; new CultureInfo("cs");

    public override void ClearTemporaryData()
    {
        _currentGender = Gender.NoDeclination;
        _wordCache.Clear();
    }

    public override void ProcessToken(string sourceText, ref int cursorPos,
        string token, StringBuilder output)
    {
        // 1. 识别 token 类型（性别/?复数?        // 2. 查内部状态确定当前词的性别和格
        // 3. 应用捷克语变格规则，输出正确形式
        if (token == ".MA") _currentGender = Gender.MasculineAnimate;
        else if (token == ".D") output.Append(ApplyDative(_currentWord, _currentGender));
        // ...
    }
}

// 在模组加载时注册:
TextReader.RegisterLanguageProcessor("Czech", new CzechTextProcessor());
`

`

`

**要点**: ?processor 必须实现 

`ProcessToken

`、`ClearTemporaryData

`、`CultureInfoForLanguage

`；token 语法应与原版约定一致（

`.XX

` 格式）以复用现有翻译工具链?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)