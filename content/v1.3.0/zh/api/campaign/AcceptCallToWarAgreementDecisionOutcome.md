---
title: "AcceptCallToWarAgreementDecisionOutcome"
description: "参战号召决议的两个候选结果之一：四个 readonly 字段构成完整上下文，GetDecisionTitle 用 {?SUPPORT} 条件语法在 Yes/No 间切换，其余文案在赞助者非玩家时会被 AllianceModel 的理由替换。"
---

# AcceptCallToWarAgreementDecisionOutcome

**Namespace:** `TaleWorlds.CampaignSystem.Election`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AcceptCallToWarAgreementDecisionOutcome : DecisionOutcome`
**Base:** [DecisionOutcome](../DecisionOutcome)
**File:** `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs`（`:319-350`，**嵌套在 `AcceptCallToWarAgreementDecision` 内部，不是独立文件**）

## 概述

`AcceptCallToWarAgreementDecisionOutcome` 是「响应参战号召」这个决议的**单个候选结果**。它只有 4 个 `readonly` 字段 + 1 个构造器 + 4 个 `public override` 文案方法，**没有任何逻辑**——所有决策都在外层的 [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) 里。

**它是嵌套类，不是独立类型。** 完整名 `AcceptCallToWarAgreementDecision.AcceptCallToWarAgreementDecisionOutcome`，声明在 `AcceptCallToWarAgreementDecision.cs` 的 `:319`。这一页对应的是那个嵌套类型的**全部**内容。

四个字段构成一份自洽的上下文，**构造器一次性收齐**：

```csharp
public AcceptCallToWarAgreementDecisionOutcome(bool shouldAcceptCallToWar, Kingdom kingdom, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)
```

`ShouldAcceptCallToWar` 就是「赞成还是反对」；另外三个 `Kingdom` 是上下文副本。注意 `DetermineInitialCandidates()` 传给它们的 `kingdom` 是 `base.Kingdom`（也就是**被号召方**），而 `callingKingdom` 与 `kingdomToCallToWarAgainst` 是另外两家。**三个 Kingdom 都存了进来，所以渲染一个 outcome 不需要回头找决议。**

**四个字段全是 `readonly` + `[SaveableField]`**（100 / 101 / 102 / 103）。**外部一个都改不了。**

## 心智模型

把它当成**「一张已填好的选项卡」**——数据在构造时定死，剩下的全是「把这个选项卡画出来」。三条定位：

**第一，唯一有内容的文案是 `GetDecisionTitle`。** 它用条件文本语法：

```csharp
TextObject textObject = new TextObject("{=kakxnaN5}{?SUPPORT}Yes{?}No{\\?}", null);
textObject.SetTextVariable("SUPPORT", this.ShouldAcceptCallToWar ? 1 : 0);
```

`{=kakxnaN5}` 是本地化 key，`{?SUPPORT}Yes{?}No{\?}` 表示「`SUPPORT` 非零显示 `Yes`，为零显示 `No`」。**标题只有 Yes / No 两个词**——所以 UI 上无法区分「否决议」和「弃权」，本类型没有弃权选项。

**第二，`GetDecisionDescription` 有一段「条件覆盖」逻辑，这是本页最值得注意的地方。** 它先做五重守卫：

```csharp
if (base.SponsorClan != null && this.Kingdom != null && this.CallingKingdom != null
    && this.KingdomToCallToWarAgainst != null && base.SponsorClan != Clan.PlayerClan)
