<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AllianceModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs`

## 概述

`AllianceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AllianceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## 主要方法

### GetCallToWarCost
`public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 获取 `call to war cost` 的当前值。

### GetScoreOfStartingAlliance
`public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false)`

**用途 / Purpose:** 获取 `score of starting alliance` 的当前值。

### GetSupportScoreOfStartingAllianceForClan
`public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false)`

**用途 / Purpose:** 获取 `support score of starting alliance for clan` 的当前值。

### GetScoreOfCallingToWar
`public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** 获取 `score of calling to war` 的当前值。

### GetScoreOfJoiningWar
`public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** 获取 `score of joining war` 的当前值。

### GetInfluenceCostOfProposingStartingAlliance
`public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of proposing starting alliance` 的当前值。

### GetInfluenceCostOfCallingToWar
`public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of calling to war` 的当前值。

### CanMakeAlliance
`public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make alliance`。

### GetAllianceFactorForDeclaringWar
`public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**用途 / Purpose:** 获取 `alliance factor for declaring war` 的当前值。

### GetAllianceFactorForDeclaringPeace
`public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 获取 `alliance factor for declaring peace` 的当前值。

### GetProposerClanForAllianceDecision
`public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**用途 / Purpose:** 获取 `proposer clan for alliance decision` 的当前值。

## 使用示例

```csharp
var implementation = new CustomAllianceModel();
```

## 参见

- [完整类目录](../catalog)