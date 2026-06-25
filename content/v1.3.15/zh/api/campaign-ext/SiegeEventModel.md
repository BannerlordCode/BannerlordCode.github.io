---
title: "SiegeEventModel"
description: "SiegeEventModel 的自动生成类参考。"
---
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`

## 概述

`SiegeEventModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SiegeEventModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeEngineDestructionCasualties
`public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine destruction casualties」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineDestructionCasualties(siegeEvent, side, destroyedSiegeEngine);
```

### GetCasualtyChance
`public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「casualty chance」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetCasualtyChance(siegeParty, siegeEvent, side);
```

### GetColleteralDamageCasualties
`public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)`

**用途 / Purpose:** 读取并返回当前对象中 「colleteral damage casualties」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetColleteralDamageCasualties(attackerSiegeEngine, attackerParty);
```

### GetSiegeEngineHitChance
`public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine hit chance」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineHitChance(siegeEngineType, battleSide, target, town);
```

### GetSiegeEngineMapPrefabName
`public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine map prefab name」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapPrefabName(siegeEngineType, 0, side);
```

### GetSiegeEngineMapProjectilePrefabName
`public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine map projectile prefab name」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapProjectilePrefabName(siegeEngineType);
```

### GetSiegeEngineMapReloadAnimationName
`public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine map reload animation name」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapReloadAnimationName(siegeEngineType, side);
```

### GetSiegeEngineMapFireAnimationName
`public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine map fire animation name」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapFireAnimationName(siegeEngineType, side);
```

### GetSiegeEngineMapProjectileBoneIndex
`public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine map projectile bone index」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapProjectileBoneIndex(siegeEngineType, side);
```

### GetSiegeStrategyScore
`public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**用途 / Purpose:** 读取并返回当前对象中 「siege strategy score」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeStrategyScore(siege, side, strategy);
```

### GetConstructionProgressPerHour
`public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**用途 / Purpose:** 读取并返回当前对象中 「construction progress per hour」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetConstructionProgressPerHour(type, siegeEvent, side);
```

### GetEffectiveSiegePartyForSide
`public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「effective siege party for side」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetEffectiveSiegePartyForSide(siegeEvent, side);
```

### GetAvailableManDayPower
`public abstract float GetAvailableManDayPower(ISiegeEventSide side)`

**用途 / Purpose:** 读取并返回当前对象中 「available man day power」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableManDayPower(side);
```

### GetAvailableAttackerRangedSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「available attacker ranged siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerRangedSiegeEngines(party);
```

### GetAvailableDefenderSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「available defender siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableDefenderSiegeEngines(party);
```

### GetAvailableAttackerRamSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「available attacker ram siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerRamSiegeEngines(party);
```

### GetAvailableAttackerTowerSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「available attacker tower siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerTowerSiegeEngines(party);
```

### GetPrebuiltSiegeEnginesOfSettlement
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「prebuilt siege engines of settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPrebuiltSiegeEnginesOfSettlement(settlement);
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`

**用途 / Purpose:** 读取并返回当前对象中 「prebuilt siege engines of siege camp」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPrebuiltSiegeEnginesOfSiegeCamp(camp);
```

### GetSiegeEngineHitPoints
`public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine hit points」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineHitPoints(siegeEvent, siegeEngine, battleSide);
```

### GetRangedSiegeEngineReloadTime
`public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 读取并返回当前对象中 「ranged siege engine reload time」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetRangedSiegeEngineReloadTime(siegeEvent, side, siegeEngine);
```

### GetSiegeEngineDamage
`public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine damage」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineDamage(siegeEvent, battleSide, siegeEngine, target);
```

### GetPriorityTroopsForSallyOutAmbush
`public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**用途 / Purpose:** 读取并返回当前对象中 「priority troops for sally out ambush」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEventModel 实例
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPriorityTroopsForSallyOutAmbush();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SiegeEventModel instance = ...;
```

## 参见

- [本区域目录](../)