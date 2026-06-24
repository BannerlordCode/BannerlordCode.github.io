<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModePartySizeLimitModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePartySizeLimitModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePartySizeLimitModel.cs`

## 概述

`StoryModePartySizeLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModePartySizeLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate garrison party size limit` 相关逻辑。

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 处理 `find appropriate initial roster for mobile party` 相关逻辑。

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 处理 `find appropriate initial ships for mobile party` 相关逻辑。

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**用途 / Purpose:** 获取 `assumed party size for lord party` 的当前值。

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**用途 / Purpose:** 获取 `clan tier party size effect for hero` 的当前值。

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**用途 / Purpose:** 获取 `ideal villager party size` 的当前值。

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**用途 / Purpose:** 获取 `next clan tier party size effect change for hero` 的当前值。

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party member size limit` 的当前值。

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party prisoner size limit` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModePartySizeLimitModel>(new MyStoryModePartySizeLimitModel());
```

## 参见

- [完整类目录](../catalog)