```

全部成立才继续。然后**只有赞成方**才会去问模型要理由：

```csharp
TextObject empty = TextObject.GetEmpty();
if (this.ShouldAcceptCallToWar)
{
    Campaign.Current.Models.AllianceModel.GetScoreOfJoiningWar(this.Kingdom, this.CallingKingdom, this.KingdomToCallToWarAgainst, base.SponsorClan, out empty);
}
if (!empty.IsEmpty())
{
    return empty;
}
```

也就是说：**「要不要参战这个决定对你有多大好处」这句话，只有在赞助者不是玩家氏族、且这一方是赞成时，才会用 `GetScoreOfJoiningWar` 的 `out TextObject` 替换掉默认文案。** 玩家自己的氏族永远看到硬编码的两句：

- 赞成：`{=*}It is time to join our allies, the {KINGDOM_NAME}, in their war.`
- 反对：`{=*}It is not in our interests to join the {KINGDOM_NAME} in their war.`

**第三，`GetDecisionLink` 与 `GetDecisionImageIdentifier` 都返回 null。** 这两个是给「有自定义 wiki 链接 / 图标」的决议用的；本决议不需要，所以显式返回 null 而不继承基类行为。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public AcceptCallToWarAgreementDecisionOutcome(bool shouldAcceptCallToWar, Kingdom kingdom, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)` | 四个 `readonly` 字段一次性赋值，全部来自参数。**没有校验、没有默认值、没有 null 检查**——传 null 就存下 null，而 `GetDecisionDescription` 的五重守卫正是为这种 null 兜底。 |
| `ShouldAcceptCallToWar` | `[SaveableField(100)] public readonly bool ShouldAcceptCallToWar` | **唯一的决策位。** 外层决议的 `DetermineSponsors` / `ApplyChosenOutcome` / `DetermineSupport` / `GetChosenOutcomeText` / `GetQueriedDecisionOutcome` 五处都直接读它。`readonly` ⇒ 外部不可改。 |
| `Kingdom` | `[SaveableField(101)] public readonly Kingdom Kingdom` | **被号召方**（即 `base.Kingdom`）。它被传给 `GetScoreOfJoiningWar(this.Kingdom, this.CallingKingdom, ...)` 的**第一个**参数——注意那是「our side」的位置。`readonly`。 |
| `CallingKingdom` | `[SaveableField(102)] public readonly Kingdom CallingKingdom` | 发起号召的王国。`GetScoreOfJoiningWar` 的第二个参数。两个默认文案里 `{KINGDOM_NAME}` 填的是 `this.CallingKingdom.Name`。`readonly`。 |
| `KingdomToCallToWarAgainst` | `[SaveableField(103)] public readonly Kingdom KingdomToCallToWarAgainst` | 要打的敌方王国。`GetScoreOfJoiningWar` 的第三个参数。`readonly`。 |
| `GetDecisionTitle` | `public override TextObject GetDecisionTitle()` | `new TextObject("{=kakxnaN5}{?SUPPORT}Yes{?}No{\\?}", null)` + `SetTextVariable("SUPPORT", this.ShouldAcceptCallToWar ? 1 : 0)`。**全类唯一「有内容」的文案方法**，其余三个都返回固定值或 null。 |
| `GetDecisionDescription` | `public override TextObject GetDecisionDescription()` | 五重守卫通过后，**若 `ShouldAcceptCallToWar` 则调 `AllianceModel.GetScoreOfJoiningWar(..., out empty)` 并在 `!empty.IsEmpty()` 时直接返回该理由**。否则落到两句硬编码英文之一。**玩家氏族（`SponsorClan == Clan.PlayerClan`）永远看不到模型给出的理由。** |
| `GetDecisionLink` | `public override string GetDecisionLink()` | `return null;`。给「决议有自定义 wiki 页」的场合用；本决议没有。**返回 null 而不是基类的默认链接**，所以 UI 必须判空。 |
| `GetDecisionImageIdentifier` | `public override ImageIdentifier GetDecisionImageIdentifier()` | `return null;`。同上。**返回 null 而不是 `ImageIdentifier.Invalid`** —— 判空时不要拿它去比较枚举值。 |

继承自 [DecisionOutcome](../DecisionOutcome) 的关键成员是 `SponsorClan`（由 `SetSponsor(Clan)` 写入，`DecisionOutcome.cs:134`）——`GetDecisionDescription` 的守卫与条件覆盖全靠它。

