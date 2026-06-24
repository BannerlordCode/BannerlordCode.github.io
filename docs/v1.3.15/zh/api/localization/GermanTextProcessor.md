<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GermanTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GermanTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors  
**模块:** TaleWorlds.Localization  
**类型:** public class（继承自 

`LanguageSpecificTextProcessor

`?
## 概述

`GermanTextProcessor

` ?Bannerlord 本地化系统为德语实现的文本处理器。德语有 4 个格（主?Nominative、属?Genitive、与?Dative、宾?Accusative）? 个性（阳?阴?中性）、单复数，且形容词变格有 3 种类型（弱变?weak、混合变?mixed、强变化 strong）——变格组合远比英法语复杂。直接在翻译 XML 里写死每种变体不可行，因?Bannerlord 在文本中嵌入 token（如 

`.n

`/

`.a

`/

`.g

`/

`.d

`），由本处理器在运行时根据上下文动态生成正确词形?
它继承自 

`LanguageSpecificTextProcessor

`，核心入口是 

`ProcessToken

`。本处理器定义了极其丰富?token 体系?1) 名词变格 token（`.n

`/

`.a

`/

`.g

`/

`.d

` 及复?

`.np

`/

`.ap

`/

`.gp

`/

`.dp

`）；(2) 形容词变?token，按?混合/强三类型区分（如 

`.wn

`/

`.mn

`/

`.sn

` 是主格弱/混合/强）?3) 代词/冠词 token（`.pn

`/

`.pa

`/

`.pg

`/

`.pd

` 及复数）?4) 性别标记（`.M

`/

`.F

`/

`.N

`/

`.P

`）。这?token 常量都以 

`public const string

` 暴露，便于模组在代码里引用?
模组开发者通常**不需要直接调?* 

`GermanTextProcessor

`，它由本地化系统按当前语言自动选择。但理解?token 体系对制作德语翻译至关重要——token 语法必须严格匹配处理器的预期。与波兰?俄语处理器不同，德语处理器的 token 数量最多（4 ?× 3 变化类型 × 单复?+ 代词 + 性别），反映德语变格的复杂度?
## 心智模型

?

`GermanTextProcessor

` 想象?德语语法的迷你解释器"。它?token 读取本地化文本，遇到 token 时：(1) 判断 token 类型——名词变格、形容词变格、代词变格、性别标记?2) 查阅内部状态（当前性别、当前格、当前变化类型）?3) 应用德语变格规则输出正确形式?

`StringBuilder

`?
德语变格的关键难点是形容词变化取决于冠词类型：定冠词（der/die/das）后形容词用弱变化（词尾 

`-e

`/

`-en

`），不定冠词（ein/eine）后用混合变化（词尾 

`-er

`/

`-es

`/

`-e

`/

`-en

`），无冠词时用强变化（词尾完整）。因?token 必须区分 

`.wn

`（weak nominative）和 

`.sn

`（strong nominative）等——译者需根据上下文选择正确的变化类?token?
`ClearTemporaryData

` 清空状态，每段文本处理前调用。`ProcessToken

` 是核心逻辑——根?token 查内部变格规则表，输出正确形式。性别标记 

`.M

`/

`.F

`/

`.N

`/

`.P

` 设置当前性别，后续名?形容?token 按此性别变格。模组在代码里动态生成德语文本时，可参?

`RussianTextProcessor.GetProcessedNouns

` 的模式（若本类提供类似静态便捷方法），或直接构造含 token ?

`TextObject

` 让处理器处理?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CultureInfoForLanguage

` \| 

`CultureInfo

`（重写只读） \| 返回德语?

`CultureInfo

`（`de

`），本地化系统用它匹配当前语言 \|

### Token 常量（部分，均为 

`public const string

`?
本类定义了大?token 常量，按类别分组?
**名词变格 token**? ?× 单复数）:
- 

`Nominative

`=

`".n"

`、`Accusative

`=

`".a"

`、`Genitive

`=

`".g"

`、`Dative

`=

`".d"

`
- 

`NominativePlural

`=

`".np"

`、`AccusativePlural

`=

`".ap"

`、`GenitivePlural

`=

`".gp"

`、`DativePlural

`=

`".dp"

`
- 

`TokenList

` = 

`{ ".n", ".a", ".g", ".d", ".np", ".ap", ".gp", ".dp" }

`

**形容词变?token**（弱/混合/?× 4 ?× 单复数）:
- 弱变化：

`WeakNominative

