---
title: "StoryModePartySizeLimitModel"
description: "StoryModePartySizeLimitModel 的自动生成类参考。"
---
# StoryModePartySizeLimitModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `StoryMode/GameComponents/StoryModePartySizeLimitModel.cs`

## 概述

`StoryModePartySizeLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModePartySizeLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## 主要方法

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「garrison party size limit」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「appropriate initial roster for mobile party」。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「appropriate initial ships for mobile party」。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**用途 / Purpose:** 读取并返回当前对象中 「assumed party size for lord party」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「clan tier party size effect for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**用途 / Purpose:** 读取并返回当前对象中 「ideal villager party size」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetIdealVillagerPartySize(village);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「next clan tier party size effect change for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「party member size limit」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「party prisoner size limit」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartySizeLimitModel 实例
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModePartySizeLimitModel>(new MyStoryModePartySizeLimitModel());
```

## 参见

- [本区域目录](../)