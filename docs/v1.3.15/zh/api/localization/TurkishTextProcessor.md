<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TurkishTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TurkishTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**模块:** TaleWorlds.Localization
**类型:** class（继承自 

`LanguageSpecificTextProcessor

`?
## 概述

`TurkishTextProcessor

` 是土耳其语的文本后处理器，负责在本地化文本渲染时自动应用土耳其语的语法规则——元音和谐（vowel harmony）、辅音弱化（consonant mutation）、后缀附着（suffix attachment）。它?

`LanguageSpecificTextProcessor

` 的子类，?

`MBTextProcessor

` 在处理土耳其语文本时?token 驱动调用?
?Bannerlord 的文本系统中，翻译字符串可以包含 

`.im

`、`.dir

`、`.de

`、`.ler

` ?token 来标记需要附加的后缀。处理器?

`ProcessToken

` 方法根据前文内容（最后一个元音、最后一个辅音）自动选择正确的后缀变体并追加到输出字符串?
## 心智模型

把本类理解为"土耳其语语法引?。土耳其语是黏着语，后缀需与前词在元音和谐和辅音弱化上保持一致。例如：

- "kale"（城堡）+ ".de"（在...里）?"kalede"（前元音 e ?后缀?de?- "kapı"（门? ".de" ?"kapıda"（后元音 ı ?后缀?da，且 d 不变?
处理器通过 

`GetLastVowel

` 获取前词最后一个元音来判断?前元?还是"后元?，从而选择 

`a

`/

`e

`、`ı

`/

`i

`、`o

`/

`u

`、`ö

`/

`ü

` 中的正确变体。`IsHardUnvoicedConsonant

` 检测词尾是否为 

`p/ç/t/k

`——若是则弱化?

`b/c/d/ğ

`（辅音弱化）。`GetHarmonizedD

` 判断后缀首字母应?

`d

` 还是 

`t

`（清辅音后用 t）?
`ProcessToken

` 是唯一公共入口，其余方法都是辅助。`ClearTemporaryData

` 清理链接列表缓存?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`LinkList

` \| 

`List&lt;string&gt;

` \| 静态属性。当前线程的链接文本缓存列表，用于处?HTML 

`&lt;a&gt;

` 标签内的后缀 \|
\| 

`CultureInfoForLanguage

` \| 

`CultureInfo

` \| 土耳其语文化信息（

`tr-TR

`?\|

## 主要方法

### ProcessToken
`

`

`csharp
public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
`

`

`
核心方法。按 

`token

` 值分发到对应?

`AddSuffix_xxx

` 方法。支持的 token?
\| Token \| 含义 \| 示例 \|
\|-------\|------\|------\|
\| 

`.im

` \| 第一人称单数属格 \| ev.im ?evim \|
\| 

`.sin

` \| 第二人称单数 \| gel.sin ?gelsin \|
\| 

`.dir

` \| 第三人称单数判断 \| güzel.dir ?güzeldir \|
\| 

`.iz

` \| 第一人称复数 \| biz.iz ?biziz \|
\| 

`.siniz

` \| 第二人称复数 \| siz.siniz ?sizsiniz \|
\| 

`.dirler

` \| 第三人称复数 \| onlar.dirler ?onlardır \|
\| 

`.i

` \| 属格 \| kale.i ?kalesi \|
\| 

`.e

` \| 向格 \| ev.e ?eve \|
\| 

`.de

` \| 位格 \| ev.de ?evde \|
\| 

`.den

` \| 从格 \| ev.den ?evden \|
\| 

`.nin

` \| 属格 \| Ali.nin ?Ali'nin \|
\| 

`.ler

` \| 复数 \| kitap.ler ?kitaplar \|
\| 

`.m

` / 

`.n

` / 

`.in

` / 

`.si

` / 

`.miz

` / 

`.niz

` / 

`.leri

` \| 各种代词后缀 \| ?\|

还处?

`.link

` token ?HTML 

`&lt;a&gt;

` 标签内的后缀——在链接文本内部追加后缀时需特殊处理光标位置?
### ClearTemporaryData
`

`

`csharp
public override void ClearTemporaryData()
`

`

`
清空 

`LinkList

` 缓存。在文本处理批次结束时调用?
### 辅助方法（私有）

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`GetLastVowel

` \| 从输出字符串末尾向前查找最后一个元?\|
\| 

`GetNextVowel

` \| 推断下一个后缀应使用的元音（基于前词元音和谐或数字规则?\|
\| 

`IsVowel

` / 

`IsFrontVowel

` / 

`IsClosedVowel

` / 

`IsConsonant

` / 

`IsUnvoicedConsonant

` / 

`IsHardUnvoicedConsonant

` \| 字符分类检?\|
\| 

`FrontVowelToBackVowel

` / 

`OpenVowelToClosedVowel

` / 

`HardConsonantToSoftConsonant

` \| 元音/辅音转换 \|
\| 

`SoftenLastCharacter

` \| 词尾辅音弱化（p→b, ç→c, t→d, k→ğ） \|
\| 

`GetHarmonizedD

` \| 判断后缀首字母应?d ?t \|
\| 

`AddYIfNeeded

` \| 元音间插?y \|

## 使用示例

### 示例: 在翻译字符串中使用后缀 token

**场景**: 模组添加一个土耳其语翻译，需要正确生?在城?X ?的文本?
`

`

`
# 模组翻译文件 (tr-TR)
{=mymod_town_desc}Kale{.de} {TOWN_NAME} {=mymod_garrison_var} garnizonu var.
`

`

`

处理流程?1. 

`MBTextProcessor

` 遇到 

`{.de}

` token?2. 调用 

`TurkishTextProcessor.ProcessToken(token=".de")

`?3. 

`AddSuffix_de

` 查看前词 "Kale" 的最后一个元?'e'（前元音）?4. 

`GetNextVowel

` 返回 'e'（前元音和谐）?5. 

`GetHarmonizedD

` 检?'e' 不是清辅音，返回 'd'?6. 输出 "Kalede"?
### 示例: 添加自定义语言处理?
**场景**: 模组想为新语言实现类似的后缀处理?
`

`

`csharp
public class MyLanguageTextProcessor : LanguageSpecificTextProcessor
{
    public override CultureInfo CultureInfoForLanguage =&gt;
        new CultureInfo("xx-XX");

    public override void ProcessToken(string sourceText, ref int cursorPos,
        string token, StringBuilder outputString)
    {
        if (token == ".plural")
        {
            // 根据前词选择正确的复数后缀
            outputString.Append("s");
        }
    }

    public override void ClearTemporaryData() { }
}
`

`

`

**要点**: 语言处理器需在游戏启动时注册?

`MBTextProcessor

`。token 名以 

`.

` 开头，在翻译字符串中用 

`{.token}

` 引用。`ProcessToken

` ?

`cursorPos

` ?

`ref

` 参数——修改它会跳过源文本中的字符，用于处?HTML 标签等内嵌内容?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
