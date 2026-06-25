---
title: "DefaultCombatSimulationModel"
description: "DefaultCombatSimulationModel 的自动生成类参考。"
---
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`

## 概述

`DefaultCombatSimulationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCombatSimulationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, 0, battle);
```

### SimulateHit
`public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerShip, struckShip, strikerParty, struckParty, siegeEngine, 0, battle, troopCasualties);
```

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum siege equipment progress」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetMaximumSiegeEquipmentProgress(settlement);
```

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「number of equipments built」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetNumberOfEquipmentsBuilt(settlement);
```

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「settlement advantage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSettlementAdvantage(settlement);
```

### GetSimulationTicksForBattleRound
`public override ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「simulation ticks for battle round」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSimulationTicksForBattleRound(mapEvent);
```

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**用途 / Purpose:** 读取并返回当前对象中 「battle advantage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
defaultCombatSimulationModel.GetBattleAdvantage(mapEvent, defenderAdvantage, attackerAdvantage);
```

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 「ship siege engine hit chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetShipSiegeEngineHitChance(ship, siegeEngineType, battleSide);
```

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「pursuit round count」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatSimulationModel 实例
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetPursuitRoundCount(mapEvent);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## 参见

- [本区域目录](../)