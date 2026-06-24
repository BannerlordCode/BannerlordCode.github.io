<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCombatSimulationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)`

**用途 / Purpose:** 处理 `simulate hit` 相关逻辑。

### SimulateHit
`public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**用途 / Purpose:** 处理 `simulate hit` 相关逻辑。

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**用途 / Purpose:** 获取 `maximum siege equipment progress` 的当前值。

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**用途 / Purpose:** 获取 `number of equipments built` 的当前值。

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

**用途 / Purpose:** 获取 `settlement advantage` 的当前值。

### GetSimulationTicksForBattleRound
`public override ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `simulation ticks for battle round` 的当前值。

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**用途 / Purpose:** 获取 `battle advantage` 的当前值。

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `ship siege engine hit chance` 的当前值。

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `pursuit round count` 的当前值。

### GetBluntDamageChance
`public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)`

**用途 / Purpose:** 获取 `blunt damage chance` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## 参见

- [完整类目录](../catalog)