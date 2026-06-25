---
title: "FrenchTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FrenchTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FrenchTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**模块:** TaleWorlds.Localization
**类型:** class（继承自 

`LanguageSpecificTextProcessor

`?
## 概述

`FrenchTextProcessor

` 是法语本地化文本处理器。Bannerlord 的文本系统允许在翻译字符串中嵌入"token"（如 

`.M

`、`.F

`、`.l

`、`.a

`），由对应语言?

`TextProcessor

` 在渲染时动态替换为正确的语法形式。`FrenchTextProcessor

` 负责处理法语特有的语法现象：名词的阴阳性（le/la）、单复数（le/les）、元音开头的省略（l'）、缩合（de/d'）、定?不定冠文章（le/la ?un/une/des/l'）以及省音词变位（hache ?hachette 等的缩合规则）?
该处理器在游戏运行时?

`MBTextProcessor

` 根据当前语言自动实例化，模组开发者通常不直接创建实例，但可通过研究本类理解如何为自定义语言编写类似的处理器?
## 心智模型

?

`FrenchTextProcessor

` 理解?法语语法规则引擎"。它的工作流是：
1. 

`ProcessToken

` ?

`MBTextProcessor

` ?token 调用?2. 先检?token 是否?

`.link

`（链接标记）——若是则记录链接文本?3. 然后检查当?token 是否是性别 token（`.M

`/

`.F

`/

`.N

`/

`.P

`/

`.S

`）——若是则设置 

`_curGender

` 并处理后续?4. 若不是性别 token，则查找是否匹配 

`FunctionTokens

` 中的函数 token（`.l

`/

`.a

`/

`.d

`/

`.c

`/

`.cl

`/

`.dl

`）——若是则进入对应处理分支?5. 各处理分支根据当前已输出的文本状态（最后元音、词组、缩合词信息）动态决定正确的缩合形式?
关键内部状态：
- 

`_curGender

`：当前已设置的语法性别（Masculine/Feminine/Neuter/NoDeclination）?- 

`_isPlural

`：当前是否处于复数状态?- 

`_wordGroups

`：缓?token?词根, 数字, 是否复数) 的映射表，用于延迟匹配缩合规则?- 

`_genderToDefiniteArticle

`/

`_genderToIndefiniteArticle

`：性别→定?不定冠文章的映射表（?Masculine?le "、Feminine?la "、Plural?les "）?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`WordGroups

` \| 

`static Dictionary&lt;string, ValueTuple&lt;string, int, bool&gt;&gt;

` \| \| 缓存 token ?(词根, 数字, 是否复数) 的映射表 \|
\| 

`LinkTag

` \| 

`string

` \| 链接标记字符串（?

`".link"

`?\|
\| 

`CultureInfoForLanguage

` \| 

`override CultureInfo

` \| 返回 

`fr-FR

` 文化信息 \|

## 主要方法

### ProcessToken
`

`

`csharp
public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
`

`

`
核心入口方法。处理流程：
1. ?token ?

`.link

`，记录链接文本到 

`_wordGroups

`?2. 若当前在链接上下文中，先处理链接 token 的特殊展开?3. 检?token 是否?

`GenderTokens

`（`.M

`/

`.F

`/

`.N

`/

`.P

`/

`.S

`）中——若是则调用 

`SetGenderInfo

` 设置性别，然后处?

`ProcessWordGroup

` 并重置性别状态?4. ?token ?

`FunctionTokens

`（`.l

`/

`.a

`/

`.d

`/

`.c

`/

`.cl

`/

`.dl

`）中，则按类型分发：
   - 

`.cl

`：定?定冠（如 "le château"）?   - 

`.dl

`：不定冠+定冠（如 "de l'eau"）?   - 

`.l

`：定冠（?"le château"）?   - 

`.a

`：不定冠（如 "un château"）?   - 

`.c

`：介?+ 定冠（如 "à le"）?   - 

`.d

`：介?+ 不定冠（?"de l'eau"）?
### ClearTemporaryData
`

`

`csharp
public override void ClearTemporaryData()
`

`

`
清空 

`_wordGroups

` 缓存并重?

`_curGender

` ?

`_isPlural

`。在文本批次处理结束后调用?
### SetGenderInfo（私有）
`

`

`csharp
private void SetGenderInfo(string token)
`

`

`
?token 设置性别：`.M

`→Masculine、`.F

`→Feminine、`.N

`→Neuter、`.P

`→Plural、`.S

`→Singular?
### ProcessWordGroup（私有）
`

`

`csharp
private void ProcessWordGroup(string sourceText, string token, int cursorPos)
`

`

`
当遇到性别 token 时，先提?token 前的已输出词组（最后一个空格后的文本），在 

`_wordGroups

` 中查找或创建条目，记?(词根, token位置, 当前复数状?，确保后续函?token 能正确应用缩合?
## 使用示例

### 示例: 理解法语 token 的作?
**场景**: 游戏文本字符?

`"Sire{.M} est ici."

` 在法语环境下会被处理?"Sire est ici."?Sire" 是阳性，

`.M

` 设置定冠为阳?le ?"le"，但"est"以元音开头故省略 ?"l'est"）?
翻译字符串写法：
`

`

`
{=fr_text_key}Sire{.M} est ici.
`

`

`

渲染结果（法语）：`Sire l'est ici.

`

### 示例: 自定义语言处理器的注册

`

`

`csharp
// 在模组初始化时注册自定义语言处理?public class MyModSubModule : MBSubModule
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        // MBTextProcessor 按语言代码查找对应?LanguageSpecificTextProcessor
        // 若要添加自定义语言，需通过反射?Harmony 补丁注册
    }
}
`

`

`

**要点**: 

`FrenchTextProcessor

` 由框架自动实例化，模组通常不直接操作。理解其 token 处理逻辑主要用于翻译字符串的正确编写——例如知?

`.M

` 在阳性名词后、`.F

` 在阴性名词后、`.S

` 在单数名词后?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
