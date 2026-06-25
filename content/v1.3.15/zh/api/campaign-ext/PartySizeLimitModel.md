---
title: "PartySizeLimitModel"
description: "PartySizeLimitModel 的自动生成类参考。"
---
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Base:** `MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`

## 概述

`PartySizeLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartySizeLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## 主要方法

### GetPartyMemberSizeLimit
`public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party member size limit 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party prisoner size limit 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

### CalculateGarrisonPartySizeLimit
`public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算garrison party size limit的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### GetClanTierPartySizeEffectForHero
`public abstract int GetClanTierPartySizeEffectForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan tier party size effect for hero 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next clan tier party size effect change for hero 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetAssumedPartySizeForLordParty
`public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 assumed party size for lord party 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetIdealVillagerPartySize
`public abstract int GetIdealVillagerPartySize(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ideal villager party size 的结果。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetIdealVillagerPartySize(village);
```

### FindAppropriateInitialRosterForMobileParty
`public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的appropriate initial roster for mobile party。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的appropriate initial ships for mobile party。

```csharp
// 先通过子系统 API 拿到 PartySizeLimitModel 实例
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartySizeLimitModel instance = ...;
```

## 参见

- [本区域目录](../)