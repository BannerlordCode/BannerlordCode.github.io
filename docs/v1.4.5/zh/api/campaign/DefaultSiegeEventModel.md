<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeEventModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**Base:** `SiegeEventModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeEventModel.cs`

## 概述

`DefaultSiegeEventModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeEventModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeEngineMapPrefabName
`public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map prefab name` 的当前值。

### GetSiegeEngineMapProjectilePrefabName
`public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)`

**用途 / Purpose:** 获取 `siege engine map projectile prefab name` 的当前值。

### GetSiegeEngineMapReloadAnimationName
`public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map reload animation name` 的当前值。

### GetSiegeEngineMapFireAnimationName
`public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map fire animation name` 的当前值。

### GetSiegeEngineMapProjectileBoneIndex
`public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege engine map projectile bone index` 的当前值。

### GetEffectiveSiegePartyForSide
`public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `effective siege party for side` 的当前值。

### GetCasualtyChance
`public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 获取 `casualty chance` 的当前值。

### GetSiegeEngineDestructionCasualties
`public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** 获取 `siege engine destruction casualties` 的当前值。

### GetColleteralDamageCasualties
`public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)`

**用途 / Purpose:** 获取 `colleteral damage casualties` 的当前值。

### GetSiegeEngineHitChance
`public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**用途 / Purpose:** 获取 `siege engine hit chance` 的当前值。

### GetSiegeStrategyScore
`public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**用途 / Purpose:** 获取 `siege strategy score` 的当前值。

### GetConstructionProgressPerHour
`public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**用途 / Purpose:** 获取 `construction progress per hour` 的当前值。

### GetAvailableManDayPower
`public override float GetAvailableManDayPower(ISiegeEventSide side)`

**用途 / Purpose:** 获取 `available man day power` 的当前值。

### GetPrebuiltSiegeEnginesOfSettlement
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `prebuilt siege engines of settlement` 的当前值。

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)`

**用途 / Purpose:** 获取 `prebuilt siege engines of siege camp` 的当前值。

### GetSiegeEngineHitPoints
`public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `siege engine hit points` 的当前值。

### GetSiegeEngineDamage
`public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**用途 / Purpose:** 获取 `siege engine damage` 的当前值。

### GetRangedSiegeEngineReloadTime
`public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 获取 `ranged siege engine reload time` 的当前值。

### GetAvailableAttackerRangedSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker ranged siege engines` 的当前值。

### GetAvailableDefenderSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available defender siege engines` 的当前值。

### GetAvailableAttackerRamSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker ram siege engines` 的当前值。

### GetAvailableAttackerTowerSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**用途 / Purpose:** 获取 `available attacker tower siege engines` 的当前值。

### GetPriorityTroopsForSallyOutAmbush
`public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**用途 / Purpose:** 获取 `priority troops for sally out ambush` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel());
```

## 参见

- [完整类目录](../catalog)