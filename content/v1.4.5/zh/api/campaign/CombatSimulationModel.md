---
title: "CombatSimulationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatSimulationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**Base:** `MBGameModel<CombatSimulationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CombatSimulationModel.cs`

## 概述

`CombatSimulationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CombatSimulationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SimulateHit
`public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)`

**用途 / Purpose:** 处理 `simulate hit` 相关逻辑。

### SimulateHit
`public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**用途 / Purpose:** 处理 `simulate hit` 相关逻辑。

### GetNumberOfEquipmentsBuilt
`public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**用途 / Purpose:** 获取 `number of equipments built` 的当前值。

### GetMaximumSiegeEquipmentProgress
`public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**用途 / Purpose:** 获取 `maximum siege equipment progress` 的当前值。

### GetSettlementAdvantage
`public abstract float GetSettlementAdvantage(Settlement settlement)`

**用途 / Purpose:** 获取 `settlement advantage` 的当前值。

### GetBattleAdvantage
`public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**用途 / Purpose:** 获取 `battle advantage` 的当前值。

### GetShipSiegeEngineHitChance
`public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `ship siege engine hit chance` 的当前值。

### GetPursuitRoundCount
`public abstract int GetPursuitRoundCount(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `pursuit round count` 的当前值。

### GetBluntDamageChance
`public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)`

**用途 / Purpose:** 获取 `blunt damage chance` 的当前值。

### GetSimulationTickInterval
`public abstract CampaignTime GetSimulationTickInterval(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `simulation tick interval` 的当前值。

### GetParticipatingTroopCount
`public abstract int GetParticipatingTroopCount(MapEventSide side)`

**用途 / Purpose:** 获取 `participating troop count` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCombatSimulationModel();
```

## 参见

- [完整类目录](../catalog)