## 真实示例

读取一个候选结果的全部上下文：

```csharp
AcceptCallToWarAgreementDecisionOutcome outcome =
    new AcceptCallToWarAgreementDecisionOutcome(true, myKingdom, callerKingdom, targetKingdom);

Debug.Print("title = " + outcome.GetDecisionTitle().ToString(), 0);
Debug.Print("accept = " + outcome.ShouldAcceptCallToWar, 0);
Debug.Print("caller = " + outcome.CallingKingdom.Name, 0);
Debug.Print("against = " + outcome.KingdomToCallToWarAgainst.Name, 0);
Debug.Print("link = " + (outcome.GetDecisionLink() ?? "(none)"), 0);

ImageIdentifier image = outcome.GetDecisionImageIdentifier();
Debug.Print("image is null = " + (image == null), 0);
```

`GetDecisionLink()` 与 `GetDecisionImageIdentifier()` **都返回 null**，所以两个 `??` / `==` 判断都是必要的——`ImageIdentifier` 是 `TaleWorlds.Core.ImageIdentifiers.ImageIdentifier`，这里可以与 null 比较。

给一个 outcome 指定赞助者并观察描述文案的变化（这是条件覆盖逻辑的关键）：

```csharp
Clan sponsorClan = someClan;
AcceptCallToWarAgreementDecisionOutcome yes =
    new AcceptCallToWarAgreementDecisionOutcome(true, myKingdom, callerKingdom, targetKingdom);

Debug.Print("before sponsor: " + yes.GetDecisionDescription().ToString(), 0);

yes.SetSponsor(sponsorClan);
Debug.Print("after sponsor: " + yes.GetDecisionDescription().ToString(), 0);

yes.SetSponsor(Clan.PlayerClan);
Debug.Print("as player clan: " + yes.GetDecisionDescription().ToString(), 0);
```

**注意三段输出会不同**：`SetSponsor(someClan)` 之后描述走 `GetScoreOfJoiningWar` 的理由（若模型给了非空文本）；`SetSponsor(Clan.PlayerClan)` 之后守卫 `base.SponsorClan != Clan.PlayerClan` 失败，**回到硬编码的「是时候与盟友并肩作战了」**。这正是那五重守卫的实际效果。

在投票逻辑里读它：

```csharp
foreach (DecisionOutcome candidate in decision.DetermineInitialCandidates())
{
    AcceptCallToWarAgreementDecisionOutcome typed =
        candidate as AcceptCallToWarAgreementDecisionOutcome;
    if (typed == null)
    {
        continue;
    }

    float support = decision.DetermineSupport(myClan, typed);
    Debug.Print("support = " + support + " for " + typed.GetDecisionTitle().ToString(), 0);
}
```

`DetermineInitialCandidates()` 返回的是 `IEnumerable<DecisionOutcome>`，**必须 `as` 转型**（基类还可能产出别的决议的 outcome）。`DetermineSupport` 内部会对每个 outcome 再硬转型一次，所以转型失败会抛 `InvalidCastException` 而非静默跳过。

## 风险与边界

