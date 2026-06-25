---
title: "DefaultSiegeEventModel"
description: "DefaultSiegeEventModel 的自动生成类参考。"
---
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**Base:** `SiegeEventModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs`

## 概述

`DefaultSiegeEventModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeEventModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeEngineMapPrefabName
`public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine map prefab name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapPrefabName(type, 0, side);
```

### GetSiegeEngineMapProjectilePrefabName
`public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine map projectile prefab name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapProjectilePrefabName(type);
```

### GetSiegeEngineMapReloadAnimationName
`public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine map reload animation name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapReloadAnimationName(type, side);
```

### GetSiegeEngineMapFireAnimationName
`public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine map fire animation name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapFireAnimationName(type, side);
```

### GetSiegeEngineMapProjectileBoneIndex
`public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine map projectile bone index 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapProjectileBoneIndex(type, side);
```

### GetEffectiveSiegePartyForSide
`public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective siege party for side 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetEffectiveSiegePartyForSide(siegeEvent, battleSide);
```

### GetCasualtyChance
`public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 casualty chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetCasualtyChance(siegeParty, siegeEvent, side);
```

### GetSiegeEngineDestructionCasualties
`public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine destruction casualties 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineDestructionCasualties(siegeEvent, side, destroyedSiegeEngine);
```

### GetColleteralDamageCasualties
`public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 colleteral damage casualties 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetColleteralDamageCasualties(siegeEngineType, party);
```

### GetSiegeEngineHitChance
`public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine hit chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineHitChance(siegeEngineType, battleSide, target, town);
```

### GetSiegeStrategyScore
`public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege strategy score 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeStrategyScore(siege, side, strategy);
```

### GetConstructionProgressPerHour
`public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 construction progress per hour 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetConstructionProgressPerHour(type, siegeEvent, side);
```

### GetAvailableManDayPower
`public override float GetAvailableManDayPower(ISiegeEventSide side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available man day power 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableManDayPower(side);
```

### GetPrebuiltSiegeEnginesOfSettlement
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 prebuilt siege engines of settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPrebuiltSiegeEnginesOfSettlement(settlement);
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 prebuilt siege engines of siege camp 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPrebuiltSiegeEnginesOfSiegeCamp(besiegerCamp);
```

### GetSiegeEngineHitPoints
`public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine hit points 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineHitPoints(siegeEvent, siegeEngine, battleSide);
```

### GetSiegeEngineDamage
`public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine damage 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineDamage(siegeEvent, battleSide, siegeEngine, target);
```

### GetRangedSiegeEngineReloadTime
`public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ranged siege engine reload time 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetRangedSiegeEngineReloadTime(siegeEvent, side, siegeEngine);
```

### GetAvailableAttackerRangedSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available attacker ranged siege engines 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerRangedSiegeEngines(party);
```

### GetAvailableDefenderSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available defender siege engines 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableDefenderSiegeEngines(party);
```

### GetAvailableAttackerRamSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available attacker ram siege engines 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerRamSiegeEngines(party);
```

### GetAvailableAttackerTowerSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available attacker tower siege engines 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerTowerSiegeEngines(party);
```

### GetPriorityTroopsForSallyOutAmbush
`public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 priority troops for sally out ambush 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEventModel 实例
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPriorityTroopsForSallyOutAmbush();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel());
```

## 参见

- [本区域目录](../)