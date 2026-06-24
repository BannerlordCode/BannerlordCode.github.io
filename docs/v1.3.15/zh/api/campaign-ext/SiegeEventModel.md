<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEventModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `siege engine destruction casualties` 的当前值。

### GetCasualtyChance
`public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 获取 `casualty chance` 的当前值。

### GetColleteralDamageCasualties
`public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)`

**用途 / Purpose:** 获取 `colleteral damage casualties` 的当前值。

### GetSiegeEngineHitChance
`public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**用途 / Purpose:** 获取 `siege engine hit chance` 的当前值。

### GetSiegeEngineMapPrefabName
`public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map prefab name` 的当前值。

### GetSiegeEngineMapProjectilePrefabName
`public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 获取 `siege engine map projectile prefab name` 的当前值。

### GetSiegeEngineMapReloadAnimationName
`public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map reload animation name` 的当前值。

### GetSiegeEngineMapFireAnimationName
`public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map fire animation name` 的当前值。

### GetSiegeEngineMapProjectileBoneIndex
`public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map projectile bone index` 的当前值。

### GetSiegeStrategyScore
`public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**用途 / Purpose:** 获取 `siege strategy score` 的当前值。

### GetConstructionProgressPerHour
`public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**用途 / Purpose:** 获取 `construction progress per hour` 的当前值。

### GetEffectiveSiegePartyForSide
`public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 获取 `effective siege party for side` 的当前值。

### GetAvailableManDayPower
`public abstract float GetAvailableManDayPower(ISiegeEventSide side)`

**用途 / Purpose:** 获取 `available man day power` 的当前值。

### GetAvailableAttackerRangedSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker ranged siege engines` 的当前值。

### GetAvailableDefenderSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available defender siege engines` 的当前值。

### GetAvailableAttackerRamSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker ram siege engines` 的当前值。

### GetAvailableAttackerTowerSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker tower siege engines` 的当前值。

### GetPrebuiltSiegeEnginesOfSettlement
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `prebuilt siege engines of settlement` 的当前值。

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`

**用途 / Purpose:** 获取 `prebuilt siege engines of siege camp` 的当前值。

### GetSiegeEngineHitPoints
`public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `siege engine hit points` 的当前值。

### GetRangedSiegeEngineReloadTime
`public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 获取 `ranged siege engine reload time` 的当前值。

### GetSiegeEngineDamage
`public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**用途 / Purpose:** 获取 `siege engine damage` 的当前值。

### GetPriorityTroopsForSallyOutAmbush
`public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**用途 / Purpose:** 获取 `priority troops for sally out ambush` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSiegeEventModel();
```

## 参见

- [完整类目录](../catalog)