`=

`".wn"

`、`WeakAccusative

`=

`".wa"

`、`WeakDative

`=

`".wd"

`、`WeakGenitive

`=

`".wg"

`，及复数 

`.wnp

`/

`.wap

`/

`.wdp

`/

`.wgp

`
- 混合变化：`MixedNominative

`=

`".mn"

`、`MixedAccusative

`=

`".ma"

`、`MixedDative

`=

`".md"

`、`MixedGenitive

`=

`".mg"

`，及复数
- 强变化：

`StrongNominative

`=

`".sn"

`、`StrongAccusative

`=

`".sa"

`、`StrongDative

`=

`".sd"

`、`StrongGenitive

`=

`".sg"

`，及复数

**代词/冠词 token**:
- 

`Nominative

`=

`".pn"

`、`Accusative

`=

`".pa"

`、`Genitive

`=

`".pg"

`、`Dative

`=

`".pd"

`，及复数 

`.pnp

`/

`.pap

`/

`.pgp

`/

`.pdp"

`

**性别标记**:
- 

`Masculine

`=

`".M"

`、`Feminine

`=

`".F"

`、`Neuter

`=

`".N"

`、`Plural

`=

`".P"

`
- 

`TokenList

` = 

`{ ".M", ".F", ".N", ".P" }

`

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

` 是输出缓冲。逻辑?1) 识别 token 类型（名?形容?代词变格、性别标记）；(2) 按当前性别和格查变格规则表?3) 输出正确形式。德语变格规则比波兰?俄语更复杂——形容词需按变化类型（?混合/强）分别查表?
### ClearTemporaryData

`

`

`csharp
public override void ClearTemporaryData()
`

`

`

清空所有临时状态（当前性别、当前格、当前变化类型、词组缓存）。每段文本处理前调用，确保状态隔离。模组直接调?processor 处理自定义文本前务必先调用此方法?
## 使用示例

### 示例 1: 翻译 XML 中使用德?token

**场景**: 为德语版本提供含英雄名的文本，名字在不同句法位置需变格?
`

`

`xml
<!-- 英文: {HERO.NAME} gave the sword to {TOWN.NAME} -->
<!-- 德语: 主语主格?给某?中地名用与格 -->
&lt;Row Tag="gave_sword_to_town" English="{HERO.NAME} gave the sword to {TOWN.NAME}"&gt;
    &lt;Translation Language="German"&gt;
        {.M}{HERO.NAME.n} gab das Schwert {.D}{TOWN.NAME.d}
    &lt;/Translation&gt;
&lt;/Row&gt;
`

`

`

**要点**: 

`.M

` 设阳性，

`.n

` 取主格（主语）；

`.d

` 取与格（间接宾语）。processor 在运行时替换为变格形式?
### 示例 2: 形容词变格——根据冠词类型?token

**场景**: 德语形容词词尾取决于冠词——定冠词后弱变化，不定冠词后混合变化?
`

`

`xml
<!-- "der gute König"（定冠词+弱变化形容词?-->
&lt;Row Tag="the_good_king" English="the good king"&gt;
    &lt;Translation Language="German"&gt;der {.wn}gute{/.wn} {.M}König&lt;/Translation&gt;
&lt;/Row&gt;

<!-- "ein guter König"（不定冠?混合变化形容词） -->
&lt;Row Tag="a_good_king" English="a good king"&gt;
    &lt;Translation Language="German"&gt;ein {.mn}guter{/.mn} {.M}König&lt;/Translation&gt;
&lt;/Row&gt;
`

`

`

**要点**: 同一?good"在定冠词后用 

`.wn

`（弱变化主格，词?-e），在不定冠词后?

`.mn

`（混合变化主格，词尾 -er）。译者必须懂德语语法才能选对 token?
### 示例 3: 代码中动态生成德语文?
**场景**: 模组代码拼接一个英雄名的属格形式（?某人之剑"）?
`

`

`csharp
// 方式: 构造含 token ?TextObject，让处理器在本地化时变格
string heroName = hero.Name.ToString();
TextObject msg = new TextObject($"Die Klinge {.M}{heroName}.g");
// ?Language="German" 时，processor 会把 heroName 转为属格形式
InformationManager.DisplayMessage(new InformationMessage(msg.ToString()));
`

`

`

**要点**: 直接拼接字符串不会触发变格——必须通过 

`TextObject

` 让本地化系统处理 token；性别标记 

`.M

` 需在变?token 

`.g

` 之前设置?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)