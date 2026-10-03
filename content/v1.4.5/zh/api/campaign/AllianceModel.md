---
title: "AllianceModel"
description: "结盟规则模型：14 个抽象成员，把「能不能结盟 / 结盟分多高 / 参战要多少钱 / 宣战对盟友的连带系数」全部抽到一个可替换的点。"
---

# AllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs`

## 概述

`AllianceModel` 是**外交规则的单一可替换点**。它把四类问题全部抽象出去：结盟**能不能**做（`CanMakeAlliance`）、结盟**好不好**（`GetScoreOfStartingAlliance` / `GetSupportScoreOfStartingAllianceForClan`）、参战**值不值**（`GetScoreOfCallingToWar` / `GetScoreOfJoiningWar`）、以及**代价**（`GetCallToWarCost` / 两个 `GetInfluenceCost*`）。外加四个常量（`MaxDurationOfAlliance` / `MaxDurationOfWarParticipation` / `MaxNumberOfAlliances` / `DurationForOffers`）与两个外交连带系数（`GetAllianceFactorForDeclaringWar` / `ForDeclaringPeace`）。

它是 `MBGameModel<AllianceModel>` 的泛型单例基类，**没有任何字段与实现**——14 个成员全是 `public abstract`。官方实现是 [DefaultAllianceModel](../DefaultAllianceModel)。

## 心智模型

把它当成**「外交系统的查表入口」**——所有政治判断都问它，不自己算。三条必须记住的规则：

1. **参数不对称是本类型最大的坑。** `GetScoreOfStartingAlliance` / `GetSupportScoreOfStartingAllianceForClan` / `CanMakeAlliance` 的签名收 `Kingdom`，但 `GetScoreOfCallingToWar` / `GetScoreOfJoiningWar` 的**第三个参数是 `IFaction`**。因为后两者要同时支持「王国」与「氏族」两个层级的评估者。**传错类型编译不过；强转过去则语义错乱。**

2. **`out TextObject reason` 的两种模式不要混。** 带 `bool includeReason` 的两个（`CanMakeAlliance`、`GetScoreOfStartingAlliance`、`GetSupportScoreOfStartingAllianceForClan`）在 `includeReason: false` 时把 `reason` 置 null；**不带该参数的三个**（`GetScoreOfCallingToWar` / `GetScoreOfJoiningWar`）则**无条件填充 explanation**。所以后三者的 `out` 参数永远非空，前三者的取决于你传了什么。

3. **`GetProposerClanForAllianceDecision` 决定「谁代表王国提案」。** 它返回一个 [Clan](../Clan)，官方实现（`DefaultAllianceModel.cs:459`）据说是按实力/性格挑的。这个返回值会被 [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) 与 `ProposeCallToWarAgreementDecision` 存成 `ProposerClan`，进而决定提案影响力花费。**换掉这个模型 = 换掉「谁替王国说话」。**

第二个心智锚点是 **`DurationForOffers` 同时是三个通知的寿命来源**。[AllianceOfferMapNotification](../AllianceOfferMapNotification) 与 [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) 的 `TriggerTime` 都是 `CampaignTime.Now + DurationForOffers`（默认 24 小时），而 `AddCallToWarAgreement` 的 `EndTime` 用的是 `MaxDurationOfWarParticipation`（默认 42 天）。**一个 `DurationForOffers` 改动会同时缩短两条地图通知的存活时间。**

