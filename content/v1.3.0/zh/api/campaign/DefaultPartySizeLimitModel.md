---
title: "DefaultPartySizeLimitModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartySizeLimitModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## 概述

`DefaultPartySizeLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartySizeLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## 主要方法

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party member size limit` 的当前值。

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party prisoner size limit` 的当前值。

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate garrison party size limit` 相关逻辑。

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**用途 / Purpose:** 获取 `next clan tier party size effect change for hero` 的当前值。

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**用途 / Purpose:** 获取 `assumed party size for lord party` 的当前值。

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**用途 / Purpose:** 获取 `clan tier party size effect for hero` 的当前值。

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**用途 / Purpose:** 获取 `ideal villager party size` 的当前值。

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 处理 `find appropriate initial roster for mobile party` 相关逻辑。

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 处理 `find appropriate initial ships for mobile party` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel());
```

## 参见

- [完整类目录](../catalog)