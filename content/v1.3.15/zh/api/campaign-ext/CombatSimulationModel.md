---
title: "CombatSimulationModel"
description: "CombatSimulationModel 的自动生成类参考。"
---
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**Base:** `MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`

## 概述

`CombatSimulationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CombatSimulationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SimulateHit
`public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)`

**用途 / Purpose:** 处理与 「simulate hit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, 0, battle, 0, 0);
```

### SimulateHit
`public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**用途 / Purpose:** 处理与 「simulate hit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.SimulateHit(strikerShip, struckShip, strikerParty, struckParty, siegeEngine, 0, battle, troopCasualties);
```

### GetSimulationTicksForBattleRound
`public abstract ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「simulation ticks for battle round」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetSimulationTicksForBattleRound(mapEvent);
```

### GetNumberOfEquipmentsBuilt
`public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「number of equipments built」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetNumberOfEquipmentsBuilt(settlement);
```

### GetMaximumSiegeEquipmentProgress
`public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum siege equipment progress」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetMaximumSiegeEquipmentProgress(settlement);
```

### GetSettlementAdvantage
`public abstract float GetSettlementAdvantage(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「settlement advantage」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetSettlementAdvantage(settlement);
```

### GetBattleAdvantage
`public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**用途 / Purpose:** 读取并返回当前对象中 「battle advantage」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
combatSimulationModel.GetBattleAdvantage(mapEvent, defenderAdvantage, attackerAdvantage);
```

### GetShipSiegeEngineHitChance
`public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 「ship siege engine hit chance」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetShipSiegeEngineHitChance(ship, siegeEngineType, battleSide);
```

### GetPursuitRoundCount
`public abstract int GetPursuitRoundCount(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「pursuit round count」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetPursuitRoundCount(mapEvent);
```

### GetBluntDamageChance
`public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)`

**用途 / Purpose:** 读取并返回当前对象中 「blunt damage chance」 的结果。

```csharp
// 先通过子系统 API 拿到 CombatSimulationModel 实例
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetBluntDamageChance(strikerTroop, strikedTroop, strikerParty, strikedParty, battle);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CombatSimulationModel instance = ...;
```

## 参见

- [本区域目录](../)