- **嵌套类型，声明在外层类里。** 完整名 `AcceptCallToWarAgreementDecision.AcceptCallToWarAgreementDecisionOutcome`。**它的声明在 `AcceptCallToWarAgreementDecision.cs` 而不在同名文件里**——找文件时别只搜 `AcceptCallToWarAgreementDecisionOutcome.cs`。
- **四个字段全是 `readonly`。** 外部一个都改不了。要换上下文只能 new 一个新的。
- **构造器不校验参数。** 传 null 就存下 null。`GetDecisionDescription` 的五重守卫（三个 Kingdom 非 null）是消费侧的兜底，**别指望它保护你**。
- **`GetDecisionLink` 与 `GetDecisionImageIdentifier` 返回 null 而非基类默认值。** UI 必须判空。`GetDecisionImageIdentifier()` 返回的是**真的 null**，不是 `ImageIdentifier.Invalid`。
- **描述文案对玩家与 NPC 是两套。** 玩家氏族永远看到硬编码英文（`{=*}` 前缀表示走本地化但这段是英文原文）；非玩家赞助者且是赞成方时，才用 `AllianceModel.GetScoreOfJoiningWar` 的 `out TextObject` 覆盖。**反对方永远看不到模型理由**（因为 `GetScoreOfJoiningWar` 只在 `ShouldAcceptCallToWar` 分支里调）。
- **标题只有 Yes / No。** 本决议没有弃权选项；`{?SUPPORT}` 条件语法把布尔映射成两个词。
- **只覆写文案，没有逻辑。** 决策全在外层 `DetermineSponsors` / `DetermineSupport` / `ApplyChosenOutcome` 里。**想改行为要改外层类，不是改这里。**
- **不进存档之外的东西。** 四个字段都有 `[SaveableField]`，所以 outcome 本身可存档；**但 `SponsorClan` 来自基类 `DecisionOutcome`，它的持久化方式不同**（`GetDecisionDescription` 里读 `base.SponsorClan`，读档后是否已绑定取决于基类的存档机制）。
- **`ImageIdentifier` 的命名空间是 `TaleWorlds.Core.ImageIdentifiers`。** 外层决议的 `using` 里有它，本类则在自己的文件顶部声明——引用时注意别漏 `using`。

## 怎么用

### 怎么拿到它

**不要自己 new。** 这个实例由外层决议产出：`DetermineInitialCandidates()` 在 `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs:142` 用 `yield return` 交出**恰好两个**实例——`:144` 一个 `ShouldAcceptCallToWar = true`，`:145` 一个 `false`。所以拿它的正规路径是：

```csharp
foreach (DecisionOutcome outcome in decision.DetermineInitialCandidates())
```

构造函数 `AcceptCallToWarAgreementDecisionOutcome(bool shouldAcceptCallToWar, Kingdom kingdom, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)` 声明在 `AcceptCallToWarAgreementDecision.cs:322`，四个参数、无返回值。它只在需要临时算分时有用：外层的 `CalculateSupport(Clan clan)`（`:250`）就是这么干的——每次调用都 `new` 一个 `true` 的实例出来算完就丢。

### 典型用法

遍历候选，逐个算分，并按 `ShouldAcceptCallToWar` 分流：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;
using TaleWorlds.Localization;