第三个锚点是 **`GetScoreOfJoiningWar` 的返回值被取负**。[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).DetermineSupport 里：同意选项返回 `scoreOfJoiningWar`，反对选项返回 `0f - scoreOfJoiningWar`。**所以这个方法必须返回「加入战争有多好」的分数，正数代表好；你自己派生时若返回「有多坏」的分数，投票方向会整体反转。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` | 结盟最长持续时间，官方 `CampaignTime.Days(84f)`（`DefaultAllianceModel.cs:111`）。`AllianceCampaignBehavior.AddAlliance` 用 `CampaignTime.Now + 它` 算 `Alliance.EndTime`。 |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` | 宣战号召最长有效期，官方 `CampaignTime.Days(42f)`（`:113`）。它同时是 `CallToWarAgreement.EndTime` 的来源。 |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` | 一个王国最多几个盟友，官方 `2`（`:115`）。`DefaultAllianceModel.CanMakeAlliance` 用它判 `kingdom.AlliedKingdoms.Count >= MaxNumberOfAlliances`。 |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` | 外交要约的展示时长，官方 `CampaignTime.Hours(24f)`（`:117`）。**两张地图通知的 `TriggerTime` 都由它算出**——改它等于同时改两条通知的寿命。 |
| `GetCallToWarCost` | `public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | 被号召方要付的金额。**四处调用**：`AllianceCampaignBehavior.cs:199` 与 `:255`、`LordConversationsCampaignBehavior.cs:541/549/556`、`AcceptCallToWarAgreementDecision.cs:124`（构造时存进 `CallToWarCost`）。 |
| `GetScoreOfStartingAlliance` | `public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false)` | 「A 与 B 结盟好不好」的整体分。**返回 `ExplainedNumber` 而不是裸 float**——它自带解释条目，UI 直接渲染。`includeDescription: false` 时 `explanation` 为 null。 |
| `GetSupportScoreOfStartingAllianceForClan` | `public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false)` | **单个氏族**视角的支持度，与上一条同源但粒度更细、返回裸 float。 |
| `GetScoreOfCallingToWar` | `public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | 「我该不该号召别人参战」。**第三个参数是 `IFaction`** 不是 `Kingdom`——可传氏族。**`reason` 无条件填充**，没有 `includeReason` 开关。 |
| `GetScoreOfJoiningWar` | `public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | 「我该不该接受号召」。**语义是「越高越好」**——[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).DetermineSupport 会对反对选项取负。派生时若返回「越高越坏」会翻转投票。 |
| `GetInfluenceCostOfProposingStartingAlliance` | `public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)` | 提案结盟的影响力花费，被 `KingdomDecision.GetProposalInfluenceCost()` 读取。 |
| `GetInfluenceCostOfCallingToWar` | `public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)` | 提案宣战的影响力花费。[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).GetProposalInfluenceCost 直接返回它（`:138`）。 |
| `CanMakeAlliance` | `public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)` | 唯一的「能不能」判据，返回 verdict + 原因。`includeReason: false` 时 `reason` 置 null。 |
| `GetAllianceFactorForDeclaringWar` | `public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)` | 宣战对盟友的连带系数（破坏联盟的连带损害之类）。**两个参数都是 `IFaction`。** |
| `GetAllianceFactorForDeclaringPeace` | `public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | 宣和的镜像系数。 |
| `GetProposerClanForAllianceDecision` | `public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)` | 决定哪个氏族代表王国提案。**返回值会被存成决议的 `ProposerClan`，从而决定影响力花费**——换掉本模型等于换掉「谁替王国说话」。 |

## 真实示例

读外交规则常量（全部来自官方 `DefaultAllianceModel`）：

```csharp
AllianceModel model = Campaign.Current.Models.AllianceModel;
Debug.Print("max alliance days = " + model.MaxDurationOfAlliance.ToDays, 0);
Debug.Print("max war participation days = " + model.MaxDurationOfWarParticipation.ToDays, 0);
Debug.Print("max allies = " + model.MaxNumberOfAlliances, 0);
Debug.Print("offer window hours = " + model.DurationForOffers.ToHours, 0);
```

判断两个王国能否结盟，并把原因塞进 UI（`includeReason` 决定 `out` 是否非空）：

```csharp
Kingdom mine = Hero.MainHero.MapFaction as Kingdom;
Kingdom theirs = Kingdom.All.Find((Kingdom k) => k.StringId == "empire");
TextObject reason;
bool allowed = Campaign.Current.Models.AllianceModel.CanMakeAlliance(mine, theirs, Hero.MainHero.MapFaction, out reason, true);
Debug.Print("can ally = " + allowed + " reason = " + reason, 0);
```

算一次宣战号召的代价，并给出可读的解释（两个 `GetScore*` 的 `out` 无条件填充）：

```csharp
Kingdom caller = Clan.PlayerClan.Kingdom;
Kingdom target = Kingdom.All.Find((Kingdom k) => k.StringId == "battania");
int cost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(caller, caller, target);
TextObject why;
float score = Campaign.Current.Models.AllianceModel.GetScoreOfCallingToWar(caller, caller, target, Clan.PlayerClan, out why);
Debug.Print("cost = " + cost + " score = " + score + " why = " + why, 0);
```

读结盟总分——注意返回的是 `ExplainedNumber`，可以直接渲染解释：