public static class CallToWarVote
{
    public static void Report(KingdomDecision decision, Clan voter)
    {
        foreach (DecisionOutcome outcome in decision.DetermineInitialCandidates())
        {
            // 关键：只能靠这个 bool 区分两个候选。
            var typed = (AcceptCallToWarAgreementDecision.AcceptCallToWarAgreementDecisionOutcome)outcome;

            // 必须传外层决议给的原始实例，DetermineSupport 内部是硬转型。
            float support = decision.DetermineSupport(voter, outcome);

            TextObject description = typed.GetDecisionDescription();
            if (description == null)
            {
                continue;
            }

            if (typed.ShouldAcceptCallToWar)
            {
                // 只有赞成方向会拿到模型给的加入理由；反对方向恒为硬编码英文。
                Debug.Print("accept: " + support, 0);
            }
            else
            {
                Debug.Print("reject: " + support, 0);
            }
        }
    }
}
```

签名核对：`DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)` 返回 `float`；`GetDecisionDescription()` 无参数、返回 `TextObject`（`AcceptCallToWarAgreementDecision.cs:339`）。模型侧 `GetScoreOfJoiningWar`（`TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs:36`）的第五个参数是 `out TextObject reason`，参数个数不能写成四个。

### 最容易踩的坑

**用 `Kingdom` / `CallingKingdom` / `KingdomToCallToWarAgainst` 当中两个候选的区分键。它们三个字段的值完全一样。**

看 `DetermineInitialCandidates` 的两行就清楚了：

```
AcceptCallToWarAgreementDecision.cs:144   new ...(true,  base.Kingdom, this.CallingKingdom, this.KingdomToCallToWarAgainst)
AcceptCallToWarAgreementDecision.cs:145   new ...(false, base.Kingdom, this.CallingKingdom, this.KingdomToCallToWarAgainst)
```

三个王国引用逐字相同，**唯一差别是第一个 bool**。所以下面这些写法会静默给出错误结果：

```
outcome.Kingdom == otherOutcome.Kingdom                       -> 永远为 true，两边都匹配
new Dictionary<Kingdom, DecisionOutcome>(outcomes)            -> 第二个实例直接覆盖第一个
FirstOrDefault(o => o.CallingKingdom == callingKingdom)       -> 永远拿到赞成方
```

后果分两种。覆盖式的容器会把**反对方挤掉**，你统计出来的票永远只有赞成一票，`ApplyChosenOutcome`（`AcceptCallToWarAgreementDecision.cs:179`）于是永远进 `if` 分支——决议看上去"全票通过"，而反对票从来没被记过。反过来，用 `==` 做的过滤会同时匹配到两个候选，你会在一个 `foreach` 里把同一条决议数两遍。

`GetQueriedDecisionOutcome`（`AcceptCallToWarAgreementDecision.cs:244`）用的是同一个思路：它只按 `ShouldAcceptCallToWar` 找，`FirstOrDefault` 找不到就返回 `null`。你自己遍历时若用 `foreach (var o in outcomes)` 然后 `foreach` 外面再按三个王国字段回查，一样会踩。

## 跨版本提示

`AcceptCallToWarAgreementDecisionOutcome` 的 public 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：4 个 `readonly` 字段（100–103）、1 个构造器、4 个 `public override TextObject/string/ImageIdentifier`。0 新增 / 0 移除 / 0 签名变化。

**变的是它读的那个模型。** `AllianceModel.GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)` 的签名（尤其是那个 `out TextObject reason`）在后续版本有过调整；那条 `out` 参数正是本页「条件覆盖」逻辑的全部输入，**它变了这段文案逻辑就变了**。

对 mod 作者的实际含义：**读 `ShouldAcceptCallToWar` 与三个 `Kingdom` 是完全安全的**，这两个字符串文案方法的内部实现不要去推断——**它们读的那个 `out TextObject` 参数才是你要盯的跨版本风险点**。

## 依赖关系

- 宿主与决策方：[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) 声明本类（`:319`），并在 `DetermineInitialCandidates` / `DetermineSponsors` / `DetermineSupport` / `ApplyChosenOutcome` / `GetChosenOutcomeText` / `GetQueriedDecisionOutcome` 六处消费它
- 基类：[DecisionOutcome](../DecisionOutcome) 提供 `SponsorClan` 与 `SetSponsor(Clan)`（`DecisionOutcome.cs:134`），以及四个文案成员的虚方法
- 理由来源：[AllianceModel](../AllianceModel) 的 `GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)` 是 `GetDecisionDescription` 条件覆盖的唯一输入（**第四个参数是 `IFaction`，不是 `Clan`** —— `Clan` 实现 `IFaction`，所以传 clan 合法）；槽位在 [GameModels](../GameModels) 的 `AllianceModel` 属性
- 判定参照：`Clan.PlayerClan`（`TaleWorlds.CampaignSystem.Clan`）用于「赞助者是不是玩家氏族」的守卫
- 文本：[TextObject](../../localization/TextObject) 的 `SetTextVariable` 与条件语法 `{?VAR}...{?}...{\?}`，本地化 key `{=kakxnaN5}`
- 类型：`TaleWorlds.Core.ImageIdentifiers.ImageIdentifier`（`GetDecisionImageIdentifier` 的返回类型）
- 桶首页：[campaign API 分区](../)