```csharp
ExplainedNumber explained = Campaign.Current.Models.AllianceModel.GetScoreOfStartingAlliance(
    Clan.PlayerClan.Kingdom, Kingdom.All[0], out TextObject explanation, true);
Debug.Print("score = " + explained.ResultNumber + " explanation = " + explanation, 0);
```

## 风险与边界

- **抽象类，零实现。** 14 个成员全是 `public abstract`，**没有一个有默认实现**。派生类必须实现全部 14 个，否则编译不过。
- **`IFaction` 与 `Kingdom` 混用。** `GetScoreOfCallingToWar` / `GetScoreOfJoiningWar` 的第三参是 `IFaction`（可传氏族），而 `GetScoreOfStartingAlliance` / `CanMakeAlliance` 等收 `Kingdom`。**传 `Clan` 给要 `Kingdom` 的方法编译不过；强转则 `null` 解引用。**
- **`out` 参数的两种模式。** 三个带 `bool includeReason` 的方法在该参数为 false 时把 `out TextObject` 置 null；两个 `GetScoreOfCallingToWar` / `GetScoreOfJoiningWar` **没有该开关，`out` 永远非 null**。混用会 NRE。
- **`GetScoreOfJoiningWar` 的极性不能反。** 决策层对它取负表示反对票。**派生实现若返回「越高越坏」，投票方向整体反转**——这是个静默失效、不会崩的坑。
- **`GetScoreOfStartingAlliance` 返回 `ExplainedNumber` 而不是 float。** 想拿裸数要读 `.ResultNumber`，直接当 float 用会编译失败。
- **`DurationForOffers` 被两张地图通知共用。** 改它等于同时改 [AllianceOfferMapNotification](../AllianceOfferMapNotification) 与 [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) 的存活时间——**改一处影响两处 UI**。
- **`GetCallToWarCost` 至少五处调用点。** 包括对话里（`LordConversationsCampaignBehavior.cs:541/549/556` 用它做按钮可用性判定）。**改它的数值会同时改地图通知文案、王国决策文案与对话选项门槛。**
- **替换方式是整类替换。** `MBGameModel<AllianceModel>` 是泛型单例基类，换掉它意味着你的实现要覆盖**全部 14 个成员**，否则抽象成员缺失。**不要试图只 override 一个数值。**
- **纯计算，无副作用。** 除 `out` 参数外所有成员都不修改游戏状态，可以安全地在 UI 与 AI 判定里反复调用。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs` 是 37 行、**14 个抽象成员、零字段、零实现**。1.4.6 同名文件公开表面逐成员一致。

官方实现 [DefaultAllianceModel](../DefaultAllianceModel) 提供 14 个 `override`（`DefaultAllianceModel.cs:111`–`:459`），关键默认值：`MaxDurationOfAlliance => CampaignTime.Days(84f)`、`MaxDurationOfWarParticipation => CampaignTime.Days(42f)`、`MaxNumberOfAlliances => 2`、`DurationForOffers => CampaignTime.Hours(24f)`。

## 依赖关系

- 基类：`MBGameModel<AllianceModel>`（`Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`），泛型单例注册机制；访问路径 `Campaign.Current.Models.AllianceModel`
- 官方实现：[DefaultAllianceModel](../DefaultAllianceModel)，`DefaultAllianceModel.cs:111`–`:459` 逐个 override
- 载荷：`Kingdom` / `Clan` / `IFaction` 三种层级，以及 [ExplainedNumber](../ExplainedNumber) 与 [TextObject](../TextObject) 两个输出类型
- 消费者一：[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) 用 `GetCallToWarCost`（`:124`）、`GetInfluenceCostOfCallingToWar`（`:138`）、`GetScoreOfJoiningWar`（`:278`）
- 消费者二：[AllianceCampaignBehavior](../AllianceCampaignBehavior) 用 `GetCallToWarCost`（`:199`、`:255`）、`DurationForOffers`（两张通知的 `TriggerTime`）、`MaxDurationOfAlliance`（`AddAlliance` 的 `EndTime`）
- 消费者三：[LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) 用 `GetCallToWarCost` 做对话按钮门槛（`:541`/`:549`/`:556`）
- 决议侧：同目录的 `ProposeCallToWarAgreementDecision` 与 [KingdomDecision](../KingdomDecision) 的 `GetProposalInfluenceCost` / `DetermineSupport`
- 时间类型：[CampaignTime](../CampaignTime)（`Days` / `Hours` / `ToDays` / `ToHours`）
